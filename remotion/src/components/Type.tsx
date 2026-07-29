import React from "react";
import { brand } from "../lib/brand";
import { useOrientation } from "./Stage";

export const Display: React.FC<
  React.PropsWithChildren<{
    size?: "lg" | "md" | "sm";
    align?: "left" | "center";
    color?: string;
    style?: React.CSSProperties;
  }>
> = ({ children, size = "md", align = "left", color = brand.ink, style }) => {
  const { isPortrait } = useOrientation();
  const scales = {
    lg: isPortrait ? 96 : 128,
    md: isPortrait ? 76 : 96,
    sm: isPortrait ? 56 : 64,
  };
  return (
    <div
      style={{
        fontSize: scales[size],
        lineHeight: 1.05,
        fontWeight: 800,
        letterSpacing: -2,
        color,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Eyebrow: React.FC<React.PropsWithChildren<{ color?: string }>> = ({
  children,
  color = brand.brand700,
}) => (
  <div
    style={{
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
      color,
    }}
  >
    {children}
  </div>
);

export const Body: React.FC<
  React.PropsWithChildren<{
    size?: number;
    color?: string;
    style?: React.CSSProperties;
  }>
> = ({ children, size, color = brand.text, style }) => {
  const { isPortrait } = useOrientation();
  return (
    <div
      style={{
        fontSize: size ?? (isPortrait ? 30 : 28),
        lineHeight: 1.4,
        fontWeight: 500,
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
