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

function PortfolioContent() {
  return (
    <>
      <Header />
      <Hero />
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
