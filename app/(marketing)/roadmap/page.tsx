import { RoadmapContent } from "./roadmap-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Follow our progress as we build Vibepreneur in public. See what we're working on and what's coming next.",
  alternates: { canonical: "/roadmap" },
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
