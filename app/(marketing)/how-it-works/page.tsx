import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { howItWorksCopy } from "@/content/how-it-works";
import { AnimatedTimeline } from "./animated-timeline";
import { TechnicalPillars } from "./technical-pillars";
import { StaggeredExamples } from "./staggered-examples";
import { HowItWorksComparison } from "./how-it-works-comparison";
import { ExampleJourneys } from "./example-journeys";
import { OpportunityDemo } from "@/components/marketing/opportunity-demo";
import { OutreachDemo } from "@/components/marketing/outreach-demo";
import { GrowthExperimentsDemo } from "@/components/marketing/growth-experiments-demo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Vibepreneur",
  description:
    "From expertise to operating business in six structured stages. See how Vibepreneur turns professional experience into validated, growing ventures.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Vibepreneur",
    description: "Six structured stages from expertise to operating business.",
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  const { hero, stages } = howItWorksCopy;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to turn your expertise into a business with Vibepreneur",
            description: hero.subheadline,
            step: stages.map((stage, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: `${stage.title}: ${stage.output}`,
              text: stage.description,
            })),
          },
          {
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
                name: "How It Works",
                item: "https://vibepreneur.com/how-it-works",
              },
            ],
          },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-600">
            Experience → Opportunity → Offer → Launch → Growth → Daily Operation
          </p>
          <h1 className="mt-4 text-display-md">{hero.headline}</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {hero.subheadline}
          </p>
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-center text-display-sm">
          What you get at each stage
        </h2>
        <div className="mt-16">
          <AnimatedTimeline />
        </div>
      </Section>

      <OpportunityDemo />

      <Section background="light">
        <HowItWorksComparison />
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">
          What a launch sequence looks like
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          The system generates multi-channel outreach sequences tailored to your
          offer and buyer. Here is an example for the HR Onboarding venture.
        </p>
        <div className="mt-10">
          <OutreachDemo />
        </div>
      </Section>

      <Section background="light">
        <TechnicalPillars />
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">
          How the Growth Engine tracks experiments
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          Every growth channel is a structured experiment with a hypothesis,
          metric, and result. The system tracks what works and cuts what does
          not.
        </p>
        <div className="mt-10">
          <GrowthExperimentsDemo />
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-center text-display-sm">Example journeys</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Three professionals who turned domain expertise into structured
          ventures using the system.
        </p>
        <ExampleJourneys />
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">See it in action</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Two detailed examples of how professionals could turn their expertise
          into scalable ventures.
        </p>
        <StaggeredExamples />
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Ready to see what you could build?
          </h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and get personalised venture directions based on
            your experience.
          </p>
          <div className="mt-8">
            <Button href="/waitlist" size="lg">
              Start My Business System
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
