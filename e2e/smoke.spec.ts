import { test, expect, type Page } from "@playwright/test";

/**
 * Walks the five-step waitlist wizard up to the final email step.
 * Pass `industry: null` to exercise the path where the optional
 * industry select is skipped.
 */
async function completeWizardUpToEmail(
  page: Page,
  { role, industry }: { role: string; industry: string | null }
) {
  await page.goto("/waitlist");

  await page.getByRole("button", { name: "Consultant", exact: true }).click();
  await page.getByRole("button", { name: "Continue" }).click();

  await page
    .getByRole("button", { name: "Productise my expertise", exact: true })
    .click();
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByLabel("Your role").selectOption(role);
  if (industry) {
    await page.getByLabel("Industry").selectOption(industry);
  }
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(
    page.getByRole("heading", { name: "Your preview" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();
}

test.describe("Homepage", () => {
  test("renders and links to the waitlist", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Vibepreneur/);
    await expect(page.locator('a[href="/waitlist"]').first()).toBeVisible();
  });

  test("navigation links are visible", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("link", { name: "How it Works" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Roadmap" })).toBeVisible();
  });
});

test.describe("Waitlist wizard", () => {
  test("opens on the persona step", async ({ page }) => {
    await page.goto("/waitlist");
    await expect(
      page.getByRole("heading", { name: "Who are you?" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Continue" })).toBeDisabled();
  });

  test("enables Continue once a persona is chosen", async ({ page }) => {
    await page.goto("/waitlist");
    const cont = page.getByRole("button", { name: "Continue" });
    await expect(cont).toBeDisabled();
    await page.getByRole("button", { name: "Operator", exact: true }).click();
    await expect(cont).toBeEnabled();
  });

  test("submits and redirects to thanks", async ({ page }) => {
    await completeWizardUpToEmail(page, {
      role: "marketing",
      industry: "saas",
    });

    await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
    await page.getByRole("button", { name: "Join the Waitlist" }).click();

    await page.waitForURL(/\/waitlist\/thanks/);
    await expect(
      page.getByRole("heading", { name: /You're in/i })
    ).toBeVisible();
  });

  test("submits when the optional industry is skipped", async ({ page }) => {
    await completeWizardUpToEmail(page, { role: "finance", industry: null });

    await page
      .getByRole("textbox", { name: "Email" })
      .fill("no-industry@example.com");
    await page.getByRole("button", { name: "Join the Waitlist" }).click();

    await page.waitForURL(/\/waitlist\/thanks/);
    await expect(
      page.getByRole("heading", { name: /You're in/i })
    ).toBeVisible();
  });
});

test.describe("Your Solutions", () => {
  test("renders three solution cards for a role", async ({ page }) => {
    await page.goto("/waitlist/your-solutions?role=marketing");
    await expect(page.getByText("First 3 traction moves")).toHaveCount(3);
  });

  test("shows sector context when an industry is supplied", async ({
    page,
  }) => {
    await page.goto(
      "/waitlist/your-solutions?role=finance&industry=healthcare"
    );
    await expect(
      page.getByRole("heading", { name: "Your Fit Test Results" })
    ).toBeVisible();
    await expect(page.getByText(/Healthcare/i).first()).toBeVisible();
  });
});

test.describe("Marketing Pages", () => {
  const marketingPages = [
    { path: "/how-it-works", heading: "From expertise to operating business." },
    { path: "/pricing", heading: "Start free. Scale with traction." },
    { path: "/roadmap", heading: "Building the venture operating system." },
    { path: "/the-system", heading: /.+/ },
    { path: "/showcase", heading: /.+/ },
    { path: "/blog", heading: /.+/ },
  ];

  for (const { path, heading } of marketingPages) {
    test(`${path} loads with an h1`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(
        page.getByRole("heading", { level: 1, name: heading })
      ).toBeVisible();
    });
  }
});

test.describe("SEO endpoints", () => {
  test("sitemap, robots and feed respond", async ({ request }) => {
    for (const path of ["/sitemap.xml", "/robots.txt", "/feed.xml"]) {
      const res = await request.get(path);
      expect(res.status(), path).toBe(200);
    }
  });
});
