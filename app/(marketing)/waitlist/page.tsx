import type { Metadata } from "next";
import { Suspense } from "react";
import { WaitlistContent } from "./waitlist-content";

export const metadata: Metadata = {
  title: "Join the Waitlist | Vibepreneur",
  description:
    "Get early access to Vibepreneur and receive personalised venture directions based on your professional experience.",
  openGraph: {
    title: "Join the Waitlist | Vibepreneur",
    description:
      "Get early access and your first tailored business directions.",
  },
  alternates: {
    canonical: "/waitlist",
  },
};

export default function WaitlistPage() {
  return (
    <Suspense>
      <WaitlistContent />
    </Suspense>
  );
}
