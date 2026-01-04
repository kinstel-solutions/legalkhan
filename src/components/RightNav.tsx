"use client";
import { motion } from "framer-motion";

interface RightNavProps {
    activeIndex: number;
    onChange: (index: number) => void;
}

export default function RightNav({ activeIndex, onChange }: RightNavProps) {
  const sections = ["Who We Are", "Our Vision", "Practice Areas", "Legal Documents"];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 drop-shadow-md">
      {sections.map((_, i) => {
        const isActive = activeIndex === i;

        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            className="group relative flex items-center justify-center w-6 h-6"
          >
            {/* The Dot (Circle) */}
            <motion.div
              animate={{
                scale: isActive ? 1 : 0.5,
                opacity: isActive ? 1 : 0.5,
                backgroundColor: "#fff",
              }}
              className="w-3 h-3 rounded-full z-10"
            />

            {/* The "Active Ring" or "Arrow UI" container */}
            {isActive && (
              <motion.div
                layoutId="active-ring"
                className="absolute inset-0 border-2 border-white rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Tooltip (optional, appears on hover) */}
            <span className="absolute right-10 text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {sections[i]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
