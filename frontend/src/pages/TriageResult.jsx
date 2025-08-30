import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";

export default function TriageResult() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the triage result passed via state
  const result = location.state?.result || {
    condition: "Unknown condition",
    advice: "Please consult a doctor.",
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
