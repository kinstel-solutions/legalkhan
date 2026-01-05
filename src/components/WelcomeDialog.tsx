"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(true);

  const handleAgree = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white text-[#003366] p-4 md:p-12 shadow-2xl border-t-4 border-[#C5A059] max-h-[75vh] flex flex-col"
          >
            <h2 className="text-xl md:text-4xl font-serif font-bold mb-4 md:mb-6 flex-shrink-0">Disclaimer</h2>
            
            <div className="prose prose-sm max-w-none mb-4 md:mb-8 opacity-80 leading-relaxed text-justify overflow-y-auto pr-2">
              <p className="mb-4">
                As per the Bar Council of India rules, this website is for informational purposes only. By accessing legalkhan.in, you confirm you are seeking information about Legal Khan Associates voluntarily, without any solicitation or advertisement.
              </p>
              <p className="mb-4">
                Content here is not legal advice. Legal Khan Associates shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
              </p>
              <p>
                All content is the intellectual property of Legal Khan Associates.
              </p>
            </div>

            <div className="flex justify-end flex-shrink-0">
              <button 
                onClick={handleAgree}
                className="w-full md:w-auto bg-[#003366] text-white px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-[#004488] transition-colors duration-300"
              >
                I Agree & Enter
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
