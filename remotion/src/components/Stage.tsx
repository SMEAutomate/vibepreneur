import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { brand, fonts } from "../lib/brand";

interface StageProps {
  children: React.ReactNode;
  bg?: string;
  pad?: number;
}

export const Stage: React.FC<StageProps> = ({
  children,
  bg = brand.paper,
  pad,
}) => {
  const { width, height } = useVideoConfig();
  const isPortrait = height > width;
  const padding = pad ?? (isPortrait ? 64 : 96);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        fontFamily: fonts.sans,
        color: brand.text,
        padding,
        boxSizing: "border-box",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

export const useOrientation = () => {
  const { width, height } = useVideoConfig();
  const isPortrait = height > width;
  return {
    isPortrait,
    isLandscape: !isPortrait,
    width,
    height,
    scale: isPortrait ? width / 1080 : width / 1920,
  };
};
