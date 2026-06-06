"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Section } from "../ui/Section";
import { SectionMarker } from "../ui/SectionMarker";

export const WhyShaktiSphere = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;

  // Stagger entry configurations when scrolling into viewport
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section id="about" tone="soft" className="bg-px-soft relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-[580px] flex flex-col items-start text-left"
      >
        {/* Eyebrow badge */}
        <motion.div variants={itemVariants} className="mb-6 w-full">
          <SectionMarker number="02" label="Why" />
        </motion.div>

        {/* Display Serif Headline */}
        <motion.h2
          variants={itemVariants}
          className="h-display text-[40px] md:text-[56px] leading-[1.1] text-ink"
        >
          Built for India&apos;s structural growth, with{" "}
          <span className="h-accent">discipline</span> at the core.
        </motion.h2>

        {/* Body Narrative Block */}
        <div className="mt-8 flex flex-col gap-6 w-full text-left">
          <motion.p
            variants={itemVariants}
            className="text-lg text-ink2 leading-[1.65] font-light"
          >
            India is entering a compelling phase of structural growth, driven by expanding economic fundamentals, deepening capital markets, rising domestic demand, digital transformation, and the emergence of new-age sectors. This creates a strong backdrop for long-term value creation across India&apos;s growth economy.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-ink2 leading-[1.65] font-light"
          >
            Sumeru India Growth Fund, Shakti Sphere&apos;s flagship Category III AIF, is designed to capture that opportunity through a quality-focused investment strategy across late-stage private, pre-IPO, selective anchor, and listed equity opportunities. We pair strong businesses with prudent valuations, governance, and liquidity-aware portfolio construction, seeking superior risk-adjusted returns at key inflection points.
          </motion.p>
        </div>
      </motion.div>

      {/* Mountain Illustration as decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[65%] hidden md:block z-0"
      >
        <Image
          src="/images/mountain-why.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover object-right opacity-55 translate-x-16"
          priority={false}
        />
      </div>
    </Section>
  );
};
