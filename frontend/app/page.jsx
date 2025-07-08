import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="w-full h-auto relative overflow-hidden bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default page;
