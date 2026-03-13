import { Box, Container, Typography, Stack, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLanguage } from "../contexts/LanguageContext";
import { profile } from "../data";

export default function Hero() {
  const { t } = useLanguage();
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
          {t("profile.role")}
        </Typography>
        <Typography variant="h2" sx={{ mt: 1, lineHeight: 1.1 }}>
          Hi, I'm {profile.name}.<br />
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg,#00e5ff,#e040fb,#00e676)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("profile.tagline")}
          </Box>
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 760 }} color="text.secondary">
          {t("profile.description")}
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 760 }} color="text.secondary">
          <b>{t("profile.basedIn")}</b>, {t("profile.lookingFor")}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 4, flexWrap: "wrap" }}>
          <Button
            href="#projects"
            size="large"
            variant="contained"
            startIcon={<CodeIcon />}
          >
            {t("profile.viewWork")}
          </Button>
          <Button
            href="#contact"
            size="large"
            variant="outlined"
            startIcon={<MailIcon />}
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
          >
            {t("profile.linkedin")}
          </Button>
        </Stack>
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
