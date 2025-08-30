import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake authentication (replace with real API later)
    if (email && password) {
      login({ email }); // store email as logged in user
      navigate("/history"); // redirect to history page
    }
  };

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
            <Typography variant="h4" fontWeight={600}>
              Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Welcome back! Please enter your details.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button fullWidth variant="contained" size="large" sx={{ mt: 2 }} type="submit">
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
