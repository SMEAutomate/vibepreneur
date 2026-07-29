import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill, ProgressBar } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const Hello = () => {
  const slide = useSlideUp(2, 18);
  return (
    <Stage bg={brand.brand50}>
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
          <Logo variant="mark" size={80} />
        </div>
        <div style={slide}>
          <Display size="md">
            Welcome.
            <br />
            Here's the one thing
            <br />
            to do today.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Step = () => {
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
          gap: 16,
        }}
      >
        <Eyebrow>Step 1 of 7</Eyebrow>
        <Display size="sm">
          Paste your background.
          <br />
          We score 3 ventures.
        </Display>
        <Card padding={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <Body size={20}>Estimated time</Body>
            <Pill tone="brand">~6 minutes</Pill>
          </div>
          <ProgressBar value={14} />
        </Card>
      </div>
    </Stage>
  );
};

const Promise = () => (
  <Stage bg={brand.paper2}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 20,
      }}
    >
      <Eyebrow>What you'll have by Friday</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          "A scored venture",
          "A sharpened position",
          "A live landing page",
          "Outreach in motion",
        ].map((t) => (
          <Card key={t} padding={20}>
            <Body size={22}>✓ {t}</Body>
          </Card>
        ))}
      </div>
    </div>
  </Stage>
);

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
        Open your cockpit.
      </Display>
    </div>
  </Stage>
);

export const Welcome: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={160}>
      <Hello />
    </Sequence>
    <Sequence from={160} durationInFrames={240}>
      <Step />
    </Sequence>
    <Sequence from={400} durationInFrames={340}>
      <Promise />
    </Sequence>
    <Sequence from={740} durationInFrames={160}>
      <Outro />
    </Sequence>
  </>
);
