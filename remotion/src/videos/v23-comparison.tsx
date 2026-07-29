import React from "react";
import { Sequence } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const Title = () => (
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
      <Eyebrow>Honest comparison</Eyebrow>
      <Display size="md">
        Notion + ChatGPT + 4 Gumroad templates
        <br />
        vs. Vibepreneur.
      </Display>
    </div>
  </Stage>
);

const rows = [
  { label: "Time to first artifact", a: "2-3 weeks", b: "Day 1" },
  { label: "Order of operations", a: "You figure it out", b: "Built in" },
  { label: "Validation signal", a: "Vibes", b: "Demand-scored" },
  { label: "Cost / month", a: "$60+ across 6 tools", b: "One subscription" },
  { label: "What you ship", a: "Notion docs", b: "Live business" },
];

const Table = () => {
  const { isPortrait } = useOrientation();
  return (
    <Stage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 14,
        }}
      >
        <Eyebrow>What's different</Eyebrow>
        <Card padding={isPortrait ? 18 : 28}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isPortrait ? "1fr" : "1.4fr 1fr 1fr",
              gap: 14,
            }}
          >
            {!isPortrait && (
              <>
                <div />
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: brand.textMuted,
                  }}
                >
                  Stack
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: brand.brand700,
                  }}
                >
                  Vibepreneur
                </div>
              </>
            )}
            {rows.map((r) =>
              isPortrait ? (
                <div
                  key={r.label}
                  style={{
                    borderTop: `1px solid ${brand.line}`,
                    paddingTop: 12,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: brand.textMuted,
                      marginBottom: 8,
                    }}
                  >
                    {r.label}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Pill tone="neutral">{r.a}</Pill>
                    <Pill tone="brand">{r.b}</Pill>
                  </div>
                </div>
              ) : (
                <React.Fragment key={r.label}>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      padding: "10px 0",
                      borderTop: `1px solid ${brand.line}`,
                    }}
                  >
                    {r.label}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      color: brand.textMuted,
                      padding: "10px 0",
                      borderTop: `1px solid ${brand.line}`,
                    }}
                  >
                    {r.a}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      color: brand.brand700,
                      fontWeight: 700,
                      padding: "10px 0",
                      borderTop: `1px solid ${brand.line}`,
                    }}
                  >
                    {r.b}
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        </Card>
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
          gap: 20,
        }}
      >
        <Logo variant="mark" size={80} color="white" />
        <Display size="md" align="center" color="white">
          One system. One subscription.
        </Display>
      </div>
    </Stage>
  );
};

export const Comparison: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={140}>
      <Title />
    </Sequence>
    <Sequence from={140} durationInFrames={600}>
      <Table />
    </Sequence>
    <Sequence from={740} durationInFrames={160}>
      <Outro />
    </Sequence>
  </>
);
