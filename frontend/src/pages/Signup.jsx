import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, Paper } from "@mui/material";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    // 🔑 Add backend call here later
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
              Sign Up
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create a new account to get started.
            </Typography>
          </Box>

          {/* Form fields */}
          <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
            />

            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </Box>

          <Box textAlign="center" mt={2}>
            <Typography variant="body2">
              Already have an account?{" "}
              <a href="/login" style={{ color: "#1976d2", textDecoration: "none" }}>
                Login
              </a>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
