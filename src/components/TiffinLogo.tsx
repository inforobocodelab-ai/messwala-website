import React from 'react';

export const TiffinLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handle Arch */}
      <path
        d="M 31 29 C 31 13, 69 13, 69 29"
        stroke="#FF5000"
        strokeWidth="5.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Top Cap / Knob */}
      <rect x="42" y="24" width="16" height="5" rx="2.5" fill="#FF5000" />

      {/* Lid Dome */}
      <path
        d="M 26 35 C 26 29, 74 29, 74 35 L 74 38 L 26 38 Z"
        fill="#FF5000"
      />

      {/* Top Tier Container */}
      <rect x="26" y="40" width="48" height="17" rx="3" fill="#FF5000" />

      {/* Bottom Tier Container */}
      <path
        d="M 26 59 L 74 59 L 74 72 C 74 78, 26 78, 26 72 Z"
        fill="#FF5000"
      />

      {/* Side Latches Left */}
      <rect x="22" y="36" width="3" height="11" rx="1.5" fill="#FF5000" />
      <rect x="22" y="58" width="3" height="11" rx="1.5" fill="#FF5000" />

      {/* Side Latches Right */}
      <rect x="75" y="36" width="3" height="11" rx="1.5" fill="#FF5000" />
      <rect x="75" y="58" width="3" height="11" rx="1.5" fill="#FF5000" />

      {/* Central Location Pin (White Silhouette) */}
      <path
        d="M 50 78 C 39 65 35 56 35 48 C 35 39 41.7 33 50 33 C 58.3 33 65 39 65 48 C 65 56 61 65 50 78 Z"
        fill="white"
      />

      {/* Inner Pin Hole (Orange) */}
      <circle cx="50" cy="46" r="6.5" fill="#FF5000" />

      {/* Inner Pin Center Dot (White) */}
      <circle cx="50" cy="46" r="3" fill="white" />
    </svg>
  );
};

interface BrandLogoProps {
  className?: string;
  height?: number | string;
  variant?: 'light' | 'dark';
}

export const MesswalaBrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  variant = "light",
}) => {
  const isDark = variant === 'dark';
  const secondaryColor = isDark ? '#FFFFFF' : '#1E293B';
  const taglineColor = isDark ? '#F1F5F9' : '#1E293B';

  return (
    <svg
      viewBox="0 0 300 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-11 sm:h-14 w-auto select-none ${className}`}
    >
      {/* Tiffin Icon on Left */}
      <g transform="translate(2, 2)">
        {/* Handle Arch */}
        <path
          d="M 19 18 C 19 8, 43 8, 43 18"
          stroke="#FF5000"
          strokeWidth="3.6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top Cap / Knob */}
        <rect x="26" y="15" width="10" height="4" rx="1.5" fill="#FF5000" />

        {/* Lid Dome */}
        <path
          d="M 15 22 C 15 18, 47 18, 47 22 L 47 24 L 15 24 Z"
          fill="#FF5000"
        />

        {/* Top Tier Container */}
        <rect x="15" y="25" width="32" height="11" rx="2" fill="#FF5000" />

        {/* Bottom Tier Container */}
        <path
          d="M 15 37 L 47 37 L 47 46 C 47 50, 15 50, 15 46 Z"
          fill="#FF5000"
        />

        {/* Side Latches Left */}
        <rect x="12" y="23" width="2" height="7" rx="1" fill="#FF5000" />
        <rect x="12" y="37" width="2" height="7" rx="1" fill="#FF5000" />

        {/* Side Latches Right */}
        <rect x="48" y="23" width="2" height="7" rx="1" fill="#FF5000" />
        <rect x="48" y="37" width="2" height="7" rx="1" fill="#FF5000" />

        {/* Central Location Pin (White Silhouette) */}
        <path
          d="M 31 50 C 24 42 21 36 21 31 C 21 25 25.3 21 31 21 C 36.7 21 41 25 41 31 C 41 36 38 42 31 50 Z"
          fill="white"
        />

        {/* Inner Pin Hole (Orange) */}
        <circle cx="31" cy="30" r="4.2" fill="#FF5000" />

        {/* Inner Pin Center Dot (White) */}
        <circle cx="31" cy="30" r="2" fill="white" />
      </g>

      {/* Brand Title: Mess (Orange) + wala (Dark Slate / White in Dark Mode) */}
      <text
        x="62"
        y="35"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="2px"
      >
        <tspan fill="#FF5000">Mess</tspan>
        <tspan fill={secondaryColor}>wala</tspan>
      </text>

      {/* Tagline Below with Accent Lines and Dots */}
      <g transform="translate(62, 49)">
        {/* Left Accent Dot & Line */}
        <circle cx="2" cy="-3" r="1.8" fill="#FF5000" />
        <line x1="3" y1="-3" x2="10" y2="-3" stroke="#FF5000" strokeWidth="1.5" strokeLinecap="round" />

        {/* Tagline Text */}
        <text
          x="10"
          y="0"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="9.2"
          fill={taglineColor}
          letterSpacing="0.8px"
        >
          Taste of Home, Delivered
        </text>

        {/* Right Accent Line & Dot */}
        <line x1="145" y1="-3" x2="152" y2="-3" stroke="#FF5000" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="155" cy="-3" r="1.8" fill="#FF5000" />
      </g>
    </svg>
  );
};




