"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const targetId = hash.endsWith("-button") ? hash.slice(0, -7) : hash;
      const exists = items.some(item => item.id === targetId);
      if (exists) {
        setOpenIds(new Set([targetId]));
        // Small timeout to allow the layout to stabilize before scrolling
        setTimeout(() => {
          const element = document.getElementById(`${targetId}-button`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
      }
    }
  }, [items]);

  return (
    <ul role="list" className="border-t border-line">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <li key={item.id} className="border-b border-line">
            <button
              id={`${item.id}-button`}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              onClick={() => toggle(item.id)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2 rounded"
            >
              <span className="h-display text-[19px] md:text-[22px] text-ink leading-[1.25] pr-2 group-hover:text-brand-deep transition-colors duration-200">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`w-5 h-5 mt-1 flex-shrink-0 text-brand-deep transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-button`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-ink2 leading-[1.65] pb-6 max-w-[760px] font-sans font-light">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
