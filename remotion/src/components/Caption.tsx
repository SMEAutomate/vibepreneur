import React from "react";
import { brand } from "../lib/brand";
import { useOrientation } from "./Stage";

export const Caption: React.FC<
  React.PropsWithChildren<{
    position?: "bottom" | "top" | "center";
    emphasis?: boolean;
  }>
> = ({ children, position = "bottom", emphasis = false }) => {
  const { isPortrait } = useOrientation();
  const fontSize = isPortrait ? 60 : 52;
  const positionStyle: React.CSSProperties =
    position === "bottom"
      ? { bottom: isPortrait ? 220 : 80 }
      : position === "top"
        ? { top: isPortrait ? 200 : 80 }
        : { top: "50%", transform: "translateY(-50%)" };
  return (
    <div
      style={{
        position: "absolute",
        left: isPortrait ? 60 : 80,
        right: isPortrait ? 60 : 80,
        textAlign: "center",
        ...positionStyle,
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: -1,
          color: emphasis ? "white" : brand.ink,
          background: emphasis ? brand.brand700 : "transparent",
          padding: emphasis ? "16px 28px" : 0,
          borderRadius: emphasis ? 14 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
