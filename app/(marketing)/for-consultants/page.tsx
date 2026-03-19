import type { Metadata } from "next";
import { PersonaPage } from "@/components/marketing/persona-page";

export const metadata: Metadata = {
  title: "For Consultants | Vibepreneur",
  description:
    "Turn consulting expertise into scalable products. Vibepreneur helps consultants productize services, build recurring revenue, and launch structured offers.",
  alternates: { canonical: "/for-consultants" },
  openGraph: {
    title: "For Consultants | Vibepreneur",
    description: "Turn consulting expertise into scalable products.",
  },
};

export default function ForConsultantsPage() {
  return (
    <PersonaPage
      headline="Stop selling hours. Start building leverage."
      subheadline="Vibepreneur helps consultants turn repeatable client work into structured, scalable products that generate revenue without your constant presence."
      situation="You have deep domain expertise. You solve the same categories of problems for different clients. You know exactly what buyers need because you have heard it hundreds of times. The challenge is not insight. It is packaging that insight into something that scales beyond your personal bandwidth. Vibepreneur structures the transition from services to products, giving you a clear path from what you already know to an offer that works at scale."
      venturePaths={[
        {
          title: "Productised audit or assessment",
          problem:
            "Clients repeatedly ask you to evaluate the same areas. Each engagement starts from scratch.",
          offer:
            "A structured assessment framework that standardises your evaluation process and delivers consistent, high-value outputs at scale.",
          gtm: "LinkedIn thought leadership targeting your existing ICP, plus direct outreach to past clients for beta testing.",
        },
        {
          title: "Software-assisted workflow tool",
          problem:
            "Your consulting methodology follows a repeatable process that could be automated or software-enabled.",
          offer:
            "A niche tool that codifies your methodology so clients can self-serve or get guided results without your direct involvement.",
          gtm: "Content marketing around the problem your methodology solves, plus referral mechanics from satisfied consulting clients.",
        },
        {
          title: "Training or certification system",
          problem:
            "Teams want to learn your frameworks but cannot afford ongoing consulting engagements.",
          offer:
            "A structured training program with certification that packages your expertise into a scalable learning product.",
          gtm: "Partnership with industry associations and L&D departments at target companies.",
        },
      ]}
      outputs={[
        "Opportunity assessment from your consulting background",
        "Structured offer with pricing and buyer profile",
        "Competitive positioning against alternative solutions",
        "Landing page and lead capture system",
        "Outreach sequences for existing network",
        "Content strategy leveraging your expertise",
        "Growth experiments and traction tracking",
        "Daily progress briefs",
      ]}
      objections={[
        {
          question: "Will this compete with my consulting practice?",
          answer:
            "Products and services can complement each other. Many consultants use products as lead generation for high-touch engagements, or vice versa. Vibepreneur helps you design the relationship between your service and product offerings.",
        },
        {
          question:
            "I do not have time to build a product alongside client work.",
          answer:
            "Vibepreneur handles the structuring, asset creation, and execution planning. Your role is providing direction and making decisions. The system does the heavy lifting, designed for professionals with limited time.",
        },
        {
          question: "Do I need technical skills?",
          answer:
            "No. Vibepreneur produces structured outputs you can use directly or hand to any developer. If you want to build software, it generates build-ready specs. If you want to launch a service product, it creates everything you need without code.",
        },
      ]}
    />
  );
}
