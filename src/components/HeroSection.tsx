import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToDecks = () => {
    const decksSection = document.getElementById('decks-section');
    if (decksSection) {
      decksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="mystic-section bg-mystic-gradient relative overflow-hidden min-h-screen flex items-center justify-center">
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

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mystic-text">
            Mystic Scroll Tarot
          </h1>
          <p className="text-xl md:text-2xl text-mystic-light/80 mb-8 max-w-2xl mx-auto">
            Step into the mystical realm of fate and fortune. Discover what the cards reveal about your future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button 
            className="mystic-button"
            onClick={scrollToDecks}
          >
            Begin Your Journey
          </button>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm text-mystic-light/60 italic">
            "The cards don't lie... but you've got to flip them to know."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
