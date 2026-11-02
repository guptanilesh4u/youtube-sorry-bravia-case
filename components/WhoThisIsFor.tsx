"use client";

import React from "react";
import { Smartphone, Tv, Laptop, Refrigerator, Check, ShieldAlert } from "lucide-react";

export default function WhoThisIsFor() {
  const devices = [
    {
      title: "Cell Phone",
      icon: Smartphone,
      specs: "Screens • Batteries • Motherboard • Ports",
      typicalFailure: "Display blanking, charging port burn, reboot loop",
      advice: "Take timestamped video immediately upon glitch.",
    },
    {
      title: "TV & Display",
      icon: Tv,
      specs: "OLED • QLED • Backlights • Power Boards",
      typicalFailure: "Vertical lines, dark patches, sound without picture",
      advice: "Photograph screen test pattern with room lights on.",
    },
    {
      title: "Laptop",
      icon: Laptop,
      specs: "Logic Boards • Hinges • Keyboards • Thermals",
      typicalFailure: "No power, overheating shutdown, screen flickering",
      advice: "Preserve original invoice and serial sticker.",
    },
    {
      title: "Appliances",
      icon: Refrigerator,
      specs: "Compressors • Motors • Control PCB • Pumps",
      typicalFailure: "Cooling failure, drum blockage, electrical tripping",
      advice: "Require on-site technician's signed job sheet.",
    },
  ];

  return (
    <section
      id="who-this-is-for"
      className="py-20 md:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Section Header Stack strictly following DESIGN.md */}
        <div className="flex flex-col items-start mb-12 md:mb-16">
          {/* Eyebrow Pill Label */}
          <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
            <span>APPLICABILITY & TARGET AUDIENCE</span>
          </div>

          {/* Heavy Headline */}
          <h2 className="font-headline-lg text-[#0D1117] mb-5">
            WHO THIS IS FOR
          </h2>

          {/* Lead Paragraph with exact wording from content.txt */}
          <p className="font-body-lg text-[#5B6472] max-w-[62ch]">
            Anyone who has cell phone, TV, laptop or appliances stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing
          </p>
        </div>

        {/* 4 Cards Grid sitting on outline background with 1px gap or rounded-md cards with resting shadow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((device, idx) => {
            const Icon = device.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E7EAEF] rounded-[18px] p-7 shadow-resting hover:shadow-raised hover:-translate-y-1 transition-editorial flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-[12px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono-code text-[10px] font-medium uppercase px-2 py-0.5 rounded-full bg-[#F2F4F7] text-[#697382]">
                      CATEGORY // SCOPE
                    </span>
                  </div>

                  {/* Device Title */}
                  <h3 className="text-[20px] font-bold text-[#0D1117] tracking-tight mb-2">
                    {device.title}
                  </h3>

                  {/* Specs & Scope */}
                  <p className="font-mono-code text-[11px] text-[#087A58] font-semibold mb-3">
                    {device.specs}
                  </p>

                  <p className="text-[14px] text-[#5B6472] leading-[1.6] mb-4">
                    <span className="font-medium text-[#363C47]">Common dispute:</span> {device.typicalFailure}.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7EAEF]">
                  <div className="flex items-start gap-2 text-[12px] text-[#363C47] font-medium">
                    <Check className="w-4 h-4 text-[#087A58] shrink-0 mt-0.5" />
                    <span>{device.advice}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary reassurance callout box */}
        <div className="mt-10 p-6 rounded-[18px] bg-white border border-[#E7EAEF] shadow-resting flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58] shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#0D1117]">
                Facing an uncooperative service centre?
              </div>
              <div className="text-[13.5px] text-[#5B6472]">
                This checklist protects you from arbitrary claim rejections and unproven &quot;customer induced damage&quot; allegations.
              </div>
            </div>
          </div>
          <a
            href="#checklist"
            className="inline-flex items-center gap-2 text-[#087A58] hover:text-[#066748] font-semibold text-[14px] underline underline-offset-4 shrink-0 transition-editorial"
          >
            Go to step 1 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
