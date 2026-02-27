import { NextRequest, NextResponse } from "next/server";
import { solutionsQuerySchema } from "@/lib/validators";
import { generateSolutions } from "@/lib/solutionGenerator";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const role = params.get("role") ?? "";
  const industry = params.get("industry") ?? undefined;

  try {
    const query = solutionsQuerySchema.parse({ role, industry });
    const solutions = generateSolutions(query.role, query.industry);
    return NextResponse.json({ solutions });
  } catch {
    return NextResponse.json(
      { error: "Please provide a valid role." },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = solutionsQuerySchema.parse(body);
    const solutions = generateSolutions(query.role, query.industry);
    return NextResponse.json({ solutions });
  } catch {
    return NextResponse.json(
      { error: "Please provide a valid role." },
      { status: 400 }
    );
  }
}
