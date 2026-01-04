"use client";
import { Playfair_Display, Inter } from "next/font/google";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {/* Smooth Scroll Wrapper */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
