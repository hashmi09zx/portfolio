"use client";

import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import { EDUCATION_LIST } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="orange-badge text-xs mb-2 inline-block">Academic Record</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            EDUCATION & <span className="stroke-text">DEGREES</span>
          </h2>
        </div>
        <p className="text-[#9E9E9E] text-xs sm:text-sm max-w-md">
          Academic foundation in Artificial Intelligence, Data Science, and Computer Engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_LIST.map((edu) => (
          <div
            key={edu.id}
            className="sawad-card p-6 sm:p-8 bg-[#161616] border border-white/10 relative group overflow-hidden flex flex-col justify-between rounded-[24px] hover:border-[#FF5722]/40 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#FF5722] transition-all duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center group-hover:border-[#FF5722] transition-colors">
                  <GraduationCap className="w-6 h-6 text-[#FF5722]" />
                </div>
                <span className="orange-badge text-xs font-bold py-1 px-3">
                  {edu.score}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#9E9E9E] font-semibold uppercase tracking-wider block mb-1">
                  {edu.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-white/80 font-medium text-sm mt-2">
                  {edu.institution}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#9E9E9E]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF5722]" />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
