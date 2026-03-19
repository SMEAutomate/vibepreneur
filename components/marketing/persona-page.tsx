"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface VenturePath {
  title: string;
  problem: string;
  offer: string;
  gtm: string;
}

export interface PersonaPageProps {
  headline: string;
  subheadline: string;
  situation: string;
  venturePaths: VenturePath[];
  outputs: string[];
  objections: { question: string; answer: string }[];
}

export function PersonaPage({
  headline,
  subheadline,
  situation,
  venturePaths,
  outputs,
  objections,
}: PersonaPageProps) {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-md">{headline}</h1>
          <p className="mt-4 text-lg text-neutral-600">{subheadline}</p>
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-display-sm">Why Vibepreneur fits</h2>
          <p className="mt-4 leading-relaxed text-neutral-600">{situation}</p>
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">
          Venture paths built for you
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {venturePaths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card className="flex h-full flex-col p-6">
                <h3 className="text-base font-semibold text-neutral-900">
                  {path.title}
                </h3>
                <div className="mt-4 flex-1 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Problem
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {path.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Offer
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {path.offer}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      GTM path
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">{path.gtm}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-display-sm">What you get</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {outputs.map((output, i) => (
              <motion.div
                key={output}
                className="flex items-start gap-2.5 rounded-lg bg-white p-4"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-neutral-700">{output}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-display-sm">Common questions</h2>
          <div className="mt-8 space-y-4">
            {objections.map((obj) => (
              <div
                key={obj.question}
                className="border-b border-neutral-100 pb-4"
              >
                <h3 className="text-sm font-semibold text-neutral-900">
                  {obj.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {obj.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Turn your expertise into ownership.
          </h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and see what Vibepreneur can build from your
            background.
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
