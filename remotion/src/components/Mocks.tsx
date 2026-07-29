import React from "react";
import { Card, Pill, ProgressBar, StatRow } from "./UIPrimitives";
import { brand } from "../lib/brand";

export const CockpitMock: React.FC<{ progress: number; title?: string }> = ({
  progress,
  title = "HR Onboarding Platform",
}) => (
  <Card padding={32} style={{ width: "100%" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 14,
            color: brand.textMuted,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Execution Cockpit
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, marginTop: 4 }}>
          {title}
        </div>
      </div>
      <Pill tone="brand">{Math.round(progress)}% complete</Pill>
    </div>
    <ProgressBar value={progress} height={16} />
    <div style={{ marginTop: 24 }}>
      <StatRow label="Positioning" value="Done" tone="brand" />
      <StatRow label="Landing page" value="Done" tone="brand" />
      <StatRow label="Outreach sequence" value="In progress" />
      <StatRow label="First 10 leads" value="Pending" />
    </div>
  </Card>
);

export const CanvasMock: React.FC<{ filled?: number }> = ({ filled = 4 }) => {
  const items = [
    { label: "ICP", value: "Mid-market HR leaders, 200-1000 FTE" },
    { label: "Pricing", value: "$499/mo · annual contract" },
    { label: "Differentiation", value: "Compliance + onboarding in one" },
    { label: "Competitive gap", value: "Legacy tools require 3 vendors" },
    { label: "Channel", value: "LinkedIn + HR community Slack" },
    { label: "Hook", value: "Onboard in 7 days, not 7 weeks" },
  ];
  return (
    <Card padding={32} style={{ width: "100%" }}>
      <div
        style={{
          fontSize: 14,
          color: brand.textMuted,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Positioning Canvas
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {items.map((it, i) => (
          <div
            key={it.label}
            style={{
              padding: 18,
              borderRadius: 12,
              border: `1px solid ${brand.line}`,
              background: i < filled ? brand.brand50 : brand.paper2,
              opacity: i < filled ? 1 : 0.45,
            }}
          >
            <div
              style={{ fontSize: 14, color: brand.textMuted, fontWeight: 600 }}
            >
              {it.label}
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginTop: 6,
                color: brand.ink,
              }}
            >
              {it.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const BriefMock: React.FC = () => (
  <Card padding={32} style={{ width: "100%" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: 14,
          color: brand.textMuted,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        Daily Brief · Friday
      </div>
      <Pill tone="success">3 decisions</Pill>
    </div>
    <div
      style={{ fontSize: 32, fontWeight: 700, marginTop: 12, lineHeight: 1.2 }}
    >
      Approve outreach copy and pick the lead magnet path.
    </div>
    <div
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {[
        "Outreach v3 ready · 18 prospects queued",
        "Lead magnet: PDF guide vs interactive checklist?",
        "Pricing test: $399 vs $499 launch price",
      ].map((t) => (
        <div key={t} style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Bullet />
          <div style={{ fontSize: 20, color: brand.ink }}>{t}</div>
        </div>
      ))}
    </div>
  </Card>
);

const Bullet = () => (
  <div
    style={{
      width: 12,
      height: 12,
      borderRadius: 6,
      background: brand.brand700,
      flexShrink: 0,
    }}
  />
);

export const OpportunityMock: React.FC<{ scored?: number }> = ({
  scored = 3,
}) => {
  const opps = [
    { name: "HR Onboarding Platform", score: 92, demand: "Strong" },
    { name: "Compliance Audit Tool", score: 84, demand: "Moderate" },
    { name: "Manager Coaching App", score: 71, demand: "Niche" },
  ];
  return (
    <Card padding={28} style={{ width: "100%" }}>
      <div
        style={{
          fontSize: 14,
          color: brand.textMuted,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Opportunity Engine
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {opps.slice(0, scored).map((o) => (
          <div
            key={o.name}
            style={{
              padding: 18,
              borderRadius: 12,
              background: brand.paper2,
              border: `1px solid ${brand.line}`,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{o.name}</div>
              <div
                style={{ fontSize: 16, color: brand.textMuted, marginTop: 4 }}
              >
                Demand: {o.demand}
              </div>
            </div>
            <ScoreBadge score={o.score} />
          </div>
        ))}
      </div>
    </Card>
  );
};

const ScoreBadge: React.FC<{ score: number }> = ({ score }) => (
  <div
    style={{
      width: 72,
      height: 72,
      borderRadius: 16,
      background: brand.brand700,
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
    }}
  >
    <div style={{ fontSize: 28, lineHeight: 1 }}>{score}</div>
    <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>SCORE</div>
  </div>
);

export const PromptMock: React.FC<{ tool?: string; lines?: string[] }> = ({
  tool = "Cursor",
  lines = [
    "Build a Next.js landing page for an HR Onboarding Platform.",
    "Hero headline: 'Onboard in 7 days, not 7 weeks.'",
    "Three feature cards: Compliance, Workflows, Reporting.",
    "Primary CTA: 'Get the 7-day plan.'",
  ],
}) => (
  <Card padding={0} style={{ width: "100%", overflow: "hidden" }}>
    <div
      style={{
        background: brand.ink,
        color: "white",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        Prompt for {tool}
      </div>
      <div
        style={{
          fontSize: 12,
          background: brand.brand700,
          padding: "4px 10px",
          borderRadius: 6,
          fontWeight: 600,
        }}
      >
        Copy
      </div>
    </div>
    <div
      style={{
        padding: 24,
        fontFamily: "ui-monospace, monospace",
        fontSize: 16,
        lineHeight: 1.7,
      }}
    >
      {lines.map((l, i) => (
        <div key={i} style={{ display: "flex", gap: 12 }}>
          <span style={{ color: brand.textMuted, width: 24 }}>{i + 1}</span>
          <span>{l}</span>
        </div>
      ))}
    </div>
  </Card>
);

export const ActivityFeed: React.FC<{ rows?: number }> = ({ rows = 4 }) => {
  const items = [
    "Maya generated 3 opportunity ideas",
    "Liam published landing page draft",
    "Aisha approved outreach v2",
    "Tomás booked first discovery call",
    "Priya hit 68% completion",
  ];
  return (
    <Card padding={24} style={{ width: "100%" }}>
      <div
        style={{
          fontSize: 14,
          color: brand.textMuted,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        Live Activity
      </div>
      {items.slice(0, rows).map((t, i) => (
        <div
          key={t}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 0",
            borderBottom: i < rows - 1 ? `1px solid ${brand.line}` : "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              background: brand.brand100,
              color: brand.brand700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            {t[0]}
          </div>
          <div style={{ fontSize: 18 }}>{t}</div>
        </div>
      ))}
    </Card>
  );
};
