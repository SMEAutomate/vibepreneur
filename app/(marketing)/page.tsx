import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { WaitlistTicker } from "@/components/marketing/waitlist-ticker";
import { WhatIsVibepreneur } from "@/components/marketing/what-is-vibepreneur";
import { FirstWeek } from "@/components/marketing/first-week";
import { DualPath } from "@/components/marketing/dual-path";
import { WhatActuallyHappens } from "@/components/marketing/what-actually-happens";
import { WakeUpToProgress } from "@/components/marketing/wake-up-to-progress";
import { VentureOS } from "@/components/marketing/venture-os";
import { PositioningDemo } from "@/components/marketing/positioning-demo";
import { AIBusinessTeam } from "@/components/marketing/ai-business-team";
import { WhatYouOwn } from "@/components/marketing/what-you-own";
import { ExecutionFeed } from "@/components/marketing/execution-feed";
import { BuiltFor } from "@/components/marketing/built-for";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { BuildingInPublic } from "@/components/marketing/building-in-public";
import { FinalCta } from "@/components/marketing/final-cta";

export const metadata: Metadata = {
  title: "Vibepreneur | Turn Expertise Into a Business That Grows With You",
  description:
    "Vibepreneur is the venture operating system that helps professionals turn experience into structured, scalable businesses with product strategy, launch assets, and growth execution built in.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vibepreneur | Turn Expertise Into a Business That Grows With You",
    description:
      "Turn your expertise, role history, or idea into a real business system with product strategy, launch assets, and growth execution built in.",
    url: "https://vibepreneur.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WaitlistTicker />
      <WhatIsVibepreneur />
      <FirstWeek />
      <DualPath />
      <WhatActuallyHappens />
      <WakeUpToProgress />
      <VentureOS />
      <PositioningDemo />
      <AIBusinessTeam />
      <WhatYouOwn />
      <ExecutionFeed />
      <BuiltFor />
      <PricingPreview />
      <BuildingInPublic />
      <FinalCta />
    </>
  );
}
