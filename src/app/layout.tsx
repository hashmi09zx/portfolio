import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdullah Hashmi — AI & Software Engineer",
  description: "Personal portfolio of Abdullah Hashmi, AI & Software Engineer specializing in Agentic AI, Computer Vision, RAG Systems, and Full-Stack Engineering.",
  keywords: [
    "Abdullah Hashmi",
    "AI Engineer",
    "Software Engineer",
    "Agentic AI",
    "LangGraph",
    "Computer Vision",
    "RAG",
    "FastAPI",
    "Flutter",
    "Next.js"
  ],
  authors: [{ name: "Abdullah Hashmi" }],
  openGraph: {
    title: "Abdullah Hashmi — AI & Software Engineer",
    description: "Building intelligent software systems across Agentic AI, Computer Vision, RAG, and full-stack engineering.",
    images: ["/images/avatar.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#141312] text-white antialiased selection:bg-[#C5FF41] selection:text-[#141312]">
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
