"use client";

import React from "react";
import { MessageSquareOff, HelpCircle, PhoneOff, FileText, CheckCircle2 } from "lucide-react";

export default function TheIdea() {
  const pillars = [
    {
      title: "Don't argue.",
      rule: "Stay calm, courteous, and objective",
      desc: "Emotional arguments and anger give call center agents or service staff an easy excuse to escalate hostility or dismiss your ticket. Speak politely and let written records do the heavy lifting.",
      icon: MessageSquareOff,
      tag: "TEMPERAMENT",
    },
    {
      title: "Don't guess.",
      rule: "Demand concrete technical diagnostic data",
      desc: "Never accept vague verbal brush-offs like 'internal moisture', 'motherboard short', or 'normal wear and tear'. Request the specific technical reading, testing method, and exact component breakdown.",
      icon: HelpCircle,
      tag: "DIAGNOSIS",
    },
    {
      title: "Don't rely on verbal promises.",
      rule: "A verbal assurance does not bind a manufacturer",
      desc: "A phone agent promising 'we will replace it free of cost' means nothing unless reflected on the job sheet or formal email. Insist on immediate written confirmation or ticket updates.",
      icon: PhoneOff,
      tag: "CONFIRMATION",
    },
    {
      title: "Build on facts, evidence & written records.",
      rule: "The foundation of all consumer dispute wins",
      desc: "Consumer forums, ombudsmen, and corporate grievances evaluate documents, not recollections. Invoices, dated photos, unboxing videos, and written email threads create an airtight legal file.",
      icon: FileText,
      tag: "DOCUMENTATION",
    },
  ];

  return (
    <section id="the-idea" className="py-20 md:py-28 bg-white border-b border-[#E7EAEF]">
      <div className="max-w-[880px] mx-auto px-5 md:px-10">
        {/* Section Header Stack strictly following DESIGN.md */}
        <div className="flex flex-col items-start mb-12">
          {/* Mono Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
            <span>FOUNDATIONAL PRINCIPLE</span>
          </div>

          {/* Heavy Headline */}
          <h2 className="font-headline-lg text-[#0D1117] mb-5">
            THE IDEA IN ONE LINE
          </h2>

          {/* Lead Paragraph */}
          <p className="font-body-lg text-[#5B6472]">
            The single operational standard that shifts the leverage back into your hands.
          </p>
        </div>

        {/* Callout Card (mint wash with emerald border, 18px radius, 28px padding) */}
        <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-7 md:p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-code text-[11px] font-semibold tracking-[0.16em] uppercase text-[#065F43]">
              CORE AXIOM
            </span>
          </div>

          <p className="text-[22px] sm:text-[25px] md:text-[28px] font-extrabold text-[#065F43] leading-[1.3] mb-4">
            &ldquo;A warrantly claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
          </p>

          <p className="text-[17px] text-[#065F43]/90 font-medium leading-[1.72]">
            Don&apos;t argue. Don&apos;t guess. Don&apos;t rely on verbal promises. Build your warranty claim on facts, evidence and written communication.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-6 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-editorial flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[12px] bg-white border border-[#E7EAEF] flex items-center justify-center text-[#087A58] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-[10px] text-[#697382] uppercase tracking-[0.16em] bg-white px-2 py-0.5 rounded-full border border-[#E7EAEF]">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-extrabold text-[#0D1117] mb-1">
                    {pillar.title}
                  </h3>

                  <p className="font-mono-code text-[11px] font-semibold text-[#087A58] mb-3">
                    {pillar.rule}
                  </p>

                  <p className="text-[14px] text-[#5B6472] leading-[1.65]">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E7EAEF]/70 flex items-center gap-1.5 text-[12px] text-[#065F43] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
                  <span>Enforce in all brand communications</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
