import { Resend } from "resend";
import type { GeneratedSolution } from "./solutionGenerator";

function getResend(): Resend {
  return new Resend(process.env.RESEND_API_KEY);
}

function getFrom(): string {
  return process.env.EMAIL_FROM ?? "Vibepreneur <hello@vibepreneur.com>";
}

export async function sendWelcomeEmail(
  email: string,
  role: string,
  industry: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email] Skipping welcome email, no RESEND_API_KEY");
    return;
  }

  await getResend().emails.send({
    from: getFrom(),
    to: email,
    subject: "You're in. Here's what happens next",
    html: welcomeEmailHtml(role, industry),
  });
}

export async function sendSolutionsEmail(
  email: string,
  role: string,
  industry: string,
  solutions: GeneratedSolution[]
) {
  if (!process.env.RESEND_API_KEY) {
    console.log("[Email] Skipping solutions email, no RESEND_API_KEY");
    return;
  }

  await getResend().emails.send({
    from: getFrom(),
    to: email,
    subject: `Your fit test: 3 solutions for ${role} expertise in ${industry}`,
    html: solutionsEmailHtml(role, industry, solutions),
  });
}

function welcomeEmailHtml(role: string, industry: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibepreneur.com";
  const solutionsUrl = `${siteUrl}/waitlist/your-solutions?role=${encodeURIComponent(role)}&industry=${encodeURIComponent(industry)}`;

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a2e; line-height: 1.6;">
  <div style="margin-bottom: 32px;">
    <strong style="font-size: 18px;">vibepreneur</strong>
  </div>

  <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">You're in.</h1>

  <p>You've just joined a growing group of ${role} professionals who are turning their expertise into something they own.</p>

  <p>Here's what to expect:</p>

  <ul style="padding-left: 20px;">
    <li><strong>Right now:</strong> Get your fit test results: 3 sector-specific opportunities matched to your expertise</li>
    <li><strong>Weekly:</strong> Strategic insights on building from expertise. No fluff, no hype</li>
    <li><strong>At launch:</strong> Early access before the public</li>
  </ul>

  <div style="margin: 32px 0;">
    <a href="${solutionsUrl}"
       style="background: #4263eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
      See Your Fit Test Results
    </a>
  </div>

  <p>The advantage isn't experience alone anymore. It's ownership.</p>

  <p style="color: #666;">The Vibepreneur Team</p>

  <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;">
  <p style="font-size: 12px; color: #999;">You received this because you joined the Vibepreneur waitlist. We respect your inbox. Expect one email per week, max.</p>
</body>
</html>`;
}

function solutionsEmailHtml(
  role: string,
  industry: string,
  solutions: GeneratedSolution[]
): string {
  const solutionBlocks = solutions
    .map(
      (s, i) => `
    <div style="background: #f8f9fa; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
      <div style="margin-bottom: 12px;">
        <span style="background: #e9ecef; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">${s.solutionTypeLabel}</span>
      </div>
      <h3 style="font-size: 16px; font-weight: 700; margin: 0 0 12px;">Solution ${i + 1}</h3>
      <p style="margin: 0 0 8px;"><strong>Problem:</strong> ${s.problem}</p>
      <p style="margin: 0 0 8px;"><strong>The Solution:</strong> ${s.offer}</p>
      <p style="margin: 0 0 8px;"><strong>Why This Matters:</strong> ${s.valueProposition}</p>
      <p style="margin: 0 0 8px;"><strong>Go-to-market channel:</strong> ${s.distributionChannel}</p>
      <p style="margin: 0 0 4px;"><strong>First 3 moves:</strong></p>
      <ol style="margin: 0; padding-left: 20px;">
        ${s.firstMoves.map((m) => `<li>${m}</li>`).join("")}
      </ol>
      <div style="background: #edf2ff; border-radius: 8px; padding: 12px; margin-top: 12px;">
        <p style="margin: 0; font-size: 13px; color: #364fc7;"><strong>How Vibepreneur helps:</strong> ${s.vibepreneurHook}</p>
      </div>
    </div>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a2e; line-height: 1.6;">
  <div style="margin-bottom: 32px;">
    <strong style="font-size: 18px;">vibepreneur</strong>
  </div>

  <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Your fit test results</h1>
  <p style="color: #666; margin-bottom: 24px;">Based on your ${role} expertise in ${industry}, here are three opportunities where your experience creates real market value.</p>

  ${solutionBlocks}

  <p style="margin-top: 24px;">These aren't theoretical. Each one is a real market gap with a clear path to your first customers.</p>

  <p>When Vibepreneur launches, you'll be able to take any of these from concept to market with full positioning, go-to-market, and growth systems built in.</p>

  <p style="color: #666;">The Vibepreneur Team</p>

  <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;">
  <p style="font-size: 12px; color: #999;">You received this because you joined the Vibepreneur waitlist.</p>
</body>
</html>`;
}
