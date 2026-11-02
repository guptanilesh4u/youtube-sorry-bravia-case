"use client";

import React, { useState } from "react";
import { ShieldCheck, Menu, X, Printer, CheckCircle2 } from "lucide-react";

interface HeaderProps {
  completedCount?: number;
  totalCount?: number;
}

export default function Header({ completedCount = 0, totalCount = 15 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const navItems = [
    { label: "Who This Is For", href: "#who-this-is-for" },
    { label: "The Idea", href: "#the-idea" },
    { label: "15 Steps", href: "#checklist" },
    { label: "If Refused", href: "#if-refused" },
    { label: "Key Numbers", href: "#key-numbers" },
    { label: "Draft Letter", href: "#draft-generator" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full h-[72px] bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] transition-all">
      <div className="max-w-[1180px] mx-auto h-full px-5 md:px-10 flex items-center justify-between">
        {/* Logo Left */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#0D1117] group transition-editorial focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 rounded-lg py-1 px-1.5 -ml-1.5"
        >
          <div className="w-9 h-9 rounded-full bg-[#087A58] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-editorial">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[19px] tracking-tight text-[#0D1117] leading-none">
              CLAIM <span className="text-[#087A58]">Ready</span>
            </span>
            <span className="font-mono-code text-[9px] tracking-[0.16em] text-[#697382] uppercase mt-0.5">
              Consumer Defense
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-[#5B6472]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0D1117] transition-editorial relative py-1 hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Tracker */}
        <div className="flex items-center gap-3">
          {/* Progress pill if user checked items */}
          {completedCount > 0 && (
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#EEFAF5] border border-[#B9E6D6] rounded-full text-[11px] font-mono-code text-[#065F43] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#087A58]" />
              <span>{completedCount}/{totalCount} Done</span>
            </div>
          )}

          {/* Dark Button matching DESIGN.md: bg-[#0D1117] text-white text-[13.5px] rounded-full py-[10px] px-[20px] hover:bg-[#087A58] */}
          <button
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-2 bg-[#0D1117] text-white text-[13.5px] font-medium rounded-full py-[10px] px-[20px] hover:bg-[#087A58] active:translate-y-0.5 transition-editorial focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Checklist</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0D1117] hover:bg-[#F7F8FA] rounded-full border border-[#E7EAEF] transition-editorial"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E7EAEF] px-6 py-6 shadow-raised flex flex-col gap-4 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3 font-semibold text-[15px] text-[#363C47]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#F2F4F7] hover:text-[#087A58] transition-editorial"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0D1117] text-white text-[13.5px] font-medium rounded-full py-[12px] px-[20px] hover:bg-[#087A58] transition-editorial"
            >
              <Printer className="w-4 h-4" />
              <span>Print Checklist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
