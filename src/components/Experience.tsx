import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

export default function Experience() {
  const { getTranslation, t } = useLanguage();
  const experiences = getTranslation("experience.items") || [];

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
          {t("experience.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {experiences.map((job: any) => (
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
                  {job.bullets.map((b: string, i: number) => (
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
