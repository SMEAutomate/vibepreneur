import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";

export const metadata: Metadata = {
  title: "Vibepreneur | Turn Expertise Into Scalable Products",
  description:
    "Transform real-world experience into scalable solutions with structured go-to-market and growth systems built in. For professionals displaced by AI who want to build, not just apply.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vibepreneur | Turn Expertise Into Scalable Products",
    description:
      "Transform real-world experience into scalable solutions with structured go-to-market and growth systems built in.",
    url: "https://vibepreneur.com",
  },
};
import { WaitlistTicker } from "@/components/marketing/waitlist-ticker";
import { TheShift } from "@/components/marketing/the-shift";
import { WhatIsVibepreneur } from "@/components/marketing/what-is-vibepreneur";
import { HowItWorksPreview } from "@/components/marketing/how-it-works-preview";
import { Differentiator } from "@/components/marketing/differentiator";
import { Modules } from "@/components/marketing/modules";
import { WhoItsFor } from "@/components/marketing/who-its-for";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { BuildingInPublic } from "@/components/marketing/building-in-public";
import { FinalCta } from "@/components/marketing/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WaitlistTicker />
      <TheShift />
      <WhatIsVibepreneur />
      <HowItWorksPreview />
      <Differentiator />
      <Modules />
      <WhoItsFor />
      <PricingPreview />
      <BuildingInPublic />
      <FinalCta />
    </>
  );
}
