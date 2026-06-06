import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "paper" | "soft" | "ink";
  containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ tone = "paper", id, className, containerClassName, children, ...props }, ref) => {
    // Map tones to theme colors
    const toneClasses = {
      paper: "bg-paper text-ink2",
      soft: "bg-accentBg text-ink2",
      ink: "bg-ink text-paper",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-section md:py-section-lg w-full transition-colors duration-200",
          toneClasses[tone],
          className
        )}
        {...props}
      >
        <Container className={containerClassName}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = "Section";
