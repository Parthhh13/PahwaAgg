import React from 'react';
import { motion } from 'framer-motion';

interface CloudOverlayProps {
  position: 'top' | 'bottom';
}

const CloudOverlay: React.FC<CloudOverlayProps> = ({ position }) => {
  return (
    <div 
      className={`absolute left-0 right-0 h-48 pointer-events-none z-20
        ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'}`}
    >
      <div className="relative w-full h-full">
        {/* Animated Mist Layer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full bg-gradient-to-b from-mystic-dark/90 via-mystic-dark/50 to-transparent"
            style={{
              maskImage: 'url(/clouds.png)',
              WebkitMaskImage: 'url(/clouds.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
            }}
          />
        </motion.div>

        {/* Second Mist Layer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div 
            className="w-full h-full bg-gradient-to-b from-mystic-dark/80 via-mystic-dark/40 to-transparent"
            style={{
              maskImage: 'url(/clouds2.png)',
              WebkitMaskImage: 'url(/clouds2.png)',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
            }}
          />
        </motion.div>

        {/* Sparkle Effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-full h-full bg-[url('/sparkles.png')] bg-repeat-x bg-contain opacity-30" />
        </motion.div>
      </div>
    </div>
  );
};

export default CloudOverlay; 