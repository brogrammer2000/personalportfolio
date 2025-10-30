import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Stack,
  Link as MLink,
  CssBaseline,
  GlobalStyles,
  TextField,
  Snackbar,
  Alert,
  AlertPropsColorOverrides,
  AlertColor,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DownloadIcon from "@mui/icons-material/Download";
import CodeIcon from "@mui/icons-material/Code";

// ===== Profile data =====
const profile = {
  name: "Satyam Arora",
  role: "Software Developer — Full Stack & Data Analyst",
  tagline:
    "I build scalable web apps, KPI Dashboards, and AI‑powered projects with React and Python.",
  location: "Hämeenlinna, Finland",
  email: "arorasatyam1112@gmail.com",
  phone: "+358 466199543",
  resumeUrl: "/Satyam_Arora_CV_English.pdf",
  social: {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/satyam-arora-211120/",
  },
};

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Vite",
  "Material UI",
  "Python",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "CI/CD",
  "Azure",
  "AWS (basics)",
  "PowerBI",
  "Tableau",
  "Web Scraping",
  "AI API Integration",
  "Agile/Scrum",
  "Git",
  "Excel",
  "PowerPoint",
];

const projects = [
  {
    title: "AI Chatbot — CLI",
    description:
      "Python command‑line chatbot integrating OpenAI API for quick local use.",
    tags: ["Python", "OpenAI API", "CLI"],
    repo: "https://github.com/brogrammer2000/AI_Research_Agent",
  },
  {
    title: "AI Chatbot — React UI",
    description:
      "Web‑based chatbot with responsive UI built in React; integrates OpenAI API for conversations.",
    tags: ["React", "OpenAI API", "UX"],
    repo: "https://github.com/brogrammer2000/AI_Research_Bot",
  },
  {
    title: "EDEKAOffers Scraper",
    description:
      "Supermarket discount scraper to collect weekly offers and structure data for analysis.",
    tags: ["Python", "Web Scraping", "Data"],
    repo: "https://github.com/brogrammer2000/Fetching_Offers_EDEKA",
  },
  {
    title: "WeatherApp",
    description: "Python script to fetch city weather via AccuWeather API.",
    tags: ["Python", "API"],
    repo: "https://github.com/brogrammer2000/WeatherAPI-Py-",
  },
  {
    title: "PDFDownloader",
    description: "Batch download and save PDFs from URLs with error handling.",
    tags: ["Python", "Automation"],
    repo: "https://github.com/brogrammer2000/PDF_Downloader",
  },
  {
    title: "FudHub",
    description: "Recipe suggestion website (PHP, HTML, CSS).",
    tags: ["PHP", "HTML", "CSS"],
    repo: "https://github.com/brogrammer2000/fud-hub_2.0",
  },
];

// ===== Theme =====
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7c4dff" },
    secondary: { main: "#00e5ff" },
    background: { default: "#0b1220", paper: "#0f172a" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
});

