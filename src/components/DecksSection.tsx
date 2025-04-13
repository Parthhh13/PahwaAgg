import React, { useState, useEffect } from "react";
import TarotCard from "./TarotCard";
import { motion, AnimatePresence } from "framer-motion";
import CloudOverlay from "./CloudOverlay";

const DecksSection = () => {
  const cards = [
    {
      id: "athena",
      title: "Athena's Wisdom",
      image: "/cards/athena.jpg",
      description: "Step into your power — see where ambition and fate will take you.",
      prediction: "Mmm, ambition. I see sharp turns ahead — opportunity, yes, but also choices that carry weight. This card speaks of growth, of something greater calling your name. But you'll have to work for it. No shortcuts here.\n\nThe path is opening. Are you ready to walk it?"
    },
    {
      id: "devil",
      title: "The Devil's Game",
      image: "/cards/devil.jpg",
      description: "Embrace the unknown — face your inner demons and hidden desires.",
      prediction: "Interesting… this one doesn't show up for everyone. The Devil is temptation, yes, but also truth. The parts of you you've hidden? They're ready to speak. You'll be tested — by power, by pleasure, by your own shadow. Are you ready to face yourself?\n\nEnter if you dare — but know, not everyone walks out the same."
    },
    {
      id: "lovers",
      title: "The Lovers' Dance",
      image: "/cards/lovers.jpg",
      description: "Unlock the secrets of your heart — discover the love that awaits you.",
      prediction: "Ah, the card of the heart... This one speaks of connection — deep, magnetic, sometimes messy. Love is near, but it won't come easy. You'll have to choose: guard your heart, or open it wide. Someone's energy lingers around you… do you feel it?\n\nTap in. Let love lead the way."
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

  // Prevent scrolling when a card is active
  useEffect(() => {
    if (activeDeck) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeDeck]);

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
    <section id="decks-section" className={`mystic-section bg-mystic-gradient relative overflow-hidden min-h-screen ${activeDeck ? 'fixed inset-0 z-50' : ''}`}>
      {/* Background Video or Card Image */}
      <div className="absolute inset-0 overflow-hidden">
        {activeDeck ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${activeCard?.image})`,
                opacity: 0.3
              }}
            />
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

      {/* Cloud Overlays */}
      {!activeDeck && (
        <>
          <CloudOverlay position="top" />
          <CloudOverlay position="bottom" />
        </>
      )}

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
              className="fixed top-8 left-8 z-[60] mystic-button-secondary"
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
                cardType={card.id as "athena" | "devil" | "lovers"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DecksSection;
