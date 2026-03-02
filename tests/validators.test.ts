import { describe, it, expect } from "vitest";
import { waitlistSchema, solutionsQuerySchema } from "@/lib/validators";

describe("waitlistSchema", () => {
  it("validates correct input", () => {
    const result = waitlistSchema.safeParse({
      email: "test@example.com",
      role: "marketing",
      industry: "saas",
      consent: true,
    });
    expect(result.success).toBe(true);
  });

  it("requires valid email", () => {
    const result = waitlistSchema.safeParse({
      email: "not-an-email",
      role: "marketing",
    });
    expect(result.success).toBe(false);
  });

  it("requires role", () => {
    const result = waitlistSchema.safeParse({
      email: "test@example.com",
      role: "",
    });
    expect(result.success).toBe(false);
  });

  it("requires industry", () => {
    const result = waitlistSchema.safeParse({
      email: "test@example.com",
      role: "sales",
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty industry", () => {
    const result = waitlistSchema.safeParse({
      email: "test@example.com",
      role: "sales",
      industry: "",
    });
    expect(result.success).toBe(false);
  });

  it("consent defaults to true", () => {
    const result = waitlistSchema.parse({
      email: "test@example.com",
      role: "sales",
      industry: "saas",
    });
    expect(result.consent).toBe(true);
  });

  it("source and ref are optional", () => {
    const result = waitlistSchema.safeParse({
      email: "test@example.com",
      role: "marketing",
      industry: "healthcare",
      source: "linkedin",
      ref: "abc123",
    });
    expect(result.success).toBe(true);
  });
});

describe("solutionsQuerySchema", () => {
  it("validates correct input", () => {
    const result = solutionsQuerySchema.safeParse({
      role: "marketing",
      industry: "healthcare",
    });
    expect(result.success).toBe(true);
  });

  it("requires role", () => {
    const result = solutionsQuerySchema.safeParse({
      role: "",
    });
    expect(result.success).toBe(false);
  });

  it("industry is optional", () => {
    const result = solutionsQuerySchema.safeParse({
      role: "finance",
    });
    expect(result.success).toBe(true);
  });

  it("email is optional", () => {
    const result = solutionsQuerySchema.safeParse({
      email: "test@example.com",
      role: "sales",
    });
    expect(result.success).toBe(true);
  });
});
