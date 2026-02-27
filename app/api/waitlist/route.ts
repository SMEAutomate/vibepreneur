import { NextRequest, NextResponse } from "next/server";
import { waitlistSchema } from "@/lib/validators";
import { createWaitlistSignup } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = waitlistSchema.parse(body);

    if (process.env.POSTGRES_URL) {
      await createWaitlistSignup(data);
    } else {
      console.log("[Waitlist] No POSTGRES_URL — skipping DB write:", data);
    }

    await sendWelcomeEmail(data.email, data.role).catch((err) => {
      console.error("[Waitlist] Email send failed:", err);
    });

    return NextResponse.json({ success: true });
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
