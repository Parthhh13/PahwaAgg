import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="mystic-section bg-mystic-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
        </motion.div>
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
          <button className="mystic-button">
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
