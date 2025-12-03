import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interpaws | AI-Powered Veterinary Practice Management",
  description: "Transform your veterinary practice with Interpaws - the intelligent practice management system that leverages AI to streamline operations, enhance patient care, and grow your business.",
  keywords: ["veterinary software", "practice management", "AI veterinary", "pet clinic software", "animal hospital management"],
  authors: [{ name: "Saguaro Interactive" }],
  openGraph: {
    title: "Interpaws | AI-Powered Veterinary Practice Management",
    description: "Transform your veterinary practice with intelligent AI-powered management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
