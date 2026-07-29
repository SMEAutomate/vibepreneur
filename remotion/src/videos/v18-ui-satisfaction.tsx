import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage } from "../components/Stage";
import {
  CanvasMock,
  CockpitMock,
  BriefMock,
  OpportunityMock,
} from "../components/Mocks";
import { Logo } from "../components/Logo";
import { Display } from "../components/Type";
import { useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const Beat: React.FC<{ children: React.ReactNode; bg?: string }> = ({
  children,
  bg = brand.paper2,
}) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, 8, 70, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [0, 90], [0.96, 1.02], {
    extrapolateRight: "clamp",
  });
  return (
    <Stage bg={bg}>
      <div
        style={{
          opacity: o,
          transform: `scale(${scale})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {children}
      </div>
    </Stage>
  );
};

const Final = () => {
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
          gap: 16,
        }}
      >
        <Logo variant="mark" size={96} color="white" />
        <Display size="sm" align="center" color="white">
          vbprnr.com
        </Display>
      </div>
    </Stage>
  );
};

export const UISatisfaction: React.FC = () => {
  const beat = 90;
  return (
    <>
      <Sequence from={0} durationInFrames={beat}>
        <Beat>
          <div style={{ width: "80%" }}>
            <CanvasMock filled={6} />
          </div>
        </Beat>
      </Sequence>
      <Sequence from={beat} durationInFrames={beat}>
        <Beat bg={brand.paper}>
          <div style={{ width: "80%" }}>
            <CockpitMock progress={68} />
          </div>
        </Beat>
      </Sequence>
      <Sequence from={beat * 2} durationInFrames={beat}>
        <Beat>
          <div style={{ width: "80%" }}>
            <BriefMock />
          </div>
        </Beat>
      </Sequence>
      <Sequence from={beat * 3} durationInFrames={beat}>
        <Beat bg={brand.paper}>
          <div style={{ width: "80%" }}>
            <OpportunityMock scored={3} />
          </div>
        </Beat>
      </Sequence>
      <Sequence from={beat * 4} durationInFrames={150}>
        <Final />
      </Sequence>
    </>
  );
};
