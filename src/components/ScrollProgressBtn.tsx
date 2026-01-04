"use client";
import { motion, useScroll } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollProgressBtn() {
  const { scrollYProgress } = useScroll();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setIsComplete(v > 0.95));
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-10 right-10 z-40 cursor-pointer text-white hidden md:block drop-shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={isComplete ? scrollToTop : undefined}
    >
      <div className="relative flex items-center justify-center w-16 h-16">
        {/* Track */}
        <svg className="absolute w-full h-full transform -rotate-90">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" className="opacity-20" />
          {/* Indicator */}
          <motion.circle
            cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        {/* Icon */}
        <motion.div animate={{ rotate: isComplete ? 180 : 0 }}>
            <ArrowDown size={20} strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.div>
  );
}
