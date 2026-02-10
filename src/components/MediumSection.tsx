import { useEffect, useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  image: string | null;
  excerpt: string;
}

const MotionCard = motion(Card);

export default function MediumSection() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@arorasatyam1112"
    )
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.items.slice(0, 6).map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          image: extractImage(item.description),
          excerpt: extractText(item.description),
        }));

        setArticles(normalized);
      })
      .catch(console.error);
  }, []);

  function extractImage(html: string): string | null {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  }

  function extractText(html: string, maxLength = 140): string {
    const text = html
      .replace(/<[^>]*>/g, "") // remove HTML tags
      .replace(/\s+/g, " ") // normalize spaces
      .trim();

    return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
  }

  const { t } = useLanguage();

  return (
    <Box
      id="medium"
      sx={{
        py: 10,
        px: 2,
        maxWidth: "1200px",
        mx: "auto", // center section
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 600 }}>
        {t("nav.medium")}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
          justifyItems: "center",
        }}
      >
        {articles.map((article, i) => (
          <MotionCard
            key={article.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            sx={{
              width: "100%",
              maxWidth: 360,
              cursor: "pointer",
              borderRadius: 3,
            }}
            onClick={() => window.open(article.link, "_blank")}
          >
            {article.image && (
              <CardMedia
                component="img"
                height="180"
                image={article.image}
                alt={article.title}
              />
            )}

            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {article.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                {article.excerpt}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                {new Date(article.pubDate).toLocaleDateString()}
              </Typography>
            </CardContent>
          </MotionCard>
        ))}
      </Box>
    </Box>
  );
}
