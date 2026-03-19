import { RoadmapContent } from "./roadmap-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | Vibepreneur",
  description:
    "Building the venture operating system in public. See what we are shipping, what is next, and the six phases of product maturity.",
  alternates: { canonical: "/roadmap" },
  openGraph: {
    title: "Roadmap | Vibepreneur",
    description: "Building the venture operating system in public.",
  },
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
