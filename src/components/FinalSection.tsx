import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ComingSoonPopup from './ComingSoonPopup';

const FinalSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

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
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 mystic-text">
            Begin Your Mystical Journey
          </h2>
          <p className="text-xl md:text-2xl text-mystic-light/80 mb-12 max-w-3xl mx-auto">
            The cards have whispered their initial secrets, but there's much more to discover. Ready to dive deeper into the mystical world of tarot?
          </p>
          
          <motion.button
            onClick={() => setShowComingSoon(true)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="w-5 h-5" />
            PLAY FULL TAROT GAME
          </motion.button>

          <p className="mt-8 text-sm text-mystic-light/60 italic">
            Unlock more readings, deluxe predictions, and deep mystic insights
          </p>
        </motion.div>
      </div>

      <ComingSoonPopup 
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </section>
  );
};

export default FinalSection; 