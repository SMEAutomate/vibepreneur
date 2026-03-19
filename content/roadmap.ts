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
        title: "Opportunity Intelligence",
        description:
          "Surface market opportunities from professional experience. Score by demand, competitive gaps, and personal fit.",
        status: "live",
      },
      {
        title: "Venture Structuring",
        description:
          "Turn opportunities into structured business systems with positioning, pricing, offer design, and buyer profiles.",
        status: "live",
      },
      {
        title: "Launch Systems",
        description:
          "Generate launch assets, GTM playbooks, outreach sequences, and campaign structure.",
        status: "live",
      },
    ],
  },
  next: {
    label: "Next",
    items: [
      {
        title: "Execution Automation",
        description:
          "Automated daily briefs, task orchestration, and progress tracking across all active ventures.",
        status: "in-progress",
      },
      {
        title: "Growth Loops",
        description:
          "Traction experiments, channel scoring, referral mechanics, and compounding distribution workflows.",
        status: "in-progress",
      },
      {
        title: "Build Tool Integrations",
        description:
          "Export product specs, user stories, and technical briefs directly to your preferred build tools and AI-assisted development workflows.",
        status: "planned",
      },
    ],
  },
  later: {
    label: "Later",
    items: [
      {
        title: "Portfolio Mode",
        description:
          "Manage multiple ventures from one dashboard. Compare performance, allocate focus, and run parallel experiments.",
        status: "planned",
      },
      {
        title: "Team Collaboration",
        description:
          "Build ventures with collaborators. Shared workspaces, roles, and version control across your team.",
        status: "planned",
      },
      {
        title: "Marketplace",
        description:
          "Connect with complementary builders. Find co-founders, distributors, and early adopters for your ventures.",
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
    body: "Launched the marketing site and waitlist system. Built the Opportunity Intelligence core, the part that surfaces business opportunities from your experience. Early feedback from 50+ signups is shaping what we build next.",
  },
  {
    week: "Week 2",
    date: "March 2026",
    title: "Venture structuring goes live",
    body: "The Venture Structuring system now produces complete business concepts: positioning angle, pricing model, buyer profile, and offer design. Testing with early users from consulting, operations, and product management backgrounds.",
  },
  {
    week: "Week 3",
    date: "March 2026",
    title: "Launch systems ship",
    body: "Shipped the Launch Builder. It generates GTM playbooks, outreach sequences, and campaign structures tuned to your specific market. Execution Automation work begins next week.",
  },
];
