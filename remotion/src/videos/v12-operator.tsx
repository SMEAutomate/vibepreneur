import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const Title = () => {
  const slide = useSlideUp(2, 18);
  return (
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
        <div style={slide}>
          <Eyebrow>Customer story · Template</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            The operator's
            <br />
            side bet.
          </Display>
        </div>
        <div style={slide}>
          <Body color={brand.textMuted}>VP Product · keeping the day job</Body>
        </div>
      </div>
    </Stage>
  );
};

const Schedule = () => (
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
      <Eyebrow>Evenings only</Eyebrow>
      <Display size="sm">
        7 hours a week.
        <br />
        30 days to validation.
      </Display>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          "Mon · 1h positioning",
          "Wed · 1h outreach",
          "Sat · 3h build",
          "Sun · 2h interviews",
        ].map((t) => (
          <Card key={t} padding={20}>
            <Body size={22}>{t}</Body>
          </Card>
        ))}
      </div>
    </div>
  </Stage>
);

const Result = () => {
  const o = useFadeIn(0, 22);
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
        <Eyebrow>Day 30</Eyebrow>
        <Display size="sm">
          12 paid pilots.
          <br />
          Quit when ready.
        </Display>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Pill tone="brand">12 pilots @ $500</Pill>
          <Pill tone="success">$6k validated</Pill>
        </div>
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
        Build before you bet.
      </Display>
    </div>
  </Stage>
);

export const OperatorStory: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={90}>
      <Title />
    </Sequence>
    <Sequence from={90} durationInFrames={270}>
      <Schedule />
    </Sequence>
    <Sequence from={360} durationInFrames={360}>
      <Result />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
