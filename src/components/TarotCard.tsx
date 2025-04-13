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
}

const TarotCard: React.FC<TarotCardProps> = ({
  title,
  image,
  description,
  prediction,
  onClick,
  isFlipped
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="perspective-1000 w-full max-w-[280px] aspect-[3/5] mx-auto cursor-pointer"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={`relative w-full h-full transition-all duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered ? 1.05 : 1
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
              className="relative w-3/4 aspect-square my-4 mx-auto overflow-hidden rounded-lg"
              whileHover={{ scale: 1.1 }}
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
                animate={{ opacity: isHovered ? 1 : 0 }}
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
            <motion.div 
              className="mt-4 text-xs text-mystic-light/60"
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              Click to reveal
            </motion.div>
          </div>
        </Card>
        
        {/* Card Back */}
        <Card className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'card-glow border-mystic-gold' : ''} bg-gradient-to-b from-mystic-dark/95 to-mystic-secondary overflow-hidden`}>
          <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            <motion.h3 
              className="text-xl font-bold text-mystic-gold mb-4"
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
              className="text-mystic-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {prediction}
            </motion.p>
            <motion.div 
              className="mt-6 text-xs text-mystic-light/60"
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            >
              Click to flip back
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TarotCard;
