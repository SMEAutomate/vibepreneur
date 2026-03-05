"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ShowcaseScreenRenderer } from "@/components/showcase/ShowcaseScreenRenderer";
import { SHOWCASE_PROJECTS } from "@/content/showcase";

const ACCENT_BG: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-700",
  emerald: "bg-emerald-50 text-emerald-700",
  violet: "bg-violet-50 text-violet-700",
  cyan: "bg-cyan-50 text-cyan-700",
  amber: "bg-amber-50 text-amber-700",
  slate: "bg-slate-100 text-slate-700",
  rose: "bg-rose-50 text-rose-700",
  sky: "bg-sky-50 text-sky-700",
  lime: "bg-lime-50 text-lime-700",
  stone: "bg-stone-100 text-stone-700",
  red: "bg-red-50 text-red-700",
  purple: "bg-purple-50 text-purple-700",
  blue: "bg-blue-50 text-blue-700",
};

const sectors = [
  "All",
  ...Array.from(new Set(SHOWCASE_PROJECTS.map((p) => p.sector))),
];

export function ShowcaseContent() {
  const [activeSector, setActiveSector] = useState("All");

  const filtered =
    activeSector === "All"
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((p) => p.sector === activeSector);

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-md">Built with Vibepreneur</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Real products built by real operators. From idea to paying
            customers, see how 13 builders turned domain expertise into SaaS
            businesses.
          </p>
        </div>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeSector === sector
                  ? "bg-brand-700 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/showcase/${project.slug}`}
                className="group block h-full"
              >
                <div
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-100 bg-white transition-all hover:shadow-md"
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
                >
                  <div className="relative h-36 overflow-hidden border-b border-neutral-100 bg-neutral-50">
                    <div
                      className="origin-top-left"
                      style={{
                        transform: "scale(0.25)",
                        width: "400%",
                        height: "400%",
                      }}
                    >
                      <ShowcaseScreenRenderer
                        componentName={
                          project.screens.find((s) => s.type === "product")
                            ?.componentName ?? project.screens[0].componentName
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between">
                      <div>
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium ${ACCENT_BG[project.accentColor] ?? "bg-neutral-100 text-neutral-600"}`}
                        >
                          {project.sector}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-neutral-900 transition-colors group-hover:text-brand-700">
                          {project.productName}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                      {project.tagline}
                    </p>

                    <div className="mt-4 flex gap-3">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg bg-neutral-50 px-3 py-2"
                        >
                          <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                            {m.label}
                          </p>
                          <p className="mt-0.5 text-sm font-semibold text-neutral-900">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-neutral-100 pt-3">
                      <p className="text-xs text-neutral-400">
                        <span className="font-semibold text-neutral-600">
                          Founder
                        </span>
                        {project.builderRole.replace(/^Founder,?\s*/, "") &&
                          `, ${project.builderRole.replace(/^Founder,?\s*/, "")}`}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">Ready to build yours?</h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and start turning your expertise into a product.
          </p>
          <div className="mt-6">
            <Button href="/waitlist" size="lg">
              Join Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
