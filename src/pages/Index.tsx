import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DecksSection from "@/components/DecksSection";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Add CSS classes for perspective and 3D effects
  useEffect(() => {
    document.documentElement.style.setProperty("--perspective-1000", "perspective(1000px)");
    document.documentElement.style.setProperty("--transform-style-3d", "preserve-3d");
    document.documentElement.style.setProperty("--backface-hidden", "backface-visibility: hidden");
    document.documentElement.style.setProperty("--rotate-y-180", "transform: rotateY(180deg)");
    
    // Add these styles to the existing stylesheet
    const style = document.createElement('style');
    style.innerHTML = `
      .perspective-1000 {
        perspective: 1000px;
      }
      .transform-style-3d {
        transform-style: preserve-3d;
      }
      .backface-hidden {
        backface-visibility: hidden;
      }
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-mystic-dark text-mystic-light overflow-hidden">
      <Navbar />
      
      <main>
        <HeroSection />
        <DecksSection />
        <FinalSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
