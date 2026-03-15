import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LanguageProvider } from "./contexts/LanguageContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AppliedAIApps from "./components/AppliedAIApps";
import MediumSection from "./components/MediumSection";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { BackgroundBeams } from "./components/ui/background-beams";
import { ScrollReveal } from "./components/ScrollReveal";
import { motion, useScroll, useSpring } from "framer-motion";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6", light: "#60a5fa", dark: "#2563eb" },
    secondary: { main: "#0ea5e9", light: "#38bdf8", dark: "#0284c7" },
    background: { default: "#030712", paper: "rgba(15, 23, 42, 0.4)" },
    text: { primary: "rgba(255,255,255,0.9)", secondary: "rgba(255,255,255,0.7)" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Outfit", system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 600, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(255, 255, 255, 0.15)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backdropFilter: "blur(4px)",
        },
        outlined: {
          borderWidth: "1px !important",
          background: "rgba(255,255,255,0.03)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      },
    },
  },
});

function PortfolioContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        style={{
          scaleX,
          originX: 0,
          background: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
          height: "4px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      />
      <Header />
      <Hero />

      {/* All sections below Hero share the BackgroundBeams layer */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <BackgroundBeams />
        <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: { xs: 4, md: 8 } }}>
          <Projects />
          
          <ScrollReveal direction="up" delay={0.1}>
            <AppliedAIApps />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <MediumSection />
          </ScrollReveal>

          <Experience />

          <ScrollReveal direction="up" delay={0.1}>
            <Education />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Volunteering />
          </ScrollReveal>

          <Skills />

          <ScrollReveal direction="up" delay={0.1}>
            <Contact />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Game />
          </ScrollReveal>
          
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default function Portfolio() {
  return (
    <LanguageProvider>
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
          <PortfolioContent />
        </Box>
      </ThemeProvider>
    </LanguageProvider>
  );
}
