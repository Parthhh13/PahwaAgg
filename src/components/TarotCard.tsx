import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface TarotCardProps {
  title: string;
  image: string;
  description: string;
  prediction: string;
  onClick: () => void;
  isFlipped: boolean;
  isActive: boolean;
}

const TarotCard: React.FC<TarotCardProps> = ({
  title,
  image,
  description,
  prediction,
  onClick,
  isFlipped,
  isActive
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        setShowPlayButton(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowPlayButton(false);
    }
  }, [isFlipped]);

  return (
    <motion.div
      className={`perspective-1000 w-full max-w-[280px] aspect-[3/5] mx-auto cursor-pointer ${isActive ? 'fixed inset-0 z-50 max-w-none aspect-auto m-0' : ''}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={isActive ? {} : { scale: 1.05 }}
      animate={{
        maxWidth: isActive ? "100%" : "280px",
        width: isActive ? "100%" : "100%",
        height: isActive ? "100vh" : "auto",
      }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered && !isActive ? 1.05 : 1
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* Card Front */}
        <Card className={`absolute w-full h-full backface-hidden tarot-card ${!isFlipped ? 'card-glow border-mystic-primary/30' : ''} bg-gradient-to-b from-mystic-dark to-mystic-secondary overflow-hidden`}>
          <div className="p-4 h-full flex flex-col items-center justify-center text-center">
            <motion.h3 
              className="text-xl font-bold text-mystic-light mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h3>
            <motion.div 
              className={`relative ${isActive ? 'w-1/2 max-w-2xl' : 'w-3/4'} aspect-square my-4 mx-auto overflow-hidden rounded-lg`}
              whileHover={{ scale: isActive ? 1 : 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark/80 to-transparent"></div>
              <motion.div 
                className="absolute inset-0 bg-mystic-gold/20"
                animate={{ opacity: isHovered && !isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.p 
              className="text-sm text-mystic-light/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {description}
            </motion.p>
            {!isActive && (
              <motion.div 
                className="mt-4 text-xs text-mystic-light/60"
                animate={{ opacity: isHovered ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              >
                Click to reveal
              </motion.div>
            )}
          </div>
        </Card>
        
        {/* Card Back */}
        <Card className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'card-glow border-mystic-gold' : ''} bg-gradient-to-b from-mystic-dark/95 to-mystic-secondary overflow-hidden`}>
          <div className={`p-6 h-full flex flex-col items-center justify-center text-center ${isActive ? 'max-w-4xl mx-auto' : ''}`}>
            <motion.h3 
              className="text-xl md:text-3xl font-bold text-mystic-gold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title} Revealed
            </motion.h3>
            <motion.div 
              className="my-4 w-12 h-1 bg-mystic-gold rounded-full opacity-50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-mystic-light italic text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {prediction}
            </motion.p>
            
            {showPlayButton && isActive && (
              <motion.button
                className="mt-8 px-8 py-3 bg-mystic-gold text-mystic-dark font-bold rounded-full hover:bg-mystic-gold/90 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                PLAY GAME
              </motion.button>
            )}
            
            {!isActive && (
              <motion.div 
                className="mt-6 text-xs text-mystic-light/60"
                animate={{ opacity: isHovered ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              >
                Click to flip back
              </motion.div>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
