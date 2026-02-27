import type { Metadata } from "next";
import { features } from "@/content/features";
import { FeaturePageContent } from "@/components/marketing/feature-page-content";

const feature = features.find((f) => f.slug === "insight-engine")!;

export const metadata: Metadata = {
  title: `${feature.name} — Vibepreneur`,
  description: feature.description,
};

export default function InsightEnginePage() {
  return <FeaturePageContent feature={feature} />;
}
