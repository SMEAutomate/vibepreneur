import type { Metadata } from "next";
import { PersonaPage } from "@/components/marketing/persona-page";

export const metadata: Metadata = {
  title: "For Corporate Professionals | Vibepreneur",
  description:
    "Turn your career expertise into a business you own. Vibepreneur helps corporate professionals build structured ventures from domain knowledge.",
  alternates: { canonical: "/for-corporate-professionals" },
  openGraph: {
    title: "For Corporate Professionals | Vibepreneur",
    description: "Turn your career expertise into a business you own.",
  },
};

export default function ForCorporateProfessionalsPage() {
  return (
    <PersonaPage
      headline="Your career built the expertise. Now own it."
      subheadline="Vibepreneur helps corporate professionals turn years of domain knowledge into structured businesses, without leaving your job to figure it out alone."
      situation="You have spent years developing deep expertise in your field. You see where processes break, where buyers overpay for poor solutions, and where the market has gaps nobody is filling. But turning that knowledge into a business feels overwhelming: what to build, how to price it, who to sell to, how to launch. Vibepreneur structures the entire journey. You bring the expertise. The system handles the business architecture, asset creation, and execution support."
      venturePaths={[
        {
          title: "Niche industry tool",
          problem:
            "You use industry-specific tools that are outdated, overpriced, or missing key features your team needs.",
          offer:
            "A focused tool that solves a specific pain point better than existing options, designed by someone who actually understands the workflow.",
          gtm: "LinkedIn content targeting peers in your industry, plus cold outreach to decision-makers at companies with the same pain.",
        },
        {
          title: "Expert-led service system",
          problem:
            "Companies pay premium rates for expertise that could be partially systematised or templated.",
          offer:
            "A scalable service system that combines your expertise with structured processes, reducing your personal time per engagement.",
          gtm: "Referral partnerships with adjacent service providers, plus content marketing establishing your authority.",
        },
        {
          title: "Assessment or benchmarking product",
          problem:
            "Companies lack good data on how their performance compares to industry standards in your area.",
          offer:
            "A structured assessment or benchmarking tool that helps companies understand where they stand and what to improve.",
          gtm: "Free assessment lead magnet distributed through industry channels and professional networks.",
        },
      ]}
      outputs={[
        "Opportunity scoring from your career background",
        "Business model recommendations",
        "Structured offer with competitive positioning",
        "Pricing model and packaging tiers",
        "Landing page and lead capture setup",
        "Content strategy leveraging your authority",
        "Validation campaign and experiment tracking",
        "Daily progress briefs",
      ]}
      objections={[
        {
          question: "Can I do this alongside my full-time job?",
          answer:
            "Yes. Vibepreneur is designed for busy professionals. The system handles structuring, asset creation, and execution planning. Your role is providing direction and making key decisions, which can be done in focused sessions.",
        },
        {
          question: "What if my idea does not work?",
          answer:
            "The system validates demand before you invest heavily. If early signals are weak, it helps you pivot to a better opportunity. You test with real market data, not guesswork.",
        },
        {
          question: "Do I need to quit my job to start?",
          answer:
            "No. Many professionals validate and launch alongside employment. Vibepreneur is designed for this path: structured execution with minimal time overhead until traction justifies a bigger commitment.",
        },
      ]}
    />
  );
}
