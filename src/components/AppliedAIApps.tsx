import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useLanguage } from "../contexts/LanguageContext";
import { appliedAiApps } from "../data";

export default function AppliedAIApps() {
  const { t } = useLanguage();
  return (
    <Box
      id="applied-ai-apps"
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
          {t("appliedAiApps.title")}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          {t("appliedAiApps.subtitle")}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {appliedAiApps.map((app) => (
            <Card
              key={app.url}
              sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <CardHeader
                title={app.title}
                action={
                  <IconButton
                    component="a"
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("appliedAiApps.openDemo")}
                    size="small"
                  >
                    <OpenInNewIcon />
                  </IconButton>
                }
              />
              <CardContent
                sx={{
                  flex: 1,
                  pt: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {app.description}
                </Typography>
                {app.tags && app.tags.length > 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mb: 2, flexWrap: "wrap" }}
                  >
                    {app.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                )}
                <Box
                  component="iframe"
                  src={app.url}
                  title={app.title}
                  sx={{
                    width: "100%",
                    height: 360,
                    border: "none",
                    borderRadius: 1,
                    bgcolor: "background.default",
                    flex: 1,
                    minHeight: 320,
                  }}
                />
                <Button
                  component="a"
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  startIcon={<OpenInNewIcon />}
                  fullWidth
                  sx={{ mt: 2, color: "white" }}
                >
                  {t("appliedAiApps.openDemo")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
