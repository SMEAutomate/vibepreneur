# Repo Overview

Audit date: 2026-07-29. Branch `main`, 63 commits, last commit 2026-05-11.

## What this is

`vibepreneur` is the **public marketing website and waitlist system** for Vibepreneur, a
pre-launch product positioned as a "venture operating system" for professionals turning
domain expertise into productised businesses.

Important framing: **the product itself does not exist in this repo.** There is no auth, no
user accounts, no AI generation, no real application. Everything that looks like product UI
is a hand-built React mockup rendered for marketing purposes. The only live backend
behaviour is: capture a waitlist signup, write it to Postgres, and send two emails.

The repo is best understood as three things stacked together:

1. A **content site** (215 prerendered pages) with heavy SEO and GEO investment.
2. A **mockup engine** (~135 fake product screens) used as marketing imagery.
3. A **lead capture funnel** (waitlist form to personalised "solution ideas" to email).

## Tech stack

| Layer      | Choice                                                                      |
| ---------- | --------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack), React 19, TypeScript 5.7 (strict)       |
| Styling    | TailwindCSS 3.4, custom `brand` palette, Framer Motion 11                   |
| Data       | Neon Postgres via `@neondatabase/serverless` (one `waitlist_signups` table) |
| Email      | Resend                                                                      |
| SEO        | `schema-dts` JSON-LD, dynamic OG images, sitemap, RSS, `llms.txt`           |
| Analytics  | `@vercel/analytics`                                                         |
| Validation | Zod 3                                                                       |
| Testing    | Vitest (unit), Playwright (e2e)                                             |
| Tooling    | ESLint 9 flat config, Prettier, Husky + lint-staged                         |
| Hosting    | Vercel (project `vibepreneur`, org `team_aT79...`)                          |

Zero UI component libraries. Every component is hand-rolled. Icons are inline SVG path
strings in Heroicons style, no icon package.

## Codebase size

| Directory         | Lines   | Notes                                             |
| ----------------- | ------- | ------------------------------------------------- |
| `components/`     | ~27,150 | Dominated by fake product screens                 |
| `content/`        | ~9,160  | All copy lives here as typed TS constants         |
| `app/`            | ~5,730  | Routes, layouts, metadata, OG images              |
| `remotion/`       | ~2,700  | Isolated video sub-project                        |
| `lib/`            | ~1,390  | Business logic (916 of which is `mockScreens.ts`) |
| `docs/`           | ~930    | Copy guides, content plans, component maps        |
| `tests/` + `e2e/` | ~650    | 43 unit tests, 15 e2e tests                       |

Actual business logic is roughly 480 lines. Everything else is content and presentation.

## Architecture

### Content-as-code

There is no CMS. All copy is typed TypeScript in `content/*.ts` and rendered by generic
components. This is the single most important pattern in the repo.

- `copy.ts` (347) homepage section copy
- `features.ts` (715) seven feature configs, drives `/features/*` pages and the sitemap
- `blog.ts` + `blog-2026-spring.ts` + `blog-2026-summer.ts`, 103 posts total, spread into `blogPosts`
- `showcase.ts` 22 fictional example products: 13 by role, 9 by industry
- `solution-templates.ts` (932) + `solution-templates/industry-pools.ts` (2,469) the lead-magnet corpus
- `pricing.ts`, `roadmap.ts`, `how-it-works.ts`, `activity-feed.ts`, `legal.ts`, `waitlist.ts`
- `emails/*.md` weekly nurture email drafts

Adding a feature page or blog post means adding a data object, not a route file. Sitemap,
RSS, and static params all derive from these arrays.

### Route map

Everything sits under the `(marketing)` route group, which supplies Nav and Footer.

```
/                                    homepage, 16 stacked marketing sections
/how-it-works /the-system /pricing /roadmap /about /daily-brief
/for-consultants /for-operators /for-corporate-professionals /for-marketers
/features/[slug]                     7 static feature pages
/features/[slug]/[screen]            53 SSG screen deep-dive pages
/blog  /blog/[slug]                  103 SSG posts
/showcase  /showcase/[slug]          22 SSG fictional product case studies
/waitlist  /waitlist/thanks  /waitlist/your-solutions
/privacy /terms
/demo                                internal gallery, noindex
/api/waitlist                        POST: validate, persist, email
/api/solutions                       GET+POST: generate 3 solution ideas
/api/email/preview                   dev-only HTML preview of both emails
/feed.xml /sitemap.xml /robots.txt /opengraph-image
```

