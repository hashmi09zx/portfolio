"use client";

import React from "react";
import { ArrowUpRight, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {EXPERIENCES.map((exp) => (
        <div
          key={exp.id}
          className="sawad-card p-6 sm:p-8 bg-[#161616] border border-white/10 hover:border-[#FF5722]/40 rounded-[24px] relative group overflow-hidden transition-all duration-300"
        >
          {/* Top Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#FF5722] transition-all duration-300" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-white/10">
            <div className="space-y-2">
              <span className="orange-badge text-[10px] sm:text-xs inline-block">
                {exp.period}
              </span>
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:underline"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors tracking-tight">
                    {exp.company}
                  </h3>
                </a>
              ) : (
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors tracking-tight">
                  {exp.company}
                </h3>
              )}
              <p className="text-white/90 font-semibold text-base">
                {exp.role}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#9E9E9E]">
                <MapPin className="w-3.5 h-3.5 text-[#FF5722]" />
                <span>{exp.location}</span>
              </div>

              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-[#FF5722] group-hover:border-[#FF5722] hover:scale-105 flex items-center justify-center transition-all shrink-0 cursor-pointer"
                  aria-label={`Visit ${exp.company} website`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-[#FF5722] group-hover:border-[#FF5722] flex items-center justify-center transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <p className="text-[#9E9E9E] text-sm leading-relaxed">
              {exp.description}
            </p>

            {/* Bullet point highlights */}
            <ul className="space-y-2 pt-2">
              {exp.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

