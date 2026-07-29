import { describe, it, expect, vi, beforeEach } from "vitest";
import { neon } from "@neondatabase/serverless";
import { createWaitlistSignup, getSignupByEmail, migrationSQL } from "@/lib/db";

const mockSql = vi.fn();

vi.mock("@neondatabase/serverless", () => ({
  neon: vi.fn(() => mockSql),
}));

/** The interpolated values of the most recent tagged-template call. */
function lastQueryValues(): unknown[] {
  const call = mockSql.mock.calls.at(-1);
  if (!call) throw new Error("sql was never called");
  return call.slice(1);
}

function lastQueryText(): string {
  const call = mockSql.mock.calls.at(-1);
  if (!call) throw new Error("sql was never called");
  return (call[0] as unknown as TemplateStringsArray).join("?");
}

const row = {
  id: "uuid-1",
  email: "test@example.com",
  role: "marketing",
  industry: "saas",
};

beforeEach(() => {
  process.env.DATABASE_URL = "postgres://test";
  mockSql.mockReset();
  vi.mocked(neon).mockReturnValue(mockSql as never);
});

describe("createWaitlistSignup", () => {
  it("returns the inserted row", async () => {
    // #given the database returns the upserted row
    mockSql.mockResolvedValue([row]);

    // #when a signup is created
    const result = await createWaitlistSignup({
      email: "test@example.com",
      role: "marketing",
      industry: "saas",
      consent: true,
    });

    // #then the caller gets that row back
    expect(result).toEqual(row);
  });

  it("coalesces every omitted optional field to null", async () => {
    // #given a signup with only the two required fields
    mockSql.mockResolvedValue([row]);

    // #when it is created
    await createWaitlistSignup({
      email: "test@example.com",
      role: "sales",
      consent: true,
    });

    // #then industry, source, ref, persona and goal reach the driver as null
    // rather than undefined, which node-postgres cannot bind
    const values = lastQueryValues();
    expect(values).not.toContain(undefined);
    expect(values.filter((v) => v === null)).toHaveLength(5);
  });

  it("passes optional fields through when supplied", async () => {
    // #given a fully populated signup
    mockSql.mockResolvedValue([row]);

    // #when it is created
    await createWaitlistSignup({
      email: "test@example.com",
      role: "finance",
      industry: "healthcare",
      consent: false,
      source: "pricing-pro",
      ref: "abc123",
      persona: "consultant",
      goal: "productise",
    });

    // #then each value is bound
    const values = lastQueryValues();
    expect(values).toEqual([
      "test@example.com",
      "finance",
      "healthcare",
      false,
      "pricing-pro",
      "abc123",
      "consultant",
      "productise",
    ]);
  });

  it("upserts on the email conflict rather than failing", async () => {
    // #given a repeat signup from the same address
    mockSql.mockResolvedValue([row]);

    // #when it is created
    await createWaitlistSignup({
      email: "test@example.com",
      role: "marketing",
      consent: true,
    });

    // #then the statement updates the existing row instead of erroring
    expect(lastQueryText()).toContain("ON CONFLICT (email) DO UPDATE");
  });
});

describe("getSignupByEmail", () => {
  it("returns the row when one exists", async () => {
    // #given a stored signup
    mockSql.mockResolvedValue([row]);

    // #when it is looked up
    const result = await getSignupByEmail("test@example.com");

    // #then the row comes back
    expect(result).toEqual(row);
    expect(lastQueryValues()).toEqual(["test@example.com"]);
  });

  it("returns null when no row matches", async () => {
    // #given no stored signup
    mockSql.mockResolvedValue([]);

    // #when an unknown address is looked up
    const result = await getSignupByEmail("nobody@example.com");

    // #then the caller gets null, not undefined
    expect(result).toBeNull();
  });
});

describe("migrationSQL", () => {
  it("is idempotent so it can be re-run against a live database", () => {
    // #given the migration is run on every deploy
    // #then table, index and column creation are all guarded
    expect(migrationSQL).toContain("CREATE TABLE IF NOT EXISTS");
    expect(migrationSQL).toContain("CREATE INDEX IF NOT EXISTS");
    expect(migrationSQL).toContain("ADD COLUMN IF NOT EXISTS");
  });

  it("declares every column the insert writes to", () => {
    // #given the insert binds nine columns
    // #then each one is present in the schema
    for (const column of [
      "email",
      "role",
      "industry",
      "consent",
      "source",
      "ref",
      "persona",
      "goal",
    ]) {
      expect(migrationSQL).toContain(column);
    }
  });
});
