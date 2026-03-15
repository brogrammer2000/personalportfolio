import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Box } from "@mui/material";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  width = "100%",
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getHiddenTransform = () => {
    switch (direction) {
      case "up":
        return { y: 50, opacity: 0 };
      case "down":
        return { y: -50, opacity: 0 };
      case "left":
        return { x: 50, opacity: 0 };
      case "right":
        return { x: -50, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      case "none":
        return { opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <Box ref={ref} sx={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: getHiddenTransform(),
          visible: getVisibleTransform(),
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Box>
  );
};
