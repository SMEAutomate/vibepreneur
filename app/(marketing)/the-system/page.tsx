import type { Metadata } from "next";
import { TheSystemContent } from "./the-system-content";

export const metadata: Metadata = {
  title: "The System | Vibepreneur",
  description:
    "Six operating layers that take you from expertise to running business. Opportunity Engine, Offer Studio, Launch Builder, Growth Engine, Execution Cockpit, and Daily Briefs.",
  alternates: { canonical: "/the-system" },
  openGraph: {
    title: "The System | Vibepreneur",
    description:
      "Six operating layers that take you from expertise to running business.",
    url: "/the-system",
  },
};

export default function TheSystemPage() {
  return <TheSystemContent />;
}
