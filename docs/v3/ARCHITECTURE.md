# Portfolio V3 Architecture

## 1. Product thesis

Portfolio V3 is a warm, expressive product portfolio whose projects are documented with the rigor of a technical workshop.

The design-direction split is intentional:

- **60% Product Maker** — public personality, composition, typography, color, project previews, and calls to action.
- **30% Clinical Workshop** — case-study structure, technical evidence, decisions, constraints, and outcomes.
- **10% Interactive Documentary** — pacing, chapter transitions, and a few high-impact narrative moments.

These percentages describe responsibilities. They are not three visual styles that should appear in every section.

## 2. Goals and non-goals

### Goals

- Make Ali recognizable as a product-minded engineer, not a template-driven developer.
- Prove frontend ability through composition, interaction, responsive behavior, and restraint.
- Make Oscar the flagship evidence that Ali can discover, design, build, sell, and support a real product.
- Let visitors understand the value proposition, strongest work, and next action in under 60 seconds.
- Preserve the existing Next.js, MDX, localization, SEO, and content infrastructure.
- Meet WCAG 2.2 AA expectations and maintain strong Core Web Vitals.

### Non-goals

- Rebuilding the application around a new framework or CMS.
- Turning every section into a scroll animation.
- Reproducing the current glass, aurora, terminal, or generic bento aesthetic.
- Presenting every technology Ali has used as equally important.
- Keeping weak or unverifiable content merely to fill space.

## 3. Experience principles

1. **Personality first, proof immediately after.** Expressive headlines must be followed by concrete evidence.
2. **One composition, one job.** Every section has a single narrative purpose.
3. **Evidence over adjectives.** Prefer shipped status, measured outcomes, constraints, artifacts, and decisions over claims such as “scalable” or “pixel-perfect.”
4. **Warm does not mean decorative.** Color and irregular geometry guide attention; they do not become visual noise.
5. **Motion explains.** Animation may reveal sequence, state, or hierarchy. It must never delay access to content.
6. **Case studies are documents.** They should remain readable, linkable, printable, and useful without animation.

## 4. Information architecture

```text
/
├── Maker hero + clear positioning
├── Compact credibility strip
├── Selected work
│   ├── Oscar — flagship case study
│   ├── Labora — active product/build story
│   └── Image Cryptography — technical exploration
├── Working protocol
├── Short origin story
├── Engineering writing
└── Contact invitation

/projects
├── Editorial project index
└── Optional filters when they remain useful with real content volume

/projects/[slug]
├── Product prologue
├── Project dossier
├── Problem and constraints
├── Workflow / system / outcome inspection
├── Decisions and tradeoffs
├── Interface evidence
├── Results and reflection
└── Next project / contact

/blog
/blog/[slug]
/blog/notes
/blog/notes/[slug]
/contact
```

The homepage is a curated argument, not a directory of every existing component. The initial V3 homepage should replace the current 12-section sequence with approximately 7 purposeful chapters.

## 5. Technical architecture

### Runtime and rendering

- Continue using **Next.js App Router**, React Server Components, TypeScript, and Tailwind CSS 4.
- Keep pages and content-heavy sections server-rendered by default.
- Add `"use client"` only to isolated interaction islands such as the mobile navigation, inspection tabs, media gallery, and motion-aware chapter transitions.
- Keep project and writing content in MDX. Do not fetch portfolio content from a runtime database.
- Continue static generation of project routes with `generateStaticParams`.

### Proposed source organization

```text
app/
├── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/page.tsx
└── ...existing routes

components/
├── v3/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── Section.tsx
│   │   └── ChapterTransition.tsx
│   ├── home/
│   │   ├── MakerHero.tsx
│   │   ├── ProofStrip.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── WorkingProtocol.tsx
│   │   ├── OriginStory.tsx
│   │   └── WritingPreview.tsx
│   ├── projects/
│   │   ├── case-study/
│   │   │   ├── CaseStudyShell.tsx
│   │   │   ├── registry.tsx
│   │   │   ├── DossierTransition.tsx
│   │   │   ├── DecisionRecord.tsx
│   │   │   ├── EvidenceGallery.tsx
│   │   │   ├── OutcomePanel.tsx
│   │   │   ├── ProjectNavigation.tsx
│   │   │   └── MdxDossierBlocks.tsx
│   │   ├── OscarCaseStudy.tsx
│   │   ├── StandardCaseStudy.tsx
│   │   ├── ProjectPreview.tsx
│   │   ├── ProjectPrologue.tsx
│   │   ├── ProjectDossier.tsx
│   │   ├── InspectionPanel.tsx
│   │   └── Oscar*Chapter.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Label.tsx
│       ├── Metric.tsx
│       └── MediaFrame.tsx

lib/
├── projects.ts
├── project-schema.ts
├── project-seo.ts
└── ...existing content utilities

content/projects/
└── *.mdx
```

