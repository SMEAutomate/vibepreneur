import type { Metadata } from "next";
import { features } from "@/content/features";
import { FeaturePageContent } from "@/components/marketing/feature-page-content";

const feature = features.find((f) => f.slug === "growth-system")!;

export const metadata: Metadata = {
  title: `${feature.name} — Vibepreneur`,
  description: feature.description,
};

export default function GrowthSystemPage() {
  return <FeaturePageContent feature={feature} />;
}
