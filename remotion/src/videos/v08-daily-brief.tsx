import React from "react";
import { Sequence } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { BriefMock } from "../components/Mocks";
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
          <Eyebrow>Daily Brief</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            90 seconds
            <br />
            of your morning.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Body = () => {
  const o = useFadeIn(2, 24);
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
        <BriefMock />
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
          Decide. Then go.
        </Display>
      </div>
    </Stage>
  );
};

export const DailyBrief: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={120}>
      <Intro />
    </Sequence>
    <Sequence from={120} durationInFrames={600}>
      <Body />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
