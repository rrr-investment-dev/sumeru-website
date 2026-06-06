"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

import { Logo } from "../ui/Logo";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-ink text-paper/70 pt-16 pb-10 border-t border-white/10 w-full relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 w-full">
          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2">
              <Logo size={28} className="shrink-0" />
              <span className="h-display text-paper text-3xl leading-none">
                Shakti Sphere
              </span>
            </div>
            <p className="text-paper/60 text-sm max-w-[320px] mt-4 font-light leading-relaxed">
              Investment management. Home of Sumeru India Growth Fund, a Category III AIF investing in India&apos;s next decade of wealth creation.
            </p>
          </div>

          {/* Column 2: Navigate links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start">
            <span className="font-sans font-semibold text-xs text-paper uppercase tracking-[0.14em] mb-4">
              Navigate
            </span>
            <div className="flex flex-col gap-2">
              <a href="/#home" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Home
              </a>
              <a href="/#funds" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Funds
              </a>
              <a href="/#about" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                About
              </a>
              <a href="/#thesis" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Investment Thesis
              </a>
              <a href="/#partners" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Partners
              </a>
            </div>
          </div>

          {/* Column 3: Resources links */}
          <div className="col-span-1 lg:col-span-2 flex flex-col items-start">
            <span className="font-sans font-semibold text-xs text-paper uppercase tracking-[0.14em] mb-4">
              Resources
            </span>
            <div className="flex flex-col gap-2">
              <a href="/faqs" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                FAQs
              </a>
              <a href="#" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Private Placement Memorandum
              </a>
              <a href="#" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Disclosures
              </a>
              <a href="#" className="text-paper/70 hover:text-paper text-[15px] transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Column 4: Contact Action details */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-start">
            <span className="font-sans font-semibold text-xs text-paper uppercase tracking-[0.14em] mb-4">
              Contact
            </span>
            <a
              href="mailto:info@sumerufunds.com"
              className="text-paper font-sans font-medium text-base hover:underline block mb-4"
            >
              info@sumerufunds.com
            </a>
            
            <div className="flex items-center gap-4">
              <Button href="/#contact" variant="accent" size="sm" withArrow>
                Get in Touch
              </Button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/15 rounded-full p-2.5 hover:bg-white/5 text-paper hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal Disclaimer */}
          <div className="col-span-1 lg:col-span-12 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-paper/50 text-xs font-light">
              &copy; 2025 Shakti Sphere. All rights reserved.
            </span>
            <span className="text-paper/50 text-[10px] leading-relaxed font-light max-w-[640px] text-left md:text-right">
              This website is for informational purposes only and does not constitute an offer or solicitation. Please refer to the PPM and other definitive documents for complete terms, risks, fees, and conditions.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
