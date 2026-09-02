# Adding a New Case Study

This is the end-to-end checklist for adding a project to the portfolio. It covers a content-only dossier and a full V3 case study. The public URL is derived from the MDX filename, so the filename is part of the release contract.

## Choose the presentation level

| Path | What you add | Result |
| --- | --- | --- |
| Content-only | Project MDX, frontmatter, and media | The project appears in the archive and uses the legacy dossier fallback. Sitemap, canonical metadata, and basic project schema still work. |
| Full V3 | Everything above, plus a project composition and translations | The project gets the V3 shell, a registry-selected renderer, reusable gallery, navigation, and localized copy. |

Use the full V3 path for a major portfolio proof point. Use content-only for a smaller or early-stage project; it can be migrated later without changing its URL.

## 1. Prepare the evidence and story

Before writing MDX, create a short source brief:

- What product or system was built, for whom, and in what context?
- What was your role and what did you personally ship?
- Which workflow or decision was difficult?
- What can be proven by a screenshot, repository, deployment, client record, or owner verification?
- What is private, redacted, synthetic, estimated, or still unverified?
- What is the truthful status: shipped, active, or experiment?

Do not turn missing evidence into a metric. Do not publish patient, customer, license, email, environment, or private commercial data. Mark synthetic screenshots and unavailable evidence explicitly.

## 2. Create the project file and URL

Create a file in:

```text
content/projects/<url-slug>-en.mdx
```

The filename becomes the route:

```text
/projects/<url-slug>-en
```

Keep the slug lowercase, stable, descriptive, and URL-safe. Do not rename it after publishing without adding a redirect. The loader derives `slug` from the filename; a frontmatter `slug` field does not control routing.

## 3. Add the required frontmatter

Start with this template and replace every example value:

```mdx
---
title: "New Project"
description: "One clear sentence describing the product and its value."
status: { type: "undeployed", expected_deployment: "In development" }
environment: "Web"
tech_stack: ["Next.js", "TypeScript", "PostgreSQL"]
privacy: "close_source"
date: "2026-09-02"
publishedAt: "2026"
screenshots:
  theme: "light"
  light_screenshot_url: "new-project/overview.webp"
  ext: "webp"
case_study:
  version: 3
  composition: "standard"
  proposition: "A concise product proposition focused on the user and workflow."
  status: "active"
  role: ["Product direction", "Full-stack engineering"]
  platform: ["Web SaaS"]
  duration: "2026"
  capabilities: ["Workflow modeling", "Access control", "Reporting"]
  confidentiality: "limited"
  hero:
    src: "/images/projects/new-project/overview.webp"
    alt: "New Project overview showing the primary workflow"
    caption: "The overview shows the primary workflow using synthetic demonstration data."
  thumbnail:
    src: "/images/projects/new-project/overview.webp"
    alt: "New Project overview"
  gallery:
    - id: "overview"
      src: "/images/projects/new-project/overview.webp"
      width: 1920
      height: 1080
      copyKey: "Overview"
  outcomes:
    - value: "In development"
      label: "Product status"
      evidence: "Owner-reported; production launch has not happened."
      confidence: "owner-verified"
badge_tag_1: "In development"
badge_tag_2: "Web SaaS"
---
```

### Frontmatter rules

- `title`, `description`, `tech_stack`, `environment`, `privacy`, and `screenshots` are required.
- `screenshots.theme` must be `dark`, `light`, `both`, or `none`.
- `screenshots.*_screenshot_url` is the filename inside `public/images/projects/<project-directory>/`, not a full URL.
- `case_study` is optional. Include it for a V3-ready dossier.
- `case_study.composition` selects the renderer from the typed registry. It defaults to `standard`; use `oscar`, `labos`, `base60`, or `image-cryptography` only when that bespoke composition exists.
- `case_study.hero.src` and `thumbnail.src` are public-root paths beginning with `/images/projects/`.
- `role`, `platform`, and `capabilities` must each contain at least one item.
- `outcomes` may be empty for an early-stage project. Never invent a result to fill the array.
- `confidentiality` is `public`, `limited`, or `private`.
- Outcome confidence is `verified`, `owner-verified`, or `estimate`. Label estimates as estimates.
- Gallery item `id` values use lowercase letters, numbers, and hyphens only. `src` must begin with `/images/projects/`, and `width`/`height` must be the real positive pixel dimensions.
- The existing schema uses the historical spelling `deployement_year`; preserve it for deployed projects:

  ```yaml
  status: { type: "deployed", deployement_year: "2026" }
  ```

