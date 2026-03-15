import { Box, Container, Typography, Chip } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { skills } from "../data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 10 }
  }
};

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
        <Box 
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}
        >
          {skills.map((s) => (
            <motion.div key={s} variants={itemVariants}>
              <Chip label={s} variant="outlined" />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
