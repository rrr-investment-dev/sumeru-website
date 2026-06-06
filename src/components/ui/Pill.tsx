import React from "react";
import { cn } from "@/lib/utils";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  withDot?: boolean;
  tone?: "default" | "onDark";
}

export const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ withDot = false, tone = "default", className, children, ...props }, ref) => {
    
    // Tone styling
    const toneClasses = {
      default: "bg-card border-line text-ink2",
      onDark: "bg-white/10 text-paper border-white/15",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex w-fit self-start items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.02em] select-none shrink-0",
          toneClasses[tone],
          className
        )}
        {...props}
      >
        {withDot && (
          <span
            aria-hidden="true"
            className="inline-block w-[5px] h-[5px] rounded-full bg-brand-primary shrink-0"
          />
        )}
        <span>{children}</span>
      </div>
    );
  }
);

Pill.displayName = "Pill";
