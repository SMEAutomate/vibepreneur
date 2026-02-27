import { DemoGallery } from "@/components/demo/DemoGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product UI Concepts | Vibepreneur",
  description: "Internal review: 20 product UI mockups for Vibepreneur.",
  robots: "noindex, nofollow",
};

export default function DemoPage() {
  return <DemoGallery />;
}
