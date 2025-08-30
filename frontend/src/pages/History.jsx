import React from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function History() {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box textAlign="center" mb={3}>
            <Typography variant="h4" fontWeight={600} gutterBottom>
              History
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Welcome {user?.email}, here is your activity history.
            </Typography>
          </Box>

          {/* History list */}
          <Box mt={2}>
            <Typography variant="body1" gutterBottom>
              • Searched symptoms on Aug 23
            </Typography>
            <Typography variant="body1" gutterBottom>
              • Logged in on Aug 24
            </Typography>
            <Typography variant="body1" gutterBottom>
              • Updated profile on Aug 25
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
