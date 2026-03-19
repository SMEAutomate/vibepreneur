"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/content/pricing";

export function PricingPreview() {
  return (
    <Section background="light">
      <h2 className="text-center text-display-sm">
        Start free. Scale with traction.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
        Explore opportunities at no cost. Upgrade when you are ready to build,
        launch, and grow.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Card
              className={`flex h-full flex-col ${tier.highlighted ? "border-brand-200 ring-1 ring-brand-100" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {tier.name}
                  </h3>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                    {tier.capacity}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-neutral-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-neutral-500">
                    /{tier.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-neutral-500">{tier.idealFor}</p>
              </div>

              <ul className="mt-6 flex-1 space-y-2">
                {tier.features.slice(0, 4).map((feature) => (
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
                  href="/waitlist"
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="sm"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-500">
        <Link href="/pricing" className="underline hover:text-neutral-700">
          View full pricing details
        </Link>
      </p>
    </Section>
  );
}
