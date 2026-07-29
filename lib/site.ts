/**
 * Canonical origin for the deployed site. Used for metadata, canonical URLs,
 * JSON-LD, the sitemap, robots.txt, and the RSS feed. Keep this as the single
 * source of truth: a stale value here silently breaks indexing everywhere.
 */
export const SITE_URL = "https://vbprnr.com";

/** Host without protocol, for display in OG images and mock UI. */
export const SITE_HOST = "vbprnr.com";

export const SITE_NAME = "Vibepreneur";

/** Published contact address, shown on the privacy and terms pages. */
export const CONTACT_EMAIL = "hello@vbprnr.com";

/**
 * Fallback sender when EMAIL_FROM is unset. The domain must be verified in
 * Resend or sends will fail, so keep this aligned with the verified domain.
 */
export const DEFAULT_EMAIL_FROM = `${SITE_NAME} <${CONTACT_EMAIL}>`;