V3 components live together during migration so old and new systems can coexist. After launch, reusable V3 primitives can replace compatible legacy components and the `v3` namespace can be removed.

### Component boundaries

- Route files compose sections and provide data; they should not contain large visual implementations.
- Section components own layout and semantics.
- UI primitives own variants and states, but never contain portfolio-specific copy.
- MDX components render evidence blocks inside case studies.
- Interactive islands receive serializable data from server components.
- `projects/case-study` contains project-agnostic dossier primitives. Project folders and `*CaseStudy` compositions own narrative order, product-specific data, and visual exceptions.
- The public project route selects a V3 renderer through the typed composition registry. Unmigrated entries remain inside `LegacyProjectsShell`, so migration does not require a permanent legacy URL.
- `case_study.composition` defaults to `standard`; bespoke values (`oscar`, `labos`, `base60`, `image-cryptography`) preserve independent chapter order and visual storytelling.
- Gallery media lives in validated frontmatter, while localized `Alt`, `Caption`, and `Proves` copy lives under `V3.CaseStudies.<project-slug>.Gallery.<copyKey>`.
- `lib/project-seo.ts` centralizes `SoftwareApplication` and `BreadcrumbList` JSON-LD; schema options travel with each registry definition.
- Route code contains no slug-specific renderer branches. Unknown compositions throw an actionable error rather than silently choosing a wrong layout.
- See `docs/v3/CASE_STUDY_COMPONENTS.md` for the reuse contract and evidence rules.

## 6. Design system

### Visual language

- Base surfaces: warm paper/off-white and an ink-like dark surface.
- Primary accent: confident product blue.
- Secondary accent: workshop yellow used for highlights and decisive moments.
- Optional signal color: muted coral or red, reserved for annotations and constraints.
- Geometry: mostly square or softly rounded product surfaces with occasional hand-built irregular shapes.
- Borders: visible and purposeful; avoid translucent glass borders.
- Shadows: sparing, short, and physical rather than glowing.

### Tokens

Define V3 semantic tokens in `app/globals.css` and map Tailwind utilities to them:

```css
--v3-paper;
--v3-ink;
--v3-muted;
--v3-line;
--v3-blue;
--v3-yellow;
--v3-coral;
--v3-surface-dark;
--v3-reading-width;
--v3-page-gutter;
--v3-section-space;
--v3-radius-control;
--v3-radius-media;
```

Components consume semantic tokens instead of repeating raw color values. Dark mode is a considered palette, not an automatic inversion.

### Typography

Use no more than three roles:

- **Display:** expressive grotesk for maker headlines.
- **Text/UI:** highly readable sans for body copy, labels, and navigation.
- **Technical:** mono for metadata, annotations, and small system evidence only.

Arabic must have an intentional companion family and adjusted line-height; it should not inherit Latin display styling blindly. Font choices are finalized during Milestone 1 after testing real English and Arabic content.

### Responsive layout

- Mobile-first from 320 px.
- Page gutters use `clamp()` or responsive tokens rather than one-off padding values.
- Editorial sections use a readable text column nested inside a wider media grid.
- Avoid hiding meaningful proof on mobile; recompose it.
- Interactive inspection panels become stacked controls and content, not horizontally scrolling desktop replicas.

## 7. Project content model

The current `Project` interface is metadata-heavy but does not express the narrative and evidence required by V3. Introduce a Zod-validated schema while maintaining compatibility during migration.

```ts
type ProjectV3 = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  status: "shipped" | "active" | "experiment";
  composition: "standard" | "oscar" | "labos" | "base60" | "image-cryptography";
  featured: boolean;
  featuredOrder?: number;
  role: string[];
  platform: string[];
  stack: string[];
  duration?: string;
  client?: string;
  confidentiality?: "public" | "limited" | "private";
  hero: ProjectMedia;
  thumbnail: ProjectMedia;
  gallery?: Array<{
    id: string;
    src: `/images/projects/${string}`;
    width: number;
    height: number;
    copyKey: string;
  }>;
  outcomes: Array<{
    value: string;
    label: string;
    evidence?: string;
  }>;
  capabilities: string[];
  links?: {
    live?: string;
    source?: string;
  };
  seo: {
    title?: string;
    description: string;
  };
};
```

