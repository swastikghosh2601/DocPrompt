import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About"; // 👈 import the About page

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* About route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
