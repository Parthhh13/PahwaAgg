import React, { useState } from "react";
import { Star } from "lucide-react";
import AboutPopup from "./AboutPopup";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-mystic-dark/80 backdrop-blur-md z-50 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-mystic-gold mr-2" />
            <span className="font-cinzel text-xl font-bold text-white">
              Mystic Scroll
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-mystic-light/80 hover:text-mystic-primary transition-colors text-sm">
              Home
            </a>
            <a href="#decks-section" className="text-mystic-light/80 hover:text-mystic-primary transition-colors text-sm">
              Tarot Decks
            </a>
            <button 
              onClick={() => setShowAbout(true)}
              className="text-mystic-light/80 hover:text-mystic-primary transition-colors text-sm"
            >
              About
            </button>
          </div>
        </div>
      </nav>

      <AboutPopup 
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />
    </>
  );
};

export default Navbar;
