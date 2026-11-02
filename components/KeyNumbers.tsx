"use client";

import React from "react";
import { CheckCircle2, FileSpreadsheet, ShieldAlert, FileText } from "lucide-react";

export default function KeyNumbers() {
  const stats = [
    {
      number: "15",
      isHot: true,
      caption: "steps in the checklist",
      detail: "From unboxing documentation to consumer court escalation, every stage covered.",
      icon: CheckCircle2,
    },
    {
      number: "4",
      isHot: false,
      caption: "records to keep before anyting goes wrong",
      detail: "Invoices, product registration, warranty cards, and condition photos.",
      icon: FileSpreadsheet,
    },
    {
      number: "100%",
      isHot: false,
      caption: "written paper trail protocol",
      detail: "All tickets, job sheets, emails, and diagnostic reports secured in writing.",
      icon: FileText,
    },
    {
      number: "0",
      isHot: false,
      caption: "verbal guesswork required",
      detail: "Eliminates reliance on empty phone promises or arbitrary verbal denials.",
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="key-numbers" className="py-20 md:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Section Header Stack strictly following DESIGN.md */}
        <div className="flex flex-col items-start mb-12">
          {/* Eyebrow Pill Label */}
          <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
            <span>ESSENTIAL METRICS</span>
          </div>

          {/* Heavy Headline */}
          <h2 className="font-headline-lg text-[#0D1117] mb-5">
            KEY NUMBERS FOR THE PAGE
          </h2>

          {/* Lead Paragraph */}
          <p className="font-body-lg text-[#5B6472] max-w-[62ch]">
            The two quantitative pillars of this warranty protocol, backed by a disciplined evidentiary process.
          </p>
        </div>

        {/* Stat Grid: Sitting on an outline-coloured background (#E7EAEF) with a 1px gap, so gaps read as hairline dividers inside one rounded card (18px radius) */}
        <div className="rounded-[18px] border border-[#E7EAEF] bg-[#E7EAEF] p-[1px] overflow-hidden shadow-resting">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white p-7 md:p-8 flex flex-col justify-between transition-editorial hover:bg-[#FBFCFD] ${
                    stat.isHot ? "relative overflow-hidden" : ""
                  }`}
                >
                  {stat.isHot && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#087A58]" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-code text-[10px] uppercase tracking-[0.16em] text-[#697382]">
                        CORE METRIC
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          stat.isHot ? "text-[#087A58]" : "text-[#697382]"
                        }`}
                      />
                    </div>

                    {/* Stat Number: 52px, 800 weight, tight tracking, tabular figures */}
                    <div
                      className={`font-stat-number mb-2 ${
                        stat.isHot ? "text-[#087A58]" : "text-[#0D1117]"
                      }`}
                    >
                      {stat.number}
                    </div>

                    {/* Caption with exact wording from content.txt for the two primary stats */}
                    <div className="font-bold text-[15px] sm:text-[16px] text-[#0D1117] mb-2 leading-snug">
                      {stat.caption}
                    </div>
                  </div>

                  <p className="text-[13.5px] text-[#5B6472] leading-[1.5] pt-3 border-t border-[#F2F4F7]">
                    {stat.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
