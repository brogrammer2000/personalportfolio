import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import { FORMSPREE_URL } from "../data";

export default function Contact() {
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [snackSeverity, setSnackSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      setSnackSeverity("warning");
      setSnackMsg(t("contact.fillFields"));
      setSnackOpen(true);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setSnackSeverity("success");
        setSnackMsg(t("contact.success"));
        setSnackOpen(true);
      } else {
        setSnackSeverity("error");
        setSnackMsg(t("contact.error"));
        setSnackOpen(true);
      }
    } catch (err) {
      setSnackSeverity("error");
      setSnackMsg(t("contact.networkError"));
      setSnackOpen(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          maxWidth: "1600px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {t("contact.title")}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 4, maxWidth: 720 }}
        >
          <Stack spacing={2}>
            <TextField
              name="name"
              label={t("contact.name")}
              required
              fullWidth
            />
            <TextField
              name="email"
              type="email"
              label={t("contact.email")}
              required
              fullWidth
            />
            <TextField
              name="message"
              label={t("contact.message")}
              required
              fullWidth
              multiline
              minRows={4}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={sending}
              sx={{ alignSelf: "flex-start" }}
            >
              {sending ? t("contact.sending") : t("contact.send")}
            </Button>
          </Stack>
        </Box>
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackOpen(false)}
            severity={snackSeverity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackMsg}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
