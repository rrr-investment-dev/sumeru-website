import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 32 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative shrink-0 ${className || ""}`}
    >
      <Image
        src="/images/sumeru-logo.png"
        alt="Sumeru Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};
