import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SignInPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInPopup: React.FC<SignInPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy sign in logic
    console.log('Sign in attempt with:', { email, password });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-mystic-dark/95 p-8 rounded-lg shadow-2xl border border-mystic-light/20 max-w-md w-full mx-4"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-mystic-light/60 hover:text-mystic-light transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-mystic-light mystic-text">Sign In</h2>
              <p className="text-mystic-light/60 mt-2">Enter your mystical credentials</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mystic-light/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-mystic-dark border border-mystic-light/20 rounded-lg text-mystic-light focus:outline-none focus:ring-2 focus:ring-mystic-light/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-mystic-light/80 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-mystic-dark border border-mystic-light/20 rounded-lg text-mystic-light focus:outline-none focus:ring-2 focus:ring-mystic-light/40"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mystic-button"
              >
                Sign In
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-mystic-light/60">
                Don't have an account?{' '}
                <button className="text-mystic-light hover:text-mystic-light/80 transition-colors">
                  Sign Up
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignInPopup; 