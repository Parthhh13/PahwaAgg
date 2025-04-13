import React from "react";
import { Sparkles } from "lucide-react";
import CloudOverlay from "./CloudOverlay";

const CTASection = () => {
  return (
    <section className="mystic-section bg-mystic-dark py-20 relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/mystic-bg1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/70 to-mystic-dark/40"></div>
      </div>

      {/* Cloud Overlays */}
      <CloudOverlay position="top" />

      <div className="relative z-10 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 mystic-text">Begin Your Mystical Journey</h2>
        <p className="text-lg text-mystic-light/80 mb-10">
          The cards have whispered their initial secrets, but there's much more to discover. Ready to dive deeper into the mystical world of tarot?
        </p>
        
        <div className="animate-float">
          <button className="mystic-button flex items-center justify-center gap-2 mx-auto">
            <Sparkles className="h-5 w-5" />
            <span>Play Full Tarot Game</span>
          </button>
        </div>
        
        <p className="mt-6 text-sm text-mystic-light/60">
          Unlock personalized readings, daily predictions, and deep mystic insights.
        </p>
      </div>
      
      <div className="absolute left-1/4 bottom-1/4 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <div className="h-40 w-40 rounded-full bg-mystic-primary/20 blur-xl" />
      </div>
      <div className="absolute right-1/4 bottom-1/3 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <div className="h-24 w-24 rounded-full bg-mystic-magenta/20 blur-xl" />
      </div>
    </section>
  );
};

export default CTASection;
