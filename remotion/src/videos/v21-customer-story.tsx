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
          <Eyebrow>Customer story</Eyebrow>
        </div>
        <div style={slide}>
          <Display size="lg">[Customer Name]</Display>
          <Body color={brand.textMuted}>
            [Role · Industry · Years of expertise]
          </Body>
        </div>
      </div>
    </Stage>
  );
};

const Pull: React.FC<{ q: string; bg?: string }> = ({
  q,
  bg = brand.paper,
}) => {
  const o = useFadeIn(2, 22);
  return (
    <Stage bg={bg}>
      <div
        style={{
          opacity: o,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 16,
        }}
      >
        <Eyebrow>In their words</Eyebrow>
        <Display size="md">"{q}"</Display>
        <Body color={brand.textMuted}>— [Customer Name]</Body>
      </div>
    </Stage>
  );
};

const Stats = () => (
  <Stage bg={brand.brand50}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 24,
      }}
    >
      <Eyebrow>Outcomes · 90 days</Eyebrow>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          { v: "$13.9k", l: "MRR" },
          { v: "28", l: "Customers" },
          { v: "7 days", l: "To first lead" },
          { v: "3 hrs", l: "Per week support" },
        ].map((s) => (
          <Card key={s.l} padding={28}>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: brand.brand700,
                lineHeight: 1,
              }}
            >
              {s.v}
            </div>
            <div style={{ fontSize: 18, color: brand.textMuted, marginTop: 8 }}>
              {s.l}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Stage>
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
      <Logo variant="mark" size={96} color="white" />
      <Display size="md" align="center" color="white">
        Read the full story.
        <br />
        vbprnr.com/customers
      </Display>
    </div>
  </Stage>
);

export const CustomerStory: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={90}>
      <Title />
    </Sequence>
    <Sequence from={90} durationInFrames={150}>
      <Pull q="I kept saying the same things to clients. There had to be a product in there." />
    </Sequence>
    <Sequence from={240} durationInFrames={150}>
      <Pull
        q="In 7 days I had a positioning, a page, and outreach in motion."
        bg={brand.paper2}
      />
    </Sequence>
    <Sequence from={390} durationInFrames={270}>
      <Stats />
    </Sequence>
    <Sequence from={660} durationInFrames={150}>
      <Pull q="I'd never have shipped this if I had to figure out the order myself." />
    </Sequence>
    <Sequence from={810} durationInFrames={90}>
      <Outro />
    </Sequence>
  </>
);
