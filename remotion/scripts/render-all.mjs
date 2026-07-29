#!/usr/bin/env node
import { execSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";

const slugs = [
  "resume-to-revenue",
  "seven-day-founder",
  "browse-vs-build",
  "manifesto",
  "opportunity-engine",
  "positioning-canvas",
  "launch-builder",
  "daily-brief",
  "cockpit-tour",
  "ai-build-prompts",
  "consultant-productized",
  "operator-side-bet",
  "domain-expert",
  "not-another-course",
  "pov-tabs",
  "things-i-no-longer-do",
  "red-flags",
  "ui-satisfaction",
  "four-questions",
  "seven-days-calendar",
  "customer-story",
  "behind-the-score",
  "comparison",
  "welcome",
  "changelog-update",
  "re-engagement",
];

const formats = ["16x9", "9x16"];
const outRoot = "out";
if (!existsSync(outRoot)) mkdirSync(outRoot, { recursive: true });

for (const slug of slugs) {
  for (const fmt of formats) {
    const id = `${slug}-${fmt}`;
    const outPath = `${outRoot}/${id}.mp4`;
    console.log(`\n→ Rendering ${id}`);
    try {
      execSync(`npx remotion render src/index.ts ${id} ${outPath}`, {
        stdio: "inherit",
      });
    } catch (e) {
      console.error(`Failed: ${id}`);
    }
  }
}
console.log("\nDone.");
