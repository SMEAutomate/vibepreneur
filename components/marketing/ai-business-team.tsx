"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { siteCopy } from "@/content/copy";

const roleIcons = [
  "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9",
  "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
];

export function AIBusinessTeam() {
  const { aiBusinessTeam } = siteCopy;

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-display-sm">{aiBusinessTeam.headline}</h2>
        <p className="mt-4 text-lg text-neutral-600">{aiBusinessTeam.body}</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aiBusinessTeam.roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={
              i === 4
                ? "sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:max-w-none"
                : ""
            }
          >
            <Card className="h-full p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                <svg
                  className="h-5 w-5 text-brand-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={roleIcons[i]}
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {role.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {role.description}
              </p>
              <p className="mt-3 text-sm font-medium text-brand-700">
                {role.benefit}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-400">
        Behind the scenes, specialized AI workflows handle research,
        structuring, asset creation, and growth execution.
      </p>
    </Section>
  );
}
