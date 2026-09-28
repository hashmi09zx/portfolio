"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const TICKER_ITEMS = [
  "AGENTIC AI",
  "COMPUTER VISION",
  "RAG SYSTEMS",
  "LANGGRAPH",
  "TENSORFLOW LITE",
  "FLUTTER",
  "FASTAPI",
  "MULTI-AGENT SYSTEMS",
  "DEEP LEARNING",
  "PINECONE",
  "DOCKER",
  "SQLITE",
];

export default function MarqueeTicker() {
  return (
    <div className="w-full bg-[#161616] border-y border-white/10 py-5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {/* First Loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`ticker-1-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#9E9E9E] hover:text-[#FF5722] uppercase transition-colors">
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            </div>
          ))}
        </div>

        {/* Duplicate Loop for Seamless Infinite Scroll */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`ticker-2-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#9E9E9E] hover:text-[#FF5722] uppercase transition-colors">
                {item}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF5722]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

