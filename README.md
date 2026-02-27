# Vibepreneur

Marketing website and waitlist system for Vibepreneur — a platform that helps professionals transform real-world experience into scalable solutions with built-in go-to-market and growth systems.

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** TailwindCSS + Framer Motion
- **Database:** Vercel Postgres
- **Email:** Resend
- **Testing:** Vitest + Playwright
- **Linting:** ESLint + Prettier
- **Hooks:** Husky + lint-staged

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

| Variable               | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `POSTGRES_URL`         | Vercel Postgres connection string                            |
| `RESEND_API_KEY`       | Resend API key for email sending                             |
| `EMAIL_FROM`           | Sender address (e.g., `Vibepreneur <hello@vibepreneur.com>`) |
| `NEXT_PUBLIC_SITE_URL` | Site URL (e.g., `http://localhost:3000`)                     |

The app runs without these — DB writes and emails are skipped when keys are missing.

### Install Dependencies

```bash
npm install
```

### Database Migration

Run the migration to create the `waitlist_signups` table:

```bash
npm run db:migrate
```

Or run the SQL manually in your Vercel Postgres dashboard:

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

1. Create a [Resend](https://resend.com) account
2. Add your API key to `.env.local`
3. Verify your sending domain in Resend
4. Set `EMAIL_FROM` to your verified address

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
└── e2e/                            # Playwright E2E tests
```

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Add Vercel Postgres from the Storage tab
5. Run migration (automatic via build or manual via `npm run db:migrate`)

The site is optimised for Vercel deployment with static marketing pages and dynamic API routes.
