# V3 Case-Study Component Contract

The case-study system separates a reusable Clinical Workshop structure from each product's own story. Future projects should compose these parts; they should not copy the Oscar page or inherit Oscar-specific claims.

## Composition layers

1. `CaseStudyShell` owns the V3 page shell, site header, overflow boundary, and optional JSON-LD output.
2. A project composition such as `OscarCaseStudy` owns chapter order and passes validated project data to the chapters.
3. Product chapters own the distinctive visual treatment and narrative for one project.
4. `components/v3/projects/case-study` owns project-agnostic evidence and navigation primitives.
5. `mdx-components.tsx` exposes the dossier blocks that may be authored directly in later MDX case studies.

## Typed composition registry

`app/projects/[slug]/page.tsx` loads the project, then selects a renderer from `components/v3/projects/case-study/registry.tsx` using `case_study.composition`. The registry is exhaustive:

```ts
const caseStudyRegistry = { /* standard + bespoke renderers */ }
  satisfies Record<CaseStudyComposition, CaseStudyDefinition>;
```

Every composition therefore has the same `{ project, structuredData }` renderer props and a colocated `ProjectSchemaOptions` descriptor. The standard renderer is the default for new V3 projects. Projects without `case_study` remain on the legacy shell. Slug-specific renderer branches are not used.

## Reusable primitives

| Component | Responsibility | Content rule |
| --- | --- | --- |
| `CaseStudyShell` | V3 landmarks, header, main content, JSON-LD | Accept serializable structured data; do not generate claims internally |
| `DossierTransition` | Visible chapter handoff | Labels orient the reader; they do not replace headings |
| `DecisionRecord` | Context, choice, tradeoff, evidence boundary | Every decision must state what the available evidence cannot prove |
| `EvidenceGallery` | Semantic figure collection for MDX | Every artifact needs useful alt text and a claim-specific caption |
| `CaseStudyGallery` | Keyboard-accessible media switching for project evidence | Render the first artifact meaningfully without JavaScript; every slide needs dimensions, alt text, caption, and an evidence boundary |
| `OutcomePanel` | Outcome plus source/confidence boundary | Never render an unsupported metric as a result |
| `ProjectNavigation` | Previous, next, and contact paths | Destinations are supplied by the project composition |
| `Problem` / `Constraints` / `Reflection` | Structured narrative blocks for MDX | Use headings and plain server-rendered content; client JavaScript is optional enhancement only |

## Adding the next V3 project

1. Add validated `case_study` frontmatter and real media to the project MDX file.
2. Record claims, sources, missing proof, and confidentiality limits before writing outcome copy.
3. Compose a project-specific case-study component from the shared shell and primitives.
4. Set the desired `case_study.composition` in frontmatter. For a new bespoke key, add its renderer and schema descriptor to the typed registry; never add a slug branch to the route.
5. Add canonical/social metadata, truthful project JSON-LD, and sitemap media.
6. Verify server-rendered meaning, keyboard access, reduced motion, English/Arabic layout, 320 px overflow, lint, and production build behavior.

## Gallery contract

`CaseStudyGallery` is the shared media primitive for every composition with useful artifacts. Gallery items are validated in project frontmatter and their localized copy is resolved from `V3.CaseStudies.<project-slug>.Gallery.<copyKey>`:

```yaml
gallery:
  - id: "overview"
    src: "/images/projects/new-project/overview.webp"
    width: 1920
    height: 1080
    copyKey: "Overview"
```

The renderer resolves `Alt`, `Caption`, and `Proves` from both locale message files, then passes this serializable shape to the gallery:

```ts
type CaseStudyGalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  proves: string;
  width: number;
  height: number;
};
```

The gallery must render one primary figure on the server, then enhance it with previous/next controls and a thumbnail or numbered slide rail. Controls need visible focus, `aria-label`, `aria-current`, and keyboard arrow/Home/End support. A live region should announce the active caption without moving focus unexpectedly. Reduced motion disables slide transitions. The component must never be the only place where critical evidence exists: captions and the evidence boundary remain readable in the surrounding document if JavaScript is unavailable.

Do not auto-rotate the gallery. Do not crop screenshots into decorative tiles. Use the authentic product viewport whenever possible, and mark unavailable or redacted states explicitly.

## Evidence boundary

An available interface image proves only what is directly visible. Private commercial records may support a carefully attributed qualitative outcome, but must not be published. Missing screenshots remain named capture requirements. Never convert absence of evidence into a numerical estimate or polished marketing claim.

For the complete implementation checklist, see [Adding a New Case Study](./ADDING_CASE_STUDY.md).
