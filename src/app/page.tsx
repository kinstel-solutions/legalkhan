"use client";
import { useState, useEffect } from "react";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import ScrollProgressBtn from "@/components/ScrollProgressBtn";
import RightNav from "@/components/RightNav";
import WelcomeDialog from "@/components/WelcomeDialog";

const SECTIONS = [
  {
    title: "Who We Are",
    subtitle: "A legacy of over half a century",
    description:
      "Our beloved ancestor, the Late Abdul Sattar Khan, started his legal practice in Pilibhit district of Uttar Pradesh, approximately 50 years ago. His legacy is now being successfully carried forward by Ms. Benazir Khan and Mr. Saleem Khan.",
    color: "#003366", // Dark Blue
    textColor: "#ffffff",
    imageSrc:
      "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Vision",
    subtitle: "Progressive and innovative legal solutions",
    description:
      "We instinctively take a fresh perspective on situations, exploring whether there are newer and better ways of delivering practical, commercial solutions to the challenges our clients face in today's rapidly changing business landscape.",
    color: "#F5F5F5", // Off-White / Light Grey Background
    textColor: "#003366", // DARK BLUE Text
    imageSrc: "/images/LegalKhan-Img1.png",
  },
  {
    title: "Practice Areas",
    subtitle: "Expertise across diverse sectors",
    description:
      "From Intellectual Property and Banking & Finance to Dispute Resolution and Real Estate, our team delivers expert legal advice across a wide gamut of sectors and industries.",
    color: "#004488", // Medium Blue
    textColor: "#ffffff",
    imageSrc:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Legal Documents",
    subtitle: "Comprehensive documentation services",
    description:
      "From birth to death, every individual relies on various documents. We handle a wide range of agreements, contracts, and legal certificates to ensure your life and business run smoothly.",
    color: "#1a1a1a", // Dark Grey/Black
    textColor: "#ffffff",
    imageSrc:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  // Function to scroll to specific section
  const handleNavClick = (index: number) => {
    const sectionElement = document.getElementById(`section-${index}`);
    sectionElement?.scrollIntoView({ behavior: "smooth" });
  };

  // Simple logic to update active state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const windowHeight = window.innerHeight;
      const currentIndex = Math.floor(scrollPosition / windowHeight);

      // Ensure index stays within bounds
      if (currentIndex >= 0 && currentIndex < SECTIONS.length) {
        setActiveSection(currentIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSection = SECTIONS[activeSection] || SECTIONS[0];
  const isLightBackground = currentSection.textColor !== "#ffffff";

  return (
    <main className="relative bg-black">
      <WelcomeDialog />
      <Navbar darkText={isLightBackground} />
      <ScrollProgressBtn />
      <RightNav
        activeIndex={activeSection}
        onChange={handleNavClick}
      />

      {SECTIONS.map((sec, i) => (
        <Section
          key={i}
          id={`section-${i}`}
          {...sec}
          index={i}
        />
      ))}

      {/* Extra spacer at bottom if needed */}
      <div className="h-[50vh] bg-[#003366] flex items-center justify-center text-white/50">
        <p>Footer Content</p>
      </div>
    </main>
  );
}
