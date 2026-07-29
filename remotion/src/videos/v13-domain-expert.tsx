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
            The domain expert
            <br />
            goes solo.
          </Display>
        </div>
        <div style={slide}>
          <Body color={brand.textMuted}>
            15-year specialist · zero followers
          </Body>
        </div>
      </div>
    </Stage>
  );
};

const Resistance = () => (
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
      <Eyebrow>What they wouldn't do</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          "Build a personal brand",
          "Tweet daily",
          "Start a podcast",
          "Sell a course",
        ].map((t) => (
          <Card key={t} padding={20} style={{ opacity: 0.55 }}>
            <Body size={22}>✗ {t}</Body>
          </Card>
        ))}
      </div>
    </div>
  </Stage>
);

const Did = () => {
  const o = useFadeIn(0, 22);
  return (
    <Stage bg={brand.brand50}>
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
        <Eyebrow>What they did instead</Eyebrow>
        <Display size="sm">
          Built a $4k/mo product
          <br />
          for 80 buyers in their niche.
        </Display>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Pill tone="brand">Direct outreach</Pill>
          <Pill tone="success">Niche {">"} scale</Pill>
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
        Expertise compounds.
        <br />
        Audiences exhaust.
      </Display>
    </div>
  </Stage>
);

export const DomainExpertStory: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={90}>
      <Title />
    </Sequence>
    <Sequence from={90} durationInFrames={270}>
      <Resistance />
    </Sequence>
    <Sequence from={360} durationInFrames={360}>
      <Did />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
