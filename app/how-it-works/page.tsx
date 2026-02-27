import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { howItWorksCopy } from "@/content/how-it-works";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Vibepreneur",
  description:
    "From insight to growth: how Vibepreneur turns your expertise into scalable solutions with built-in distribution.",
};

export default function HowItWorksPage() {
  const { hero, narrative, stages, solutionExamples } = howItWorksCopy;

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-md">{hero.headline}</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {hero.subheadline}
          </p>
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
        <div className="mt-16 space-y-8">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="grid items-start gap-8 md:grid-cols-12"
            >
              <div className="md:col-span-1">
                <span className="text-4xl font-bold text-brand-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {stage.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600">
                  Output: {stage.output}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="leading-relaxed text-neutral-600">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-center text-display-sm">See it in action</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
          Two real examples of how professionals could turn their expertise into
          scalable solutions.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {solutionExamples.map((example) => (
            <Card key={example.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900">
                {example.title}
              </h3>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Problem
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {example.problem}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Buyer
                </p>
                <p className="mt-1 text-sm text-neutral-600">{example.buyer}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Offer
                </p>
                <p className="mt-1 text-sm text-neutral-600">{example.offer}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Distribution wedge
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {example.distributionWedge}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  First 3 moves
                </p>
                <ol className="mt-1 space-y-1">
                  {example.firstMoves.map((move, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-brand-50 text-[10px] font-bold text-brand-700">
                        {j + 1}
                      </span>
                      {move}
                    </li>
                  ))}
                </ol>
              </div>
            </Card>
          ))}
        </div>
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
