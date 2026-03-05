export type RoadmapStatus = "live" | "in-progress" | "planned";

export interface RoadmapItem {
  title: string;
  description: string;
  status: RoadmapStatus;
}

export const roadmapColumns: Record<
  "now" | "next" | "later",
  { label: string; items: RoadmapItem[] }
> = {
  now: {
    label: "Now",
    items: [
      {
        title: "Insight Engine",
        description:
          "Surface market opportunities from professional experience. Identify gaps and demand signals.",
        status: "live",
      },
      {
        title: "Solution Structuring",
        description:
          "Turn ideas into structured concepts with positioning, pricing, and user journey.",
        status: "live",
      },
      {
        title: "Positioning Framework",
        description:
          "Define competitive angles, value propositions, and messaging frameworks.",
        status: "live",
      },
    ],
  },
  next: {
    label: "Next",
    items: [
      {
        title: "Distribution Toolkit",
        description:
          "ICP definition, channel strategy, outreach sequences, and content angles.",
        status: "in-progress",
      },
      {
        title: "Growth Dashboard",
        description:
          "Track experiments, measure traction, and identify what's working.",
        status: "in-progress",
      },
      {
        title: "Build Tool Integrations",
        description:
          "Export product blueprints, specs, and requirements directly to your preferred build tools. Designed for AI-assisted development workflows.",
        status: "planned",
      },
    ],
  },
  later: {
    label: "Later",
    items: [
      {
        title: "Team Collaboration",
        description:
          "Build solutions with collaborators. Shared workspaces, roles, and versioning.",
        status: "planned",
      },
      {
        title: "Portfolio View",
        description:
          "Manage multiple solutions from one dashboard. Compare performance across bets.",
        status: "planned",
      },
      {
        title: "Marketplace",
        description:
          "Connect with complementary builders. Find co-founders, distributors, and early adopters.",
        status: "planned",
      },
    ],
  },
};

export interface WeeklyUpdate {
  week: string;
  date: string;
  title: string;
  body: string;
}

export const weeklyUpdates: WeeklyUpdate[] = [
  {
    week: "Week 1",
    date: "March 2026",
    title: "Foundation and first impressions",
    body: "Launched the marketing site and waitlist system. Built the Insight Engine core, the part that surfaces opportunities from your experience. Early feedback from 50+ signups is shaping what we build next.",
  },
  {
    week: "Week 2",
    date: "March 2026",
    title: "Solution structuring goes live",
    body: "The Solution Builder now produces complete concepts: positioning angle, pricing model, buyer profile, and feature scope. Testing with early users from consulting, operations, and product management backgrounds.",
  },
  {
    week: "Week 3",
    date: "March 2026",
    title: "Positioning that wins",
    body: "Shipped the Positioning Studio. It generates competitive angles, objection handling, and messaging frameworks tuned to your specific market. Distribution Toolkit work begins next week.",
  },
];
