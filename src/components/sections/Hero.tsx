"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Pill } from "../ui/Pill";

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;

  // Stagger configurations for left column text items
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  return (
    <Section id="hero" tone="paper" className="bg-px min-h-[85vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 relative">
      <div id="home" className="absolute -top-28" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column: Text Content and Action Hooks */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="col-span-1 lg:col-span-7 flex flex-col items-start"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="font-sans font-semibold text-xs uppercase tracking-[0.18em] text-brand-deep">
              FLAGSHIP FUND &middot; SUMERU INDIA GROWTH FUND
            </span>
          </motion.div>

          {/* Sub-eyebrow Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
            <Pill withDot>SEBI Cat III AIF</Pill>
            <Pill withDot>Long-only</Pill>
            <Pill withDot>Sector-agnostic</Pill>
          </motion.div>

          {/* Display Serif Headline */}
          <motion.h1
            variants={itemVariants}
            className="h-display text-[44px] sm:text-[60px] lg:text-[76px] leading-[1.05] text-ink"
          >
            Partnering India&apos;s next decade of{" "}
            <span className="h-accent">wealth creation.</span>
          </motion.h1>

          {/* Narrative Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-ink2 leading-[1.55] max-w-[560px] mt-6 font-light"
          >
            Sumeru India Growth Fund (SIGF), Shakti Sphere&apos;s flagship Category III AIF, is built to invest with discipline, identify high-conviction opportunities early, and participate in India&apos;s next phase of long-term value creation.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-8">
            <Button variant="accent" size="lg" withArrow href="#funds">
              Explore the Fund
            </Button>
            <Button variant="ghost" size="lg" href="#contact">
              Talk to us
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Gradient Visual Panel */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div
            className="aspect-[4/5] w-full max-w-[420px] rounded-3xl relative overflow-hidden border border-line/30 flex items-center justify-center"
            style={{
              background: "linear-gradient(155deg, #FF9A5C 0%, #FC6900 55%, #D25000 100%)",
            }}
          >
            {/* White Halftone Grid Overlay */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E%3Crect width='1' height='1' fill='%23FFFFFF' fill-opacity='0.22'/%3E%3C/svg%3E\")",
                backgroundRepeat: "repeat",
              }}
            />

            {/* Float Chip 1: Target Fund Size */}
            <motion.div
              whileInView={prefersReducedMotion ? { y: 0 } : { y: [-6, 6, -6] }}
              viewport={{ once: false }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 z-10 bg-white/95 border border-white/20 px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_4px_20px_-4px_rgba(210,80,0,0.15)] pointer-events-none select-none"
            >
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"
              />
              <span className="font-sans font-medium text-xs text-brand-deep tracking-wide leading-none">
                ₹500 Cr &middot; Target Fund Size
              </span>
            </motion.div>

            {/* Float Chip 2: Exit Cycle */}
            <motion.div
              whileInView={prefersReducedMotion ? { y: 0 } : { y: [6, -6, 6] }}
              viewport={{ once: false }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 z-10 bg-white/95 border border-white/20 px-4 py-2.5 rounded-full flex items-center gap-2.5 shadow-[0_4px_20px_-4px_rgba(210,80,0,0.15)] pointer-events-none select-none"
            >
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"
              />
              <span className="font-sans font-medium text-xs text-brand-deep tracking-wide leading-none">
                12-48 month exit cycle
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
