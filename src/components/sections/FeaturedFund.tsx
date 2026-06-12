"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionMarker } from "../ui/SectionMarker";

const STAT_CARDS = [
  {
    label: "Target Fund Size",
    value: "₹500 Cr",
    desc: "Disciplined raise; sized to deploy with conviction.",
  },
  {
    label: "Minimum Commitment",
    value: "₹1 Cr",
    desc: "Per SEBI norms for Category III AIFs.",
  },
  {
    label: "Strategy",
    value: "Long-only",
    desc: "Sector-agnostic, research-led, governance-first.",
  },
  {
    label: "Opportunity Set",
    value: "Late-stage · Pre-IPO · PIPE",
    desc: "Selected listed opportunities",
  },
];

export const FeaturedFund = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section
      id="funds"
      tone="paper"
      className="bg-px mt-4 pt-12 pb-24 border-t border-line/30"
    >
      {/* 1) Fund Intro Block (Left-Aligned) */}
      <div className="max-w-[920px] flex flex-col items-start text-left">
        <SectionMarker number="01" label="Flagship Fund" />

        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="h-display text-[36px] md:text-[52px] text-ink mt-4 leading-tight"
        >
          Sumeru India Growth Fund (SIGF)
        </motion.h2>

        <p className="text-lg text-ink2 leading-[1.6] max-w-[680px] mt-4 font-light">
          First fund is a SEBI-registered Category III AIF investing across late-stage private, pre-IPO, selective anchor, and listed equity opportunities. Disciplined, research-led, and built for India&apos;s structural growth decade.
        </p>
      </div>

      {/* 2) Fund Stat Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full"
      >
        {STAT_CARDS.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-card border border-line rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-primary group cursor-default min-h-[220px]"
          >
            {/* Top Label */}
            <div className="font-sans font-semibold text-xs tracking-[0.14em] text-brand-deep uppercase mb-4 leading-none">
              {card.label}
            </div>

            {/* Metric Value */}
            <div className="h-display text-4xl text-ink transition-colors duration-200 group-hover:text-brand-deep leading-tight">
              {card.value}
            </div>

            {/* One-Line Description */}
            <div className="text-sm text-ink2 mt-4 font-light leading-relaxed">
              {card.desc}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};