import React from 'react';

export const TiffinLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Handle */}
      <path 
        d="M32 8 L32 16" 
        stroke="#1a1a1a" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      <rect 
        x="26" 
        y="4" 
        width="12" 
        height="6" 
        rx="3" 
        fill="#1a1a1a"
      />
      
      {/* Top container */}
      <rect 
        x="14" 
        y="16" 
        width="36" 
        height="10" 
        rx="2" 
        fill="#22c55e"
        stroke="#16a34a" 
        strokeWidth="1"
      />
      
      {/* Middle container with yellow band */}
      <rect 
        x="14" 
        y="27" 
        width="36" 
        height="10" 
        rx="2" 
        fill="#22c55e"
        stroke="#16a34a" 
        strokeWidth="1"
      />
      <rect 
        x="14" 
        y="30" 
        width="36" 
        height="4" 
        fill="#fbbf24"
      />
      
      {/* Bottom container */}
      <rect 
        x="14" 
        y="38" 
        width="36" 
        height="10" 
        rx="2" 
        fill="#22c55e"
        stroke="#16a34a" 
        strokeWidth="1"
      />
      
      {/* Container edges/details */}
      <rect 
        x="16" 
        y="18" 
        width="32" 
        height="6" 
        rx="1" 
        fill="#16a34a" 
        fillOpacity="0.3"
      />
      <rect 
        x="16" 
        y="29" 
        width="32" 
        height="6" 
        rx="1" 
        fill="#16a34a" 
        fillOpacity="0.3"
      />
      <rect 
        x="16" 
        y="40" 
        width="32" 
        height="6" 
        rx="1" 
        fill="#16a34a" 
        fillOpacity="0.3"
      />
    </svg>
  );
};
