import { ShowcaseContent } from "./showcase-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase | Vibepreneur",
  description:
    "Example venture build paths showing how Vibepreneur structures businesses from real-world expertise across marketing, operations, finance, and more.",
  alternates: { canonical: "/showcase" },
  openGraph: {
    title: "Showcase | Vibepreneur",
    description: "Example venture build paths from real-world expertise.",
  },
};

export default function ShowcasePage() {
  return <ShowcaseContent />;
}
