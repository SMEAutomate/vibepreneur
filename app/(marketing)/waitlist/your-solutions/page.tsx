import type { Metadata } from "next";
import { SolutionsContent } from "./solutions-content";

export const metadata: Metadata = {
  title: "Your Solution Ideas",
  robots: { index: false, follow: false },
};

export default function YourSolutionsPage() {
  return <SolutionsContent />;
}
