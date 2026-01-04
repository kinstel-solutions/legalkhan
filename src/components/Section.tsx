"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import OutlineButton from "./OutlineButton";

interface SectionProps {
  id?: string;
  title: string;
  subtitle: string;
  description?: string;
  color: string;
  textColor: string;
  imageSrc?: string;
  index: number;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  color,
  textColor,
  imageSrc,
  index,
}: SectionProps) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Parallax Effect: The whole section shrinks slightly as you scroll past it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div
      id={id}
      ref={container}
      className="h-screen sticky top-0 overflow-hidden">
      <motion.section
        style={{ scale, opacity }}
        className="h-full w-full flex flex-col md:flex-row origin-top border-t border-white/10">
        {/* --- LEFT PANEL: Solid Color & Content --- */}
        <div
          className="w-full md:w-1/2 h-full flex flex-col justify-center px-10 md:px-24 relative z-10"
          style={{ backgroundColor: color, color: textColor }}>
          {/* Text Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="block text-xs font-bold uppercase tracking-[0.25em] mb-6 opacity-70">
              {title}
            </span>

            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
              {subtitle}
            </h2>

            {description && (
              <p className="text-lg leading-relaxed opacity-90 mb-12 max-w-md font-light">
                {description}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              {/* We pass 'textColor' to determine if button should be light/dark */}
              <OutlineButton
                text="Explore Area"
                dark={textColor === "#003366"}
              />
              <OutlineButton
                text="Case Studies"
                dark={textColor === "#003366"}
              />
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT PANEL: Image Only --- */}
        <div className="hidden md:block w-1/2 h-full relative">
          {imageSrc ? (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                priority={index === 0} // Optimize loading for the first image
              />
              {/* Optional: Subtle overlay to blend image nicely with the right edge */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ) : (
            // Fallback if no image is provided (keep it the same color or a neutral tone)
            <div className="w-full h-full bg-gray-100" />
          )}
        </div>
      </motion.section>
    </div>
  );
}
