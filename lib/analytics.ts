import { track } from "@vercel/analytics";

export type EventName =
  | "waitlist_signup"
  | "solutions_viewed"
  | "cta_clicked"
  | "referral_shared";

export type EventProperties = Record<string, string | number | boolean | null>;

export function trackEvent(
  event: EventName,
  properties?: EventProperties
): void {
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics]", event, properties ?? {});
  }

  track(event, properties);
}
