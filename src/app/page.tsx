"use client";

import React, { useState } from "react";
import { Mail, Phone, Download, ExternalLink, Flame } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_USER, PROJECTS, Project } from "@/data/portfolioData";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-24 sm:space-y-32 pb-12 bg-[#0D0D0D]">
      {/* HERO SECTION (#home) */}
      <section id="home" className="scroll-mt-28 pt-4 pb-8 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-4 bg-white text-[#111111] p-6 sm:p-8 rounded-[36px] shadow-2xl flex flex-col items-center justify-between text-center relative overflow-hidden border border-gray-100 min-h-[580px]">
            {/* Top Left Decorative Dashed Orange Arc */}
            <svg
              className="absolute -top-12 -left-12 w-48 h-48 text-[#FF5722] pointer-events-none opacity-90"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="45"
                cy="45"
                r="40"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Availability Badge */}
            <div className="w-full flex items-center justify-end z-10 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-[#FFF0EB] text-[#FF5722] border border-[#FF5722]/20 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
                Available
              </span>
            </div>

            {/* Photo, Name, Flame Badge & Bio */}
            <div className="w-full relative z-10 flex flex-col items-center">
              <div className="bg-[#E63900] rounded-[28px] p-0 aspect-[4/4.5] relative overflow-hidden shadow-lg w-full flex items-center justify-center">
                <img
                  src={PORTFOLIO_USER.avatar}
                  alt={PORTFOLIO_USER.name}
                  className="w-full h-full object-cover rounded-[28px]"
                />
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-5 mb-1">
                {PORTFOLIO_USER.name}
              </h1>

              <div className="relative w-full flex items-center justify-center my-3">
                <svg
                  className="absolute w-full h-10 text-[#FF5722] pointer-events-none -top-1"
                  viewBox="0 0 200 40"
                  fill="none"
                >
                  <path
                    d="M 10 35 Q 100 -5 190 35"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                </svg>
                <div className="w-9 h-9 rounded-full bg-[#FF5722] flex items-center justify-center text-white shadow-md relative z-10">
                  <Flame className="w-4 h-4 fill-white text-white" />
                </div>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xs mx-auto px-2">
                {PORTFOLIO_USER.bio}
              </p>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center justify-center gap-6 pt-5 mt-4 w-full z-10 border-t border-gray-100">
              <a
                href={PORTFOLIO_USER.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#FF5722] hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 text-[#FF5722]" />
              </a>
              <a
                href={PORTFOLIO_USER.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#FF5722] hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-[#FF5722]" />
              </a>
              <a
                href={PORTFOLIO_USER.socials.email}
                className="text-[#FF5722] hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-[#FF5722]" />
              </a>
              <a
                href={PORTFOLIO_USER.socials.phone}
                className="text-[#FF5722] hover:scale-110 transition-transform"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-[#FF5722]" />
              </a>
            </div>
          </div>

          {/* Right Column - Main Headline & Action Buttons */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8 py-4">
            
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-none">
                  AI & SOFTWARE
                </h2>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black stroke-text uppercase leading-none tracking-tight">
                  ENGINEER
                </h2>
              </div>

              <p className="text-gray-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                {PORTFOLIO_USER.title}
              </p>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
              <a
                href={PORTFOLIO_USER.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-xs sm:text-sm px-6 py-3.5 flex items-center gap-2 font-bold uppercase tracking-wider"
              >
                <span>View Resume</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_USER.resumeUrl}
                download="Abdullah_Hashmi_Resume.pdf"
                className="btn-orange text-xs sm:text-sm px-7 py-3.5 shadow-xl shadow-[#FF5722]/30 flex items-center gap-2 font-black uppercase tracking-wider"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* MARQUEE TICKER */}
      <MarqueeTicker />

      {/* SELECTED PROJECTS SECTION (#projects) */}
      <section id="projects" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-white/10 pb-6">
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            SELECTED
          </h2>
          <h2 className="text-4xl sm:text-6xl font-black stroke-text uppercase tracking-tight">
            PROJECTS
          </h2>
        </div>

        {/* Unified 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHome={true}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </section>

      {/* WORK EXPERIENCE SECTION (#experience) */}
      <section id="experience" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-white/10 pb-6">
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            WORK
          </h2>
          <h2 className="text-4xl sm:text-6xl font-black stroke-text uppercase tracking-tight">
            EXPERIENCE
          </h2>
        </div>

        <ExperienceTimeline />
      </section>

      {/* TECHNICAL SKILLS SECTION (#skills) */}
      <section id="skills" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SkillsSection />
      </section>

      {/* EDUCATION SECTION (#education) */}
      <section id="education" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EducationSection />
      </section>

      {/* ACHIEVEMENTS SECTION (#achievements) */}
      <section id="achievements" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AchievementsSection />
      </section>

      {/* CONTACT SECTION (#contact) */}
      <section id="contact" className="scroll-mt-28">
        <ContactSection />
      </section>

      {/* Modal for quick project preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
