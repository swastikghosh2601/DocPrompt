import React from "react";
import Navbar from "../components/Navbar";
import SymptomForm from "../components/SymptomForm";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <SymptomForm />
      </div>
    </div>
  );
}


