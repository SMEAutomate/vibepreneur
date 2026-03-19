import type { Metadata } from "next";
import { DailyBriefContent } from "./daily-brief-content";

export const metadata: Metadata = {
  title: "Daily Brief | Vibepreneur",
  description:
    "Your business should move every day. Daily briefs show what changed, what shipped, what was learned, and what needs your input next.",
  alternates: { canonical: "/daily-brief" },
  openGraph: {
    title: "Daily Brief | Vibepreneur",
    description:
      "Daily briefs show what changed, what shipped, and what needs your input next.",
    url: "/daily-brief",
  },
};

export default function DailyBriefPage() {
  return <DailyBriefContent />;
}
