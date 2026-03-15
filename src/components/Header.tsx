import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DownloadIcon from "@mui/icons-material/Download";
import LanguageIcon from "@mui/icons-material/Language";
import { Link as MLink } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { profile } from "../data";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (languageButtonRef.current) {
        setAnchorEl(languageButtonRef.current);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang: "en" | "fi") => {
    setLanguage(lang);
    handleLanguageMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: isScrolled ? "rgba(15, 23, 42, 0.75)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: 1,
        borderColor: isScrolled ? "rgba(255, 255, 255, 0.08)" : "transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar 
        sx={{ 
          width: "100%", 
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: isScrolled ? 0.5 : 1.5,
          transition: "padding 0.3s ease"
        }}
      >
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
          alignItems="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Button href="#projects" color="inherit">
            {t("nav.projects")}
          </Button>
          <Button href="#applied-ai-apps" color="inherit">
            {t("nav.appliedAiApps")}
          </Button>
          <Button href="#medium" color="inherit">
            {t("nav.medium")}
          </Button>
          <Button href="#experience" color="inherit">
            {t("nav.experience")}
          </Button>
          <Button href="#education" color="inherit">
            {t("nav.education")}
          </Button>
          <Button href="#volunteering" color="inherit">
            {t("nav.volunteering")}
          </Button>
          <Button href="#skills" color="inherit">
            {t("nav.skills")}
          </Button>
          <Button href="#contact" color="inherit">
            {t("nav.contact")}
          </Button>
          <Button href="#game" color="inherit">
            {t("nav.game")}
          </Button>
          <Button
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<DownloadIcon />}
          >
            {t("nav.resume")}
          </Button>
        </Stack>
        <IconButton
          ref={languageButtonRef}
          onClick={handleLanguageMenuOpen}
          color="inherit"
          aria-label="Change language"
          sx={{ ml: 1 }}
        >
          <LanguageIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleLanguageMenuClose}
        >
          <MenuItem
            onClick={() => handleLanguageChange("en")}
            selected={language === "en"}
          >
            English
          </MenuItem>
          <MenuItem
            onClick={() => handleLanguageChange("fi")}
            selected={language === "fi"}
          >
            Suomi
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
