import { Box, Container, Typography, Chip } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { skills } from "../data";

export default function Skills() {
  const { t } = useLanguage();
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
          {t("skills.title")}
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
