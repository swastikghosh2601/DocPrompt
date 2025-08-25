import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";   // 👈 if you’ve built a Contact page
import Login from "./pages/Login";       // 👈 import the new Login page
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* Navbar stays at the top */}
      <Navbar />

      <div className="min-h-screen w-full">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* About route */}
          <Route path="/about" element={<About />} />

          {/* Contact route */}
          <Route path="/contact" element={<Contact />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Catch-all / 404 route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
