"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { SolutionCardMock } from "./solution-card-mock";
import { GtmPlaybookMock } from "./gtm-playbook-mock";
import { siteCopy } from "@/content/copy";

export function HowItWorksPreview() {
  const { howItWorks } = siteCopy;

  return (
    <Section background="light">
      <h2 className="text-center text-display-sm">{howItWorks.headline}</h2>
      <div className="bg-dotgrid mt-16 grid gap-8 rounded-xl p-4 md:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card className="relative h-full">
              <span className="text-4xl font-bold text-brand-100">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 hidden grid-cols-2 gap-8 lg:grid">
        <SolutionCardMock />
        <GtmPlaybookMock />
      </div>
    </Section>
  );
}
