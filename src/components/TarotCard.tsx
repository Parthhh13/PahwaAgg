import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface TarotCardProps {
  title: string;
  image: string;
  description: string;
  prediction: string;
  onClick: () => void;
  onPlayGame: () => void;
  isFlipped: boolean;
  isActive: boolean;
  cardType: "athena" | "devil" | "lovers";
}

const TarotCard: React.FC<TarotCardProps> = ({
  title,
  image,
  description,
  prediction,
  onClick,
  onPlayGame,
  isFlipped,
  isActive,
  cardType
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const getCardColors = () => {
    switch (cardType) {
      case "athena":
        return {
          border: 'border-amber-400',
          glow: 'rgba(255, 215, 0, 0.3)',
          gradient: 'from-amber-900 to-amber-800',
          text: 'text-amber-400',
          highlight: 'bg-amber-400/20',
          button: 'bg-amber-400 hover:bg-amber-500 text-amber-950'
        };
      case "devil":
        return {
          border: 'border-red-600',
          glow: 'rgba(220, 38, 38, 0.3)',
          gradient: 'from-red-950 to-red-900',
          text: 'text-red-500',
          highlight: 'bg-red-500/20',
          button: 'bg-red-600 hover:bg-red-700 text-white'
        };
      case "lovers":
        return {
          border: 'border-pink-400',
          glow: 'rgba(244, 114, 182, 0.3)',
          gradient: 'from-pink-900 to-pink-800',
          text: 'text-pink-400',
          highlight: 'bg-pink-400/20',
          button: 'bg-pink-400 hover:bg-pink-500 text-pink-950'
        };
      default:
        return {
          border: 'border-mystic-gold',
          glow: 'rgba(255, 215, 0, 0.3)',
          gradient: 'from-mystic-dark to-mystic-secondary',
          text: 'text-mystic-gold',
          highlight: 'bg-mystic-gold/20',
          button: 'bg-mystic-gold hover:bg-mystic-gold/90 text-mystic-dark'
        };
    }
  };

  const colors = getCardColors();

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

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping when clicking play
    onPlayGame();
  };

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
        <Card 
          className={`absolute w-full h-full backface-hidden tarot-card ${!isFlipped ? `card-glow ${colors.border}` : ''} bg-gradient-to-b ${colors.gradient} overflow-hidden`}
          style={{
            '--card-glow': colors.glow
          } as React.CSSProperties}
        >
          <div className="p-4 h-full flex flex-col items-center justify-center text-center">
            <motion.h3 
              className={`text-xl font-bold ${colors.text} mb-2`}
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
                className={`absolute inset-0 ${colors.highlight}`}
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
        <Card 
          className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped ? `card-glow ${colors.border}` : ''} overflow-hidden`}
          style={{
            '--card-glow': colors.glow
          } as React.CSSProperties}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${image})`,
              opacity: 0.4
            }} 
          />
          
          {/* Gradient Overlay for better text readability */}
          <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} opacity-80`} />

          <div className={`relative z-10 p-6 h-full flex flex-col items-center justify-center text-center ${isActive ? 'max-w-4xl mx-auto' : ''}`}>
            <motion.h3 
              className={`text-xl md:text-3xl font-bold ${colors.text} mb-4 drop-shadow-lg`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title} Revealed
            </motion.h3>
            <motion.div 
              className={`my-4 w-12 h-1 ${colors.highlight} rounded-full shadow-glow`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-mystic-light italic text-lg md:text-xl whitespace-pre-line drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {prediction}
            </motion.p>

            <AnimatePresence>
              {showPlayButton && (
                <motion.button
                  className={`mt-8 px-6 py-3 rounded-full font-semibold ${colors.button} shadow-lg transform transition-transform`}
                  onClick={handlePlayClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  PLAY GAME
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
