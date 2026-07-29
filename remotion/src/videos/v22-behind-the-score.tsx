import React from "react";
import { Sequence, useCurrentFrame, interpolate } from "remotion";
import { Stage } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill, ProgressBar } from "../components/UIPrimitives";
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
          <Eyebrow>Behind the Score</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">
            How Vibepreneur ranks
            <br />
            your venture ideas.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Factor: React.FC<{ name: string; value: number; desc: string }> = ({
  name,
  value,
  desc,
}) => {
  const frame = useCurrentFrame();
  const v = interpolate(frame, [0, 60], [0, value], {
    extrapolateRight: "clamp",
  });
  return (
    <Card padding={24}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Body size={24}>{name}</Body>
        <Pill tone="brand">{Math.round(v)}/100</Pill>
      </div>
      <div style={{ marginTop: 12 }}>
        <ProgressBar value={v} height={12} />
      </div>
      <Body size={18} color={brand.textMuted} style={{ marginTop: 12 }}>
        {desc}
      </Body>
    </Card>
  );
};

const Factors = () => (
  <Stage>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 16,
      }}
    >
      <Eyebrow>Five signals</Eyebrow>
      <Factor
        name="Demand intensity"
        value={92}
        desc="Search volume, hiring trends, paid ad density"
      />
      <Factor
        name="Buyer accessibility"
        value={88}
        desc="Reachable via direct outreach, no gatekeepers"
      />
      <Factor
        name="Willingness to pay"
        value={84}
        desc="Existing budgets in the category"
      />
      <Factor name="Competitive gap" value={71} desc="Underserved segments" />
      <Factor
        name="Your fit"
        value={95}
        desc="Match to your background and assets"
      />
    </div>
  </Stage>
);

const Composite = () => {
  const frame = useCurrentFrame();
  const score = Math.round(
    interpolate(frame, [0, 60], [0, 92], { extrapolateRight: "clamp" })
  );
  return (
    <Stage bg={brand.brand700}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 16,
        }}
      >
        <Eyebrow color="white">Composite</Eyebrow>
        <div
          style={{
            fontSize: 240,
            fontWeight: 900,
            color: "white",
            lineHeight: 1,
          }}
        >
          {score}
        </div>
        <Display size="sm" align="center" color="white">
          Build it.
        </Display>
      </div>
    </Stage>
  );
};

const Outro = () => {
  const o = useFadeIn(0, 22);
  return (
    <Stage bg={brand.ink}>
      <div
        style={{
          opacity: o,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 20,
        }}
      >
        <Logo variant="mark" size={80} color="white" />
        <Display size="sm" align="center" color="white">
          Transparent. Tunable.
          <br />
          Yours.
        </Display>
      </div>
    </Stage>
  );
};

export const BehindTheScore: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={90}>
      <Title />
    </Sequence>
    <Sequence from={90} durationInFrames={500}>
      <Factors />
    </Sequence>
    <Sequence from={590} durationInFrames={220}>
      <Composite />
    </Sequence>
    <Sequence from={810} durationInFrames={90}>
      <Outro />
    </Sequence>
  </>
);
