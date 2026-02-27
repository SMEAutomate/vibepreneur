"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AnimatedHeadline } from "@/components/ui/animated-headline";
import { GrowthDashboardMock } from "./growth-dashboard-mock";
import { siteCopy } from "@/content/copy";

export function WhoItsFor() {
  const { whoItsFor } = siteCopy;

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <AnimatedHeadline
            text={whoItsFor.headline}
            className="text-display-sm"
          />
          <p className="mt-4 text-lg text-neutral-600">{whoItsFor.body}</p>
          <ul className="mt-8 space-y-4">
            {whoItsFor.profiles.map((profile, i) => (
              <motion.li
                key={profile}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span className="text-neutral-700">{profile}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <GrowthDashboardMock />
        </div>
      </div>
    </Section>
  );
}
