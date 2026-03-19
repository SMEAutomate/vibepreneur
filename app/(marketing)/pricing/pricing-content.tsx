"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaqItem } from "@/components/ui/faq-item";
import { pricingTiers, pricingFaq, featureMatrix } from "@/content/pricing";

const tierStages = [
  {
    stage: "Explore",
    description:
      "Discover what you could build from your professional background.",
    when: "You are curious about turning expertise into a business but have not committed yet.",
    upgrade: "Upgrade when you have found an opportunity worth pursuing.",
  },
  {
    stage: "Build & Launch",
    description:
      "Structure, build, and launch one complete venture with full execution support.",
    when: "You have identified an opportunity and are ready to take it to market.",
    upgrade:
      "Upgrade when you want to run multiple experiments or ventures in parallel.",
  },
  {
    stage: "Scale",
    description:
      "Run multiple ventures, advanced experiments, and compound growth systems.",
    when: "You have early traction and want to accelerate or diversify.",
    upgrade:
      "Upgrade when you need team collaboration or portfolio management.",
  },
  {
    stage: "Portfolio",
    description:
      "Manage a portfolio of ventures with team collaboration and advanced workflows.",
    when: "You are running multiple ventures and need cross-venture visibility and collaboration.",
    upgrade: null,
  },
];

export function PricingContent() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-md">Start free. Scale with traction.</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Every tier matches a stage in your business journey. Explore at no
            cost. Upgrade when you are ready to build, launch, and grow.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Card
                className={`flex h-full flex-col ${tier.highlighted ? "border-brand-200 ring-2 ring-brand-100" : ""}`}
              >
                {tier.highlighted && (
                  <span className="mb-3 inline-block w-fit rounded-full bg-brand-600 px-3 py-0.5 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {tier.name}
                  </h3>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                    {tier.capacity}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-neutral-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-neutral-500">
                    /{tier.period}
                  </span>
                </div>
                <p className="mt-4 text-sm text-neutral-500">{tier.idealFor}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-600"
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
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    href={`/waitlist?tier=${tier.name.toLowerCase()}`}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-display-sm">
            What happens at each stage
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Each tier unlocks more of the Venture OS as your business grows.
          </p>
          <div className="mt-10 space-y-4">
            {tierStages.map((ts, i) => (
              <motion.div
                key={ts.stage}
                className="rounded-lg border border-neutral-100 bg-white p-5"
                style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-50 px-3 py-0.5 text-xs font-semibold text-brand-700">
                    {pricingTiers[i].name} ({pricingTiers[i].price})
                  </span>
                  <span className="text-sm font-semibold text-neutral-900">
                    {ts.stage}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  {ts.description}
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  <span className="font-medium">Best for:</span> {ts.when}
                </p>
                {ts.upgrade && (
                  <p className="mt-1 text-xs text-brand-600">{ts.upgrade}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-display-sm">Compare all features</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            See exactly what each tier includes.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-3 pr-4 font-medium text-neutral-500">
                    Feature
                  </th>
                  {pricingTiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="px-4 py-3 text-center font-semibold text-neutral-900"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((row) => (
                  <tr key={row.feature} className="border-b border-neutral-50">
                    <td className="py-3 pr-4 text-neutral-700">
                      {row.feature}
                    </td>
                    {(["free", "pro", "max", "ultra"] as const).map((tier) => {
                      const val = row[tier];
                      return (
                        <td
                          key={tier}
                          className="px-4 py-3 text-center text-neutral-600"
                        >
                          {val === true ? (
                            <svg
                              className="mx-auto h-4 w-4 text-brand-600"
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
                          ) : val === false ? (
                            <span className="text-neutral-300">&mdash;</span>
                          ) : (
                            <span className="text-xs font-medium">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-display-sm">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            {pricingFaq.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
