import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { CockpitMock } from "../components/Mocks";
import { Logo } from "../components/Logo";
import { useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const tabTitles = [
  "PMF strategies — Reddit",
  "ICP template (1).pdf",
  "Notion · Business plan v3",
  "Twitter — startup advice",
  "ChatGPT — what is positioning",
  "Gumroad · 47 templates",
  "YouTube — how to validate",
  "Stripe Atlas FAQ",
  "Lean Canvas blank.png",
  "Notion · Goals 2026",
  "Slack · #founders-help",
  "47 more...",
];

const ChaosTabs = () => {
  const frame = useCurrentFrame();
  const shake = Math.sin(frame * 0.4) * 1.5;
  return (
    <Stage bg={brand.paper2}>
      <div style={{ transform: `translate(${shake}px, ${shake}px)` }}>
        <Eyebrow>POV: you, last Sunday</Eyebrow>
        <Display size="sm">47 tabs. Zero shipped.</Display>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 8,
            marginTop: 24,
          }}
        >
          {tabTitles.map((t, i) => (
            <div
              key={t}
              style={{
                fontSize: 16,
                padding: "10px 14px",
                background: brand.paper,
                border: `1px solid ${brand.line}`,
                borderRadius: 8,
                color: brand.textMuted,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                opacity: interpolate(frame, [i * 4, i * 4 + 8], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
              }}
            >
              ✕ {t}
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
};

const Resolution = () => {
  const o = useFadeIn(2, 18);
  return (
    <Stage>
      <div
        style={{
          opacity: o,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 24,
        }}
      >
        <Eyebrow>Now</Eyebrow>
        <Display size="sm">One cockpit. Visible progress.</Display>
        <CockpitMock progress={68} />
      </div>
    </Stage>
  );
};

const Outro = () => (
  <Stage bg={brand.brand700}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 16,
      }}
    >
      <Logo variant="mark" size={72} color="white" />
      <Display size="sm" align="center" color="white">
        Close the tabs.
      </Display>
    </div>
  </Stage>
);

export const PovTabs: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={180}>
      <ChaosTabs />
    </Sequence>
    <Sequence from={180} durationInFrames={210}>
      <Resolution />
    </Sequence>
    <Sequence from={390} durationInFrames={60}>
      <Outro />
    </Sequence>
  </>
);
