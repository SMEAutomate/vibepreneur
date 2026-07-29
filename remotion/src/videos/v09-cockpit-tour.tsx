import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { CockpitMock } from "../components/Mocks";
import { Logo } from "../components/Logo";
import { useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const Intro = () => {
  const o = useFadeIn(2, 18);
  return (
    <Stage bg={brand.paper2}>
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
        <Eyebrow>Execution Cockpit</Eyebrow>
        <Display size="md">Visible momentum.</Display>
      </div>
    </Stage>
  );
};

const Body = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 240], [41, 68], {
    extrapolateRight: "clamp",
  });
  return (
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
        <CockpitMock progress={progress} />
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
        Watch it move.
      </Display>
    </div>
  </Stage>
);

export const CockpitTour: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={120}>
      <Intro />
    </Sequence>
    <Sequence from={120} durationInFrames={540}>
      <Body />
    </Sequence>
    <Sequence from={660} durationInFrames={240}>
      <Outro />
    </Sequence>
  </>
);
