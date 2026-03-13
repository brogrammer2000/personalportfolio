import { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

const GRID_SIZE = 20;

function placeFood(snake: { x: number; y: number }[]) {
  let f: { x: number; y: number };
  do {
    f = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === f.x && s.y === f.y));
  return f;
}

const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];

export default function Game() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(() =>
    Number(localStorage.getItem("snakeHigh") || 0)
  );
  const [speed, setSpeed] = useState(110);

  const stateRef = useRef({
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
    snake: [...INITIAL_SNAKE],
    food: { x: 12, y: 10 },
  });

  function reset() {
    stateRef.current = {
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      snake: [...INITIAL_SNAKE],
      food: placeFood(INITIAL_SNAKE),
    };
    setScore(0);
    setPaused(false);
    setRunning(true);
    setSpeed(110);
  }

  // Keyboard: WASD only
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const key = e.key.toLowerCase();
      const { dir } = stateRef.current;
      const map: { [k: string]: { x: number; y: number } } = {
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const nd = map[key];
      if (!nd) return;
      if (dir.x + nd.x === 0 && dir.y + nd.y === 0) return;
      stateRef.current.nextDir = nd;
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Game loop
  useEffect(() => {
    if (!running || paused) return;
    const id = setInterval(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      const W = Math.min(600, parent.offsetWidth);
      const size = Math.floor(W / GRID_SIZE) * GRID_SIZE;
      canvas.width = size;
      canvas.height = size;
      const c = size / GRID_SIZE;

      const st = stateRef.current;
      st.dir = st.nextDir;
      const head = { x: st.snake[0].x + st.dir.x, y: st.snake[0].y + st.dir.y };
      head.x = (head.x + GRID_SIZE) % GRID_SIZE;
      head.y = (head.y + GRID_SIZE) % GRID_SIZE;

      if (st.snake.some((s, i) => i > 0 && s.x === head.x && s.y === head.y)) {
        setRunning(false);
        setPaused(false);
        setHigh((h) => {
          const nh = Math.max(h, score);
          localStorage.setItem("snakeHigh", String(nh));
          return nh;
        });
        return;
      }

      st.snake.unshift(head);
      if (head.x === st.food.x && head.y === st.food.y) {
        setScore((s) => s + 1);
        setSpeed((ms) => Math.max(60, ms - 2));
        st.food = placeFood(st.snake);
      } else {
        st.snake.pop();
      }

      ctx.fillStyle = "#0b1220";
      ctx.fillRect(0, 0, size, size);
      ctx.strokeStyle = "#1f2a44";
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.25;
      for (let i = 0; i <= GRID_SIZE; i++) {
        ctx.beginPath();
        ctx.moveTo(i * c, 0);
        ctx.lineTo(i * c, size);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * c);
        ctx.lineTo(size, i * c);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#00e676";
      ctx.fillRect(st.food.x * c, st.food.y * c, c, c);
      ctx.fillStyle = "#7c4dff";
      st.snake.forEach((s) =>
        ctx.fillRect(s.x * c + 1, s.y * c + 1, c - 2, c - 2)
      );
    }, speed);
    return () => clearInterval(id);
  }, [running, paused, speed, score]);

  const move = (dx: number, dy: number) => {
    const { dir } = stateRef.current;
    const nd = { x: dx, y: dy };
    if (dir.x + nd.x === 0 && dir.y + nd.y === 0) return;
    stateRef.current.nextDir = nd;
  };

  return (
    <Box
      id="game"
      component="section"
      sx={{ py: { xs: 6, md: 8 }, scrollMarginTop: { xs: "72px", md: "88px" } }}
    >
      <Container
        maxWidth={false}
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          maxWidth: "1600px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t("game.title")}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {t("game.instructions")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          {!running ? (
            <Button variant="contained" onClick={reset}>
              {t("game.start")}
            </Button>
          ) : (
            <>
              <Button variant="outlined" onClick={() => setPaused((p) => !p)}>
                {paused ? t("game.resume") : t("game.pause")}
              </Button>
              <Button variant="text" onClick={reset}>
                {t("game.restart")}
              </Button>
            </>
          )}
          <Typography>
            {t("game.score")}: {score}
          </Typography>
          <Typography color="text.secondary">
            {t("game.high")}: {high}
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            display: "inline-block",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{ display: "block", width: "100%", maxWidth: 600 }}
          />
        </Box>

        {/* Mobile D-Pad */}
        {running && (
          <Box
            sx={{
              position: "fixed",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <Button
              variant="contained"
              onClick={() => move(0, -1)}
              sx={{ minWidth: 48, mb: 1 }}
            >
              ↑
            </Button>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={() => move(-1, 0)}
                sx={{ minWidth: 48 }}
              >
                ←
              </Button>
              <Button
                variant="contained"
                onClick={() => move(1, 0)}
                sx={{ minWidth: 48 }}
              >
                →
              </Button>
            </Box>
            <Button
              variant="contained"
              onClick={() => move(0, 1)}
              sx={{ minWidth: 48, mt: 1 }}
            >
              ↓
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
