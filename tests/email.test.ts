import { describe, it, expect } from "vitest";
import { welcomeEmailHtml, solutionsEmailHtml } from "@/lib/email";
import { generateSolutions } from "@/lib/solutionGenerator";

describe("welcomeEmailHtml", () => {
  it("interpolates the role into the body copy", () => {
    // #given a signup with a known role
    // #when the welcome email is built
    const html = welcomeEmailHtml("marketing", "saas");

    // #then the role appears in the copy
    expect(html).toContain("marketing");
  });

  it("links to the fit test results with role and industry", () => {
    // #given a signup that supplied an industry
    // #when the welcome email is built
    const html = welcomeEmailHtml("finance", "healthcare");

    // #then the CTA carries both query parameters
    expect(html).toContain(
      "/waitlist/your-solutions?role=finance&industry=healthcare"
    );
  });

  it("omits the industry parameter when none was supplied", () => {
    // #given a signup that skipped the optional industry step
    // #when the welcome email is built
    const html = welcomeEmailHtml("sales");

    // #then the CTA has a role but no empty industry parameter
    expect(html).toContain("/waitlist/your-solutions?role=sales");
    expect(html).not.toContain("industry=");
  });

  it("escapes a role containing URL-unsafe characters", () => {
    // #given a role value that needs encoding
    // #when the welcome email is built
    const html = welcomeEmailHtml("project management");

    // #then the space is encoded in the link
    expect(html).toContain("role=project+management");
  });
});

describe("solutionsEmailHtml", () => {
  const solutions = generateSolutions("marketing", "saas");

  it("renders one block per solution", () => {
    // #given three generated solutions
    // #when the solutions email is built
    const html = solutionsEmailHtml("marketing", "saas", solutions);

    // #then each solution is numbered in the output
    expect(solutions).toHaveLength(3);
    expect(html).toContain("Solution 1");
    expect(html).toContain("Solution 2");
    expect(html).toContain("Solution 3");
  });

  it("renders every first move as a list item", () => {
    // #given the first solution's three opening moves
    // #when the solutions email is built
    const html = solutionsEmailHtml("marketing", "saas", solutions);

    // #then each move appears in the body
    for (const move of solutions[0].firstMoves) {
      expect(html).toContain(move);
    }
  });

  it("names the industry when one was supplied", () => {
    // #given a signup with an industry
    // #when the solutions email is built
    const html = solutionsEmailHtml("marketing", "saas", solutions);

    // #then the intro reads as a sector-specific line
    expect(html).toContain("marketing expertise in saas");
  });

  it("reads correctly when no industry was supplied", () => {
    // #given a signup that skipped the industry step
    // #when the solutions email is built
    const html = solutionsEmailHtml("marketing", undefined, solutions);

    // #then the intro drops the sector clause rather than leaving a gap
    expect(html).toContain("marketing expertise,");
    expect(html).not.toContain("expertise in ,");
    expect(html).not.toContain("undefined");
  });

  it("uses no em dashes", () => {
    // #given the house copy rule against em dashes
    // #when the solutions email is built
    const html = solutionsEmailHtml("marketing", "saas", solutions);

    // #then none appear in the rendered email
    expect(html).not.toContain("—");
  });
});
