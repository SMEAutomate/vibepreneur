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
            The consultant
            <br />
            who productized.
          </Display>
        </div>
        <div style={slide}>
          <Body color={brand.textMuted}>
            Independent ops consultant · 8 yrs
          </Body>
        </div>
      </div>
    </Stage>
  );
};

const Before = () => {
  const o = useFadeIn(0, 20);
  return (
    <Stage>
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
        <Eyebrow>Before</Eyebrow>
        <Display size="sm">
          $25k engagements.
          <br />
          One client at a time.
        </Display>
        <Card padding={28}>
          <Body size={22}>
            "I keep saying the same things. There has to be a product in here."
          </Body>
        </Card>
      </div>
    </Stage>
  );
};

const After = () => {
  const o = useFadeIn(0, 20);
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
        <Eyebrow>After 6 weeks</Eyebrow>
        <Display size="sm">
          $499/mo product.
          <br />
          28 paying customers.
        </Display>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Pill tone="brand">$13.9k MRR</Pill>
          <Pill tone="success">28 customers</Pill>
          <Pill tone="neutral">3 hrs/week support</Pill>
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
        Productize what
        <br />
        you already do.
      </Display>
    </div>
  </Stage>
);

export const ConsultantStory: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={90}>
      <Title />
    </Sequence>
    <Sequence from={90} durationInFrames={270}>
      <Before />
    </Sequence>
    <Sequence from={360} durationInFrames={360}>
      <After />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
