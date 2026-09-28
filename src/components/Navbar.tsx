"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_USER } from "@/data/portfolioData";

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["home", "projects", "experience", "skills", "education", "contact"];
      const headerOffset = 220; // Viewport threshold below sticky header

      // Check if user is near the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("education");
        return;
      }

      let currentActive = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl shadow-black/80"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Avatar */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15 group-hover:border-[#FF5722] transition-colors">
              <img
                src={PORTFOLIO_USER.avatar}
                alt={PORTFOLIO_USER.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#FF5722] rounded-full ring-2 ring-[#0D0D0D]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base tracking-tight group-hover:text-[#FF5722] transition-colors">
                {PORTFOLIO_USER.name}
              </span>
              <span className="text-xs text-[#9E9E9E] font-medium hidden sm:inline-block">
                AI & Software Engineer
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#161616]/90 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white bg-[#FF5722] shadow-md shadow-[#FF5722]/30"
                      : "text-[#9E9E9E] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-orange text-xs sm:text-sm px-5 py-2.5 shadow-lg shadow-[#FF5722]/20 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-white/80 hover:text-white bg-[#161616] border border-white/10 rounded-2xl focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#0D0D0D]/98 border-b border-white/10 backdrop-blur-xl px-6 py-8 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#FF5722] text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-white" />}
                </button>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9E9E9E]">
              <span>Status: {PORTFOLIO_USER.status}</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722] animate-pulse" />
                <span className="text-white font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
