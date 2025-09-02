import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Box, Button, List, ListItem, Link } from "@mui/material";

export default function TriageResult() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the triage result passed via state OR fallback to defaults
  const result = {
    condition: location.state?.result?.condition || "Unknown condition",
    advice: location.state?.result?.advice || "Please consult a doctor.",
    citations:
      location.state?.result?.citations || [
        {
          text: "Mayo Clinic - Symptom Checker",
          url: "https://www.mayoclinic.org/symptom-checker",
        },
        {
          text: "WebMD - Symptoms A to Z",
          url: "https://symptoms.webmd.com/",
        },
        {
          text: "NHS UK - Health A-Z",
          url: "https://www.nhs.uk/conditions/",
        },
      ],
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        py: 6,
      }}
    >
      <Typography variant="h3" fontWeight={600} gutterBottom>
        Triage Result
      </Typography>

      <Box mt={3}>
        <Typography variant="h5" color="primary" gutterBottom>
          Possible Condition: {result.condition}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Recommendation: {result.advice}
        </Typography>
      </Box>

      {/* ✅ Citations Section */}
      <Box mt={5} textAlign="left" maxWidth="600px">
        <Typography variant="h6" gutterBottom>
          References:
        </Typography>
        <List>
          {result.citations.map((citation, index) => (
            <ListItem key={index} sx={{ display: "list-item", pl: 2 }}>
              <Link href={citation.url} target="_blank" rel="noopener">
                {citation.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Buttons */}
      <Box mt={4}>
        <Button
          variant="contained"
          sx={{ mr: 2 }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
        <Button variant="outlined" onClick={() => navigate("/symptom-check")}>
          Start Over
        </Button>
      </Box>
    </Box>
  );
}
