"use client";
import { ArrowRight } from "lucide-react";

interface OutlineButtonProps {
    text: string;
    onClick?: () => void;
    dark?: boolean;
}

export default function OutlineButton({ text, onClick, dark = false }: OutlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative px-8 py-4 border transition-all duration-300 ease-out
        uppercase tracking-[0.2em] text-xs font-semibold
        flex items-center gap-4 overflow-hidden w-fit
        ${dark 
          ? "border-[#003366] text-[#003366] hover:text-white" 
          : "border-white text-white hover:text-[#003366]"
        }
      `}
    >
      {/* Hover Background Fill Effect */}
      <span 
        className={`
          absolute inset-0 w-full h-full transform scale-x-0 group-hover:scale-x-100 
          transition-transform duration-300 origin-left ease-out z-0
          ${dark ? "bg-[#003366]" : "bg-white"}
        `} 
      />

      {/* Text & Arrow (z-10 to sit on top of fill) */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {/* Optional: The "Arrow UI" often appears on hover */}
        <ArrowRight 
          size={16} 
          className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" 
        />
      </span>
    </button>
  );
}
