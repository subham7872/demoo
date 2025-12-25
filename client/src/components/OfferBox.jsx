import React, { useState, useEffect } from 'react';
import { X, Gift, Percent, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OfferBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if offer has been shown before (using sessionStorage)
    const offerShown = sessionStorage.getItem('offerShown');
    
    if (!offerShown) {
      // Show offer after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('offerShown', 'true');
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaimOffer = () => {
    // Scroll to quote section
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />

          {/* Offer Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md mx-4"
          >
            <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-accent-orange/30 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-green/10 rounded-full -ml-12 -mb-12 blur-2xl" />
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="bg-accent-orange p-6 rounded-full relative"
                  >
                    <Gift className="h-12 w-12 text-white" />
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="h-6 w-6 text-accent-green" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-extrabold text-white text-center mb-3"
                >
                  Special Offer!
                </motion.h2>

                {/* Discount Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="flex justify-center mb-6"
                >
                  <div className="bg-accent-orange text-white px-6 py-3 rounded-full font-bold text-2xl flex items-center space-x-2 shadow-xl">
                    <Percent className="h-6 w-6" />
                    <span>15% OFF</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-navy-200 text-center mb-6 leading-relaxed"
                >
                  Get <span className="font-bold text-white">15% off</span> your first project when you book a consultation today!
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3 mb-8"
                >
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="bg-accent-green/20 p-1.5 rounded-lg">
                      <Clock className="h-4 w-4 text-accent-green" />
                    </div>
                    <span className="text-sm">Valid for next 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <div className="bg-accent-green/20 p-1.5 rounded-lg">
                      <Gift className="h-4 w-4 text-accent-green" />
                    </div>
                    <span className="text-sm">Applies to all services</span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-3"
                >
                  <button
                    onClick={handleClaimOffer}
                    className="w-full bg-accent-orange hover:bg-orange-600 text-white font-bold py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Claim This Offer Now
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 rounded-full transition-all border border-white/20"
                  >
                    Maybe Later
                  </button>
                </motion.div>

                {/* Fine Print */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-xs text-navy-400 text-center mt-6"
                >
                  * Offer valid for new customers only. Cannot be combined with other promotions.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OfferBox;