MDX body content uses a shared narrative sequence but allows sections to be omitted when evidence is unavailable:

```mdx
<ProjectContext />
<Problem />
<Constraints />
<InspectionPanel items={...} />
<DecisionRecord ... />
<EvidenceGallery ... />
<OutcomePanel ... />
<Reflection />
```

Do not invent metrics. Each outcome is either verifiable, clearly attributed, or presented as a qualitative result.

## 8. Motion architecture

- CSS handles hover, focus, short entrances, and simple transitions.
- Use browser APIs or one small motion dependency only if the documentary transitions cannot be implemented accessibly with CSS.
- Motion durations should generally remain between 120–450 ms.
- Animate `transform` and `opacity`; avoid layout-triggering properties during scroll.
- Respect `prefers-reduced-motion` globally and expose content immediately when enabled.
- No scroll hijacking, forced horizontal scrolling, cursor replacement, or long intro loader.

## 9. Localization

- Preserve `next-intl` and the current locale-aware root layout.
- Navigation, shared UI, metadata, accessibility labels, and reusable section copy stay in `messages/en.json` and `messages/ar.json`.
- Long project narratives may initially ship in English, but locale availability must be explicit; never silently serve English under an Arabic URL/state.
- Components must support RTL through logical properties and layout reversal rather than duplicated markup.

## 10. Accessibility, performance, and SEO constraints

### Accessibility

- Semantic landmarks and heading order on every route.
- Keyboard-operable navigation, inspection panels, galleries, filters, and dialogs.
- Visible focus states with at least 3:1 contrast against adjacent colors.
- WCAG AA text contrast.
- Descriptive image alternative text; decorative shapes use empty alt text or CSS.
- Minimum 44 × 44 px primary touch targets.
- Reduced-motion coverage for every scroll or entrance effect.

### Performance budgets

- LCP at or below 2.5 seconds on representative mobile hardware.
- CLS at or below 0.1.
- INP at or below 200 ms.
- No unoptimized third-party background textures.
- Above-the-fold images use correct `sizes`, dimensions, and priority only when they are the LCP candidate.
- The homepage should remain mostly server-rendered; client JavaScript is added per interaction, not per section.

### SEO

- Preserve route-specific metadata, sitemap, robots, and Open Graph generation.
- Add Person and WebSite JSON-LD globally and CreativeWork/SoftwareApplication data where truthful for projects.
- Case-study headings and evidence remain server-rendered and indexable.

## 11. Migration strategy

1. Freeze the V2 visual layer but keep it deployable.
2. Build V3 tokens and primitives without changing production pages.
3. Implement the new homepage composition using existing real data.
4. Build Oscar as the reference case study and evolve the project schema around it.
5. Migrate the project index and remaining project stories.
6. Restyle supporting routes and shared navigation/footer.
7. Remove legacy glass tokens, unused homepage components, and false or placeholder claims only after V3 parity is verified.

Each milestone must leave the application buildable. Avoid a single large replacement commit.

## 12. Architecture decisions

| Decision | Choice | Reason |
| --- | --- | --- |
| Rendering | Server-first with isolated client islands | Keeps content fast and interactions deliberate |
| Content | Filesystem MDX with validated frontmatter | Matches the current repo and keeps case studies portable |
| Styling | Tailwind 4 plus semantic CSS tokens | Enables fast composition without returning to generic component-library defaults |
| Migration | Parallel V2/V3 component namespaces | Allows incremental delivery and easy comparison |
| Flagship | Oscar first | It has the strongest product, domain, and business evidence |
| Animation | CSS-first, progressive enhancement | Protects performance and reduced-motion behavior |
| Homepage scope | Curated seven-chapter narrative | Stronger hierarchy than the current collection of many equal sections |

## 13. Definition of done for V3

- The homepage and Oscar case study communicate the Product Maker / Clinical Workshop mix without glassmorphism.
- All featured claims are supported by real evidence or clearly qualified.
- English and Arabic shared UI work across mobile and desktop layouts.
- Keyboard, screen-reader, reduced-motion, and contrast checks pass.
- `pnpm lint` and `pnpm build` pass.
- Lighthouse and real-device checks meet the stated budgets or have documented exceptions.
- Legacy V2 components and tokens that are no longer referenced are removed.
