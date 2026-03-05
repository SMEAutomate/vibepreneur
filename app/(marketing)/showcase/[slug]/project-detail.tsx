"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ShowcaseScreenRenderer } from "@/components/showcase/ShowcaseScreenRenderer";
import type { ShowcaseProject } from "@/content/showcase";

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

const ACCENT_TAB: Record<string, string> = {
  indigo: "bg-indigo-600",
  emerald: "bg-emerald-600",
  violet: "bg-violet-600",
  cyan: "bg-cyan-600",
  amber: "bg-amber-600",
  slate: "bg-slate-600",
  rose: "bg-rose-600",
  sky: "bg-sky-600",
  lime: "bg-lime-600",
  stone: "bg-stone-600",
  red: "bg-red-600",
  purple: "bg-purple-600",
  blue: "bg-blue-600",
};

interface ProjectDetailProps {
  project: ShowcaseProject;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const productScreens = project.screens.filter((s) => s.type === "product");
  const [activeScreen, setActiveScreen] = useState(0);
  const screen = productScreens[activeScreen];

  return (
    <>
      <Section>
        <Link
          href="/showcase"
          className="inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-700"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          All projects
        </Link>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="flex-1">
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${ACCENT_BG[project.accentColor] ?? "bg-neutral-100 text-neutral-600"}`}
            >
              {project.sector}
            </span>
            <h1 className="mt-3 text-display-sm">{project.productName}</h1>
            <p className="mt-2 text-lg text-neutral-600">{project.tagline}</p>

            <p className="mt-6 text-sm text-neutral-500">
              <span className="font-semibold text-neutral-700">Founder</span>
              {project.builderRole.replace(/^Founder,?\s*/, "") &&
                `, ${project.builderRole.replace(/^Founder,?\s*/, "")}`}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-neutral-600">
              {project.story}
            </p>
          </div>

          <div className="flex shrink-0 gap-4 lg:gap-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-2xl font-bold text-neutral-900">{m.value}</p>
                <p className="mt-1 text-xs text-neutral-500">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="flex flex-wrap gap-2">
          {productScreens.map((s, i) => (
            <button
              key={s.componentName}
              onClick={() => setActiveScreen(i)}
              className="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              {activeScreen === i && (
                <motion.div
                  layoutId="showcase-tab"
                  className={`absolute inset-0 rounded-lg ${ACCENT_TAB[project.accentColor] ?? "bg-brand-600"}`}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeScreen === i ? "text-white" : "text-neutral-600"
                }`}
              >
                {s.title}
              </span>
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-neutral-500">{screen.description}</p>

        <div className="mt-6">
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="ml-3 text-[10px] text-neutral-400">
                {screen.type === "vibepreneur"
                  ? "app.vibepreneur.com"
                  : `app.${project.slug}.io`}
              </span>
            </div>
            <div className="relative h-[480px] overflow-hidden sm:h-[540px] lg:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={screen.componentName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="origin-top-left"
                  style={{
                    transform: "scale(0.7)",
                    width: "142.86%",
                    height: "142.86%",
                  }}
                >
                  <ShowcaseScreenRenderer
                    componentName={screen.componentName}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Build something like {project.productName}
          </h2>
          <p className="mt-4 text-neutral-600">
            Vibepreneur helps you go from domain expertise to a validated
            product. Join the waitlist and start building.
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
