import { describe, it, expect } from "vitest";
import {
  generateSolutions,
  getRoleLabel,
  getSectorContext,
  getIndustryLabel,
} from "@/lib/solutionGenerator";

describe("generateSolutions", () => {
  it("returns 3 solutions for a known role", () => {
    const solutions = generateSolutions("marketing");
    expect(solutions).toHaveLength(3);
  });

  it("each solution has all required fields", () => {
    const solutions = generateSolutions("sales");
    for (const s of solutions) {
      expect(s.problem).toBeTruthy();
      expect(s.buyer).toBeTruthy();
      expect(s.offer).toBeTruthy();
      expect(s.pricingModel).toBeTruthy();
      expect(s.distributionChannel).toBeTruthy();
      expect(s.firstMoves).toHaveLength(3);
      expect(s.solutionType).toBeTruthy();
      expect(s.solutionTypeLabel).toBeTruthy();
      expect(s.valueProposition).toBeTruthy();
      expect(s.vibepreneurHook).toBeTruthy();
      for (const move of s.firstMoves) {
        expect(move).toBeTruthy();
      }
    }
  });

  it("returns industry-specific solutions when pool has content", () => {
    const baseSolutions = generateSolutions("hr");
    const healthcareSolutions = generateSolutions("hr", "healthcare");

    expect(healthcareSolutions).toHaveLength(3);
    expect(healthcareSolutions[0].problem).not.toBe(baseSolutions[0].problem);
  });

  it("falls back to role templates when industry is unknown", () => {
    const baseSolutions = generateSolutions("marketing");
    const unknownSolutions = generateSolutions(
      "marketing",
      "underwater-basket-weaving"
    );

    expect(unknownSolutions).toHaveLength(3);
    expect(unknownSolutions[0].problem).toBe(baseSolutions[0].problem);
  });

  it("returns solutions for unknown roles using fallback", () => {
    const solutions = generateSolutions("astronaut");
    expect(solutions).toHaveLength(3);
    for (const s of solutions) {
      expect(s.problem).toBeTruthy();
      expect(s.buyer).toBeTruthy();
    }
  });

  it("handles all 13 defined roles", () => {
    const roles = [
      "marketing",
      "sales",
      "operations",
      "hr",
      "finance",
      "legal",
      "product",
      "customer-support",
      "project-management",
      "admin",
      "engineering",
      "design",
      "consulting",
    ];

    for (const role of roles) {
      const solutions = generateSolutions(role);
      expect(solutions).toHaveLength(3);
    }
  });

  it("handles all defined industries without error", () => {
    const industries = [
      "healthcare",
      "retail",
      "construction",
      "finance",
      "education",
      "saas",
      "logistics",
      "professional-services",
      "real-estate",
      "manufacturing",
      "media",
    ];

    for (const industry of industries) {
      const solutions = generateSolutions("marketing", industry);
      expect(solutions).toHaveLength(3);
    }
  });

  it("produces consistent results for the same input", () => {
    const a = generateSolutions("finance", "saas");
    const b = generateSolutions("finance", "saas");
    expect(a).toEqual(b);
  });

  it("handles case-insensitive role matching", () => {
    const lower = generateSolutions("marketing");
    const mixed = generateSolutions("Marketing");
    const upper = generateSolutions("MARKETING");

    expect(lower[0].problem).toBe(mixed[0].problem);
    expect(lower[0].problem).toBe(upper[0].problem);
  });
});

describe("getRoleLabel", () => {
  it("returns correct label for known roles", () => {
    expect(getRoleLabel("marketing")).toBe("Marketing");
    expect(getRoleLabel("hr")).toBe("Human Resources");
    expect(getRoleLabel("customer-support")).toBe("Customer Support");
  });

  it("returns the input for unknown roles", () => {
    expect(getRoleLabel("astronaut")).toBe("astronaut");
  });
});

describe("getSectorContext", () => {
  it("returns sector context for known industries", () => {
    const ctx = getSectorContext("saas");
    expect(ctx).not.toBeNull();
    expect(ctx!.label).toBe("SaaS & Technology");
    expect(ctx!.sectorContext).toBeTruthy();
  });

  it("returns null for unknown industries", () => {
    expect(getSectorContext("underwater-basket-weaving")).toBeNull();
  });
});

describe("getIndustryLabel", () => {
  it("returns label for known industries", () => {
    expect(getIndustryLabel("healthcare")).toBe("Healthcare");
    expect(getIndustryLabel("professional-services")).toBe(
      "Professional Services"
    );
  });

  it("returns the input for unknown industries", () => {
    expect(getIndustryLabel("unknown")).toBe("unknown");
  });
});
