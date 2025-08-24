import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toolbar } from "@mui/material"; // 👈 Import Toolbar for spacing

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Spacer to push content below AppBar */}
      <Toolbar />

      {/* Page content */}
      <div className="min-h-screen w-full">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* About route */}
          <Route path="/about" element={<About />} />

          {/* Contact route */}
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all / 404 route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
