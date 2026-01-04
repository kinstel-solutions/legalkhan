import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://legal-khan.vercel.app"),
  title: {
    default: "Legal Khan Associates | Premier Legal Service Provider",
    template: "%s | Legal Khan Associates",
  },
  description:
    "Legal Khan Associates is a premier legal service provider with a legacy of over half a century. Expertise in IP, Banking, Dispute Resolution, and more. Located in Lucknow.",
  keywords: [
    "Legal Khan Associates",
    "Law Firm Lucknow",
    "Advocate Saleem Khan",
    "Benazir Khan",
    "Legal Services India",
    "Corporate Law",
    "Intellectual Property",
    "Civil Litigation",
  ],
  authors: [{ name: "Legal Khan Associates" }],
  creator: "Legal Khan Associates",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://legal-khan.vercel.app",
    title: "Legal Khan Associates | Premier Legal Service Provider",
    description:
      "Expertise | Experience | Excellence. A legacy of over 50 years in legal practice.",
    siteName: "Legal Khan Associates",
    images: [
      {
        url: "/images/LegalKhan-Img1.png",
        width: 1200,
        height: 630,
        alt: "Legal Khan Associates Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Khan Associates | Premier Legal Service Provider",
    description:
      "Expertise | Experience | Excellence. Serving clients with over 50 years of legal heritage.",
    images: ["/images/LegalKhan-Img1.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png", // Assuming these might exist or fall back
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {/* Smooth Scroll Wrapper */}
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
