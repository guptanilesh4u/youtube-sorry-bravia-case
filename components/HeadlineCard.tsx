"use client";

import React from "react";
import { Terminal, ShieldAlert } from "lucide-react";

export default function HeadlineCard() {
  return (
    <div className="w-full max-w-[1180px] mx-auto px-5 md:px-10 pt-8 pb-4">
      <div className="relative overflow-hidden rounded-[26px] bg-[#0D1117] text-[#34D399] p-7 sm:p-10 md:p-12 shadow-raised border border-white/10 group">
        {/* Scanline background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 scanline-bg"
          aria-hidden="true"
        />

        {/* Ambient subtle glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 bg-[#087A58]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col gap-4">
          {/* Eyebrow badge */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#34D399] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              <span>CORE DISPUTE PRINCIPLE</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-[11px] font-mono-code">
              <Terminal className="w-3.5 h-3.5 text-[#34D399]" />
              <span>REF: OPERATIONAL MANDATE</span>
            </div>
          </div>

          {/* Headline quote in large monospace font */}
          <p className="font-mono-code text-[17px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-medium leading-[1.4] text-white tracking-tight pt-2">
            &ldquo;A warrantly claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
          </p>

          {/* Bottom metadata tags */}
          <div className="pt-2 flex items-center justify-between flex-wrap gap-3 border-t border-white/10 text-[12px] font-mono-code text-white/60">
            <span className="inline-flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#34D399]" />
              <strong className="text-white/80 font-semibold uppercase">Mandate:</strong> No verbal agreements. Written paper trail only.
            </span>
            <span className="text-[#34D399] tracking-wider text-[11px]">
              CLAIM READY DIRECTIVE • 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