## 4. Add and verify media

Store media under:

```text
public/images/projects/<project-directory>/
```

Recommended practice:

- Use the authentic product viewport whenever possible.
- Prefer WebP or optimized PNG for interface screenshots.
- Keep the hero image readable at mobile width; do not crop away critical UI.
- Use stable, descriptive filenames such as `overview.webp`, `orders.webp`, or `analytics.png`.
- Record the real pixel dimensions; the gallery uses them to preserve aspect ratio.
- Check every screenshot for private names, email addresses, tokens, local paths, patient data, or customer data.

Verify each referenced file exists:

```powershell
Get-ChildItem public/images/projects/<project-directory>
```

Every `hero.src`, `thumbnail.src`, and gallery `src` must resolve from the site root. A stale filename is a broken production image.

## 5. Write the dossier body

The body should explain decisions, not repeat the card metadata. A useful structure is:

```mdx
# New Project

One plain-language paragraph explaining what the project is and who it helps.

## The problem

Describe the real workflow, friction, constraints, and consequences.

## The approach

Explain the key product and engineering decisions, including trade-offs.

## Evidence

Use screenshots, code links, or clearly attributed records. State what each artifact proves and what it cannot prove.

## Outcome

Separate shipped results from intended outcomes. Include confidence and source boundaries.

## Reflection

Record what changed in your thinking and what you would improve next.
```

Use the MDX dossier blocks exposed in `mdx-components.tsx` when they improve structure: `Problem`, `Constraints`, `EvidenceGallery`, and `Reflection`. Keep essential meaning in server-rendered headings and text; JavaScript should enhance the page, not carry the only explanation.

## 6. Add a multi-image gallery when needed

`CaseStudyGallery` is the shared interactive gallery. It requires serializable items with this shape:

```ts
{
  id: "overview",
  src: "/images/projects/new-project/overview.webp",
  alt: "New Project overview showing the primary workflow",
  caption: "The overview shows the primary workflow using synthetic data.",
  proves: "This artifact proves the visible navigation and workflow grouping only.",
  width: 1920,
  height: 1080,
}
```

For a full V3 project, define the items in typed frontmatter. The standard renderer and bespoke compositions can pass these items to `CaseStudyGallery`. Resolve each item's localized copy from `V3.CaseStudies.<project-slug>.Gallery.<copyKey>` with `Alt`, `Caption`, and `Proves` leaves in both message files.

The gallery must render the first image without JavaScript, give every slide useful alt text/caption/dimensions/evidence boundaries, expose visible focus and keyboard controls, respect reduced motion, never auto-rotate, and never hide critical evidence only inside the gallery.

## 7. Add English and Arabic copy

For a full V3 composition, add a matching namespace in both `messages/en.json` and `messages/ar.json`, such as `V3.CaseStudies.<project-slug>.Gallery`. Keep the structure identical in both locales. Shared standard-renderer labels live under `V3.Standard`.

Translate for HRs and general readers: explain the product, your contribution, and the evidence in plain language. At minimum provide hero copy, status/role/platform/access labels, chapter headings, outcome labels, project navigation, and gallery labels, alt text, captions, and evidence boundaries.

Test both locale flows. Confirm `lang="ar"`, `dir="rtl"`, readable line-height, and no horizontal overflow.

## 8. Build the full V3 composition (optional but recommended)

Create project-specific components such as:

