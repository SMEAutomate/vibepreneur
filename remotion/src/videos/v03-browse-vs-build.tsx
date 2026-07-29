import React from "react";
import { Sequence, useCurrentFrame } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow, Body } from "../components/Type";
import { Card, Pill } from "../components/UIPrimitives";
import { Logo } from "../components/Logo";
import { useFadeIn, useSlideUp } from "../lib/anim";
import { brand } from "../lib/brand";

const browseFeed = [
  "@hustle_dad: still grinding 🔥",
  "@founder_brain: 'just ship it bro'",
  "Podcast #482: Disrupt your discipline",
  "Course alert: $1,997 mastermind",
  "@growth_thread: 47 ways to find PMF",
  "@vc_takes: AI agents will...",
];

const buildArtifacts = [
  { label: "Positioning canvas", status: "Done" },
  { label: "Landing page", status: "Live" },
  { label: "Outreach v1", status: "Sent" },
  { label: "First reply", status: "Booked" },
];

const Split: React.FC = () => {
  const { isPortrait } = useOrientation();
  const frame = useCurrentFrame();
  const visible = Math.floor(frame / 12);
  return (
    <Stage bg={brand.paper}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isPortrait ? "1fr" : "1fr 1fr",
          gridTemplateRows: isPortrait ? "1fr 1fr" : "1fr",
          gap: 32,
          height: "100%",
        }}
      >
        <Pane title="Browse" tone="muted">
          {browseFeed
            .slice(0, Math.min(browseFeed.length, visible))
            .map((t, i) => (
              <Card
                key={i}
                padding={18}
                style={{ marginBottom: 12, opacity: 0.7 }}
              >
                <Body size={20}>{t}</Body>
              </Card>
            ))}
        </Pane>
        <Pane title="Build" tone="brand">
          {buildArtifacts
            .slice(0, Math.min(buildArtifacts.length, visible))
            .map((a, i) => (
              <Card
                key={i}
                padding={18}
                style={{
                  marginBottom: 12,
                  borderColor: brand.brand200,
                  background: brand.brand50,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Body size={22}>{a.label}</Body>
                  <Pill tone="brand">{a.status}</Pill>
                </div>
              </Card>
            ))}
        </Pane>
      </div>
    </Stage>
  );
};

const Pane: React.FC<
  React.PropsWithChildren<{ title: string; tone: "brand" | "muted" }>
> = ({ children, title, tone }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
    <Eyebrow color={tone === "brand" ? brand.brand700 : brand.textMuted}>
      {title}
    </Eyebrow>
    <div style={{ flex: 1, overflow: "hidden" }}>{children}</div>
  </div>
);

const Outro = () => {
  const o = useFadeIn(0, 22);
  return (
    <Stage bg={brand.ink}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 24,
          opacity: o,
        }}
      >
        <Display size="md" align="center" color="white">
          Built for professionals
          <br />
          who build, not just browse.
        </Display>
        <Logo variant="mark" size={80} color={brand.brand400} />
      </div>
    </Stage>
  );
};

export const BrowseVsBuild: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={720}>
      <Split />
    </Sequence>
    <Sequence from={720} durationInFrames={180}>
      <Outro />
    </Sequence>
  </>
);
