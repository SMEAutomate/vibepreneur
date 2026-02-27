import type { Metadata } from "next";
import { features } from "@/content/features";
import { FeaturePageContent } from "@/components/marketing/feature-page-content";

const feature = features.find((f) => f.slug === "distribution")!;

export const metadata: Metadata = {
  title: `${feature.name} | Vibepreneur`,
  description: feature.description,
};

export default function DistributionPage() {
  return <FeaturePageContent feature={feature} />;
}
