import React from "react";
import { cn } from "@/lib/utils";

export interface SectionMarkerProps {
  number: string;
  label: string;
  tone?: "default" | "onDark";
  className?: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({
  number,
  label,
  tone = "default",
  className,
}) => {
  const toneClasses = {
    default: "border-ink bg-card text-ink",
    onDark: "border-paper/40 bg-white/5 text-paper",
  };

  const numberColors = {
    default: "text-brand-deep",
    onDark: "text-brand-soft",
  };

  const separatorColors = {
    default: "bg-brand-deep",
    onDark: "bg-brand-soft",
  };

  return (
    <div
      className={cn(
        "inline-flex w-fit self-start items-center px-4 py-2 rounded-full border text-[12px] font-semibold tracking-[0.16em] uppercase leading-none font-sans",
        toneClasses[tone],
        className
      )}
    >
      <span className={cn("mr-2.5 shrink-0", numberColors[tone])}>{number}</span>
      <span
        className={cn("w-px h-[11px] opacity-40 mr-2.5 shrink-0", separatorColors[tone])}
        aria-hidden="true"
      />
      <span className="shrink-0">{label}</span>
    </div>
  );
};
