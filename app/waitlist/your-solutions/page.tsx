"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  generateSolutions,
  getRoleLabel,
  type GeneratedSolution,
} from "@/lib/solutionGenerator";

function SolutionCard({
  solution,
  index,
}: {
  solution: GeneratedSolution;
  index: number;
}) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
          {index + 1}
        </span>
        <h3 className="text-base font-semibold text-neutral-900">
          Solution {index + 1}
        </h3>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Problem
        </p>
        <p className="mt-1 text-sm text-neutral-600">{solution.problem}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Buyer
        </p>
        <p className="mt-1 text-sm text-neutral-600">{solution.buyer}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Offer
        </p>
        <p className="mt-1 text-sm text-neutral-600">{solution.offer}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Pricing model
        </p>
        <p className="mt-1 text-sm text-neutral-600">{solution.pricingModel}</p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Distribution wedge
        </p>
        <p className="mt-1 text-sm text-neutral-600">
          {solution.distributionWedge}
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          First 3 traction moves
        </p>
        <ol className="mt-2 space-y-2">
          {solution.firstMoves.map((move, j) => (
            <li
              key={j}
              className="flex items-start gap-2 text-sm text-neutral-600"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-50 text-xs font-bold text-brand-700">
                {j + 1}
              </span>
              {move}
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
}

function SolutionsContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") ?? "marketing";
  const industry = searchParams.get("industry") ?? undefined;

  const solutions = generateSolutions(role, industry);
  const roleLabel = getRoleLabel(role);

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-brand-600">
            Based on your {roleLabel} experience
          </p>
          <h1 className="mt-2 text-display-md">
            3 scalable solutions you could build
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            These are real market gaps that someone with your background is
            uniquely qualified to address. Each includes a clear path to your
            first customers.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <SolutionCard key={i} solution={solution} index={i} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Ready to take one of these to market?
          </h2>
          <p className="mt-4 text-neutral-600">
            When Vibepreneur launches, you&apos;ll be able to turn any of these
            into a fully positioned solution with go-to-market and growth
            systems built in.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
            <Button href="/how-it-works">See How It Works</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export default function YourSolutionsPage() {
  return (
    <Suspense
      fallback={
        <Section>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-display-md">Loading your solutions...</h1>
          </div>
        </Section>
      }
    >
      <SolutionsContent />
    </Suspense>
  );
}
