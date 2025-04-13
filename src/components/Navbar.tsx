
import React from "react";
import { Star } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-mystic-dark/80 backdrop-blur-md z-50 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Star className="h-5 w-5 text-mystic-gold mr-2" />
          <span className="font-cinzel text-xl font-bold text-white">
            Mystic Scroll
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-mystic-light/80 hover:text-mystic-primary transition-colors text-sm">
            Home
          </a>
          <a href="#decks-section" className="text-mystic-light/80 hover:text-mystic-primary transition-colors text-sm">
            Tarot Decks
          </a>
          <a href="#" className="text-mystic-light/80 hover:text-mystic-primary transition-colors text-sm">
            About
          </a>
        </div>
        
        <button className="bg-mystic-primary/20 text-mystic-primary border border-mystic-primary/30 px-4 py-2 rounded-full text-sm hover:bg-mystic-primary/30 transition-all duration-300">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
