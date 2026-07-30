import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const mockSend = vi.fn();

vi.mock("resend", () => ({
  Resend: vi.fn(() => ({ emails: { send: mockSend } })),
}));

import {
  sendSolutionsEmail,
  sendWelcomeEmail,
  solutionsDelayMinutes,
  scheduledAtFromNow,
} from "@/lib/email";
import { generateSolutions } from "@/lib/solutionGenerator";

const solutions = generateSolutions("marketing", "saas");

beforeEach(() => {
  mockSend.mockReset();
  mockSend.mockResolvedValue({ data: { id: "e1" }, error: null });
  process.env.RESEND_API_KEY = "re_test";
  delete process.env.SOLUTIONS_EMAIL_DELAY_MINUTES;
});

afterEach(() => {
  vi.useRealTimers();
  delete process.env.RESEND_API_KEY;
  delete process.env.SOLUTIONS_EMAIL_DELAY_MINUTES;
});

describe("solutionsDelayMinutes", () => {
  it("defaults to five minutes", () => {
    // #given no override
    // #then the default applies
    expect(solutionsDelayMinutes()).toBe(5);
  });

  it("honours a numeric override", () => {
    // #given an explicit delay
    process.env.SOLUTIONS_EMAIL_DELAY_MINUTES = "12";
    // #then it is used
    expect(solutionsDelayMinutes()).toBe(12);
  });

  it("accepts zero to send immediately", () => {
    // #given the delay is switched off
    process.env.SOLUTIONS_EMAIL_DELAY_MINUTES = "0";
    // #then zero is respected rather than falling back
    expect(solutionsDelayMinutes()).toBe(0);
  });

  it("falls back when the override is not a number", () => {
    // #given a malformed value
    process.env.SOLUTIONS_EMAIL_DELAY_MINUTES = "soon";
    // #then the default protects the send
    expect(solutionsDelayMinutes()).toBe(5);
  });
});

describe("scheduledAtFromNow", () => {
  it("returns an ISO timestamp the requested minutes ahead", () => {
    // #given a fixed clock
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-30T12:00:00.000Z"));

    // #when five minutes ahead is requested
    const at = scheduledAtFromNow(5);

    // #then the timestamp is exactly five minutes later
    expect(at).toBe("2026-07-30T12:05:00.000Z");
  });

  it("returns undefined for a zero delay", () => {
    // #given no delay
    // #then the field is omitted rather than sent as now
    expect(scheduledAtFromNow(0)).toBeUndefined();
  });
});

describe("sendSolutionsEmail", () => {
  it("schedules the send five minutes out by default", async () => {
    // #given a fixed clock and a signup
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-30T12:00:00.000Z"));

    // #when the solutions email is sent
    await sendSolutionsEmail("a@b.com", "marketing", "saas", solutions);

    // #then Resend is asked to hold it until five minutes later
    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend.mock.calls[0][0].scheduledAt).toBe(
      "2026-07-30T12:05:00.000Z"
    );
  });

  it("omits scheduledAt when the delay is zero", async () => {
    // #given the delay disabled
    process.env.SOLUTIONS_EMAIL_DELAY_MINUTES = "0";

    // #when the solutions email is sent
    await sendSolutionsEmail("a@b.com", "marketing", "saas", solutions);

    // #then the payload carries no scheduling field at all
    expect(mockSend.mock.calls[0][0]).not.toHaveProperty("scheduledAt");
  });

  it("does not schedule the welcome email", async () => {
    // #given a signup
    // #when the welcome email is sent
    await sendWelcomeEmail("a@b.com", "marketing", "saas");

    // #then it goes immediately, since it confirms the signup
    expect(mockSend.mock.calls[0][0]).not.toHaveProperty("scheduledAt");
  });

  it("skips entirely without an API key", async () => {
    // #given no Resend key
    delete process.env.RESEND_API_KEY;

    // #when a send is attempted
    await sendSolutionsEmail("a@b.com", "marketing", "saas", solutions);

    // #then nothing is dispatched
    expect(mockSend).not.toHaveBeenCalled();
  });
});
