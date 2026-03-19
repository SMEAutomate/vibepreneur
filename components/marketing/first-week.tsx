"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

export function FirstWeek() {
  const { firstWeek } = siteCopy;

  return (
    <Section background="light">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-display-sm">{firstWeek.headline}</h2>
        <p className="mt-4 text-neutral-600">{firstWeek.subheadline}</p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <div className="relative">
          <div className="absolute left-[23px] top-0 h-full w-px bg-brand-100" />

          <div className="space-y-1">
            {firstWeek.days.map((item, i) => (
              <motion.div
                key={item.day}
                className="relative flex gap-5 py-4"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-xs font-bold text-brand-700">
                  {item.day.replace("Day ", "")}
                </div>
                <div className="pt-1">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
