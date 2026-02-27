type EventName =
  | "page_view"
  | "waitlist_signup"
  | "solutions_viewed"
  | "cta_clicked"
  | "referral_shared";

interface AnalyticsEvent {
  event: EventName;
  properties?: Record<string, string | number | boolean>;
  timestamp?: string;
}

class Analytics {
  private queue: AnalyticsEvent[] = [];

  track(event: EventName, properties?: AnalyticsEvent["properties"]) {
    const entry: AnalyticsEvent = {
      event,
      properties,
      timestamp: new Date().toISOString(),
    };

    this.queue.push(entry);

    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      console.log("[Analytics]", entry);
    }
  }

  flush() {
    const events = [...this.queue];
    this.queue = [];
    return events;
  }
}

export const analytics = new Analytics();
