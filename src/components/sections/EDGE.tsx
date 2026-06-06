"use client";

import React, { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionMarker } from "../ui/SectionMarker";
import { cn } from "@/lib/utils";

const FILTERS = [
  {
    num: "FILTER 01",
    letter: "E",
    title: "Earnings Durability",
    body: "Strong profitability, healthy cash conversion, stable margins, and low customer concentration. We invest in businesses whose economics compound, not promises.",
  },
  {
    num: "FILTER 02",
    letter: "D",
    title: "Discipline on Price",
    body: "Clear margin of safety at entry, with a favorable upside-downside profile. Discipline at entry is the simplest way to widen the path to a great outcome.",
  },
  {
    num: "FILTER 03",
    letter: "G",
    title: "Governance First",
    body: "Zero compromise on promoter quality, audit standards, related-party transparency, and litigation clearance.",
  },
  {
    num: "FILTER 04",
    letter: "E",
    title: "Exit Path",
    body: "Mapped exit route: IPO or listing visibility typically within a 12-48 month cycle. Underwritten to clarity, not hope.",
  },
];

export const EDGE = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let newIndex = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      newIndex = (activeIndex + 1) % 4;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      newIndex = (activeIndex - 1 + 4) % 4;
    } else if (e.key === "Home") {
      newIndex = 0;
    } else if (e.key === "End") {
      newIndex = 3;
    }

    if (newIndex !== -1) {
      e.preventDefault();
      setActiveIndex(newIndex);
      buttonRefs.current[newIndex]?.focus();
    }
  };

  return (
    <Section
      id="thesis"
      tone="paper"
      className="bg-px pt-12 pb-24 border-t border-line/30"
    >
      {/* Intro block */}
      <div className="flex flex-col items-start text-left mb-16 font-sans">
        <SectionMarker number="03" label="Framework" className="mb-4" />
        
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="h-display text-5xl text-ink leading-tight mt-4"
        >
          The <span className="h-accent">EDGE</span> we look for.
        </motion.h2>
        
        <p className="text-ink2 text-lg max-w-[640px] mt-4 font-light">
          Every investment is run through four non-negotiable filters.
        </p>
      </div>

      {/* Desktop Layout: Horizontal expanding tablist */}
      <div
        role="tablist"
        aria-label="EDGE framework filters"
        onKeyDown={handleKeyDown}
        className="hidden lg:flex gap-3 mt-12 h-[320px] w-full"
      >
        {FILTERS.map((filter, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              ref={(el) => {
                buttonRefs.current[idx] = el;
              }}
              role="tab"
              id={`edge-tab-${idx}`}
              aria-selected={isActive}
              aria-controls={`edge-panel-${idx}`}
              tabIndex={isActive ? 0 : -1}
              onMouseEnter={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "relative overflow-hidden bg-card border rounded-3xl text-left p-6 flex flex-col transition-all duration-500 ease-out focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-4 motion-reduce:transition-none",
                isActive ? "flex-[2.6] border-brand-primary" : "flex-[1] border-line"
              )}
            >
              {/* 1. Letter plate (always visible, never hidden) */}
              <div className="bg-px-plate rounded-2xl h-24 flex items-center justify-center flex-shrink-0 w-full select-none pointer-events-none">
                <span className="h-display text-[64px] leading-none text-brand-primary">
                  {filter.letter}
                </span>
              </div>

              {/* 2. FILTER sub-eyebrow */}
              <span className="font-sans font-semibold text-xs tracking-[0.18em] uppercase text-brand-deep mt-5 leading-none block">
                {filter.num}
              </span>

              {/* 3. Heading h3 */}
              <h3 className="h-display text-[22px] text-ink mt-1 pb-1.5 whitespace-nowrap overflow-hidden text-ellipsis w-full leading-normal">
                {filter.title}
              </h3>

              {/* 4. Body panel */}
              <div
                id={`edge-panel-${idx}`}
                role="tabpanel"
                aria-labelledby={`edge-tab-${idx}`}
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none",
                  isActive ? "max-h-48 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                )}
              >
                <p className="text-sm text-ink2 leading-[1.55] font-light">{filter.body}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Layout: Stacked accordion */}
      <div className="lg:hidden mt-12 flex flex-col gap-3 w-full">
        {FILTERS.map((filter, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={`mobile-${idx}`}
              className={cn(
                "bg-card border rounded-3xl p-5 flex flex-col transition-all duration-300 w-full",
                isActive ? "border-brand-primary" : "border-line"
              )}
            >
              <button
                onClick={() => setActiveIndex(isActive ? -1 : idx)}
                aria-expanded={isActive}
                aria-controls={`edge-mobile-panel-${idx}`}
                className="flex items-center justify-between w-full text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  {/* Letter plate: h-16 w-16 */}
                  <div className="bg-px-plate rounded-xl h-16 w-16 flex items-center justify-center flex-shrink-0 select-none pointer-events-none">
                    <span className="h-display text-[44px] leading-none text-brand-primary">
                      {filter.letter}
                    </span>
                  </div>
                  {/* Eyebrow + title stacked */}
                  <div className="flex flex-col">
                    <span className="font-sans font-semibold text-[10px] tracking-[0.18em] uppercase text-brand-deep leading-none">
                      {filter.num}
                    </span>
                    <h3 className="h-display text-xl text-ink mt-1">
                      {filter.title}
                    </h3>
                  </div>
                </div>
                {/* Chevron Icon */}
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-ink transition-transform duration-300 shrink-0",
                    isActive && "rotate-180"
                  )}
                />
              </button>

              {/* Body Panel */}
              <div
                id={`edge-mobile-panel-${idx}`}
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-out motion-reduce:transition-none",
                  isActive ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                )}
              >
                <p className="text-sm text-ink2 leading-[1.55] font-light mt-2">{filter.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
