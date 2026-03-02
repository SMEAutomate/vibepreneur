import type { Metadata } from "next";
import { ThanksContent } from "./thanks-content";

export const metadata: Metadata = {
  title: "You're In",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return <ThanksContent />;
}
