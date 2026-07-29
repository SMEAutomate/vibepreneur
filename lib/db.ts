import { neon } from "@neondatabase/serverless";
import type { WaitlistInput } from "./validators";

export interface WaitlistSignupRow {
  id: string;
  email: string;
  role: string;
  industry: string | null;
}

export interface WaitlistSignupDetail extends WaitlistSignupRow {
  created_at: string;
}

/** Whether a database is configured. Callers skip persistence when false. */
export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

/**
 * Resolved lazily rather than at module scope. `neon()` throws when
 * DATABASE_URL is unset, and Next.js evaluates top-level module code during
 * the build, so eager initialisation breaks `next build` on any deploy where
 * the variable is not yet present.
 */
let client: ReturnType<typeof neon> | null = null;

function getSql(): ReturnType<typeof neon> {
  if (!client) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set");
    }
    client = neon(url);
  }
  return client;
}

export async function createWaitlistSignup(
  data: WaitlistInput
): Promise<WaitlistSignupRow> {
  const { email, role, industry, consent, source, ref, persona, goal } = data;
  const sql = getSql();

  const rows = (await sql`
    INSERT INTO waitlist_signups (id, email, role, industry, consent, source, ref, persona, goal, created_at)
    VALUES (gen_random_uuid(), ${email}, ${role}, ${industry ?? null}, ${consent ?? true}, ${source ?? null}, ${ref ?? null}, ${persona ?? null}, ${goal ?? null}, NOW())
    ON CONFLICT (email) DO UPDATE SET
      role = EXCLUDED.role,
      industry = EXCLUDED.industry,
      persona = EXCLUDED.persona,
      goal = EXCLUDED.goal
    RETURNING id, email, role, industry
  `) as WaitlistSignupRow[];

  return rows[0];
}

export async function getSignupByEmail(
  email: string
): Promise<WaitlistSignupDetail | null> {
  const sql = getSql();

  const rows = (await sql`
    SELECT id, email, role, industry, created_at
    FROM waitlist_signups
    WHERE email = ${email}
  `) as WaitlistSignupDetail[];

  return rows[0] ?? null;
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
