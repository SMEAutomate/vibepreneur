import type { Metadata } from "next";
import { features } from "@/content/features";
import { FeaturePageContent } from "@/components/marketing/feature-page-content";
import { JsonLd } from "@/components/seo/json-ld";

const feature = features.find((f) => f.slug === "positioning-engine")!;

export const metadata: Metadata = {
  title: feature.name,
  description: feature.description,
  alternates: { canonical: `/features/${feature.slug}` },
  openGraph: {
    title: feature.name,
    description: feature.description,
    url: `/features/${feature.slug}`,
  },
};

export default function PositioningEnginePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://vibepreneur.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: "https://vibepreneur.com/features",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: feature.name,
              item: `https://vibepreneur.com/features/${feature.slug}`,
            },
          ],
        }}
      />
      <FeaturePageContent feature={feature} />
    </>
  );
}
