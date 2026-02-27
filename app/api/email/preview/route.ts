import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available" }, { status: 404 });
  }

  const template = req.nextUrl.searchParams.get("template") ?? "welcome";

  const templates: Record<string, string> = {
    welcome:
      "Preview welcome email template at /api/email/preview?template=welcome",
    solutions:
      "Preview solutions email template at /api/email/preview?template=solutions",
  };

  return NextResponse.json({
    available: Object.keys(templates),
    current: template,
    note: "Email previews are only available in development mode.",
  });
}