```text
components/v3/projects/NewProjectCaseStudy.tsx
components/v3/projects/NewProjectPrologue.tsx
components/v3/projects/NewProjectEvidenceChapter.tsx
```

Compose them from `CaseStudyShell` and the shared primitives. Keep project-specific claims and chapter order in the new component; do not copy Oscar-specific claims.

Add the composition key to `case_study.composition`. For a new bespoke composition, add a renderer and schema descriptor to `components/v3/projects/case-study/registry.tsx`; the `satisfies Record<CaseStudyComposition, CaseStudyDefinition>` check makes missing or unknown entries a TypeScript error. Do not add slug-specific branches to `app/projects/[slug]/page.tsx`.

## 9. SEO and structured data

The existing metadata and sitemap code picks up project URLs and case-study media automatically. Confirm:

- Unique title, description, and canonical URL.
- Hero/thumbnail image suitable for Open Graph sharing.
- Truthful JSON-LD type and claims.
- Accurate date, platform, capabilities, confidentiality, and author.
- One sitemap entry for the project and expected image entries.
- No `/dev` route, private asset, or draft-only URL in public metadata.

`SoftwareApplication` is usually appropriate for a software product. Use a more accurate schema type for research or design artifacts.

## 10. Validate locally

Run these checks from the repository root:

```powershell
pnpm exec eslint content/projects/<slug>-en.mdx app/projects/[slug]/page.tsx components/v3/projects/<NewProject>CaseStudy.tsx
pnpm build
pnpm exec next start -p 3010
```

Then verify:

- `/projects` lists the new project with the correct status, image, and link.
- `/projects/<slug>-en` returns HTTP 200 and has one meaningful `h1`.
- Images load and have useful alt text.
- Gallery controls work with mouse, Tab, ArrowLeft, ArrowRight, Home, and End.
- All links and buttons have accessible names and visible focus.
- English and Arabic layouts work at 320, 768, and desktop widths.
- Reduced motion removes or shortens transitions.
- `/sitemap.xml` contains the project URL and expected image entries.
- `/robots.txt` does not expose development or private paths.
- The browser console has no errors.

Useful route checks:

```powershell
Invoke-WebRequest http://localhost:3010/projects/<slug>-en -UseBasicParsing
Invoke-WebRequest http://localhost:3010/sitemap.xml -UseBasicParsing
Invoke-WebRequest http://localhost:3010/robots.txt -UseBasicParsing
```

## 11. Release checklist

- [ ] Claims and metrics have a source or confidence label.
- [ ] Screenshots contain no private or sensitive information.
- [ ] All frontmatter image filenames resolve.
- [ ] English and Arabic message keys are complete.
- [ ] Archive card and dossier use the intended status.
- [ ] V3 component is registered, if applicable.
- [ ] Canonical, Open Graph, Twitter, sitemap, robots, and JSON-LD output are verified.
- [ ] Focus, keyboard, reduced-motion, responsive, and RTL checks pass.
- [ ] `pnpm build` passes.
- [ ] Production environment variables are configured in the hosting provider, not committed to Git.

## Troubleshooting

### The project does not appear in the archive

Check that the file is inside `content/projects/`, ends in `.mdx`, and passes `projectMetadataSchema`. A malformed required field will fail project loading.

### The archive works but the V3 page does not appear

Check that the MDX contains a valid `case_study` block and a supported `composition`. Projects without `case_study` intentionally use the legacy fallback; V3 projects are selected by composition through the registry.

### The image is broken

`screenshots.*_screenshot_url` is relative to the project image directory. `case_study.hero.src`, `thumbnail.src`, and gallery `src` are public-root paths beginning with `/images/projects/`.

### Arabic shows a missing-message error

Copy the full key structure from `messages/en.json` into `messages/ar.json`, then translate every leaf key.

### A metric feels too strong

Remove it or downgrade the wording. Use a qualitative outcome, cite the available evidence, and set confidence to `owner-verified` or `estimate` when independent verification is unavailable.
