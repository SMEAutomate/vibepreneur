import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { CockpitMock } from "../components/Mocks";
import { Pill } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const Hook = () => {
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
          <Pill tone="warn">Paused · 4 days</Pill>
        </div>
        <div style={slide}>
          <Display size="md">
            Your cockpit
            <br />
            is waiting.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const State = () => {
  const o = useFadeIn(2, 22);
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
        <Eyebrow>Where you left off</Eyebrow>
        <CockpitMock progress={41} title="[Their venture name]" />
      </div>
    </Stage>
  );
};

const Push = () => {
  const o = useFadeIn(0, 18);
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
          15 minutes today
          <br />
          unblocks the launch.
        </Display>
      </div>
    </Stage>
  );
};

export const ReEngagement: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={180}>
      <Hook />
    </Sequence>
    <Sequence from={180} durationInFrames={480}>
      <State />
    </Sequence>
    <Sequence from={660} durationInFrames={240}>
      <Push />
    </Sequence>
  </>
);
