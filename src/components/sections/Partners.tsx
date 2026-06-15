"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionMarker } from "../ui/SectionMarker";

const PARTNERS = [
  {
    role: "Legal Advisor",
    initials: "G&A",
    name: "Gandhi & Associates LLP",
    logo: null as string | null,
    logoAlt: "",
    logoClassName: "",
    imageClassName: "",
    // TODO: Replace logo: null with logo: "/images/gandhi-associates.png"
    //       and provide the image file when available.
  },
  {
    role: "Trustee",
    initials: "ATSL",
    name: "Axis Trustee Services Limited",
    logo: "/images/axis-trustee.png",
    logoAlt: "Axis Trustee Services Limited",
    logoClassName: "h-full w-full",
    imageClassName: "scale-[2.4] translate-x-[6px] translate-y-3",
  },
  {
    role: "Merchant Banker",
    initials: "SKI",
    name: "SKI Capital Services Limited",
    logo: "/images/ski-capital.png",
    logoAlt: "SKI Capital Services Limited",
    logoClassName: "h-14 w-full",
    imageClassName: "",
  },
];

export const Partners = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
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
      id="partners"
      tone="paper"
      className="bg-px pt-12 pb-24 border-t border-line/30"
    >
      {/* Centered Intro Header Block */}
      <div className="flex flex-col items-center text-center mb-16 font-sans">
        <div className="flex justify-center mb-4">
          <SectionMarker number="04" label="Partners" />
        </div>

        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="h-display text-4xl md:text-5xl text-ink mt-4 leading-tight"
        >
          Anchored by trusted institutions.
        </motion.h2>

        <p className="text-ink2 text-base text-center max-w-[560px] mx-auto mt-3 font-light">
          Institutional partners supporting Sumeru India Growth Fund.
        </p>
      </div>

      {/* Partners Grid */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 w-full font-sans"
      >
        {PARTNERS.map((partner, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="group bg-card border border-line rounded-2xl p-8 text-center flex flex-col items-center justify-between min-h-[250px] transition-all duration-300 hover:border-brand-primary/45 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(210,80,0,0.06)]"
          >
            {/* Top uppercase role label */}
            <div className="font-sans font-semibold text-xs tracking-[0.14em] text-brand-deep uppercase mb-4 leading-none">
              {partner.role}
            </div>

            {/* Logo plate — image if available, text initials as fallback */}
            <div className="bg-paper border border-line/40 rounded-2xl h-28 w-full flex items-center justify-center px-6 overflow-hidden mb-4 transition-all duration-300 group-hover:bg-white group-hover:border-brand-primary/20">
              {partner.logo ? (
                <div className={`relative w-full ${partner.logoClassName} transition-transform duration-300 group-hover:scale-105`}>
                  <Image
                    src={partner.logo}
                    alt={partner.logoAlt}
                    fill
                    className={`object-contain ${partner.imageClassName}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <span className="h-display text-3xl text-ink transition-transform duration-300 group-hover:scale-105">
                  {partner.initials}
                </span>
              )}
            </div>

            {/* Bottom partner name and role descriptor */}
            <div className="flex flex-col items-center mt-2">
              <span className="font-sans font-semibold text-base text-ink leading-tight">
                {partner.name}
              </span>
              <span className="text-sm text-ink2 font-light mt-1.5 leading-none">
                {partner.role}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
