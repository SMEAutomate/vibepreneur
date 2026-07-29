import { NextRequest, NextResponse } from "next/server";
import { welcomeEmailHtml, solutionsEmailHtml } from "@/lib/email";
import { generateSolutions } from "@/lib/solutionGenerator";

const TEMPLATES = ["welcome", "solutions"] as const;

type Template = (typeof TEMPLATES)[number];

function isTemplate(value: string): value is Template {
  return (TEMPLATES as readonly string[]).includes(value);
}

export function GET(req: NextRequest): Response {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  const params = req.nextUrl.searchParams;
  const template = params.get("template") ?? "welcome";
  const role = params.get("role") ?? "marketing";
  const industry = params.get("industry") || undefined;

  if (!isTemplate(template)) {
    return NextResponse.json(
      { error: `Unknown template. Available: ${TEMPLATES.join(", ")}` },
      { status: 400 }
    );
  }

  const html =
    template === "welcome"
      ? welcomeEmailHtml(role, industry)
      : solutionsEmailHtml(role, industry, generateSolutions(role, industry));

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
