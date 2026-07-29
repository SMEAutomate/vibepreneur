import React from "react";
import { Sequence } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const Title = () => {
  const slide = useSlideUp(2, 18);
  return (
    <Stage bg={brand.ink}>
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
          <Eyebrow color={brand.brand400}>Receipts</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="lg" color="white">
            Not another course.
          </Display>
        </div>
      </div>
    </Stage>
  );
};

const Compare = () => {
  const { isPortrait } = useOrientation();
  return (
    <Stage>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isPortrait ? "1fr" : "1fr 1fr",
          gridTemplateRows: isPortrait ? "1fr 1fr" : "1fr",
          gap: 24,
          height: "100%",
        }}
      >
        <Col
          title="Course / cohort"
          rows={[
            "12 weeks of videos",
            "Slack channel that dies",
            "Mastermind cosplay",
            "$1,997 + your time",
            "0 artifacts shipped",
          ]}
          tone="muted"
        />
        <Col
          title="Vibepreneur"
          rows={[
            "7 days to first plan",
            "Cockpit you actually open",
            "Real artifacts each step",
            "$X/mo, you keep everything",
            "Live business at the end",
          ]}
          tone="brand"
        />
      </div>
    </Stage>
  );
};

const Col: React.FC<{
  title: string;
  rows: string[];
  tone: "brand" | "muted";
}> = ({ title, rows, tone }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
    <Eyebrow color={tone === "brand" ? brand.brand700 : brand.textMuted}>
      {title}
    </Eyebrow>
    {rows.map((r) => (
      <Card
        key={r}
        padding={18}
        style={{
          background: tone === "brand" ? brand.brand50 : brand.paper2,
          borderColor: tone === "brand" ? brand.brand200 : brand.line,
        }}
      >
        <Body size={20}>
          {tone === "brand" ? "✓" : "—"} {r}
        </Body>
      </Card>
    ))}
  </div>
);

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
        An operating system,
        <br />
        not a curriculum.
      </Display>
    </div>
  </Stage>
);

export const NotAnotherCourse: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={100}>
      <Title />
    </Sequence>
    <Sequence from={100} durationInFrames={600}>
      <Compare />
    </Sequence>
    <Sequence from={700} durationInFrames={200}>
      <Outro />
    </Sequence>
  </>
);
