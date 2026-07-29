import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, BrowserChrome, Pill } from "../components/UIPrimitives";
import { PromptMock } from "../components/Mocks";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const Intro = () => {
  const slide = useSlideUp(2, 18);
  return (
    <Stage bg={brand.paper2}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 24,
        }}
      >
        <div style={slide}>
          <Eyebrow>AI Build Prompts</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            We don't replace
            <br />
            your tools. We orchestrate them.
          </Display>
        </div>
        <div style={slide}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              "Cursor",
              "Bolt",
              "Lovable",
              "Replit",
              "Claude Code",
              "Midjourney",
              "Sora",
            ].map((t) => (
              <Pill key={t} tone="brand">
                {t}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </Stage>
  );
};

const PromptScene = () => (
  <Stage>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 20,
      }}
    >
      <Eyebrow>Generated for Cursor</Eyebrow>
      <PromptMock tool="Cursor" />
    </div>
  </Stage>
);

const ResultScene = () => {
  const o = useFadeIn(2, 22);
  return (
    <Stage bg={brand.paper2}>
      <div
        style={{
          opacity: o,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 20,
        }}
      >
        <Eyebrow>What Cursor builds</Eyebrow>
        <BrowserChrome url="hr-onboarding.preview">
          <div style={{ padding: 40, background: "white" }}>
            <div
              style={{
                fontSize: 14,
                color: brand.brand700,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              HR Onboarding Platform
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                marginTop: 12,
                lineHeight: 1.05,
              }}
            >
              Onboard in 7 days,
              <br />
              not 7 weeks.
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
              <div
                style={{
                  background: brand.brand700,
                  color: "white",
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontWeight: 600,
                }}
              >
                Get the 7-day plan
              </div>
              <div
                style={{
                  border: `1px solid ${brand.line}`,
                  padding: "14px 24px",
                  borderRadius: 10,
                  fontWeight: 600,
                }}
              >
                See how it works
              </div>
            </div>
          </div>
        </BrowserChrome>
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
        gap: 24,
      }}
    >
      <Logo variant="mark" size={80} color="white" />
      <Display size="md" align="center" color="white">
        Prompt → ship.
      </Display>
    </div>
  </Stage>
);

export const AIBuildPrompts: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={140}>
      <Intro />
    </Sequence>
    <Sequence from={140} durationInFrames={240}>
      <PromptScene />
    </Sequence>
    <Sequence from={380} durationInFrames={340}>
      <ResultScene />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
