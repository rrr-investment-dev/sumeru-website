"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

import { Logo } from "../ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About the Fund", href: "/#funds" },
  { label: "Investment Thesis", href: "/#thesis" },
  { label: "FAQs", href: "/faqs" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll level to apply backdrop blur and bottom border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-line py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link href="/#home" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
            <Logo size={26} className="shrink-0" />
            <span className="h-display text-2xl">Sumeru</span>
          </Link>

          {/* Center Nav Link (Desktop Only) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans font-medium text-[14px] tracking-[-0.01em] text-ink2 hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans font-medium text-[14px] tracking-[-0.01em] text-ink2 hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right CTA / Mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Header CTA - Hide on very small screens, display on mobile header if room, otherwise StickyCTA covers */}
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              withArrow
              className="hidden sm:inline-flex"
            >
              Get in Touch
            </Button>

            {/* Hamburger Menu Toggle Button (Mobile Only) */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 -mr-2 text-ink hover:opacity-80 transition-opacity md:hidden focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-drawer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Render MobileMenu as a sibling to escape styling/filter constraints */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
