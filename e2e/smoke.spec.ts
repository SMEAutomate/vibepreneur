import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders and has primary CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Vibepreneur/);
    const cta = page.getByRole("link", { name: /Join the Waitlist/i }).first();
    await expect(cta).toBeVisible();
  });

  test("navigation links are visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: /How it Works/i }).first()
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Pricing/i }).first()
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Roadmap/i }).first()
    ).toBeVisible();
  });
});

test.describe("Waitlist", () => {
  test("form renders with required fields", async ({ page }) => {
    await page.goto("/waitlist");
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Your role/i)).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Join the Waitlist/i })
    ).toBeVisible();
  });

  test("form submits and redirects to thanks", async ({ page }) => {
    await page.goto("/waitlist");
    await page.getByLabel(/Email/i).fill("test@example.com");
    await page.getByLabel(/Your role/i).selectOption("marketing");
    await page.getByRole("button", { name: /Join the Waitlist/i }).click();

    await page.waitForURL(/\/waitlist\/thanks/);
    await expect(page.getByText(/You're in/i)).toBeVisible();
  });
});

test.describe("Your Solutions", () => {
  test("renders solution cards for a role", async ({ page }) => {
    await page.goto("/waitlist/your-solutions?role=marketing");
    await expect(page.getByText(/Solution 1/i)).toBeVisible();
    await expect(page.getByText(/Solution 2/i)).toBeVisible();
    await expect(page.getByText(/Solution 3/i)).toBeVisible();
  });

  test("shows role-specific content", async ({ page }) => {
    await page.goto("/waitlist/your-solutions?role=finance");
    await expect(page.getByText(/Finance/i).first()).toBeVisible();
  });
});

test.describe("Marketing Pages", () => {
  test("How It Works page loads", async ({ page }) => {
    await page.goto("/how-it-works");
    await expect(page.getByText(/Context beats code/i)).toBeVisible();
  });

  test("Pricing page loads", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByText(/Choose your build capacity/i)).toBeVisible();
  });

  test("Roadmap page loads", async ({ page }) => {
    await page.goto("/roadmap");
    await expect(page.getByText(/Building in public/i)).toBeVisible();
  });
});
