import { Box, Container, Typography, Card, CardHeader, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useLanguage } from "../contexts/LanguageContext";
import { certifications } from "../data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <Box
      id="certifications"
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
          {t("certifications.title")}
        </Typography>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.verifyUrl} variants={itemVariants}>
              <Card>
                <CardHeader
                  title={
                    <Typography variant="subtitle1" fontWeight={600}>
                      {cert.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {cert.issuer} · {cert.date}
                    </Typography>
                  }
                  action={
                    <IconButton
                      component="a"
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("certifications.verify")}
                      size="small"
                      sx={{ color: "primary.light" }}
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  }
                />
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
