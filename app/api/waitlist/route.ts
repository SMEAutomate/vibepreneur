import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validators";
import { createWaitlistSignup } from "@/lib/db";
import { sendWelcomeEmail, sendSolutionsEmail } from "@/lib/email";
import { generateSolutions } from "@/lib/solutionGenerator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = waitlistSchema.parse(body);

    let signupId: string | undefined;

    if (process.env.POSTGRES_URL) {
      const result = await createWaitlistSignup(data);
      signupId = result.id;
    } else {
      console.log("[Waitlist] No POSTGRES_URL, skipping DB write:", data);
    }

    await sendWelcomeEmail(data.email, data.role, data.industry).catch(
      (err) => {
        console.error("[Waitlist] Welcome email failed:", err);
      }
    );

    try {
      const solutions = generateSolutions(data.role, data.industry);
      await sendSolutionsEmail(data.email, data.role, data.industry, solutions);
    } catch (err) {
      console.error("[Waitlist] Solutions email failed:", err);
    }

    return NextResponse.json({ success: true, id: signupId });
  } catch (err) {
    if (err instanceof Error && err.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid input. Please check your details." },
        { status: 400 }
      );
    }
    console.error("[Waitlist] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
