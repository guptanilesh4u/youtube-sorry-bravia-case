"use client";

import React, { useState, useEffect } from "react";
import Ticker from "@/components/Ticker";
import Header from "@/components/Header";
import HeadlineCard from "@/components/HeadlineCard";
import Hero from "@/components/Hero";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import TheIdea from "@/components/TheIdea";
import KeyNumbers from "@/components/KeyNumbers";
import Checklist from "@/components/Checklist";
import LetterGenerator from "@/components/LetterGenerator";
import Footer from "@/components/Footer";

export default function Home() {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  // Load saved progress from localStorage after mount to ensure clean hydration
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("claim_ready_progress");
      if (saved) {
        setCheckedSteps(JSON.parse(saved));
      }
    } catch {
      // LocalStorage not available or disabled
    }
  }, []);

  const handleToggleStep = (stepNumber: number) => {
    setCheckedSteps((prev) => {
      const next = { ...prev, [stepNumber]: !prev[stepNumber] };
      try {
        localStorage.setItem("claim_ready_progress", JSON.stringify(next));
      } catch {
        // Ignored
      }
      return next;
    });
  };

  const handleResetSteps = () => {
    setCheckedSteps({});
    try {
      localStorage.removeItem("claim_ready_progress");
    } catch {
      // Ignored
    }
  };

  const completedCount = mounted ? Object.values(checkedSteps).filter(Boolean).length : 0;
  const activeSteps = mounted ? checkedSteps : {};

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Ticker strip at top */}
      <Ticker />

      {/* 2. Sticky Header */}
      <Header completedCount={completedCount} totalCount={15} />

      {/* 3. Headline Card with scanline texture (used once at top as specified in DESIGN.md) */}
      <HeadlineCard />

      {/* 4. Hero Section */}
      <Hero />

      {/* 5. Who This Is For Section (Mist #F7F8FA background) */}
      <WhoThisIsFor />

      {/* 6. The Idea In One Line (White background, narrow shell 880px, Callout Card) */}
      <TheIdea />

      {/* 7. Key Numbers For The Page (Mist #F7F8FA background, Stat Grid with Hot Cell) */}
      <KeyNumbers />

      {/* 8. 15 Checklist Steps across 4 Phases (Includes the Dark Ink Section for Phase 4) */}
      <Checklist
        checkedSteps={activeSteps}
        onToggleStep={handleToggleStep}
        onResetSteps={handleResetSteps}
      />

      {/* 9. Interactive Written Notice / Letter Generator (Mist #F7F8FA background) */}
      <LetterGenerator />

      {/* 10. Footer (Mist #F7F8FA background, 3 columns, 13px legal line) */}
      <Footer />
    </main>
  );
}
