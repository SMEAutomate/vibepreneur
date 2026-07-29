import React from "react";
import { Sequence, useCurrentFrame } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill, ProgressBar } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useSlideUp, useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const days = [
  { day: "Day 1", label: "Pick the venture", artifact: "1 idea, scored 92" },
  { day: "Day 2", label: "Sharpen positioning", artifact: "Canvas complete" },
  { day: "Day 3", label: "Build landing page", artifact: "Page live" },
  { day: "Day 4", label: "Write outreach", artifact: "18 messages queued" },
  { day: "Day 5", label: "Lead magnet", artifact: "PDF + checklist" },
  { day: "Day 6", label: "Send + track", artifact: "First 3 replies" },
  { day: "Day 7", label: "Book calls", artifact: "2 discovery booked" },
];

const Title = () => {
  const slide = useSlideUp(4, 22);
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
          <Eyebrow>The 7-Day Founder</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="lg">
            From idea to first
            <br />
            discovery call.
          </Display>
        </div>
        <div style={slide}>
          <Body color={brand.textMuted}>Maya, ex-McKinsey HR lead.</Body>
        </div>
      </div>
    </Stage>
  );
};

const DayCard: React.FC<{ index: number; total: number }> = ({
  index,
  total,
}) => {
  const d = days[index];
  const slide = useSlideUp(0, 18);
  const progress = ((index + 1) / total) * 100;
  return (
    <Stage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 28,
        }}
      >
        <div style={slide}>
          <Eyebrow>{d.day} of 7</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="md">{d.label}</Display>
        </div>
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div
              style={{ fontSize: 18, fontWeight: 600, color: brand.textMuted }}
            >
              Artifact shipped
            </div>
            <Pill tone="success">{d.artifact}</Pill>
          </div>
          <ProgressBar value={progress} height={14} />
          <div style={{ marginTop: 12, fontSize: 16, color: brand.textMuted }}>
            {Math.round(progress)}% to launch
          </div>
        </Card>
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
        gap: 32,
      }}
    >
      <Logo variant="mark" size={96} color="white" />
      <Display size="md" align="center" color="white">
        Day 8: keep going.
      </Display>
      <Pill tone="brand">vbprnr.com</Pill>
    </div>
  </Stage>
);

export const SevenDayFounder: React.FC = () => {
  const titleDur = 80;
  const perDay = 100;
  const outroDur = 120;
  return (
    <>
      <Sequence from={0} durationInFrames={titleDur}>
        <Title />
      </Sequence>
      {days.map((_, i) => (
        <Sequence
          key={i}
          from={titleDur + i * perDay}
          durationInFrames={perDay}
        >
          <DayCard index={i} total={days.length} />
        </Sequence>
      ))}
      <Sequence
        from={titleDur + days.length * perDay}
        durationInFrames={outroDur}
      >
        <Outro />
      </Sequence>
    </>
  );
};
