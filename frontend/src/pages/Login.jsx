import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function Login() {
  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" fontWeight={600}>
            Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back! Please enter your details.
          </Typography>
        </Box>

        {/* Form fields */}
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            required
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </Box>

        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Don’t have an account?{" "}
            <a href="/signup" style={{ color: "#1976d2", textDecoration: "none" }}>
              Sign up
            </a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
