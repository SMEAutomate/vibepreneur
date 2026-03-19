import { sql } from "@vercel/postgres";
import type { WaitlistInput } from "./validators";

export async function createWaitlistSignup(data: WaitlistInput) {
  const { email, role, industry, consent, source, ref, persona, goal } = data;

  const result = await sql`
    INSERT INTO waitlist_signups (id, email, role, industry, consent, source, ref, persona, goal, created_at)
    VALUES (gen_random_uuid(), ${email}, ${role}, ${industry ?? null}, ${consent ?? true}, ${source ?? null}, ${ref ?? null}, ${persona ?? null}, ${goal ?? null}, NOW())
    ON CONFLICT (email) DO UPDATE SET
      role = EXCLUDED.role,
      industry = EXCLUDED.industry,
      persona = EXCLUDED.persona,
      goal = EXCLUDED.goal
    RETURNING id, email, role, industry
  `;

  return result.rows[0];
}

export async function getSignupByEmail(email: string) {
  const result = await sql`
    SELECT id, email, role, industry, created_at
    FROM waitlist_signups
    WHERE email = ${email}
  `;
  return result.rows[0] ?? null;
}

export const migrationSQL = `
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL,
  industry TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT,
  ref TEXT,
  consent BOOLEAN DEFAULT TRUE,
  persona TEXT,
  goal TEXT
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_signups (email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist_signups (created_at);

ALTER TABLE waitlist_signups ADD COLUMN IF NOT EXISTS persona TEXT;
ALTER TABLE waitlist_signups ADD COLUMN IF NOT EXISTS goal TEXT;
`;
