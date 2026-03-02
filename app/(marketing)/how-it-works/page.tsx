import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { InlineScreenMock } from "@/components/marketing/inline-screen-mock";
import { howItWorksCopy } from "@/content/how-it-works";
import { AnimatedTimeline } from "./animated-timeline";
import { TechnicalPillars } from "./technical-pillars";
import { StaggeredExamples } from "./staggered-examples";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From insight to growth: how Vibepreneur turns your expertise into scalable solutions with built-in distribution.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  const { hero, narrative } = howItWorksCopy;

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-md">{hero.headline}</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {hero.subheadline}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <InlineScreenMock
            componentName="HomeOverview"
            caption="Your strategic dashboard: opportunities, GTM moves, and launch readiness at a glance."
          />
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-3xl space-y-12">
          {narrative.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-neutral-900">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-neutral-600">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">
          What you get at each stage
        </h2>
        <div className="mt-16">
          <AnimatedTimeline />
        </div>
      </Section>

      <Section background="light">
        <TechnicalPillars />
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">See it in action</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Two real examples of how professionals could turn their expertise into
          scalable solutions.
        </p>
        <StaggeredExamples />
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Ready to see what you could build?
          </h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and get 3 personalised solution ideas based on
            your experience.
          </p>
          <div className="mt-8">
            <Button href="/waitlist" size="lg">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
