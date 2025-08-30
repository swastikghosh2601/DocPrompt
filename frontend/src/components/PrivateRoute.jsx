import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // If not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children;
}
