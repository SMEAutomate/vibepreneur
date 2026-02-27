import { Hero } from "@/components/marketing/hero";
import { TheShift } from "@/components/marketing/the-shift";
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
      <TheShift />
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
