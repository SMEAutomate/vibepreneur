import React from "react";
import { useCurrentFrame } from "remotion";
import { Stage, useOrientation } from "../components/Stage";
import { Display, Eyebrow } from "../components/Type";
import { Logo } from "../components/Logo";
import { brand } from "../lib/brand";

const artifacts = [
  "Idea scored 92",
  "Canvas done",
  "Page live",
  "Outreach sent",
  "Lead magnet up",
  "First reply",
  "Call booked",
];

export const SevenDaysCalendar: React.FC = () => {
  const frame = useCurrentFrame();
  const { isPortrait } = useOrientation();
  const filled = Math.min(7, Math.floor(frame / 50));
  const final = frame > 400;

  if (final) {
    return (
      <Stage bg={brand.brand700}>
        <div
          style={{
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
            7 days of momentum.
          </Display>
        </div>
      </Stage>
    );
  }

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
        <Eyebrow>Week one</Eyebrow>
        <Display size="sm">{filled} of 7 shipped</Display>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isPortrait ? "1fr 1fr" : "repeat(7, 1fr)",
            gap: 12,
          }}
        >
          {artifacts.map((a, i) => (
            <div
              key={a}
              style={{
                padding: 18,
                borderRadius: 12,
                border: `1px solid ${i < filled ? brand.brand200 : brand.line}`,
                background: i < filled ? brand.brand50 : brand.paper,
                opacity: i < filled ? 1 : 0.5,
                minHeight: 120,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  color: brand.textMuted,
                  fontWeight: 700,
                }}
              >
                DAY {i + 1}
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>
                {a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
};
