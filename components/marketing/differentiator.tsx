"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AnimatedHeadline } from "@/components/ui/animated-headline";
import { PositioningCanvasMock } from "./positioning-canvas-mock";
import { siteCopy } from "@/content/copy";

export function Differentiator() {
  const { differentiator } = siteCopy;

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AnimatedHeadline
            text={differentiator.headline}
            className="text-display-sm"
          />
          <p className="mt-4 text-lg text-neutral-600">{differentiator.body}</p>
        </div>
        <div>
          <ul className="space-y-4">
            {differentiator.bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <svg
                    className="h-3 w-3 text-brand-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-neutral-700">{bullet}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 hidden lg:block">
            <PositioningCanvasMock />
          </div>
        </div>
      </div>
    </Section>
  );
}
