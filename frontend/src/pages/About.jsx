import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  HealthAndSafety,
  Psychology,
  Shield,
  Lock,
  Science,
  ExpandMore,
  CheckCircle,
  HelpOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip
            icon={<HealthAndSafety />}
            label="About DocPrompt"
            color="primary"
          />
          <Typography variant="h3" sx={{ mt: 2, fontWeight: 700 }}>
            Safer, faster first-step medical guidance
          </Typography>
          <Typography variant="h6" color="#42a5f5" sx={{ mt: 1 }}>
            An AI triage companion that explains urgency and next steps — not a
            diagnosis.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button variant="contained" component={Link} to="/" size="large">
              Get Started
            </Button>
            <Button variant="outlined" component={Link} to="/signup" size="large">
              Create an account
            </Button>
          </Stack>
        </Box>

        {/* Mission + What it is */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <CheckCircle color="success" />
                  <Typography variant="h5">Our mission</Typography>
                </Stack>
                <Typography color="text.secondary">
                  Help people decide how urgent their symptoms are and what to do
                  next, using transparent reasoning and reputable guidelines.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Science color="primary" />
                  <Typography variant="h5">What DocPrompt does</Typography>
                </Stack>
                <Typography color="text.secondary">
                  It analyzes your symptom description (and optional photo),
                  retrieves matching guidance, and returns a severity level with
                  citations and a clear recommendation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* How it works */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            How it works (under the hood)
          </Typography>
          <Grid container spacing={2}>
            {[
              {
                icon: <Psychology />,
                title: "Symptom parsing",
                text: "LLM extracts structured symptoms, duration, intensity, red flags.",
              },
              {
                icon: <Science />,
                title: "Evidence retrieval",
                text: "RAG pulls relevant guideline passages (NHS/CDC/WHO) for your case.",
              },
              {
                icon: <Shield />,
                title: "Decision & safety",
                text: "Rules + LLM select a severity & action; a safety check validates citations.",
              },
              {
                icon: <Lock />,
                title: "Privacy by design",
                text: "Minimal logging, no PII in analytics, and transparent data controls.",
              },
            ].map((s, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 1 }}
                    >
                      {s.icon}
                      <Typography variant="subtitle1" fontWeight={600}>
                        {s.title}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {s.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Safety & Disclaimer */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Safety & Disclaimer
          </Typography>
          <Alert severity="warning" icon={<HealthAndSafety />}>
            DocPrompt provides educational guidance only and is not a substitute
            for professional medical advice, diagnosis, or treatment. If you
            experience severe or worsening symptoms, seek emergency care
            immediately.
          </Alert>
        </Box>

        {/* Privacy highlights */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Lock />
                  <Typography variant="h6">Privacy highlights</Typography>
                </Stack>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText primary="No selling of personal data" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Option to use without saving history" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText primary="You control deletion of your records" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* FAQ */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <HelpOutline />
                  <Typography variant="h6">FAQ</Typography>
                </Stack>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Does DocPrompt diagnose conditions?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      No — it triages urgency and suggests next steps with
                      citations.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>What if the AI is unsure?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      It defaults to a safer recommendation and asks you to
                      consult a clinician.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CTA footer */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mt: 6 }}
        >
          <Button variant="contained" size="large" component={Link} to="/">
            Try DocPrompt now
          </Button>
          <Button variant="outlined" size="large" component={Link} to="/login">
            Sign in to view history
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
