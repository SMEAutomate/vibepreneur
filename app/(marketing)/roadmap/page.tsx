import { RoadmapContent } from "./roadmap-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | Vibepreneur",
  description: "Follow our progress. We build in public.",
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
