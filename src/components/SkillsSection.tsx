"use client";

import React from "react";
import { Cpu, Code2, Sparkles, Layers, Terminal, Database, Cloud, Smartphone } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolioData";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  PROGRAMMING: <Terminal className="w-5 h-5 text-[#FF5722]" />,
  "AI / ML": <Cpu className="w-5 h-5 text-[#FF5722]" />,
  "AGENTIC AI": <Sparkles className="w-5 h-5 text-[#FF5722]" />,
  "BACKEND & APIs": <Layers className="w-5 h-5 text-[#FF5722]" />,
  LIBRARIES: <Code2 className="w-5 h-5 text-[#FF5722]" />,
  MOBILE: <Smartphone className="w-5 h-5 text-[#FF5722]" />,
  DATABASES: <Database className="w-5 h-5 text-[#FF5722]" />,
  "CLOUD & TOOLS": <Cloud className="w-5 h-5 text-[#FF5722]" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="orange-badge text-xs mb-2 inline-block">Technical Stack</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            TECHNICAL <span className="stroke-text">SKILLS</span>
          </h2>
        </div>
        <p className="text-[#9E9E9E] text-xs sm:text-sm max-w-md">
          Structured across AI/ML engineering, agentic systems, backend APIs, mobile development, databases, and tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="sawad-card p-6 bg-[#161616] border border-white/10 flex flex-col justify-between group hover:border-[#FF5722]/50 transition-all rounded-[24px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center group-hover:border-[#FF5722] transition-colors">
                  {CATEGORY_ICONS[group.category] || <Cpu className="w-5 h-5 text-[#FF5722]" />}
                </div>
                <span className="orange-badge text-[10px] py-0.5 px-2.5">
                  {group.skills.length} Skills
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white group-hover:text-[#FF5722] transition-colors uppercase tracking-tight">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-[#0D0D0D] border border-white/10 text-white/90 text-xs font-semibold hover:border-[#FF5722]/50 hover:text-[#FF5722] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
