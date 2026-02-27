import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { features } from "@/content/features";
import { mockScreens } from "@/lib/mockScreens";
import { ScreenPageContent } from "@/components/marketing/screen-page-content";

interface Props {
  params: Promise<{ slug: string; screen: string }>;
}

function resolveParams(slug: string, screenId: string) {
  const feature = features.find((f) => f.slug === slug);
  if (!feature) return null;

  const screen = mockScreens.find(
    (s) => s.id === screenId && feature.screenNames.includes(s.componentName)
  );
  if (!screen) return null;

  const featureScreens = feature.screenNames
    .map((name) => mockScreens.find((s) => s.componentName === name))
    .filter(Boolean);

  return { feature, screen, featureScreens };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, screen } = await params;
  const resolved = resolveParams(slug, screen);
  if (!resolved) return {};

  return {
    title: `${resolved.screen.title} | ${resolved.feature.name} | Vibepreneur`,
    description: resolved.screen.description,
  };
}

export async function generateStaticParams() {
  const params: { slug: string; screen: string }[] = [];

  for (const feature of features) {
    for (const componentName of feature.screenNames) {
      const screen = mockScreens.find((s) => s.componentName === componentName);
      if (screen) {
        params.push({ slug: feature.slug, screen: screen.id });
      }
    }
  }

  return params;
}

export default async function ScreenPage({ params }: Props) {
  const { slug, screen: screenId } = await params;
  const resolved = resolveParams(slug, screenId);
  if (!resolved) notFound();

  const { feature, screen, featureScreens } = resolved;

  return (
    <ScreenPageContent
      feature={feature}
      screen={screen}
      featureScreens={featureScreens as typeof mockScreens}
    />
  );
}
