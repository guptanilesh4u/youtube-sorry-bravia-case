"use client";
import React from "react";

const TICKER_ITEMS = [
  "CLAIM READY • WARRANTY PROTECTION PROTOCOL",
  "A WARRANTY CLAIM IS DECIDED ON RECORDS",
  "KEEP YOURS, AND ASK FOR THEIRS IN WRITING",
  "DON'T ARGUE • DON'T GUESS • DON'T RELY ON VERBAL PROMISES",
  "15 STEPS IN THE CHECKLIST",
  "4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG",
  "BUILD ON FACTS, EVIDENCE & WRITTEN COMMUNICATION",
];

export default function Ticker() {
  return (
    <div
      role="region"
      aria-label="Important warranty updates and protocol"
      className="bg-[#EEFAF5] text-[#065F43] border-b border-[#B9E6D6] py-3 overflow-hidden select-none"
    >
      <div className="flex w-full overflow-hidden">
        <div className="animate-ticker flex items-center whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center text-[10px] font-mono-code font-medium tracking-[0.16em] uppercase mx-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] mr-3 inline-block shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
