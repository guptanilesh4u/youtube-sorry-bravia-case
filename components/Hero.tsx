"use client";

import React from "react";
import { ArrowRight, FileCheck, CheckCircle2, ShieldCheck, Download, AlertCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-16 md:pb-24 border-b border-[#E7EAEF] bg-white">
      {/* Background soft subtle radial accent */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#EEFAF5] rounded-full blur-3xl -z-10 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (55% on desktop -> 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Label (eyebrow) */}
            <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
              <span>CONSUMER ACTION CHECKLIST</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-headline-display text-[#0D1117] tracking-[-0.035em] mb-5">
              CLAIM Ready
            </h1>

            {/* Lead Paragraph strictly preserving the wording */}
            <p className="font-body-lg text-[#5B6472] max-w-[62ch] mb-8 font-normal">
              A free checklist of anyone about to file a warranty clain
            </p>

            {/* Sub-lead / explainer using exact phrasing from content.txt */}
            <div className="p-4 sm:p-5 mb-8 rounded-[12px] bg-[#F7F8FA] border border-[#E7EAEF] text-[#363C47] text-[15px] sm:text-[16px] leading-[1.65]">
              <p className="font-semibold text-[#0D1117] mb-1 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#087A58] shrink-0" />
                <span>The Golden Rule:</span>
              </p>
              <p className="text-[#5B6472]">
                Don&apos;t argue. Don&apos;t guess. Don&apos;t rely on verbal promises. Build your warranty claim on facts, evidence and written communication.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary button: emerald pill */}
              <button
                onClick={() => scrollToSection("checklist")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#087A58] text-white font-semibold text-[15px] rounded-full py-[14px] px-[28px] shadow-raised hover:bg-[#066748] hover:-translate-y-0.5 active:translate-y-0 transition-editorial focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 cursor-pointer"
              >
                <span>Explore the 15 Steps</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Ghost button */}
              <button
                onClick={() => scrollToSection("who-this-is-for")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0D1117] font-semibold text-[15px] rounded-full py-[14px] px-[28px] border border-[#E7EAEF] hover:bg-[#F7F8FA] hover:-translate-y-0.5 transition-editorial focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 cursor-pointer shadow-sm"
              >
                <span>Who This Is For</span>
              </button>
            </div>

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-[#E7EAEF] w-full flex flex-wrap items-center gap-6 text-[12px] font-mono-code text-[#697382]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
                100% Free & Open
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
                Consumer Forum Compliant
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
                Zero Guesswork
              </span>
            </div>
          </div>

          {/* Right Column Visual (Document Card style from DESIGN.md) (45% -> 5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              {/* Decorative background tilted layer */}
              <div
                className="absolute inset-0 rounded-[26px] bg-[#EEFAF5] border border-[#B9E6D6] rotate-2 scale-98 -z-10"
                aria-hidden="true"
              />

              {/* Foreground Document Card */}
              <div className="bg-white border border-[#E7EAEF] rounded-[26px] p-6 sm:p-8 shadow-raised">
                {/* Header of document */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E7EAEF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F8FA] border border-[#E7EAEF] flex items-center justify-center text-[#087A58]">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-extrabold text-[#0D1117] uppercase tracking-wide">
                        EVIDENCE FILE #2026-CLAIM
                      </div>
                      <div className="font-mono-code text-[10px] text-[#697382]">
                        VERIFIED CONSUMER PROTOCOL
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono-code text-[10px] font-semibold uppercase">
                    ACTIVE
                  </span>
                </div>

                {/* Quoted line */}
                <div className="my-6">
                  <span className="text-[11px] font-mono-code uppercase text-[#697382] tracking-wider block mb-2">
                    Primary Directive:
                  </span>
                  <blockquote className="font-headline-md text-[#0D1117] text-[18px] sm:text-[20px] font-bold leading-snug">
                    &ldquo;Build your warranty claim on facts, evidence and written communication.&rdquo;
                  </blockquote>
                </div>

                {/* Checklist Summary Matrix */}
                <div className="space-y-2.5 bg-[#F7F8FA] border border-[#E7EAEF] rounded-[12px] p-4 text-[13px]">
                  <div className="flex items-center justify-between font-mono-code text-[11px]">
                    <span className="text-[#5B6472]">PHASE 01: PREPARATION</span>
                    <span className="font-bold text-[#087A58]">4 RECORDS</span>
                  </div>
                  <div className="w-full bg-[#E7EAEF] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#087A58] h-full w-full" />
                  </div>

                  <div className="flex items-center justify-between font-mono-code text-[11px] pt-1">
                    <span className="text-[#5B6472]">TOTAL CHECKLIST</span>
                    <span className="font-bold text-[#0D1117]">15 STEPS</span>
                  </div>
                  <div className="w-full bg-[#E7EAEF] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0D1117] h-full w-full" />
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-6 pt-5 border-t border-[#E7EAEF] flex items-center justify-between text-[11px] font-mono-code text-[#697382]">
                  <span>DATE: 2026 // EDITION</span>
                  <button
                    onClick={() => scrollToSection("checklist")}
                    className="text-[#087A58] hover:text-[#066748] font-semibold underline underline-offset-4 cursor-pointer"
                  >
                    View All 15 Steps &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
