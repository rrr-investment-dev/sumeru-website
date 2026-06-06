import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 32, ...props }) => {
  const topAngles = [-70, -52.5, -35, -17.5, 0, 17.5, 35, 52.5, 70];
  const bottomAngles = [-90, -67.5, -45, -22.5, 0, 22.5, 45, 67.5, 90];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <clipPath id="shakti-logo-clip">
          <rect x="0" y="50" width="100" height="50" />
        </clipPath>
      </defs>

      {/* Top Half: Translated slightly upwards to create horizontal gap */}
      <g transform="translate(0, -2)">
        {topAngles.map((angle) => (
          <path
            key={`top-${angle}`}
            d="M 50 36 Q 47.5 24 50 2 Q 52.5 24 50 36 Z"
            fill="#FF8842"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>

      {/* Bottom Half: Translated slightly downwards to create horizontal gap, clipped to keep top flat */}
      <g transform="translate(0, 2)" clipPath="url(#shakti-logo-clip)">
        {/* Bottom rays */}
        {bottomAngles.map((angle) => (
          <path
            key={`bottom-${angle}`}
            d="M 50 64 Q 47.5 76 50 98 Q 52.5 76 50 64 Z"
            fill="#FF8842"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}

        {/* Concentric semi-circles */}
        {/* Outer semi-circle: radius 22 */}
        <path d="M 28 50 A 22 22 0 0 0 72 50 Z" fill="#FF8842" />

        {/* Middle semi-circle: radius 15 */}
        <path d="M 35 50 A 15 15 0 0 0 65 50 Z" fill="#FC6900" />

        {/* Inner semi-circle: radius 8 */}
        <path d="M 42 50 A 8 8 0 0 0 58 50 Z" fill="#D25000" />
      </g>
    </svg>
  );
};
