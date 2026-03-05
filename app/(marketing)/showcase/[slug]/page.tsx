import { notFound } from "next/navigation";
import { SHOWCASE_PROJECTS } from "@/content/showcase";
import { ProjectDetail } from "./project-detail";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SHOWCASE_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = SHOWCASE_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.productName} | Showcase | Vibepreneur`,
    description: `${project.tagline}. Built by ${project.builderName} using Vibepreneur.`,
    alternates: { canonical: `/showcase/${slug}` },
  };
}

export default async function ShowcaseProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = SHOWCASE_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
