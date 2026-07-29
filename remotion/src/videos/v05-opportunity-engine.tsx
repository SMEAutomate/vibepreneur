import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { OpportunityMock } from "../components/Mocks";
import { Logo } from "../components/Logo";
import { useSlideUp, useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const Intro = () => {
  const slide = useSlideUp(4, 20);
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
          <Eyebrow>Opportunity Engine</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            Paste your background.
            <br />
            Get scored ventures.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Typing = () => {
  const frame = useCurrentFrame();
  const text =
    "Sr. HR Director · 12 yrs · mid-market SaaS · ran onboarding for 3 acquisitions";
  const chars = Math.floor(
    interpolate(frame, [0, 90], [0, text.length], { extrapolateRight: "clamp" })
  );
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
        <Eyebrow>Background</Eyebrow>
        <Card padding={28}>
          <div
            style={{
              fontSize: 28,
              fontFamily: "ui-monospace, monospace",
              lineHeight: 1.5,
            }}
          >
            {text.slice(0, chars)}
            <span style={{ opacity: frame % 30 < 15 ? 1 : 0 }}>|</span>
          </div>
        </Card>
      </div>
    </Stage>
  );
};

const Reveal = () => {
  const frame = useCurrentFrame();
  const scored = frame < 30 ? 1 : frame < 60 ? 2 : 3;
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
        <Eyebrow>3 ventures · scored on demand</Eyebrow>
        <OpportunityMock scored={scored} />
      </div>
    </Stage>
  );
};

const Outro = () => {
  const o = useFadeIn(0, 20);
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
          Stop guessing.
          <br />
          Start with score 90+.
        </Display>
      </div>
    </Stage>
  );
};

export const OpportunityEngine: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={120}>
      <Intro />
    </Sequence>
    <Sequence from={120} durationInFrames={200}>
      <Typing />
    </Sequence>
    <Sequence from={320} durationInFrames={400}>
      <Reveal />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
