"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "../ui/Button";

export const StickyCTA = () => {
  const [scrollY, setScrollY] = useState(0);
  const [nearContact, setNearContact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const prefersReducedMotion = useReducedMotion() ?? false;

  // Listen to mobile menu state changes on <html> element
  useEffect(() => {
    const checkMenuOpen = () => {
      setMenuOpen(document.documentElement.dataset.menuOpen === "true");
    };

    checkMenuOpen();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-menu-open"
        ) {
          checkMenuOpen();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-menu-open"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Scroll listener to toggle visibility past 320px
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Resize listener to adjust size between sm and md
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // IntersectionObserver for #contact section to hide CTA when contact form is in view
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout;

    const setupObserver = () => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setNearContact(entry.isIntersecting);
          },
          {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.1, // Trigger when 10% of contact section is visible
          }
        );
        observer.observe(contactElement);
      } else {
        // Retry setup if page has not rendered the #contact element yet
        timeoutId = setTimeout(setupObserver, 500);
      }
    };

    setupObserver();

    return () => {
      if (observer) observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const isVisible = scrollY > 320 && !nearContact && !menuOpen;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
          aria-label="Open contact section"
        >
          <div className="rounded-full p-1 bg-paper/85 backdrop-blur-sm shadow-[0_2px_24px_-8px_rgba(14,11,8,0.35)] border border-line/30">
            <Button
              href="#contact"
              variant="primary"
              size={isMobile ? "sm" : "md"}
              withArrow
              aria-hidden="false"
              className="min-w-[48px] min-h-[48px]"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

