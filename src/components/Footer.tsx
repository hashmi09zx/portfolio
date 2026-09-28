"use client";

import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_USER } from "@/data/portfolioData";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left cursor-pointer">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FF5722]">
                <img
                  src={PORTFOLIO_USER.avatar}
                  alt={PORTFOLIO_USER.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-white text-xl tracking-tight block">
                  {PORTFOLIO_USER.name}
                </span>
                <span className="text-xs text-[#9E9E9E]">AI & Software Engineer</span>
              </div>
            </button>
            <p className="text-[#9E9E9E] text-sm max-w-md leading-relaxed">
              Building intelligent software systems across Agentic AI, Computer Vision, RAG, and backend engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9E9E9E]">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-[#FF5722] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-[#FF5722] transition-colors cursor-pointer">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("experience")} className="hover:text-[#FF5722] transition-colors cursor-pointer">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("skills")} className="hover:text-[#FF5722] transition-colors cursor-pointer">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("education")} className="hover:text-[#FF5722] transition-colors cursor-pointer">
                  Education
                </button>
              </li>
            </ul>
          </div>

          {/* Social Connections */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-[#9E9E9E]">
              <a
                href={PORTFOLIO_USER.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FF5722]" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_USER.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FF5722]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_USER.socials.email}
                className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF5722]" />
                <span>Email</span>
              </a>
              <a
                href={PORTFOLIO_USER.socials.phone}
                className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF5722]" />
                <span>{PORTFOLIO_USER.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9E9E]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {PORTFOLIO_USER.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-white/60">AI & Software Engineering Portfolio</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] border border-white/10 hover:border-[#FF5722] text-white hover:text-[#FF5722] transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
