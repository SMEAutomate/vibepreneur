import type { Metadata } from "next";
import { PersonaPage } from "@/components/marketing/persona-page";

export const metadata: Metadata = {
  title: "For Marketers | Vibepreneur",
  description:
    "Turn marketing expertise into scalable products and services. Vibepreneur helps marketers build businesses from distribution knowledge and growth skills.",
  alternates: { canonical: "/for-marketers" },
  openGraph: {
    title: "For Marketers | Vibepreneur",
    description:
      "Turn marketing expertise into scalable products and services.",
  },
};

export default function ForMarketersPage() {
  return (
    <PersonaPage
      headline="You know how to reach buyers. Now own the product."
      subheadline="Vibepreneur helps marketers and growth leaders turn distribution expertise into businesses where you own the offer, not just the campaign."
      situation="You understand acquisition, positioning, channels, and conversion better than most founders. You have run campaigns, built funnels, and driven revenue for other companies. The missing piece has always been having your own product to sell. Vibepreneur combines your distribution skills with structured offer design and business execution, so you can build something where your marketing expertise is the unfair advantage."
      venturePaths={[
        {
          title: "Lead generation service system",
          problem:
            "Companies in a specific niche struggle to generate qualified leads through the channels you know best.",
          offer:
            "A productised lead generation service with repeatable playbooks, targeting a specific industry vertical.",
          gtm: "Outbound to marketing-aware founders and revenue leaders who understand the value of structured lead gen.",
        },
        {
          title: "Niche marketing tool",
          problem:
            "A specific marketing workflow is underserved by existing tools, and you know the exact gap.",
          offer:
            "A focused tool that solves one marketing workflow better than generalist platforms.",
          gtm: "Marketing community engagement, product reviews, and integration partnerships with adjacent tools.",
        },
        {
          title: "Content or distribution framework",
          problem:
            "Companies repeatedly struggle with the same content or distribution challenges in your area of expertise.",
          offer:
            "A structured framework, template library, or playbook system that packages your distribution knowledge into a repeatable product.",
          gtm: "Content marketing demonstrating the framework in action, plus community building around the methodology.",
        },
      ]}
      outputs={[
        "Opportunity assessment from your marketing background",
        "Structured offer with buyer profile",
        "Competitive positioning and messaging",
        "Landing page with conversion-optimised structure",
        "Outreach sequences for early customers",
        "Content strategy and distribution plan",
        "Growth experiments with tracking",
        "Daily briefs with performance data",
      ]}
      objections={[
        {
          question: "I already know how to market. What does Vibepreneur add?",
          answer:
            "You know distribution. Vibepreneur adds the business architecture: opportunity validation, offer structuring, pricing, and operational execution. Most marketers are great at selling but need help building what they sell. The system fills that gap.",
        },
        {
          question: "Is this for agencies?",
          answer:
            "It can be, but it is designed primarily for marketers who want to own a product or service, not run an agency. The goal is leverage through ownership, not more client work.",
        },
        {
          question: "What if I want to build software but cannot code?",
          answer:
            "Vibepreneur generates structured build prompts optimised for AI development tools like Cursor, Bolt, Lovable, Replit, and Claude Code. It also creates creative asset prompts for ad images (Midjourney, DALL-E) and video content (Sora). Your marketing expertise shapes what gets built and how it reaches buyers.",
        },
      ]}
    />
  );
}
