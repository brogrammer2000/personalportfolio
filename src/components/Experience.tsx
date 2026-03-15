import {
  Box,
  Container,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export default function Experience() {
  const { getTranslation, t } = useLanguage();
  const experiences = getTranslation("experience.items") || [];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <Box
      id="experience"
      component="section"
      ref={ref}
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
        <Box sx={{ display: "flex", position: "relative" }}>
          <motion.div
            style={{ 
              scaleY: scrollYProgress, 
              transformOrigin: "top",
              background: "linear-gradient(180deg, #3b82f6 0%, #0ea5e9 100%)",
            }}
            className="absolute left-[8px] md:left-[24px] top-6 bottom-6 w-1 rounded-full z-0 hidden sm:block" 
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%", pl: { sm: 4, md: 8 } }}>
            {experiences.map((job: any) => (
              <ScrollReveal key={job.title} direction="left" delay={0.1}>
                <Card sx={{ width: "100%" }}>
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
          </ScrollReveal>
          ))}
        </Box>
        </Box>
      </Container>
    </Box>
  );
}
