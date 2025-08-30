import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toolbar } from "@mui/material";

// ✅ Pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import History from "./pages/History";
import SymptomForm from "./components/SymptomForm";
import TriageResult from "./pages/TriageResult";

// ✅ Components
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

// ✅ Context
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Toolbar /> {/* Pushes content below navbar */}
        <div className="min-h-screen w-full">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/symptom-check" element={<SymptomForm />} />
            <Route path="/triage-result" element={<TriageResult />} />

            {/* Protected routes */}
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
