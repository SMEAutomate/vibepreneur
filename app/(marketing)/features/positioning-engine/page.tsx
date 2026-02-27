import type { Metadata } from "next";
import { features } from "@/content/features";
import { FeaturePageContent } from "@/components/marketing/feature-page-content";

const feature = features.find((f) => f.slug === "positioning-engine")!;

export const metadata: Metadata = {
  title: `${feature.name} | Vibepreneur`,
  description: feature.description,
};

export default function PositioningEnginePage() {
  return <FeaturePageContent feature={feature} />;
}
