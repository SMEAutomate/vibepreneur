import { ShowcaseContent } from "./showcase-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase | Vibepreneur",
  description:
    "See what real users are building with Vibepreneur. 13 community projects across marketing, sales, operations, and more.",
  alternates: { canonical: "/showcase" },
};

export default function ShowcasePage() {
  return <ShowcaseContent />;
}
