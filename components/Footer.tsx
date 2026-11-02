"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, ExternalLink, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] text-[#5B6472] py-16 px-5 md:px-10">
      <div className="max-w-[1180px] mx-auto">
        {/* Three Columns as specified in DESIGN.md */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7EAEF]">
          {/* Column 1: About (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#087A58] flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-[18px] text-[#0D1117] tracking-tight">
                CLAIM <span className="text-[#087A58]">Ready</span>
              </span>
            </div>

            <p className="font-body-md text-[#5B6472] mb-4 max-w-[40ch]">
              A free checklist of anyone about to file a warranty clain. Decided on facts, in writing.
            </p>

            <div className="inline-flex items-center gap-2 text-[12px] font-mono-code text-[#065F43] bg-[#EEFAF5] border border-[#B9E6D6] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>PUBLIC CONSUMER RESOURCE • 100% FREE</span>
            </div>
          </div>

          {/* Column 2: Checklist Navigation (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-[14px] font-bold text-[#0D1117] tracking-wide uppercase font-mono-code mb-4">
              Checklist Phases
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href="#checklist"
                  className="hover:text-[#0D1117] hover:underline underline-offset-4 transition-editorial"
                >
                  Phase 1: Before Anything Goes Wrong (Steps 1–4)
                </a>
              </li>
              <li>
                <a
                  href="#checklist"
                  className="hover:text-[#0D1117] hover:underline underline-offset-4 transition-editorial"
                >
                  Phase 2: When The Fault Appears (Steps 5–7)
                </a>
              </li>
              <li>
                <a
                  href="#checklist"
                  className="hover:text-[#0D1117] hover:underline underline-offset-4 transition-editorial"
                >
                  Phase 3: When A Technician Visits (Steps 8–10)
                </a>
              </li>
              <li>
                <a
                  href="#if-refused"
                  className="hover:text-[#0D1117] hover:underline underline-offset-4 transition-editorial"
                >
                  Phase 4: If The Claim Is Refused (Steps 11–15)
                </a>
              </li>
              <li>
                <a
                  href="#draft-generator"
                  className="hover:text-[#0D1117] hover:underline underline-offset-4 transition-editorial"
                >
                  Formal Written Notice Generator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Statutory Rights (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[14px] font-bold text-[#0D1117] tracking-wide uppercase font-mono-code mb-4">
              Consumer Helplines
            </h4>
            <ul className="space-y-2.5 text-[14px]">
              <li className="flex items-center gap-1.5">
                <span>National Consumer Helpline (NCH)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Consumer Dispute Redressal Commissions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span>Online Dispute Resolution (ODR) Portals</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-[12px] font-mono-code text-[#087A58] hover:text-[#066748] transition-editorial cursor-pointer"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 13px Legal Line at the bottom as specified in DESIGN.md */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#697382]">
          <p>
            &copy; 2026 CLAIM Ready. Decided on facts, in writing. An open consumer interest resource.
          </p>
          <div className="flex items-center gap-4 font-mono-code text-[11px]">
            <span>15 STEPS</span>
            <span>•</span>
            <span>4 RECORDS</span>
            <span>•</span>
            <span>ZERO GUESSWORK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
