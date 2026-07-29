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
          <Pill tone="brand">Changelog · v0.[X]</Pill>
        </div>
        <div style={slide}>
          <Display size="md">
            [Feature name]
            <br />
            ships today.
          </Display>
        </div>
        <div style={slide}>
          <Body color={brand.textMuted}>
            [2-3 sentence summary of what changed and why.]
          </Body>
        </div>
      </div>
    </Stage>
  );
};

const What = () => (
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
      <Eyebrow>What's new</Eyebrow>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          "[Headline of change #1]",
          "[Headline of change #2]",
          "[Headline of change #3]",
        ].map((t) => (
          <Card key={t} padding={20}>
            <Body size={22}>+ {t}</Body>
          </Card>
        ))}
      </div>
    </div>
  </Stage>
);

const Why = () => {
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
        <Eyebrow>Why we built it</Eyebrow>
        <Display size="sm">
          [1-line problem statement
          <br />
          pulled from customer interviews.]
        </Display>
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
        gap: 20,
      }}
    >
      <Logo variant="mark" size={80} color="white" />
      <Display size="md" align="center" color="white">
        Try it.
        <br />
        vbprnr.com/changelog
      </Display>
    </div>
  </Stage>
);

export const Changelog: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={150}>
      <Title />
    </Sequence>
    <Sequence from={150} durationInFrames={300}>
      <What />
    </Sequence>
    <Sequence from={450} durationInFrames={300}>
      <Why />
    </Sequence>
    <Sequence from={750} durationInFrames={150}>
      <Outro />
    </Sequence>
  </>
);
