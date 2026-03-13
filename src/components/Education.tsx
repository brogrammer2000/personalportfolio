import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

export default function Education() {
  const { getTranslation, t } = useLanguage();
  const education = getTranslation("education.items") || [];

  return (
    <Box
      id="education"
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
          {t("education.title")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {education.map((edu: any) => (
            <Card key={edu.degree + edu.school}>
              <CardHeader
                title={
                  <Typography variant="subtitle1">
                    {edu.degree}{" "}
                    <Typography
                      component="span"
                      color="text.secondary"
                      sx={{ fontWeight: 400 }}
                    >
                      — {edu.school}
                    </Typography>
                  </Typography>
                }
                subheader={
                  <Typography color="text.secondary">{edu.dates}</Typography>
                }
              />
              <CardContent>
                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  {edu.bullets.map((b: string, i: number) => (
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
