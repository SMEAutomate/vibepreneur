import React from "react";
import { Sequence } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { OpportunityMock, CanvasMock, CockpitMock } from "../components/Mocks";
import { Logo } from "../components/Logo";
import { useSlideUp, useFadeIn } from "../lib/anim";
import { brand } from "../lib/brand";

const SceneOne = () => {
  const slide = useSlideUp(4, 22);
  const { isPortrait } = useOrientation();
  return (
    <Stage bg={brand.paper2}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: 32,
        }}
      >
        <div style={slide}>
          <Eyebrow>From Resume to Revenue</Eyebrow>
        </div>
        <div style={slide}>
          <Display size={isPortrait ? "md" : "lg"}>
            Your LinkedIn profile
            <br />
            isn't just a resume.
          </Display>
        </div>
        <FakeProfile />
      </div>
    </Stage>
  );
};

const FakeProfile = () => {
  const o = useFadeIn(20, 24);
  return (
    <Card style={{ opacity: o, maxWidth: 720 }}>
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            background: brand.brand200,
          }}
        />
        <div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>Maya Chen</div>
          <div style={{ fontSize: 18, color: brand.textMuted }}>
            Sr. HR Director · 12 yrs · Mid-market SaaS
          </div>
        </div>
      </div>
    </Card>
  );
};

const SceneTwo = () => (
  <Stage bg={brand.paper}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 28,
      }}
    >
      <Eyebrow>Step 1 · Opportunity Engine</Eyebrow>
      <Display size="sm">
        It's a list of businesses you could already build.
      </Display>
      <OpportunityMock scored={3} />
    </div>
  </Stage>
);

const SceneThree = () => (
  <Stage bg={brand.paper2}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 28,
      }}
    >
      <Eyebrow>Step 2 · Positioning</Eyebrow>
      <Display size="sm">Sharpened in minutes, not months.</Display>
      <CanvasMock filled={6} />
    </div>
  </Stage>
);

const SceneFour = () => (
  <Stage bg={brand.paper}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        gap: 28,
      }}
    >
      <Eyebrow>Step 3 · Execution Cockpit</Eyebrow>
      <Display size="sm">Then you ship it.</Display>
      <CockpitMock progress={68} />
    </div>
  </Stage>
);

const SceneFive = () => {
  const o = useFadeIn(0, 24);
  return (
    <Stage bg={brand.brand700}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 32,
          opacity: o,
        }}
      >
        <Logo variant="mark" size={96} color="white" />
        <Display size="md" align="center" color="white">
          Your experience is
          <br />
          already a business.
        </Display>
        <Pill tone="brand">vbprnr.com</Pill>
      </div>
    </Stage>
  );
};

export const ResumeToRevenue: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={90}>
      <SceneOne />
    </Sequence>
    <Sequence from={90} durationInFrames={180}>
      <SceneTwo />
    </Sequence>
    <Sequence from={270} durationInFrames={180}>
      <SceneThree />
    </Sequence>
    <Sequence from={450} durationInFrames={210}>
      <SceneFour />
    </Sequence>
    <Sequence from={660} durationInFrames={240}>
      <SceneFive />
    </Sequence>
  </>
);
