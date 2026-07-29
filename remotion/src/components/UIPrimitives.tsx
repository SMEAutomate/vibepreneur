import React from "react";
import { brand, fonts } from "../lib/brand";

export const Card: React.FC<
  React.PropsWithChildren<{ style?: React.CSSProperties; padding?: number }>
> = ({ children, style, padding = 28 }) => (
  <div
    style={{
      background: brand.paper,
      border: `1px solid ${brand.line}`,
      borderRadius: 18,
      padding,
      boxShadow: "0 10px 40px -20px rgba(15,17,25,0.18)",
      ...style,
    }}
  >
    {children}
  </div>
);

export const Pill: React.FC<
  React.PropsWithChildren<{ tone?: "brand" | "neutral" | "success" | "warn" }>
> = ({ children, tone = "brand" }) => {
  const palettes = {
    brand: { bg: brand.brand50, fg: brand.brand700 },
    neutral: { bg: brand.paper3, fg: brand.ink },
    success: { bg: "#dcfce7", fg: "#166534" },
    warn: { bg: "#fef3c7", fg: "#92400e" },
  } as const;
  const c = palettes[tone];
  return (
    <span
      style={{
        background: c.bg,
        color: c.fg,
        padding: "6px 14px",
        borderRadius: 999,
        fontSize: 18,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
    </span>
  );
};

export const ProgressBar: React.FC<{
  value: number;
  height?: number;
  color?: string;
}> = ({ value, height = 14, color = brand.brand700 }) => (
  <div
    style={{
      width: "100%",
      height,
      background: brand.paper3,
      borderRadius: height,
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${Math.max(0, Math.min(100, value))}%`,
        height: "100%",
        background: color,
        borderRadius: height,
        transition: "width 200ms ease-out",
      }}
    />
  </div>
);

export const BrowserChrome: React.FC<
  React.PropsWithChildren<{ url?: string; style?: React.CSSProperties }>
> = ({ children, url = "vbprnr.com", style }) => (
  <div
    style={{
      borderRadius: 20,
      overflow: "hidden",
      border: `1px solid ${brand.line}`,
      background: brand.paper,
      boxShadow: "0 30px 80px -30px rgba(15,17,25,0.25)",
      ...style,
    }}
  >
    <div
      style={{
        height: 44,
        background: brand.paper2,
        borderBottom: `1px solid ${brand.line}`,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 16px",
      }}
    >
      <div style={{ display: "flex", gap: 6 }}>
        <Dot color="#ff5f57" />
        <Dot color="#febc2e" />
        <Dot color="#28c840" />
      </div>
      <div
        style={{
          marginLeft: 16,
          flex: 1,
          height: 26,
          background: brand.paper,
          border: `1px solid ${brand.line}`,
          borderRadius: 8,
          fontSize: 14,
          color: brand.textMuted,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          fontFamily: fonts.mono,
        }}
      >
        {url}
      </div>
    </div>
    <div>{children}</div>
  </div>
);

const Dot: React.FC<{ color: string }> = ({ color }) => (
  <div style={{ width: 12, height: 12, borderRadius: 6, background: color }} />
);

export const PhoneFrame: React.FC<
  React.PropsWithChildren<{ width?: number }>
> = ({ children, width = 360 }) => {
  const height = width * (19.5 / 9);
  return (
    <div
      style={{
        width,
        height,
        borderRadius: width * 0.12,
        background: "#0a0c14",
        padding: 8,
        boxShadow: "0 40px 80px -30px rgba(15,17,25,0.4)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: width * 0.1,
          background: brand.paper,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const KBD: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span
    style={{
      fontFamily: fonts.mono,
      fontSize: 16,
      background: brand.paper3,
      padding: "4px 10px",
      borderRadius: 6,
      border: `1px solid ${brand.line}`,
    }}
  >
    {children}
  </span>
);

export const StatRow: React.FC<{
  label: string;
  value: string;
  tone?: "default" | "brand";
}> = ({ label, value, tone = "default" }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 0",
      borderBottom: `1px solid ${brand.line}`,
    }}
  >
    <span style={{ color: brand.textMuted, fontSize: 20 }}>{label}</span>
    <span
      style={{
        fontWeight: 700,
        fontSize: 20,
        color: tone === "brand" ? brand.brand700 : brand.ink,
      }}
    >
      {value}
    </span>
  </div>
);

export const Grid: React.FC<{ size?: number; opacity?: number }> = ({
  size = 60,
  opacity = 0.06,
}) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: `linear-gradient(${brand.ink} 1px, transparent 1px), linear-gradient(90deg, ${brand.ink} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
      opacity,
      pointerEvents: "none",
    }}
  />
);