### The one real feature: the solution generator

`lib/solutionGenerator.ts` (138 lines) is the functional core of the site. It is a
**deterministic template selector, not AI**:

1. Hash `role + industry` into a seed.
2. If the industry has a pool in `industry-pools.ts`, filter by `roleAffinity`, then pick 3
   templates with solution-type diversity using the seed.
3. Otherwise fall back to `roleTemplates[role]`, or to a seed-chosen role if unknown.

Same inputs always return the same three ideas. This powers `/waitlist/your-solutions`, the
`/api/solutions` endpoint, and the personalised follow-up email. It is the site's lead magnet
and the strongest conversion asset in the repo.

### Waitlist flow

`waitlist-content.tsx` posts to `/api/waitlist`, which validates with Zod, upserts on email
conflict into `waitlist_signups`, then fires a welcome email and a solutions email. Both DB
and email are **optional**: missing `DATABASE_URL` or `RESEND_API_KEY` degrades to a log
line, so the app runs with no environment configuration. Email failures are caught and
swallowed so the signup still succeeds.

That optionality hid a live defect for 152 days. No environment variables were ever set on
the deployment, so every signup returned success and was silently discarded. A Neon database
was provisioned on 2026-07-29 and persistence is now verified end to end against production.
Email remains unconfigured.

The homepage `WaitlistTicker` displays a **synthetic** signup counter, not a real one: it is
seeded from an anchor of 914 signups on 2026-03-05 and grows 100 to 300 per day using a
sin-based PRNG with an hour-weighted intraday curve.

### The mockup engine

Three parallel systems render fake product UI:

- `components/demo/screens/` 40 static screens (OpportunityFinder, PositioningCanvas, ...)
- `components/demo/animated-screens/` 8 animated variants driven by `use-animation-loop.ts`
- `components/showcase/screens/` 22 fictional products x 5 screens each, wrapped in 6 visual shells (Dark, Soft, Minimal, Compact, TopBar, Product) so each looks like a distinct company. The 9 newest share two Vibepreneur-screen primitives in `components/showcase/vibe/`

`lib/mockScreens.ts` is the registry (41 entries) linking screen ids to components, and
`AnnotationLayer` overlays numbered callouts positioned by percentage coordinates from
`features.ts`.

### SEO and GEO

This is the heaviest investment after content. Present: per-route metadata and canonicals,
per-route dynamic OG image routes, Organization + WebSite JSON-LD, RSS feed, generated
sitemap covering all 179 URLs, `robots.ts` excluding `/api`, `/demo` and post-signup
pages, and a hand-written `public/llms.txt` aimed at LLM crawlers. The 25 spring 2026 blog
posts, and the 34 summer 2026 posts, were explicitly written for generative-engine optimisation. The canonical origin is `vbprnr.com`, defined once in `lib/site.ts`.

### Remotion sub-project

`remotion/` is a **separate npm project** with its own `package.json` and `tsconfig.json`,
excluded from the Next build via the root `tsconfig.json` `exclude` and `.vercelignore`. It
defines 26 marketing video concepts, each rendered at 16:9 and 9:16, for 52 MP4s total.

## Health check

Audit found (2026-07-29, before fixes):

| Check                 | Result                        |
| --------------------- | ----------------------------- |
| `npm run typecheck`   | Clean                         |
| `npm run build`       | Succeeds                      |
| `npm test`            | 26/26 pass                    |
| `npx eslint .`        | 15 errors, all in `remotion/` |
| `npm run lint`        | Broken                        |
| `npx playwright test` | 6 of 9 fail                   |

Current (after fixes):

| Check                 | Result                          |
| --------------------- | ------------------------------- |
| `npm run typecheck`   | Clean                           |
| `npm run lint`        | Clean                           |
| `npm test`            | 43/43 pass                      |
| `npx playwright test` | 15/15 pass                      |
| `npm run build`       | Succeeds, 172 pages prerendered |

