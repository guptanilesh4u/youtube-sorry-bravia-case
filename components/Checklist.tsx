"use client";

import React, { useState } from "react";
import {
  FileText,
  Smartphone,
  ShieldCheck,
  Camera,
  Video,
  Mail,
  Hash,
  ClipboardList,
  Search,
  CheckCircle2,
  FileQuestion,
  FileCode,
  TrendingUp,
  Scale,
  HelpCircle,
  Check,
  Copy,
  Printer,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ChecklistProps {
  checkedSteps: Record<number, boolean>;
  onToggleStep: (stepNumber: number) => void;
  onResetSteps: () => void;
}

export default function Checklist({
  checkedSteps,
  onToggleStep,
  onResetSteps,
}: ChecklistProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const completedCount = Object.values(checkedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 15) * 100);

  const handleCopyText = (text: string, stepNum: number) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedStep(stepNum);
      setTimeout(() => setCopiedStep(null), 2000);
    }
  };

  return (
    <div id="checklist" className="w-full">
      {/* Sticky Progress Bar & Quick Controls */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E7EAEF] py-3.5 px-5 md:px-10 shadow-sm">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="font-mono-code text-[11px] font-semibold text-[#065F43] uppercase tracking-[0.16em] bg-[#EEFAF5] px-2.5 py-1 rounded-full border border-[#B9E6D6]">
              CHECKLIST PROGRESS
            </span>
            <span className="text-[14px] font-bold text-[#0D1117]">
              {completedCount} of 15 completed ({progressPercent}%)
            </span>
          </div>

          <div className="w-full sm:w-64 h-2 bg-[#F2F4F7] rounded-full overflow-hidden border border-[#E7EAEF]">
            <div
              className="h-full bg-[#087A58] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            {completedCount > 0 && (
              <button
                onClick={onResetSteps}
                className="text-[12px] font-mono-code text-[#697382] hover:text-[#D61F26] px-2 py-1 rounded hover:bg-[#F7F8FA] transition-editorial"
              >
                Reset Progress
              </button>
            )}
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.print();
              }}
              className="inline-flex items-center gap-1.5 text-[12px] font-mono-code text-[#087A58] hover:text-[#066748] px-2.5 py-1 rounded border border-[#B9E6D6] bg-[#EEFAF5] transition-editorial"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PHASE 1: BEFORE ANYTHING GOES WRONG (Steps 1 to 4) - White Section
      ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          {/* Header Stack */}
          <div className="flex flex-col items-start mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
              <span>PHASE 01 • PREPARATION & RECORDS</span>
            </div>

            <h2 className="font-headline-lg text-[#0D1117] mb-5">
              BEFORE ANYTHING GOES WRONG
            </h2>

            <p className="font-body-lg text-[#5B6472] max-w-[62ch]">
              4 records to keep before anyting goes wrong
            </p>
          </div>

          {/* Steps 1-4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial ${
                checkedSteps[1]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[18px] text-[#087A58]">
                    1
                  </div>
                  <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                    PURCHASE INVOICE
                  </span>
                </div>
                <button
                  onClick={() => onToggleStep(1)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                    checkedSteps[1]
                      ? "bg-[#087A58] border-[#087A58] text-white"
                      : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                  }`}
                  aria-label="Mark step 1 as complete"
                >
                  {checkedSteps[1] && <Check className="w-4 h-4" />}
                </button>
              </div>

              <h3 className="text-[18px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                Keep the invoices.
              </h3>
              <p className="text-[16px] text-[#363C47] leading-[1.72] mb-4">
                Save the original bills and photo or PDF copy. The warranty normally starts on the invoice date
              </p>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58] font-semibold">Tip: Cloud backup + Physical pouch</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Keep the invoices. Save the original bills and photo or PDF copy. The warranty normally starts on the invoice date",
                      1
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedStep === 1 ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial ${
                checkedSteps[2]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[18px] text-[#087A58]">
                    2
                  </div>
                  <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                    PRODUCT REGISTRATION
                  </span>
                </div>
                <button
                  onClick={() => onToggleStep(2)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                    checkedSteps[2]
                      ? "bg-[#087A58] border-[#087A58] text-white"
                      : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                  }`}
                  aria-label="Mark step 2 as complete"
                >
                  {checkedSteps[2] && <Check className="w-4 h-4" />}
                </button>
              </div>

              <h3 className="text-[18px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                Register the product.
              </h3>
              <p className="text-[16px] text-[#363C47] leading-[1.72] mb-4">
                Many brands ask you to register on their website or app. Some add extra warranty when you do.
              </p>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58] font-semibold">Tip: Screenshot registration confirmation</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Register the product. Many brands ask you to register on their website or app. Some add extra warranty when you do.",
                      2
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedStep === 2 ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial ${
                checkedSteps[3]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[18px] text-[#087A58]">
                    3
                  </div>
                  <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                    TERMS & EXCLUSIONS
                  </span>
                </div>
                <button
                  onClick={() => onToggleStep(3)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                    checkedSteps[3]
                      ? "bg-[#087A58] border-[#087A58] text-white"
                      : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                  }`}
                  aria-label="Mark step 3 as complete"
                >
                  {checkedSteps[3] && <Check className="w-4 h-4" />}
                </button>
              </div>

              <h3 className="text-[18px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                Read the warranty card once.
              </h3>
              <p className="text-[16px] text-[#363C47] leading-[1.72] mb-4">
                Note how long it lasts, what is covers and what it excludes
              </p>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58] font-semibold">Tip: Check exclusions clause</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Read the warranty card once. Note how long it lasts, what is covers and what it excludes",
                      3
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedStep === 3 ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 4 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial ${
                checkedSteps[4]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[18px] text-[#087A58]">
                    4
                  </div>
                  <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                    BASELINE CONDITION
                  </span>
                </div>
                <button
                  onClick={() => onToggleStep(4)}
                  className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                    checkedSteps[4]
                      ? "bg-[#087A58] border-[#087A58] text-white"
                      : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                  }`}
                  aria-label="Mark step 4 as complete"
                >
                  {checkedSteps[4] && <Check className="w-4 h-4" />}
                </button>
              </div>

              <h3 className="text-[18px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                Record the condition.
              </h3>
              <p className="text-[16px] text-[#363C47] leading-[1.72] mb-4">
                Take a few dated photos of the product once it is installed or unboxed.
              </p>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58] font-semibold">Tip: Capture serial number sticker clearly</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Record the condition. Take a few dated photos of the product once it is installed or unboxed.",
                      4
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedStep === 4 ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 2: WHEN THE FAULT APPEARS (Steps 5 to 7) - Mist Section (#F7F8FA)
      ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          {/* Header Stack */}
          <div className="flex flex-col items-start mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
              <span>PHASE 02 • FIRST RESPONSE & TICKETING</span>
            </div>

            <h2 className="font-headline-lg text-[#0D1117] mb-5">
              WHEN THE FAULT APPEARS
            </h2>

            <p className="font-body-lg text-[#5B6472] max-w-[62ch]">
              Log the exact symptom immediately to establish legal occurrence within warranty validity.
            </p>
          </div>

          {/* Steps 5-7 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 5 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial flex flex-col justify-between ${
                checkedSteps[5]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[17px] text-[#087A58]">
                      5
                    </div>
                    <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                      FIRST OCCURRENCE
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleStep(5)}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[5]
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                    }`}
                    aria-label="Mark step 5 as complete"
                  >
                    {checkedSteps[5] && <Check className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                  Record the fault.
                </h3>
                <p className="text-[15px] text-[#363C47] leading-[1.72] mb-4">
                  Take a clear photo or short video of the problem as soon as you see it, with the date visible
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58]">Timestamp is critical</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible",
                      5
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedStep === 5 ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 6 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial flex flex-col justify-between ${
                checkedSteps[6]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[17px] text-[#087A58]">
                      6
                    </div>
                    <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                      WRITTEN NOTICE
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleStep(6)}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[6]
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                    }`}
                    aria-label="Mark step 6 as complete"
                  >
                    {checkedSteps[6] && <Check className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                  Raise the complaint in writing.
                </h3>
                <p className="text-[15px] text-[#363C47] leading-[1.72] mb-4">
                  Use email, the brands website or its app, not only a phone call, so there is a record.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58]">Avoid verbal-only calls</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Raise the complaint in writing. Use email, the brands website or its app, not only a phone call, so there is a record.",
                      6
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedStep === 6 ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 7 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial flex flex-col justify-between ${
                checkedSteps[7]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[17px] text-[#087A58]">
                      7
                    </div>
                    <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                      TICKET REFERENCE
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleStep(7)}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[7]
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                    }`}
                    aria-label="Mark step 7 as complete"
                  >
                    {checkedSteps[7] && <Check className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                  Note every reference number.
                </h3>
                <p className="text-[15px] text-[#363C47] leading-[1.72] mb-4">
                  Write down the complaint or ticket number, the date and the name of anyone you speak to.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58]">Log agent ID & date</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.",
                      7
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedStep === 7 ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 3: WHEN A TECHNICIAN VISITS (Steps 8 to 10) - White Section
      ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          {/* Header Stack */}
          <div className="flex flex-col items-start mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
              <span>PHASE 03 • PHYSICAL DIAGNOSIS & JOB SHEETS</span>
            </div>

            <h2 className="font-headline-lg text-[#0D1117] mb-5">
              WHEN A TECHNICIAN VISITS
            </h2>

            <p className="font-body-lg text-[#5B6472] max-w-[62ch]">
              Ensure on-site inspections are documented before the technician leaves your premises.
            </p>
          </div>

          {/* Steps 8-10 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 8 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial flex flex-col justify-between ${
                checkedSteps[8]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[17px] text-[#087A58]">
                      8
                    </div>
                    <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                      ON-SITE JOB SHEET
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleStep(8)}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[8]
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                    }`}
                    aria-label="Mark step 8 as complete"
                  >
                    {checkedSteps[8] && <Check className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                  As for the job sheet.
                </h3>
                <p className="text-[15px] text-[#363C47] leading-[1.72] mb-4">
                  Asl the technician for a copy of the visit report or jb sheet before they leave
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58]">Physical paper or digital PDF</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "As for the job sheet. Asl the technician for a copy of the visit report or jb sheet before they leave",
                      8
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedStep === 8 ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 9 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial flex flex-col justify-between ${
                checkedSteps[9]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[17px] text-[#087A58]">
                      9
                    </div>
                    <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                      DIAGNOSTIC TEST
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleStep(9)}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[9]
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                    }`}
                    aria-label="Mark step 9 as complete"
                  >
                    {checkedSteps[9] && <Check className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                  Ask what was tested.
                </h3>
                <p className="text-[15px] text-[#363C47] leading-[1.72] mb-4">
                  Ask which tesst or instrument was used to reach the diagnosis
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58]">Record testing device</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Ask what was tested. Ask which tesst or instrument was used to reach the diagnosis",
                      9
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedStep === 9 ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Step 10 */}
            <div
              className={`border rounded-[18px] p-7 transition-editorial flex flex-col justify-between ${
                checkedSteps[10]
                  ? "bg-[#EEFAF5]/50 border-[#B9E6D6]"
                  : "bg-white border-[#E7EAEF] shadow-resting hover:shadow-raised"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center font-stat-number text-[17px] text-[#087A58]">
                      10
                    </div>
                    <span className="font-mono-code text-[10px] font-medium text-[#697382] uppercase tracking-[0.16em]">
                      VISIT EVIDENCE
                    </span>
                  </div>
                  <button
                    onClick={() => onToggleStep(10)}
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[10]
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] hover:border-[#087A58] bg-[#F2F4F7]"
                    }`}
                    aria-label="Mark step 10 as complete"
                  >
                    {checkedSteps[10] && <Check className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-[17px] font-extrabold text-[#0D1117] mb-2 leading-snug">
                  Take your own photos.
                </h3>
                <p className="text-[15px] text-[#363C47] leading-[1.72] mb-4">
                  Photograph the product and anything the technian points to, during the visit
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7EAEF] flex items-center justify-between text-[12px] font-mono-code text-[#697382]">
                <span className="text-[#087A58]">Capture condition live</span>
                <button
                  onClick={() =>
                    handleCopyText(
                      "Take your own photos. Photograph the product and anything the technian points to, during the visit",
                      10
                    )
                  }
                  className="hover:text-[#0D1117] inline-flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedStep === 10 ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 4: IF THE CLAIN IS REFUSED (Steps 11 to 15) - Dark Ink Section (#0D1117)
          Conforms exactly to DESIGN.md dark section rules!
      ========================================================================= */}
      <section
        id="if-refused"
        className="py-20 md:py-28 bg-[#0D1117] text-white border-b border-[#0D1117]"
      >
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          {/* Header Stack strictly following DESIGN.md Dark Section rules */}
          <div className="flex flex-col items-start mb-12">
            {/* Pill label on Dark Section: Bright Emerald (#34D399) as required! */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#34D399] border border-white/20 rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block" />
              <span>PHASE 04 • ESCALATION & LEGAL ADVOCACY</span>
            </div>

            {/* Heavy Headline in Pure White */}
            <h2 className="font-headline-lg text-white mb-5">
              IF THE CLAIN IS REFUSED
            </h2>

            {/* Lead paragraph in white at 70-80% opacity */}
            <p className="font-body-lg text-white/80 max-w-[62ch]">
              When an unjustified rejection occurs, shift from negotiation to structured legal escalation.
            </p>
          </div>

          {/* Steps 11-15 Inner Panels: white at 10% opacity as specified in DESIGN.md */}
          <div className="space-y-4">
            {/* Step 11 */}
            <div
              className={`rounded-[18px] p-6 sm:p-7 border transition-editorial ${
                checkedSteps[11]
                  ? "bg-white/15 border-[#34D399]"
                  : "bg-white/[0.07] border-white/10 hover:bg-white/[0.09] hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center font-stat-number text-[18px] text-[#34D399] shrink-0">
                    11
                  </div>
                  <div>
                    <span className="font-mono-code text-[10px] font-medium text-[#34D399] uppercase tracking-[0.16em] block mb-1">
                      MANDATORY WRITTEN NOTICE
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-extrabold text-white mb-1.5 leading-snug">
                      Ask for the reason in writing.
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.72]">
                      Request a written explaination that names the exact cause and the evidence for it
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() =>
                      handleCopyText(
                        "Ask for the reason in writing. Request a written explaination that names the exact cause and the evidence for it",
                        11
                      )
                    }
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-editorial"
                    title="Copy step text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleStep(11)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[11]
                        ? "bg-[#34D399] border-[#34D399] text-[#0D1117]"
                        : "border-white/30 hover:border-[#34D399] bg-white/5 text-transparent"
                    }`}
                    aria-label="Mark step 11 as complete"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Step 12 */}
            <div
              className={`rounded-[18px] p-6 sm:p-7 border transition-editorial ${
                checkedSteps[12]
                  ? "bg-white/15 border-[#34D399]"
                  : "bg-white/[0.07] border-white/10 hover:bg-white/[0.09] hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center font-stat-number text-[18px] text-[#34D399] shrink-0">
                    12
                  </div>
                  <div>
                    <span className="font-mono-code text-[10px] font-medium text-[#34D399] uppercase tracking-[0.16em] block mb-1">
                      TECHNICAL INSPECTION REPORT
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-extrabold text-white mb-1.5 leading-snug">
                      Ask for the technical report.
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.72]">
                      If the refusal rests on a inspection, ask for that inspection report.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() =>
                      handleCopyText(
                        "Ask for the technical report. If the refusal rests on a inspection, ask for that inspection report.",
                        12
                      )
                    }
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-editorial"
                    title="Copy step text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleStep(12)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[12]
                        ? "bg-[#34D399] border-[#34D399] text-[#0D1117]"
                        : "border-white/30 hover:border-[#34D399] bg-white/5 text-transparent"
                    }`}
                    aria-label="Mark step 12 as complete"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Step 13 */}
            <div
              className={`rounded-[18px] p-6 sm:p-7 border transition-editorial ${
                checkedSteps[13]
                  ? "bg-white/15 border-[#34D399]"
                  : "bg-white/[0.07] border-white/10 hover:bg-white/[0.09] hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center font-stat-number text-[18px] text-[#34D399] shrink-0">
                    13
                  </div>
                  <div>
                    <span className="font-mono-code text-[10px] font-medium text-[#34D399] uppercase tracking-[0.16em] block mb-1">
                      INTERNAL CORPORATE ESCALATION
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-extrabold text-white mb-1.5 leading-snug">
                      Escalate inside the company.
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.72]">
                      Most brands lists a grievance or esclation contact on their website. Write to it, quoting your case and reason for reject
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() =>
                      handleCopyText(
                        "Escalate inside the company. Most brands lists a grievance or esclation contact on their website. Write to it, quoting your case and reason for reject",
                        13
                      )
                    }
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-editorial"
                    title="Copy step text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleStep(13)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[13]
                        ? "bg-[#34D399] border-[#34D399] text-[#0D1117]"
                        : "border-white/30 hover:border-[#34D399] bg-white/5 text-transparent"
                    }`}
                    aria-label="Mark step 13 as complete"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Step 14 */}
            <div
              className={`rounded-[18px] p-6 sm:p-7 border transition-editorial ${
                checkedSteps[14]
                  ? "bg-white/15 border-[#34D399]"
                  : "bg-white/[0.07] border-white/10 hover:bg-white/[0.09] hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center font-stat-number text-[18px] text-[#34D399] shrink-0">
                    14
                  </div>
                  <div>
                    <span className="font-mono-code text-[10px] font-medium text-[#34D399] uppercase tracking-[0.16em] block mb-1">
                      FACTUAL RECORD DISCIPLINE
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-extrabold text-white mb-1.5 leading-snug">
                      Keep it factual.
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.72]">
                      Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will see
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() =>
                      handleCopyText(
                        "Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will see",
                        14
                      )
                    }
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-editorial"
                    title="Copy step text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleStep(14)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[14]
                        ? "bg-[#34D399] border-[#34D399] text-[#0D1117]"
                        : "border-white/30 hover:border-[#34D399] bg-white/5 text-transparent"
                    }`}
                    aria-label="Mark step 14 as complete"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Step 15 */}
            <div
              className={`rounded-[18px] p-6 sm:p-7 border transition-editorial ${
                checkedSteps[15]
                  ? "bg-white/15 border-[#34D399]"
                  : "bg-white/[0.07] border-white/10 hover:bg-white/[0.09] hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[12px] bg-white/10 border border-white/15 flex items-center justify-center font-stat-number text-[18px] text-[#34D399] shrink-0">
                    15
                  </div>
                  <div>
                    <span className="font-mono-code text-[10px] font-medium text-[#34D399] uppercase tracking-[0.16em] block mb-1">
                      STATUTORY CONSUMER FORUM
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-extrabold text-white mb-1.5 leading-snug">
                      Know your consumer helpline.
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.72]">
                      Most countries run a free consumer helpline or online complaint portal that can guide you
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() =>
                      handleCopyText(
                        "Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you",
                        15
                      )
                    }
                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-editorial"
                    title="Copy step text"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleStep(15)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-editorial cursor-pointer ${
                      checkedSteps[15]
                        ? "bg-[#34D399] border-[#34D399] text-[#0D1117]"
                        : "border-white/30 hover:border-[#34D399] bg-white/5 text-transparent"
                    }`}
                    aria-label="Mark step 15 as complete"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Section Callout / Summary Card */}
          <div className="mt-12 p-6 sm:p-8 rounded-[18px] bg-white/[0.05] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono-code text-[11px] text-[#34D399] uppercase tracking-[0.16em] mb-1">
                SUMMARY PRINCIPLE
              </div>
              <h4 className="text-[20px] font-extrabold text-white mb-1">
                Records prevail in consumer courts.
              </h4>
              <p className="text-[14px] text-white/70 max-w-[60ch]">
                When you present job sheets, testing inquiries, timestamped photos, and registered emails, manufacturers typically resolve before trial.
              </p>
            </div>
            <a
              href="#draft-generator"
              className="inline-flex items-center justify-center gap-2 bg-[#34D399] text-[#0D1117] font-semibold text-[14px] rounded-full py-[12px] px-[24px] hover:bg-white transition-editorial shrink-0"
            >
              <span>Draft Escalation Letter</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
