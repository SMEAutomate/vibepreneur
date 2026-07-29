import React from "react";
import { brand } from "../lib/brand";

interface LogoProps {
  size?: number;
  variant?: "wordmark" | "mark";
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 48,
  variant = "wordmark",
  color = brand.brand700,
}) => {
  if (variant === "mark") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="14" fill={color} />
        <path
          d="M18 22 L32 46 L46 22"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size * 0.3 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="14" fill={color} />
        <path
          d="M18 22 L32 46 L46 22"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontSize: size * 0.7,
          fontWeight: 700,
          letterSpacing: -0.5,
          color: brand.ink,
        }}
      >
        Vibepreneur
      </span>
    </div>
  );
};
