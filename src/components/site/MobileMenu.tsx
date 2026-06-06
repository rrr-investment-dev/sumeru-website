"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

import { Logo } from "../ui/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Funds", href: "/#funds" },
  { label: "About", href: "/#about" },
  { label: "Investment Thesis", href: "/#thesis" },
  { label: "FAQs", href: "/faqs" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  // Sync scroll lock and html dataset attributes
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.dataset.menuOpen = "true";
    } else {
      document.body.style.overflow = "";
      delete document.documentElement.dataset.menuOpen;
    }

    // Close menu when Escape key is pressed
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      delete document.documentElement.dataset.menuOpen;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop Scrim: blurred background cover */}
      <motion.div
        key="mobile-menu-scrim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-50 cursor-pointer"
      />

      {/* Opaque Panel: fully opaque cream background, fills entire viewport */}
      <motion.div
        key="mobile-menu-panel"
        id="mobile-menu-drawer"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[60] bg-paper flex flex-col w-full"
      >
        {/* TOP BAR: flex-shrink-0 header strip with bottom separator */}
        <div className="flex-shrink-0 border-b border-line w-full">
          <Container className="flex items-center justify-between py-5">
            <a
              href="/#home"
              onClick={onClose}
              className="flex items-center gap-2.5 hover:opacity-85 transition-opacity"
            >
              <Logo size={26} className="shrink-0" />
              <span className="h-display text-2xl">Shakti Sphere</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-ink hover:opacity-80 transition-opacity focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </Container>
        </div>

        {/* NAV LIST: flex-1 scrollable section with Palatino serif stack */}
        <div className="flex-1 overflow-y-auto py-8">
          <Container>
            <nav className="flex flex-col gap-5">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="h-display text-4xl text-ink hover:text-brand-primary transition-colors py-2 border-b border-line/40"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </Container>
        </div>

        {/* BOTTOM BAR: flex-shrink-0 full-width button with safe-area padding */}
        <div className="flex-shrink-0 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] border-t border-line/20">
          <Container>
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              withArrow
              onClick={onClose}
              className="w-full text-center py-4"
            >
              Get in Touch
            </Button>
          </Container>
        </div>
      </motion.div>
    </>
  );
};