## Findings and resolutions

All issues below were found in the 2026-07-29 audit and have been fixed.

1. **Waitlist signups without an industry were rejected.** The five-step wizard leaves the
   industry select optional (`canAdvance()` only checks role) but `waitlistSchema` required
   it, so anyone skipping that field got a generic "Invalid input" and could not sign up.
   Fixed by making `industry` optional end to end: the schema now normalises empty strings to
   `undefined`, and both email templates drop the sector clause when no industry is present.
   Covered by a new e2e test.

2. **The e2e suite was stale and 6 of 9 tests failed.** The tests predated the wizard rewrite
   and asserted on copy that no longer exists. Rewritten against stable role-based selectors,
   with a helper that walks all five wizard steps. Now 15 tests covering the wizard, both
   submit paths, the solutions page, six marketing pages, and the SEO endpoints.

3. **Form labels were not associated with their controls.** `Input` and `Select` rendered a
   bare `<label>` with no `htmlFor`, so clicking a label did not focus its field and screen
   readers had no accessible name. Fixed with `useId`, plus `aria-invalid` and
   `aria-describedby` wiring for the error state.

4. **`/showcase` rendered 11 `<h1>` elements.** The six mock UI shells used `<h1>` for
   decorative screen chrome. On a page that already has a real `<h1>`, that is an SEO and
   accessibility defect. Changed to `<p>` with identical classes, so no visual change.

5. **`npm run lint` was broken.** The script ran `next lint`, removed in Next 16. Now
   `eslint .`.

6. **ESLint was not scoped to exclude `remotion/`.** The build and typecheck both exclude the
   video sub-project; ESLint did not, so it failed on 15 unescaped-entity errors in video
   copy. Added an `ignores` entry to `eslint.config.mjs`.

7. **`public/llms.txt` carried stale pricing.** It advertised Pro $29 / Scale $79 against an
   actual Pro $49 / Max $149, listed 6 features, and omitted Launch Builder. Since this file
   exists for LLM crawlers, those were the prices AI assistants would quote. Rewritten from
   `content/pricing.ts` and `content/features.ts`, with audience pages and launch status added.

8. **`lib/analytics.ts` was dead code.** A 41-line in-memory queue with zero call sites.
   Replaced with a typed `trackEvent` forwarder to `@vercel/analytics`, now called on
   waitlist signup and on the solutions page.

9. **`app/api/email/preview/route.ts` was a stub.** It returned strings describing previews
   rather than rendering them. Now renders real HTML from `lib/email.ts` in development, with
   `?template=`, `?role=` and `?industry=` parameters.

10. **`lib/email.ts` had no tests.** 143 lines of hand-built HTML with no coverage. The two
    builders are now exported and covered by 9 tests, including the no-industry path and the
    house rule against em dashes.

11. **`app/api/waitlist` matched Zod errors by name string.** Replaced
    `err.name === "ZodError"` with `err instanceof ZodError`.

12. **`public/logo.png` was unused.** No references anywhere. Deleted.
    `public/logo-icon.gif` is also unreferenced but retained deliberately.

13. **`.claude/settings.local.json` auto-approved `Bash(rm:*)`.** Removed.

14. **`lib/db.ts` was untested and untyped.** Both exported functions had inferred return
    types, so `app/api/waitlist` reading `result.id` off the upsert was never checked by the
    compiler. Added `WaitlistSignupRow` and `WaitlistSignupDetail` threaded through `sql<T>`,
    plus 8 tests that mock `@vercel/postgres` and assert the bound values.

## Remaining gaps

- Tests mock the Postgres driver rather than hitting a real database, so they verify the
  query shape and bound values but not that the SQL runs. A true integration test needs a
  throwaway Postgres instance, which the project does not have.
- The broad auto-approve entries left in `.claude/settings.local.json` (`node`, `python3`,
  `git`, `curl`, `sed`) are effectively arbitrary execution. Left as is, since they reflect
  deliberate workflow choices. That file is gitignored, so the change is local only.
