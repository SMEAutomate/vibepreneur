import React from "react";
import { Sequence, useCurrentFrame } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { CanvasMock } from "../components/Mocks";
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
          <Eyebrow>Positioning Canvas</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            ICP. Pricing. Differentiation.
            <br />
            In one canvas.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Filling = () => {
  const frame = useCurrentFrame();
  const filled = Math.min(6, Math.floor(frame / 30) + 1);
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
        <Eyebrow>Auto-filled from your inputs</Eyebrow>
        <CanvasMock filled={filled} />
      </div>
    </Stage>
  );
};

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
          A position you can defend.
        </Display>
      </div>
    </Stage>
  );
};

export const PositioningCanvas: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={120}>
      <Intro />
    </Sequence>
    <Sequence from={120} durationInFrames={540}>
      <Filling />
    </Sequence>
    <Sequence from={660} durationInFrames={240}>
      <Outro />
    </Sequence>
  </>
);
