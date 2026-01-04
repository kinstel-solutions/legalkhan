import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://legal-khan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Legal Khan Associates | Premier Legal Service Provider",
    template: "%s | Legal Khan Associates",
  },
  description:
    "Legal Khan Associates is a premier legal service provider with over 50 years of legal excellence.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Legal Khan Associates",
    title: "Legal Khan Associates | Premier Legal Service Provider",
    description:
      "Expertise | Experience | Excellence. A legacy of over 50 years in legal practice.",
    images: [
      {
        url: `${SITE_URL}/images/LegalKhan-Img1.png`,
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
    images: [`${SITE_URL}/images/LegalKhan-Img1.png`],
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
