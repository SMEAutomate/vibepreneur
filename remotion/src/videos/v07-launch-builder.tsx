import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill, BrowserChrome } from "../components/UIPrimitives";
import { PromptMock } from "../components/Mocks";
import { Logo } from "../components/Logo";
import { useSlideUp, useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const Intro = () => {
  const slide = useSlideUp(4, 18);
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
          <Eyebrow>Launch Builder</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            One prompt.
            <br />
            Three artifacts.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Generated = () => {
  const frame = useCurrentFrame();
  const stage = frame < 60 ? 1 : frame < 120 ? 2 : 3;
  return (
    <Stage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 24,
        }}
      >
        <Eyebrow>Generating</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Step done={stage >= 1} label="Landing page copy" />
          <Step done={stage >= 2} label="Outreach sequence (5 emails)" />
          <Step done={stage >= 3} label="Lead magnet draft" />
        </div>
      </div>
    </Stage>
  );
};

const Step: React.FC<{ done: boolean; label: string }> = ({ done, label }) => (
  <Card
    padding={20}
    style={{
      background: done ? brand.brand50 : brand.paper,
      borderColor: done ? brand.brand200 : brand.line,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Body size={24}>{label}</Body>
      <Pill tone={done ? "brand" : "neutral"}>
        {done ? "✓ Ready" : "Generating..."}
      </Pill>
    </div>
  </Card>
);

const PromptStep = () => (
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
      <Eyebrow>Then ship it</Eyebrow>
      <Display size="sm">Copy → paste → Cursor builds it.</Display>
      <PromptMock tool="Cursor" />
    </div>
  </Stage>
);

const Outro = () => {
  const o = useFadeIn(0, 22);
  return (
    <Stage bg={brand.brand700}>
      <div
        style={{
          opacity: o,
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
          From idea to live page
          <br />
          in one afternoon.
        </Display>
      </div>
    </Stage>
  );
};

export const LaunchBuilder: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={100}>
      <Intro />
    </Sequence>
    <Sequence from={100} durationInFrames={300}>
      <Generated />
    </Sequence>
    <Sequence from={400} durationInFrames={300}>
      <PromptStep />
    </Sequence>
    <Sequence from={700} durationInFrames={200}>
      <Outro />
    </Sequence>
  </>
);
