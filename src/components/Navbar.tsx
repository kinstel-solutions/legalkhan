"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  darkText?: boolean;
}

export default function Navbar({ darkText = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1 },
    }),
  };

  const links = ["Expertise", "People", "News & Events", "Legacy", "Blog"];

  return (
    <>
      {/* FIXED HEADER */}
      <nav
        className={`fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-center transition-colors duration-300 drop-shadow-md ${
          darkText ? "text-[#003366]" : "text-white"
        }`}>
                {/* LOGO */}
                <Link href="/" className="group relative w-[250px] h-[60px]">
                   <Image 
                     src="/images/logo_v4.svg" 
                     alt="Legal Khan Associates" 
                     fill
                     className={`object-contain transition-all duration-300 ${!darkText ? "brightness-0 invert" : ""}`}
                     priority
                   />
                </Link>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6 md:gap-8">
          <button className="hover:opacity-70 transition-opacity">
            <Search
              size={24}
              strokeWidth={2.5}
            />
          </button>

          {/* VERTICAL HAMBURGER */}
          <button
            onClick={() => setIsOpen(true)}
            className="group flex gap-[5px] hover:gap-[7px] transition-all duration-300 h-6 md:h-8 items-center">
            <span className="w-[3px] h-6 md:h-8 bg-current group-hover:h-10 transition-all duration-300"></span>
            <span className="w-[3px] h-6 md:h-8 bg-current group-hover:h-5 transition-all duration-300"></span>
            <span className="w-[3px] h-6 md:h-8 bg-current group-hover:h-10 transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-[#003366] text-white p-10 flex flex-col justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-4xl hover:rotate-90 transition-transform duration-300">
              ×
            </button>
            <div className="flex flex-col gap-6 items-center md:items-start md:pl-20">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  custom={i}
                  variants={linkVariants}
                  href="#"
                  className="text-4xl md:text-6xl font-serif hover:italic transition-all cursor-pointer">
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
