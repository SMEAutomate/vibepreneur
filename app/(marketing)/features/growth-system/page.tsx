import type { Metadata } from "next";
import { features } from "@/content/features";
import { FeaturePageContent } from "@/components/marketing/feature-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/site";

const feature = features.find((f) => f.slug === "growth-system")!;

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

export default function GrowthSystemPage() {
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
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: `${SITE_URL}/features`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: feature.name,
              item: `${SITE_URL}/features/${feature.slug}`,
            },
          ],
        }}
      />
      <FeaturePageContent feature={feature} />
    </>
  );
}
