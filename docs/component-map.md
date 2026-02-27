# Vibepreneur. Component Map

## Layout Components

| Component | Path                           | Used On                     |
| --------- | ------------------------------ | --------------------------- |
| `Nav`     | `components/layout/nav.tsx`    | All pages (via root layout) |
| `Footer`  | `components/layout/footer.tsx` | All pages (via root layout) |

## UI Components (Shared)

| Component | Path                        | Used On                                             |
| --------- | --------------------------- | --------------------------------------------------- |
| `Button`  | `components/ui/button.tsx`  | All pages                                           |
| `Section` | `components/ui/section.tsx` | All pages                                           |
| `Card`    | `components/ui/card.tsx`    | Homepage, How It Works, Pricing, Roadmap, Solutions |
| `Badge`   | `components/ui/badge.tsx`   | Homepage (Building in Public), Roadmap              |
| `Input`   | `components/ui/input.tsx`   | Waitlist form                                       |
| `Select`  | `components/ui/input.tsx`   | Waitlist form                                       |

## Marketing Components (Homepage)

| Component           | Path                                            | Section                                 |
| ------------------- | ----------------------------------------------- | --------------------------------------- |
| `Hero`              | `components/marketing/hero.tsx`                 | Homepage hero with CTA + dashboard mock |
| `DashboardMock`     | `components/marketing/dashboard-mock.tsx`       | Hero section (visual)                   |
| `TheShift`          | `components/marketing/the-shift.tsx`            | The Shift section                       |
| `HowItWorksPreview` | `components/marketing/how-it-works-preview.tsx` | 3-step preview                          |
| `Differentiator`    | `components/marketing/differentiator.tsx`       | GTM USP section                         |
| `Modules`           | `components/marketing/modules.tsx`              | 5 platform modules                      |
| `WhoItsFor`         | `components/marketing/who-its-for.tsx`          | Target audience                         |
| `PricingPreview`    | `components/marketing/pricing-preview.tsx`      | 4-tier preview                          |
| `BuildingInPublic`  | `components/marketing/building-in-public.tsx`   | Roadmap teaser                          |
| `FinalCta`          | `components/marketing/final-cta.tsx`            | Closing CTA                             |

## Pages

| Page           | Path                                   | Type                   |
| -------------- | -------------------------------------- | ---------------------- |
| Homepage       | `app/page.tsx`                         | Static                 |
| How It Works   | `app/how-it-works/page.tsx`            | Static                 |
| Pricing        | `app/pricing/page.tsx`                 | Client (FAQ accordion) |
| Roadmap        | `app/roadmap/page.tsx`                 | Static                 |
| Waitlist       | `app/waitlist/page.tsx`                | Client (form)          |
| Thanks         | `app/waitlist/thanks/page.tsx`         | Client (search params) |
| Your Solutions | `app/waitlist/your-solutions/page.tsx` | Client (solution gen)  |

## API Routes

| Route         | Path                             | Method   | Purpose                               |
| ------------- | -------------------------------- | -------- | ------------------------------------- |
| Waitlist      | `app/api/waitlist/route.ts`      | POST     | Save signup + send welcome email      |
| Solutions     | `app/api/solutions/route.ts`     | GET/POST | Generate solutions from role/industry |
| Email Preview | `app/api/email/preview/route.ts` | GET      | Dev-only email template preview       |

## Library Modules

| Module              | Path                       | Purpose                           |
| ------------------- | -------------------------- | --------------------------------- |
| `db`                | `lib/db.ts`                | Vercel Postgres queries           |
| `email`             | `lib/email.ts`             | Resend email sending              |
| `solutionGenerator` | `lib/solutionGenerator.ts` | Deterministic solution generation |
| `validators`        | `lib/validators.ts`        | Zod schemas                       |
| `analytics`         | `lib/analytics.ts`         | Analytics abstraction             |

## Content Modules

| Module               | Path                            | Purpose                                   |
| -------------------- | ------------------------------- | ----------------------------------------- |
| `copy`               | `content/copy.ts`               | All site copy constants                   |
| `pricing`            | `content/pricing.ts`            | Pricing tiers + FAQ                       |
| `roadmap`            | `content/roadmap.ts`            | Roadmap items + weekly updates            |
| `how-it-works`       | `content/how-it-works.ts`       | How It Works page content                 |
| `waitlist`           | `content/waitlist.ts`           | Roles, industries, benefits               |
| `solution-templates` | `content/solution-templates.ts` | 13 role templates + 11 industry modifiers |
