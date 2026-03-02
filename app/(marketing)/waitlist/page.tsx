import type { Metadata } from "next";
import { WaitlistContent } from "./waitlist-content";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Be first in line when Vibepreneur launches. Get 3 personalised solution ideas based on your professional experience.",
  openGraph: {
    title: "Join the Waitlist | Vibepreneur",
    description:
      "Be first in line when Vibepreneur launches. Get 3 personalised solution ideas based on your professional experience.",
  },
  alternates: {
    canonical: "/waitlist",
  },
};

export default function WaitlistPage() {
  return <WaitlistContent />;
}
