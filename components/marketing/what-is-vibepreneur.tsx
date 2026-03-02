"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

export function WhatIsVibepreneur() {
  const { whatIsVibepreneur } = siteCopy;

  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-display-sm">
          {whatIsVibepreneur.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-neutral-600">
          {whatIsVibepreneur.definition}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-xl border border-neutral-200"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-6 py-4 font-semibold text-neutral-500">
                  {whatIsVibepreneur.comparison.left}
                </th>
                <th className="px-6 py-4 font-semibold text-brand-700">
                  {whatIsVibepreneur.comparison.right}
                </th>
              </tr>
            </thead>
            <tbody>
              {whatIsVibepreneur.comparison.items.map((row, i) => (
                <tr
                  key={i}
                  className={
                    i < whatIsVibepreneur.comparison.items.length - 1
                      ? "border-b border-neutral-100"
                      : ""
                  }
                >
                  <td className="px-6 py-4 text-neutral-500">{row.left}</td>
                  <td className="px-6 py-4 font-medium text-neutral-900">
                    {row.right}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </Section>
  );
}
