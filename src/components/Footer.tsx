import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLanguage } from "../contexts/LanguageContext";
import { profile } from "../data";

export default function Footer() {
  const { t } = useLanguage();
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
          © {new Date().getFullYear()} {profile.name}. {t("footer.rights")}
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
