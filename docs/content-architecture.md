# Content Architecture

## Route Map

| Route                          | Purpose                            | Core CTA                 | Primary Audience           | SEO Focus                                       |
| ------------------------------ | ---------------------------------- | ------------------------ | -------------------------- | ----------------------------------------------- |
| `/`                            | Homepage, category definition      | Start My Business System | All personas               | venture operating system, expertise to business |
| `/how-it-works`                | System walkthrough                 | Start My Business System | Evaluating visitors        | how to turn expertise into business             |
| `/the-system`                  | Feature architecture deep-dive     | Start My Business System | Detail-oriented evaluators | business operating system features              |
| `/showcase`                    | Example build paths / proof        | Start My Business System | Skeptical visitors         | example ventures from expertise                 |
| `/pricing`                     | Tier selection / value framing     | Join Waitlist            | Ready-to-commit visitors   | pricing, free tier                              |
| `/roadmap`                     | Product maturity / transparency    | Join the Waitlist        | Trust-seeking visitors     | building in public                              |
| `/daily-brief`                 | Signature feature page             | Join the Waitlist        | Feature-curious visitors   | daily business brief                            |
| `/waitlist`                    | Multi-step onboarding / conversion | Join the Waitlist        | Ready-to-commit visitors   | join waitlist                                   |
| `/for-consultants`             | Persona SEO/conversion page        | Start My Business System | Consultants                | productize consulting expertise                 |
| `/for-operators`               | Persona SEO/conversion page        | Start My Business System | Operators                  | turn operations expertise into product          |
| `/for-corporate-professionals` | Persona SEO/conversion page        | Start My Business System | Corporate professionals    | turn career expertise into business             |
| `/for-marketers`               | Persona SEO/conversion page        | Start My Business System | Marketers                  | marketing expertise to product                  |
| `/blog`                        | Content hub                        | Inline CTAs              | SEO visitors               | various long-tail                               |
| `/blog/[slug]`                 | Individual articles                | Inline CTAs              | SEO visitors               | article-specific                                |
| `/features/[slug]`             | Feature detail (preserved)         | Join Waitlist            | Deep-dive visitors         | feature-specific                                |

## Content Files

| File                      | What It Contains                                                     |
| ------------------------- | -------------------------------------------------------------------- |
| `content/copy.ts`         | All homepage section copy                                            |
| `content/how-it-works.ts` | How It Works page: 6 stages, comparison, examples, technical pillars |
| `content/pricing.ts`      | 4 pricing tiers + 6 FAQ items                                        |
| `content/roadmap.ts`      | Now/Next/Later roadmap items + weekly updates                        |
| `content/features.ts`     | 6 feature configs with capabilities and screen mappings              |
| `content/showcase.ts`     | 13 showcase project definitions                                      |
| `content/blog.ts`         | 20 blog posts                                                        |
| `content/waitlist.ts`     | Role/industry options and waitlist benefits                          |

## Internal Linking Strategy

- Homepage links to: How It Works, The System, Showcase, Pricing, Waitlist
- Persona pages link to: Waitlist, relevant features
- The System page links to: individual feature pages
- Pricing links to: Waitlist
- All pages end with a waitlist CTA
- Footer provides full site navigation with Use Cases section
