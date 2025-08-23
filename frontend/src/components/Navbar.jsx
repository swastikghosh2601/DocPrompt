import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DocPrompt
        </Typography>

        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">Login</Button>
        <Button variant="contained" sx={{ ml: 2, bgcolor: "secondary.main" }}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}
