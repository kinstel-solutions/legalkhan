import React from "react";

interface GhostButtonProps {
  text?: string;
  className?: string;
}

export default function GhostButton({ text = "Explore", className = "" }: GhostButtonProps) {
  return (
    <button className={`
      group relative px-8 py-3 overflow-hidden 
      border border-current transition-colors duration-300 ease-out
      hover:text-black hover:border-white ${className}
    `}>
      <span className="relative z-10 text-xs uppercase tracking-[0.2em] font-medium">
        {text}
      </span>
      <span className="
        absolute inset-0 bg-white transform scale-x-0 origin-left 
        transition-transform duration-300 ease-out 
        group-hover:scale-x-100
      "/>
    </button>
  );
}
