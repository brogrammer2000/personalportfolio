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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1e40af", light: "#3b82f6", dark: "#1e3a8a" },
    secondary: { main: "#00e5ff" },
    background: { default: "#0b1220", paper: "#0f172a" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
});

function PortfolioContent() {
  return (
    <>
      <Header />
      <Hero />

      {/* All sections below Hero share the BackgroundBeams layer */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <BackgroundBeams />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Projects />
          <AppliedAIApps />
          <MediumSection />
          <Experience />
          <Education />
          <Volunteering />
          <Skills />
          <Contact />
          <Game />
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
