import React, { useState, useEffect } from "react";
import TarotCard from "./TarotCard";
import { motion } from "framer-motion";

const DecksSection = () => {
  const [flippedCards, setFlippedCards] = useState<{
    love: boolean;
    career: boolean;
    mystery: boolean;
  }>({
    love: false,
    career: false,
    mystery: false,
  });

  const [activeDeck, setActiveDeck] = useState<string | null>(null);

  const handleCardFlip = (type: "love" | "career" | "mystery") => {
    setFlippedCards(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
    setActiveDeck(activeDeck === type ? null : type);
  };

  const cards = [
    {
      id: "love",
      title: "Love Life",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Discover what the future holds for your romantic journey.",
      prediction: "A deep connection awaits you. Someone from your past will reenter your life, bringing new understanding and potentially rekindling an old flame."
    },
    {
      id: "career",
      title: "Career Path",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      description: "Unveil the mysteries of your professional future.",
      prediction: "Your creative talents will soon be recognized. An unexpected opportunity will present itself in the next month, leading to significant growth."
    },
    {
      id: "mystery",
      title: "Mystery",
      image: "https://images.unsplash.com/photo-1590691566921-d3f5172a3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Explore the unknown realms of your destiny.",
      prediction: "A journey awaits you - both physical and spiritual. Trust your intuition in the coming weeks, as it will guide you to a revelation that changes your perspective."
    }
  ];

  return (
    <section id="decks-section" className="mystic-section bg-mystic-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-mystic-dark/50 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20"></div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Deck</h2>
          <p className="text-lg text-mystic-light/80 max-w-2xl mx-auto">
            Each deck holds different insights into your future. Select one to reveal what the mystic forces have in store for you.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={card.id} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: activeDeck === card.id ? 1.1 : 1
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
                onClick={() => handleCardFlip(card.id as "love" | "career" | "mystery")}
                isFlipped={flippedCards[card.id as "love" | "career" | "mystery"]}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DecksSection;
