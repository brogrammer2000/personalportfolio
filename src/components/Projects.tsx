import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useLanguage } from "../contexts/LanguageContext";
import { projectTags, projectRepos } from "../data";

export default function Projects() {
  const { getTranslation } = useLanguage();
  const projects = getTranslation("projects.items") || [];

  return (
    <Box
      id="projects"
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
          {getTranslation("projects.title")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, sm: 3, md: 4 },
            justifyContent: "center",
          }}
        >
          {projects.map((p: any) => (
            <Box
              key={p.title}
              sx={{ flex: "1 1 300px", maxWidth: 380, minWidth: 280 }}
            >
              <Card sx={{ height: "100%" }}>
                <CardHeader
                  titleTypographyProps={{ variant: "h6" }}
                  title={p.title}
                  action={
                    <Stack direction="row" spacing={1}>
                      {projectRepos[p.title] && (
                        <IconButton
                          component="a"
                          href={projectRepos[p.title]}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          size="small"
                        >
                          <GitHubIcon fontSize="inherit" />
                        </IconButton>
                      )}
                    </Stack>
                  }
                />
                <CardContent>
                  <Typography sx={{ mt: 2 }} color="text.secondary">
                    {p.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2, flexWrap: "wrap" }}
                  >
                    {(projectTags[p.title] || []).map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
