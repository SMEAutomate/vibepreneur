import type { Metadata } from "next";
import { PersonaPage } from "@/components/marketing/persona-page";

export const metadata: Metadata = {
  title: "For Operators | Vibepreneur",
  description:
    "Turn operational expertise into niche tools and products. Vibepreneur helps operators build structured businesses from the workflow problems they see every day.",
  alternates: { canonical: "/for-operators" },
  openGraph: {
    title: "For Operators | Vibepreneur",
    description: "Turn operational expertise into niche tools and products.",
  },
};

export default function ForOperatorsPage() {
  return (
    <PersonaPage
      headline="You see the problem every day. Now build the solution."
      subheadline="Vibepreneur helps operators turn recurring workflow pain into structured products: niche tools, automation systems, and scalable service offers."
      situation="You run operations. You see where processes break, where teams waste time, and where existing tools fall short. You have tried to solve these problems internally. Now imagine solving them once and selling the solution to every company facing the same challenge. Vibepreneur takes your operational insight and turns it into a structured business: validated opportunity, buyer profile, offer design, and launch execution."
      venturePaths={[
        {
          title: "Niche workflow automation tool",
          problem:
            "A specific operational process in your industry relies on manual steps, spreadsheets, or cobbled-together tools.",
          offer:
            "A focused tool that automates the exact workflow you know is broken, designed for the buyers you already understand.",
          gtm: "Industry community engagement, LinkedIn content targeting ops leaders, and cold outreach to companies with the same pain.",
        },
        {
          title: "Compliance or tracking system",
          problem:
            "Regulatory requirements or operational tracking creates ongoing manual overhead.",
          offer:
            "A structured compliance or tracking system that reduces manual effort and ensures nothing falls through the cracks.",
          gtm: "Partner with industry associations, attend niche trade events, and create compliance audit lead magnets.",
        },
        {
          title: "Operational playbook as a service",
          problem:
            "Companies repeatedly struggle to set up or optimise a specific operational function.",
          offer:
            "A productised playbook with templates, checklists, and guided implementation for a specific operational area.",
          gtm: "Content marketing around operational excellence benchmarks, plus direct outreach to VPs of Operations.",
        },
      ]}
      outputs={[
        "Opportunity map from your operational experience",
        "Buyer profile and market validation signals",
        "Structured offer with pricing and packaging",
        "Competitive analysis against existing solutions",
        "Landing page and waitlist system",
        "GTM playbook with channel strategy",
        "Growth experiments and metrics tracking",
        "Daily briefs with next actions",
      ]}
      objections={[
        {
          question: "I am not a technical founder. Can I build software?",
          answer:
            "Vibepreneur generates build-ready specs and product blueprints. You can hand these to a developer, use AI-assisted building tools, or start with a service-first version. The platform designs the product. You choose how to build it.",
        },
        {
          question: "Is this only for SaaS products?",
          answer:
            "No. Vibepreneur supports software tools, service products, templates, frameworks, and hybrid models. The system adapts to whatever business model fits your opportunity best.",
        },
        {
          question: "How is this different from just hiring a consultant?",
          answer:
            "Vibepreneur provides structured execution at a fraction of the cost, with continuous support through daily briefs. A consultant gives you advice. Vibepreneur gives you a system that keeps moving.",
        },
      ]}
    />
  );
}
