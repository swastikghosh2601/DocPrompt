import React, { useState } from "react";
import {
  Container, Grid, Card, CardContent, Typography, TextField, MenuItem,
  Button, Stack, Snackbar, Alert, CircularProgress, Box, Divider
} from "@mui/material";
import { Email, Phone, LocationOn, Send, RestartAlt } from "@mui/icons-material";

const categories = [
  { value: "support", label: "Support" },
  { value: "feedback", label: "Product Feedback" },
  { value: "press", label: "Press / Media" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "support",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, type: "success", msg: "" });

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validate = () => {
    const e = {};
    if (!form.name || form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!emailOk(form.email)) e.email = "Enter a valid email address.";
    if (!form.subject || form.subject.trim().length < 3) e.subject = "Subject is too short.";
    if (!form.message || form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      // TODO: replace with your backend API call:
      // await axios.post("/api/contact", form);
      await new Promise((r) => setTimeout(r, 1000)); // simulate network
      setSnack({ open: true, type: "success", msg: "Thanks! We’ll get back to you shortly." });
      setForm({ name: "", email: "", subject: "", category: "support", message: "" });
    } catch (err) {
      setSnack({ open: true, type: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", category: "support", message: "" });
    setErrors({});
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight={700}>Contact Us</Typography>
        <Typography variant="h6" color="white" sx={{ mt: 1 }}>
          Questions, feedback, or partnership ideas? We’d love to hear from you.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left: Contact Form */}
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Send us a message</Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    fullWidth
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        fullWidth
                      >
                        {categories.map((c) => (
                          <MenuItem key={c.value} value={c.value}>{c.label}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <TextField
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    fullWidth
                    multiline
                    minRows={5}
                  />

                  <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button
                      type="button"
                      variant="outlined"
                      startIcon={<RestartAlt />}
                      onClick={handleReset}
                      disabled={loading}
                    >
                      Reset
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={loading ? <CircularProgress size={18} /> : <Send />}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Contact Details */}
        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>Contact details</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Email color="primary" /><Typography>support@docprompt.app</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone color="primary" /><Typography>+1 (555) 555-1234</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOn color="primary" /><Typography>Remote • Worldwide</Typography>
                </Stack>
              </Stack>

              <Divider sx={{ my: 3 }} />

              <Typography variant="subtitle1" sx={{ mb: 1 }}>Response time</Typography>
              <Typography variant="body2" color="text.secondary">
                We typically respond within 1–2 business days.
              </Typography>

              <Box sx={{ mt: 3, p: 2, bgcolor: "action.hover", borderRadius: 2 }}>
                <Typography variant="subtitle2" gutterBottom>Security note</Typography>
                <Typography variant="body2" color="text.secondary">
                  Don’t include personal health information. For urgent issues, call local emergency services.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Snackbars */}
      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnack((s) => ({ ...s, open: false }))}
          severity={snack.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snack.msg}
        </Alert>
      </Snackbar>
    </Container>
  );
}
