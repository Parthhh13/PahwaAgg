import React, { useState, useEffect } from "react";
import TarotCard from "./TarotCard";
import { motion, AnimatePresence } from "framer-motion";

const DecksSection = () => {
  const cards = [
    {
      id: "athena",
      title: "Athena's Wisdom",
      image: "/cards/athena.jpg",
      description: "Seek divine wisdom and strategic guidance for your path ahead.",
      prediction: "The owl of wisdom watches over you. Your intellectual pursuits will be rewarded, and a strategic decision you make in the near future will lead to unexpected success. Trust in your wisdom and let it guide your choices."
    },
    {
      id: "devil",
      title: "The Devil's Game",
      image: "/cards/devil.jpg",
      description: "Face your shadows and overcome your inner demons.",
      prediction: "Dark forces are at play, but they bring opportunity for growth. A challenge that seems insurmountable will become your greatest teacher. Break free from self-imposed chains and reclaim your power."
    },
    {
      id: "lovers",
      title: "The Lovers' Dance",
      image: "/cards/lovers.jpg",
      description: "Discover the harmony of divine union and perfect balance.",
      prediction: "A significant choice lies before you in matters of the heart. Trust in the cosmic dance of fate, for it leads to a union that transcends ordinary bonds. Love will guide your way through uncertainty."
    }
  ];

  const [flippedCards, setFlippedCards] = useState<{
    athena: boolean;
    devil: boolean;
    lovers: boolean;
  }>({
    athena: false,
    devil: false,
    lovers: false,
  });

  const [activeDeck, setActiveDeck] = useState<string | null>(null);
  const activeCard = activeDeck ? cards.find(card => card.id === activeDeck) : null;

  const handleCardFlip = (type: "athena" | "devil" | "lovers") => {
    setFlippedCards(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
    setActiveDeck(activeDeck === type ? null : type);
  };

  const handleBack = () => {
    setFlippedCards(prev => ({
      ...prev,
      [activeDeck!]: false,
    }));
    setActiveDeck(null);
  };

  return (
    <section id="decks-section" className="mystic-section bg-mystic-gradient relative overflow-hidden min-h-screen">
      {/* Background Video or Card Image */}
      <div className="absolute inset-0 overflow-hidden">
        {activeDeck ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
              style={{ 
                backgroundImage: `url(${activeCard?.image})`,
                filter: 'brightness(0.3) blur(8px)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/80 to-mystic-dark/60"></div>
          </motion.div>
        ) : (
          <>
            <video
              className="absolute w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/mystic-bg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/80 to-mystic-dark/50"></div>
          </>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <AnimatePresence>
          {!activeDeck && (
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Deck</h2>
              <p className="text-lg text-mystic-light/80 max-w-2xl mx-auto">
                Each deck holds different insights into your future. Select one to reveal what the mystic forces have in store for you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back Button */}
        <AnimatePresence>
          {activeDeck && (
            <motion.button
              className="fixed top-8 left-8 z-50 mystic-button-secondary"
              onClick={handleBack}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              ← Back
            </motion.button>
          )}
        </AnimatePresence>
        
        <motion.div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto ${activeDeck ? 'h-screen items-center' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={card.id} 
              className={`flex flex-col items-center ${activeDeck && activeDeck !== card.id ? 'hidden' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <TarotCard
                title={card.title}
                image={card.image}
                description={card.description}
                prediction={card.prediction}
                onClick={() => handleCardFlip(card.id as "athena" | "devil" | "lovers")}
                isFlipped={flippedCards[card.id as "athena" | "devil" | "lovers"]}
                isActive={activeDeck === card.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DecksSection;