// ===== UI =====
function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(8px)",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ width: "100%", px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <AutoAwesomeIcon sx={{ fontSize: 20 }} />
          <MLink href="#home" underline="none" color="inherit">
            <Typography variant="subtitle1" fontWeight={600}>
              {profile.name}
            </Typography>
          </MLink>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button href="#projects" color="inherit">
            Projects
          </Button>
          <Button href="#experience" color="inherit">
            Experience
          </Button>
          <Button href="#skills" color="inherit">
            Skills
          </Button>
          <Button href="#contact" color="inherit">
            Contact
          </Button>
          <Button href="#game" color="inherit">
            Game
          </Button>
          <Button
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            Resume
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        scrollMarginTop: { xs: "72px", md: "88px" },
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        background:
          "radial-gradient(1200px 400px at 50% -10%, rgba(124,77,255,.25), transparent)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          maxWidth: "1600px",
        }}
      >
        <Typography variant="overline" color="text.secondary">
          {profile.role}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, lineHeight: 1.1 }}>
          Hi, I’m {profile.name}.<br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg,#00e5ff,#e040fb,#00e676)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {profile.tagline}
          </Box>
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 760 }} color="text.secondary">
          Currently focused on expanding my skillset with doing openAI
          certifications, building AI-powered projects and learning the use of
          AI in Python based data science projects.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
          <Button
            href="#projects"
            size="large"
            variant="contained"
            startIcon={<CodeIcon />}
          >
            View my work
          </Button>
          <Button
            href="#contact"
            size="large"
            variant="outlined"
            startIcon={<MailIcon />}
          >
            Contact me
          </Button>
        </Stack>
        {/* Right: interactive bubble */}
        <Box
          sx={{
            flex: "0 1 260px",
            ml: "auto",
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            width: { xs: 180, sm: 220, md: 260 },
            paddingTop: { xs: 2, sm: 3, md: 4, lg: 6 },
            paddingBottom: { xs: 2, sm: 3, md: 4, lg: 6 },
          }}
        >
          <Box
            role="img"
            aria-label="Portrait of Satyam Arora"
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(124,77,255,.25)",
              transform: "translateY(0)",
              transition: "transform .4s ease, box-shadow .4s ease",
              animation: "float 6s ease-in-out infinite",
              "&:hover": {
                transform: "translateY(-6px) scale(1.02)",
                boxShadow: "0 20px 50px rgba(124,77,255,.35)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                padding: "2px",
                background: "linear-gradient(120deg,#00e5ff,#e040fb,#00e676)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              },
            }}
          >
            <Box
              component="img"
              src="/me.jpg"
              alt="Satyam Arora"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function Projects() {
  return (
    <Box
      id="projects"
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
          Featured Projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, sm: 3, md: 4 },
            justifyContent: "center",
          }}
        >
          {projects.map((p) => (
            <Box
              key={p.title}
              sx={{ flex: "1 1 300px", maxWidth: 380, minWidth: 280 }}
            >
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  titleTypographyProps={{ variant: "h6" }}
                  title={p.title}
                  action={
                    <Stack direction="row" spacing={1}>
                      {p.repo && (
                        <IconButton
                          component="a"
                          href={p.repo}
                          target={"_blank"}
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          size="small"
                        >
                          <GitHubIcon fontSize="inherit" />
                        </IconButton>
                      )}
                    </Stack>
                  }
                />
                <CardContent>
                  <Typography sx={{ mt: 2 }} color="text.secondary">
                    {p.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2, flexWrap: "wrap" }}
                  >
                    {p.tags.map((t) => (
                      <Chip key={t} label={t} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ===== Forms =====
const FORMSPREE_URL = "https://formspree.io/f/xzzkajpn";

function Experience() {
  return (
    <Box
      id="experience"
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
          Experience
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            {
              title: "Junior Software Engineer — Talenom Oy",
              dates: "Apr 2022 – Jan 2025",
              bullets: [
                "Talenom is a Finnish Fintech company that provides accounting and financial management solutions",
                "Built customer portal for 10,000+ clients (React, Node.js).",
                "Developed KYC tool improving onboarding efficiency by 30%.",
                "Thesis on DIY accounting automation adopted internally.",
              ],
            },
            {
              title: "Junior Data Scientist — Cyreen",
              dates: "Jan 2021 – Jul 2022",
              bullets: [
                "Cyreen is a German startup that provides digital marketing solutions",
                "Built Python crawlers for 100+ supermarket sites, boosting insights by 25%.",
                "Created KPI queries and integrated weather/sports data.",
                "Worked with PowerBI, Tableau, Azure, SQL, Excel, PowerPoint and Python",
              ],
            },
            {
              title: "Student Assistant — HAMK University",
              dates: "Jan 2021 – Dec 2021",
              bullets: [
                "Tutored in Java OOP, Servlets, AJAX",
                "Planned and led workshops for students.",
              ],
            },
            {
              title: "Volunteer Group Lead — Slush Helsinki",
              dates: "Nov 2021",
              bullets: [
                "Slush is the largest gathering of startups and investors in the world",
                "Recruited and Managed  my team of10 volunteers",
                "Supervised cloakroom operations.",
              ],
            },
          ].map((job) => (
            <Card key={job.title}>
              <CardHeader
                title={
                  <Typography variant="subtitle1">
                    {job.title}{" "}
                    <Typography component="span" color="text.secondary">
                      ({job.dates})
                    </Typography>
                  </Typography>
                }
              />
              <CardContent>
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function Skills() {
  return (
    <Box
      id="skills"
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
          Skills
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          {skills.map((s) => (
            <Chip key={s} label={s} variant="outlined" />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      setSnackSeverity("warning");
      setSnackMsg("Please fill in all fields.");
      setSnackOpen(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setSnackSeverity("success");
        setSnackMsg("Message sent! I'll get back to you soon.");
        setSnackOpen(true);
      } else {
        setSnackSeverity("error");
        setSnackMsg("Couldn't send message. Please try again.");
        setSnackOpen(true);
      }
    } catch (err) {
      setSnackSeverity("error");
      setSnackMsg("Network error. Please try again.");
      setSnackOpen(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          maxWidth: "1600px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 4, maxWidth: 720 }}
        >
          <Stack spacing={2}>
            <TextField name="name" label="Your name" required fullWidth />
            <TextField
              name="email"
              type="email"
              label="Email"
              required
              fullWidth
            />
            <TextField
              name="message"
              label="Message"
              required
              fullWidth
              multiline
              minRows={4}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={sending}
              sx={{ alignSelf: "flex-start" }}
            >
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </Stack>
        </Box>
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackOpen(false)}
            severity={snackSeverity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackMsg}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ borderTop: 1, borderColor: "divider", py: 4 }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton href={profile.social.github} aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(() =>
    Number(localStorage.getItem("snakeHigh") || 0)
  );
  const [speed, setSpeed] = useState(110);
  const gridSize = 20;

  function placeFood(snake) {
    let f;
    do {
      f = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    } while (snake.some((s) => s.x === f.x && s.y === f.y));
    return f;
  }

  const stateRef = useRef({
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
    snake: [
      { x: 8, y: 10 },
      { x: 7, y: 10 },
      { x: 6, y: 10 },
    ],
    food: { x: 12, y: 10 },
  });

  function reset() {
    stateRef.current = {
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      snake: [
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 },
      ],
      food: placeFood([
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 },
      ]),
    };
    setScore(0);
    setPaused(false);
    setRunning(true);
    setSpeed(110);
  }

  // Keyboard: WASD only
  useEffect(() => {
    function onKey(e) {
      const key = e.key.toLowerCase();
      const { dir } = stateRef.current;
      const map = {
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
      const size = Math.floor(W / gridSize) * gridSize;
      canvas.width = size;
      canvas.height = size;
      const c = size / gridSize;

      const st = stateRef.current;
      st.dir = st.nextDir;
      const head = { x: st.snake[0].x + st.dir.x, y: st.snake[0].y + st.dir.y };
      head.x = (head.x + gridSize) % gridSize;
      head.y = (head.y + gridSize) % gridSize;

      // collision
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
      for (let i = 0; i <= gridSize; i++) {
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

  // Mobile overlay controls
  const move = (dx, dy) => {
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
          Game — Snake
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Use W, A, S, D to control the snake. Touch the on-screen arrows on
          mobile.
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
              Start
            </Button>
          ) : (
            <>
              <Button variant="outlined" onClick={() => setPaused((p) => !p)}>
                {paused ? "Resume" : "Pause"}
              </Button>
              <Button variant="text" onClick={reset}>
                Restart
              </Button>
            </>
          )}
          <Typography>Score: {score}</Typography>
          <Typography color="text.secondary">High: {high}</Typography>
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

        {/* 🕹️ Mobile D-Pad */}
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

export default function Portfolio() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { scrollBehavior: "smooth" },
          body: { margin: 0, width: "100%" },
          "#root": { width: "100%" },
        }}
      />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Header />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Game />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
