import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-mystic-dark/80 text-mystic-light/60 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm mb-4">
            © {new Date().getFullYear()} Mystic Scroll Tarot. All rights reserved.
          </p>
          <p className="text-xs italic">
            "Sometimes you choose the card. Sometimes the card chooses you."
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
