import { Box, Container, Typography, Stack, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLanguage } from "../contexts/LanguageContext";
import { profile } from "../data";
import { PixelTrail } from "@/components/ui/pixel-trail";
import { useScreenSize } from "@/components/hooks/use-screen-size";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();
  const screenSize = useScreenSize();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: { xs: "72px", md: "88px" },
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        background: "#0b1220",
      }}
    >
      {/* PixelTrail fills the entire hero section behind all content */}
      <PixelTrail
        pixelSize={screenSize.lessThan("md") ? 40 : 60}
        fadeDuration={800}
        delay={0}
        pixelClassName="bg-white"
      />

      {/* Content layer — pointer-events-none on wrapper so mouse events
          pass through to PixelTrail; restored on interactive elements */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 10,
          pointerEvents: "none",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          maxWidth: "1600px",
        }}
      >
        <motion.div style={{ y, opacity }}>
          <Typography variant="overline" color="text.secondary">
          {t("profile.role")}
        </Typography>

        <Typography variant="h2" sx={{ mt: 1, lineHeight: 1.1 }}>
          Hi, I'm {profile.name}.
          <br />
          <Box component="span" sx={{ color: "grey.500" }}>
            {t("profile.tagline")}
          </Box>
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: 760 }} color="text.secondary">
          {t("profile.description")}
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: 760 }} color="text.secondary">
          <b>{t("profile.basedIn")}</b>, {t("profile.lookingFor")}
        </Typography>

        {/* Restore pointer-events for buttons */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 4, flexWrap: "wrap", pointerEvents: "auto" }}
        >
          <Button
            href="#projects"
            size="large"
            variant="outlined"
            startIcon={<CodeIcon />}
            sx={{
              borderColor: "#1e40af",
              color: "grey.100",
              "&:hover": {
                borderColor: "#3b82f6",
                bgcolor: "rgba(30,64,175,0.12)",
              },
            }}
          >
            {t("profile.viewWork")}
          </Button>
          <Button
            href="#contact"
            size="large"
            variant="outlined"
            startIcon={<MailIcon />}
            sx={{
              borderColor: "#1e40af",
              color: "grey.100",
              "&:hover": {
                borderColor: "#3b82f6",
                bgcolor: "rgba(30,64,175,0.12)",
              },
            }}
          >
            {t("profile.contactMe")}
          </Button>
          <Button
            href={profile.social.linkedin}
            size="large"
            variant="outlined"
            startIcon={<LinkedInIcon />}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderColor: "#1e40af",
              color: "grey.100",
              "&:hover": {
                borderColor: "#3b82f6",
                bgcolor: "rgba(30,64,175,0.12)",
              },
            }}
          >
            {t("profile.linkedin")}
          </Button>
        </Stack>

        {/* Restore pointer-events for profile image */}
        <Box
          sx={{
            flex: "0 1 260px",
            ml: "auto",
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            width: { xs: 180, sm: 220, md: 260 },
            pt: { xs: 2, sm: 3, md: 4, lg: 6 },
            pb: { xs: 2, sm: 3, md: 4, lg: 6 },
            pointerEvents: "auto",
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
              boxShadow: "0 10px 30px rgba(255,255,255,0.06)",
              transform: "translateY(0)",
              transition: "transform .4s ease, box-shadow .4s ease",
              animation: "float 6s ease-in-out infinite",
              "&:hover": {
                transform: "translateY(-6px) scale(1.02)",
                boxShadow: "0 20px 50px rgba(255,255,255,0.10)",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                padding: "2px",
                background:
                  "linear-gradient(120deg, #ffffff, #9e9e9e, #424242)",
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
        </motion.div>
      </Container>
    </Box>
  );
}
