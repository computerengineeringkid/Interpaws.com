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
  title: "Interpaws | Student Innovation Project 2025",
  description: "A Student Innovation Project exploring Agentic AI, Vector Embeddings, and ReAct Agents for veterinary practice management. Built with Next.js 15, FastAPI, pgvector, and Ollama.",
  keywords: ["student innovation project", "agentic AI", "vector embeddings", "ReAct agents", "veterinary AI", "pgvector", "ollama"],
  authors: [{ name: "Amari Bullard" }],
  openGraph: {
    title: "Interpaws | Student Innovation Project 2025",
    description: "Exploring Agentic AI and Vector Embeddings for veterinary practice management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
