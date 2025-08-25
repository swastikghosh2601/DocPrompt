import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DocPrompt
        </Typography>

        {/* Navigation links */}
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={RouterLink} to="/login">
          Login
        </Button>
        <Button
          variant="contained"
          component={RouterLink}
          to="/signup"
          sx={{ ml: 2, bgcolor: "secondary.main" }}
        >
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}
