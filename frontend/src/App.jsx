import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import History from "./pages/History";  // ✅ new History page
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute"; // we’ll create this
import { Toolbar } from "@mui/material"; // to push content below navbar

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Toolbar /> {/* keeps spacing below AppBar */}

        <div className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* ✅ Protect History route */}
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
