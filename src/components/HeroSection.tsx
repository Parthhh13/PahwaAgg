import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CloudOverlay from './CloudOverlay';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Cloud Overlays */}
      <CloudOverlay position="bottom" />

      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
              transition={{ duration: 0.8, delay: 0.5 }}
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
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-sm text-mystic-light/60 italic">
                "The cards don't lie... but you've got to flip them to know."
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
