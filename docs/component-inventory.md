# Component Inventory

## UI Primitives (`components/ui/`)

| Component          | Purpose                                                                       |
| ------------------ | ----------------------------------------------------------------------------- |
| `Section`          | Page section wrapper with background variants and whileInView animation       |
| `Card`             | White bordered card with optional hover scale animation                       |
| `Button`           | Polymorphic button/Link with primary/secondary/ghost variants, sm/md/lg sizes |
| `Badge`            | Status pill: live (emerald), progress (amber), planned (brand)                |
| `Input` / `Select` | Form controls with label and error support                                    |
| `AnimatedHeadline` | Word-by-word reveal animation for headlines                                   |
| `GradientOrb`      | Decorative animated blur circle                                               |
| `Counter`          | Spring-animated number counter                                                |

## Homepage Sections (`components/marketing/`)

| Component             | Section                                              |
| --------------------- | ---------------------------------------------------- |
| `Hero`                | Hero with headline, 2 CTAs, and ExecutionCockpitMock |
| `WaitlistTicker`      | Live signup counter with rotating role titles        |
| `WhatIsVibepreneur`   | Concise platform definition                          |
| `FirstWeek`           | 7-day timeline showing first-week plan               |
| `DualPath`            | Two-card "Start New" / "Grow Existing" section       |
| `WhatActuallyHappens` | 3-column process flow: Input, Structure, Execution   |
| `WakeUpToProgress`    | Daily brief mock with Yesterday/Today/Needs Input    |
| `VentureOS`           | Interactive tabbed feature explorer (6 layers)       |
| `AIBusinessTeam`      | 5 AI workflow role cards                             |
| `WhatYouOwn`          | Ownership/trust grid (6 items)                       |
| `ExecutionFeed`       | Animated activity feed with timestamps               |
| `BuiltFor`            | 4 audience profile cards                             |
| `PricingPreview`      | Homepage pricing tier preview                        |
| `BuildingInPublic`    | Roadmap teaser with status badges                    |
| `FinalCta`            | Final conversion CTA with gradient orb               |

## Mock Components

| Component               | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| `ExecutionCockpitMock`  | Hero visual showing venture execution status |
| `DashboardMock`         | 2x2 metric tiles + GTM moves                 |
| `GrowthDashboardMock`   | Animated bar chart                           |
| `GtmPlaybookMock`       | 3-phase playbook with pulsing badge          |
| `PositioningCanvasMock` | SVG scatter plot                             |
| `SolutionCardMock`      | Animated solution card                       |

## Page Components

| Component           | Used On                                                   |
| ------------------- | --------------------------------------------------------- |
| `PersonaPage`       | All 4 `/for-*` persona pages (shared reusable layout)     |
| `TheSystemContent`  | `/the-system` (6 operating layers with tabbed interface)  |
| `DailyBriefContent` | `/daily-brief` (sample brief, benefits, persona examples) |
| `PricingContent`    | `/pricing` (full pricing with stage framing and FAQ)      |
| `RoadmapContent`    | `/roadmap` (phases, kanban, weekly updates)               |
| `WaitlistContent`   | `/waitlist` (5-step multi-step onboarding flow)           |
| `ShowcaseContent`   | `/showcase` (filterable venture examples grid)            |

## Layout

| Component | Purpose                                                      |
| --------- | ------------------------------------------------------------ |
| `Nav`     | Sticky header with 6 page links + Join Waitlist CTA          |
| `Footer`  | 6-column footer: Platform, Use Cases, Resources, Get Started |
