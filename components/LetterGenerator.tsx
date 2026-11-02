"use client";

import React, { useState } from "react";
import { Copy, Check, Send, Sparkles, FileText, ArrowRight } from "lucide-react";

export default function LetterGenerator() {
  const [templateType, setTemplateType] = useState<"refusal" | "technician" | "initial">("refusal");
  const [productName, setProductName] = useState("Sony Bravia 55\" 4K TV / iPhone 15 Pro");
  const [ticketNumber, setTicketNumber] = useState("CR-849204");
  const [technicianName, setTechnicianName] = useState("Technician");
  const [copied, setCopied] = useState(false);

  const generateLetter = () => {
    if (templateType === "refusal") {
      return `Subject: Formal Written Request for Rejection Reason & Technical Report — Case #${ticketNumber} [${productName}]

Dear Grievance Officer / Customer Support Team,

RE: Warranty Claim for ${productName}
Ticket / Reference Number: ${ticketNumber}

I am writing regarding the verbal notification received on [Date] regarding the refusal of warranty coverage for my ${productName}.

As per consumer protection standards and the CLAIM Ready evidentiary guidelines:
1. WRITTEN REASON: I formally request a written explanation specifying the exact clause, cause, and evidence upon which this refusal is based.
2. TECHNICAL INSPECTION REPORT: If this refusal rests on an inspection conducted by your service engineer (${technicianName}), please provide a complete, signed copy of that technical inspection report and the diagnostic test readings used to reach that conclusion.
3. PRESERVATION OF EVIDENCE: My product remains in original condition as photographed during installation/unboxing and fault occurrence. 

Please note that I will require this written record for presentation before the competent Consumer Helpline / Dispute Redressal Forum should this matter remain unresolved.

I request a formal response in writing within 5 working days.

Yours sincerely,
[Your Name]
[Your Phone Number]
[Attached: Original Invoice, Timestamped Photos, Job Sheet Copy]`;
    }

    if (templateType === "technician") {
      return `Subject: Request for Official Job Sheet & Diagnostic Test Details — Ticket #${ticketNumber}

Dear Service Head,

RE: On-site Inspection for ${productName}
Service Request: #${ticketNumber}

A service visit was conducted for my ${productName} by your representative (${technicianName}). 

In accordance with warranty terms, I kindly request:
1. An official digital or physical copy of the visit report / Job Sheet signed by the engineer.
2. Details of the diagnostic instrument or testing methodology utilized to test the components.
3. Confirmation of the recorded findings and next steps in writing.

Please email the official document to this email address within 24 hours.

Thank you,
[Your Name]
Ticket Reference: ${ticketNumber}`;
    }

    return `Subject: Formal Warranty Complaint Registration — ${productName} [Serial / Invoice Date]

Dear Customer Care,

I hereby register a formal warranty complaint for my ${productName}, purchased on [Date] under Invoice #[Invoice Number].

Symptom Recorded: [Describe fault clearly, e.g. display panel vertical lines appearing without physical impact].
Date Fault First Appeared: [Date]
Evidence Collected: High-resolution timestamped photographs and video of the malfunction are available and attached.

Kindly issue a formal complaint ticket number, assign an authorized technician, and confirm the visit date in writing by replying to this email.

Sincerely,
[Your Name]
[Your Contact Information]`;
  };

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(generateLetter());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="draft-generator" className="py-20 md:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        {/* Header Stack */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] rounded-full px-[14px] py-[6px] font-mono-code text-[10px] font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] inline-block" />
            <span>INTERACTIVE WRITTEN RECORD TOOL</span>
          </div>

          <h2 className="font-headline-lg text-[#0D1117] mb-5">
            Formal Written Notice Generator
          </h2>

          <p className="font-body-lg text-[#5B6472] max-w-[62ch]">
            Generate an airtight written record for Steps 6, 8, 11, and 12 to eliminate verbal ambiguity.
          </p>
        </div>

        {/* 2 Column Interactive Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E7EAEF] rounded-[18px] p-6 sm:p-7 shadow-resting">
            <h3 className="text-[17px] font-bold text-[#0D1117] mb-5 pb-3 border-b border-[#E7EAEF]">
              Select Letter Purpose
            </h3>

            {/* Template Selector Pills */}
            <div className="flex flex-col gap-2.5 mb-6">
              <button
                type="button"
                onClick={() => setTemplateType("refusal")}
                className={`p-3 rounded-[12px] border text-left transition-editorial cursor-pointer ${
                  templateType === "refusal"
                    ? "bg-[#EEFAF5] border-[#087A58] text-[#065F43]"
                    : "bg-[#FBFCFD] border-[#E7EAEF] text-[#5B6472] hover:bg-white"
                }`}
              >
                <div className="font-bold text-[14px] flex items-center justify-between">
                  <span>Demand Written Reason & Report (Step 11 & 12)</span>
                  {templateType === "refusal" && <Check className="w-4 h-4 text-[#087A58]" />}
                </div>
                <div className="text-[12px] text-[#697382] mt-0.5">
                  When a warranty claim is verbally refused or denied without proof.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTemplateType("technician")}
                className={`p-3 rounded-[12px] border text-left transition-editorial cursor-pointer ${
                  templateType === "technician"
                    ? "bg-[#EEFAF5] border-[#087A58] text-[#065F43]"
                    : "bg-[#FBFCFD] border-[#E7EAEF] text-[#5B6472] hover:bg-white"
                }`}
              >
                <div className="font-bold text-[14px] flex items-center justify-between">
                  <span>Request Job Sheet & Diagnostics (Step 8 & 9)</span>
                  {templateType === "technician" && <Check className="w-4 h-4 text-[#087A58]" />}
                </div>
                <div className="text-[12px] text-[#697382] mt-0.5">
                  Follow-up after a technician or service engineer visit.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setTemplateType("initial")}
                className={`p-3 rounded-[12px] border text-left transition-editorial cursor-pointer ${
                  templateType === "initial"
                    ? "bg-[#EEFAF5] border-[#087A58] text-[#065F43]"
                    : "bg-[#FBFCFD] border-[#E7EAEF] text-[#5B6472] hover:bg-white"
                }`}
              >
                <div className="font-bold text-[14px] flex items-center justify-between">
                  <span>Raise Complaint in Writing (Step 6 & 7)</span>
                  {templateType === "initial" && <Check className="w-4 h-4 text-[#087A58]" />}
                </div>
                <div className="text-[12px] text-[#697382] mt-0.5">
                  Initial formal complaint with timestamped evidence.
                </div>
              </button>
            </div>

            {/* Input fields matching DESIGN.md exactly:
                backgroundColor: #F2F4F7, border: #D6DBE3, rounded: 12px, height: 44px, 15px text, focus ring 2px emerald with 3px offset */}
            <div className="space-y-4">
              <div>
                <label className="block text-[13.5px] font-semibold text-[#0D1117] mb-1.5">
                  Product / Device Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-[#F2F4F7] text-[#0D1117] border border-[#D6DBE3] rounded-[12px] h-[44px] px-[14px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-[3px] transition-editorial"
                  placeholder="e.g. Sony Bravia 55 inch OLED TV"
                />
              </div>

              <div>
                <label className="block text-[13.5px] font-semibold text-[#0D1117] mb-1.5">
                  Ticket or Complaint Reference #
                </label>
                <input
                  type="text"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                  className="w-full bg-[#F2F4F7] text-[#0D1117] border border-[#D6DBE3] rounded-[12px] h-[44px] px-[14px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-[3px] transition-editorial"
                  placeholder="e.g. CR-849204"
                />
              </div>

              <div>
                <label className="block text-[13.5px] font-semibold text-[#0D1117] mb-1.5">
                  Technician / Agent Name (if known)
                </label>
                <input
                  type="text"
                  value={technicianName}
                  onChange={(e) => setTechnicianName(e.target.value)}
                  className="w-full bg-[#F2F4F7] text-[#0D1117] border border-[#D6DBE3] rounded-[12px] h-[44px] px-[14px] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-[3px] transition-editorial"
                  placeholder="e.g. Authorized Field Engineer"
                />
              </div>
            </div>
          </div>

          {/* Preview Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8 shadow-raised flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEF] mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#087A58]" />
                  <span className="font-mono-code text-[11px] font-bold text-[#0D1117] uppercase tracking-[0.16em]">
                    GENERATED DRAFT // READY TO SEND
                  </span>
                </div>
                <span className="font-mono-code text-[10px] text-[#697382] uppercase">
                  EDITABLE TEXT
                </span>
              </div>

              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[12px] p-5 font-mono-code text-[13px] text-[#363C47] leading-[1.65] whitespace-pre-wrap max-h-[460px] overflow-y-auto selection:bg-[#DCF3EA]">
                {generateLetter()}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E7EAEF] flex flex-wrap items-center justify-between gap-4">
              <span className="text-[13px] text-[#5B6472]">
                Always send via email or brand grievance portal for timestamped delivery proof.
              </span>

              {/* Primary button style from DESIGN.md */}
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 bg-[#087A58] text-white font-semibold text-[15px] rounded-full py-[12px] px-[24px] shadow-raised hover:bg-[#066748] hover:-translate-y-0.5 active:translate-y-0 transition-editorial cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Letter Template</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
