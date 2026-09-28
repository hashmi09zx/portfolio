"use client";

import React from "react";
import { Trophy, Code2, Users, Star } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/portfolioData";

const ACHIEVEMENT_ICONS: Record<number, React.ReactNode> = {
  0: <Trophy className="w-6 h-6 text-[#FF5722]" />,
  1: <Code2 className="w-6 h-6 text-[#FF5722]" />,
  2: <Users className="w-6 h-6 text-[#FF5722]" />,
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="orange-badge text-xs mb-2 inline-block">Milestones</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            HONORS & <span className="stroke-text">ACHIEVEMENTS</span>
          </h2>
        </div>
        <p className="text-[#9E9E9E] text-xs sm:text-sm max-w-md">
          Competitive hackathon success, LeetCode problem solving, and programming workshop instruction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((ach, idx) => (
          <div
            key={ach.id}
            className="sawad-card p-6 sm:p-8 bg-[#161616] border border-white/10 flex flex-col justify-between group hover:border-[#FF5722]/40 transition-all rounded-[24px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#0D0D0D] border border-white/10 flex items-center justify-center group-hover:border-[#FF5722] transition-colors">
                  {ACHIEVEMENT_ICONS[idx] || <Star className="w-6 h-6 text-[#FF5722]" />}
                </div>
                <span className="orange-badge text-xs font-bold py-1 px-3">
                  {ach.metric}
                </span>
              </div>

              <div>
                <span className="text-xs text-[#9E9E9E] font-semibold uppercase tracking-wider block mb-1">
                  {ach.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#FF5722] transition-colors tracking-tight">
                  {ach.title}
                </h3>
                <p className="text-[#9E9E9E] text-sm mt-3 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
