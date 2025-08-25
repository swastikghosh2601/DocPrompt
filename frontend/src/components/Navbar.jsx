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

        {/* Navigation links with visited color */}
        <Button
          color="inherit"
          component={RouterLink}
          to="/"
          sx={{ "&:visited": { color: "lightgrey" } }}
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={RouterLink}
          to="/about"
          sx={{ "&:visited": { color: "lightgrey" } }}
        >
          About
        </Button>

        <Button
          color="inherit"
          component={RouterLink}
          to="/contact"
          sx={{ "&:visited": { color: "lightgrey" } }}
        >
          Contact
        </Button>

        <Button
          color="inherit"
          component={RouterLink}
          to="/login"
          sx={{ "&:visited": { color: "lightgrey" } }}
        >
          Login
        </Button>

        <Button
          variant="contained"
          component={RouterLink}
          to="/signup"
          sx={{
            ml: 2,
            bgcolor: "secondary.main",
            "&:visited": { bgcolor: "secondary.main", color: "lightgrey" },
          }}
        >
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}
