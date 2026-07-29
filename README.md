# Vibepreneur

Marketing website and waitlist system for Vibepreneur. a platform that helps professionals transform real-world experience into scalable solutions with built-in go-to-market and growth systems.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack) + TypeScript
- **Styling:** TailwindCSS + Framer Motion
- **Database:** Neon Postgres (`@neondatabase/serverless`)
- **Email:** Resend
- **Testing:** Vitest + Playwright
- **Linting:** ESLint + Prettier
- **Hooks:** Husky + lint-staged

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable               | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `DATABASE_URL`         | Neon Postgres connection string (see Database Migration below) |
| `RESEND_API_KEY`       | Resend API key for email sending                               |
| `EMAIL_FROM`           | Sender address (e.g., `Vibepreneur <hello@vbprnr.com>`)        |
| `NEXT_PUBLIC_SITE_URL` | Site URL (e.g., `http://localhost:3000`)                       |

The app runs without these. DB writes and emails are skipped when keys are missing.

### Install Dependencies

```bash
npm install
```

### Database Migration

Pull the connection string, then run the migration to create the
`waitlist_signups` table. `tsx` does not auto-load `.env.local`, so the env
must be sourced first:

```bash
vercel env pull .env.local --yes
set -a && . ./.env.local && set +a && npm run db:migrate
```

The migration is idempotent and safe to re-run. Or run the SQL manually in the
Neon dashboard:

```sql
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL,
  industry TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT,
  ref TEXT,
  consent BOOLEAN DEFAULT TRUE
);
```

### Local Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Email Setup

1. Create a [Resend](https://resend.com) account directly. The free tier
   (3,000 emails/month, 100/day) is not offered through the Vercel
   Marketplace, which starts at $20/month.
2. Add `vbprnr.com` as a sending domain and add the SPF and DKIM records
   Resend provides. DNS for this domain is at Namecheap, not Vercel.
3. Generate an API key and set it on the project:
   `vercel env add RESEND_API_KEY production`
4. `EMAIL_FROM` is optional. Without it the sender falls back to
   `CONTACT_EMAIL` in `lib/site.ts`.

Without a Resend API key, the app logs email sends to console instead.

## Scripts

| Command              | Description                |
| -------------------- | -------------------------- |
| `npm run dev`        | Start dev server           |
| `npm run build`      | Production build           |
| `npm run start`      | Start production server    |
| `npm run lint`       | Run ESLint                 |
| `npm run format`     | Format with Prettier       |
| `npm run typecheck`  | TypeScript type checking   |
| `npm run test`       | Run unit tests (Vitest)    |
| `npm run test:e2e`   | Run E2E tests (Playwright) |
| `npm run db:migrate` | Run database migration     |

## Project Structure

```
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── how-it-works/page.tsx       # How It Works page
│   ├── pricing/page.tsx            # Pricing page
│   ├── roadmap/page.tsx            # Roadmap page
│   ├── waitlist/
│   │   ├── page.tsx                # Waitlist form
│   │   ├── thanks/page.tsx         # Post-signup confirmation
│   │   └── your-solutions/page.tsx # Personalised solutions
│   └── api/
│       ├── waitlist/route.ts       # POST: save signup
│       ├── solutions/route.ts      # GET/POST: generate solutions
│       └── email/preview/route.ts  # Dev-only email preview
├── components/
│   ├── layout/                     # Nav, Footer
│   ├── marketing/                  # Homepage sections
│   └── ui/                         # Shared UI components
├── content/                        # All copy and content constants
│   ├── emails/                     # Email templates
│   └── solution-templates.ts       # Role + industry templates
├── lib/                            # Business logic
│   ├── db.ts                       # Database queries
│   ├── email.ts                    # Email sending
│   ├── solutionGenerator.ts        # Solution generation
│   ├── validators.ts               # Zod schemas
│   └── analytics.ts                # Analytics abstraction
├── docs/                           # Documentation
├── tests/                          # Unit tests
├── e2e/                            # Playwright E2E tests
└── remotion/                       # Marketing video sub-project (isolated deps)
```

## Marketing Videos

Remotion sub-project at `remotion/` renders 26 marketing video concepts, each in 16:9 (1920×1080) and 9:16 (1080×1920). All clips are ≤30s.

```bash
cd remotion
npm install
npm run dev          # Remotion Studio at localhost:3000
npm run render:all   # batch render all 52 MP4s to remotion/out/
```

The Remotion project has its own `package.json`, `tsconfig.json`, and is excluded from the Next.js build via `.vercelignore` and the root `tsconfig.json` `exclude`. See `remotion/README.md` for the video catalog.

## Blog Markdown

Blog post bodies in `content/blog.ts` and `content/blog-2026-spring.ts` support two inline patterns parsed in `app/(marketing)/blog/[slug]/blog-post-article.tsx`:

- `**bold**` → `<strong>`
- `[text](url)` → `next/link` for internal `/...` paths, `<a target="_blank">` for external

Currency: write amounts as `$5,000` or `$5.7 billion`, never `5,000 dollars`.

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Add a Neon database from the Storage tab, or via
   `vercel integration add neon --plan free_v3`, then connect it with
   `vercel integration resource connect <resource> <project>`
5. Run the migration (see Database Migration above)

The site is optimised for Vercel deployment with static marketing pages and dynamic API routes.
