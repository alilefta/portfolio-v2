# M3 — Oscar Flagship Case Study

**Status:** Complete — the production route, reusable dossier system, SEO, and structured data are shipped. Five additional Oscar captures and repository-wide legacy lint debt remain clearly tracked follow-ups.

## Outcome

Oscar becomes the reference implementation for every V3 case study: an expressive product introduction followed by a rigorous, inspectable engineering dossier.

## Required story

- Product context and the dental-lab workflow problem.
- Ali’s role and ownership.
- Real operational constraints.
- Workflow before and after Oscar.
- Architecture and important technical decisions.
- Interface states and product details.
- Commercial/shipping outcome and supported evidence.
- What Ali would change or improve now.

## Features

### Project schema and loader

- [x] Introduce Zod validation for V3 project frontmatter.
- [x] Preserve compatibility with unmigrated project files during transition.
- [x] Emit actionable build errors for invalid or missing required metadata.
- [x] Support role, duration, capabilities, confidentiality, ordered outcomes, hero media, and thumbnail media.
- [ ] Normalize localized slugs and image directories without brittle string replacement.

### Product prologue

- [x] Create a distinctive Oscar opening with product title, proposition, status, role, and authentic product media.
- [x] Use a single cinematic transition to move from product story into the workshop dossier.
- [x] Provide a clear “case study starts here” reading cue without scroll hijacking.

### Clinical Workshop dossier

- [x] Add a sticky or responsive project metadata dossier.
- [x] Add structured `Problem`, `Constraints`, `DecisionRecord`, `EvidenceGallery`, `OutcomePanel`, and `Reflection` MDX components.
- [x] Add an accessible workflow/system/outcome inspection component.
- [x] Make every tab or view reachable by keyboard and represented in the accessibility tree.
- [x] Ensure all critical content remains readable when JavaScript is unavailable.

### Evidence production

- [x] Inventory existing Oscar screenshots and identify missing proof.
- [ ] Capture consistent, high-resolution interface images with sensitive data removed.
- [x] Create a workflow diagram from actual product behavior.
- [x] Document at least three consequential engineering or product decisions.
- [x] Verify the “sold,” “in use,” time-saved, and case-loss claims; qualify any estimate.
- [x] Add descriptive captions explaining what each artifact proves.

### Navigation and SEO

- [x] Evaluate a table of contents or progress aid; omit it because the chapter transitions, metadata dossier, and linear narrative already provide sufficient orientation without adding sticky UI.
- [x] Add previous/next project and contact paths.
- [x] Generate project-specific metadata and Open Graph content.
- [x] Add truthful SoftwareApplication or CreativeWork structured data.

## Likely files

- `app/projects/[slug]/page.tsx`
- `components/v3/projects/*`
- `components/mdx-components/*`
- `mdx-components.tsx`
- `lib/project-schema.ts`
- `lib/projects.ts`
- `content/projects/oscar-lab-system-en.mdx`
- `public/images/projects/oscar-lab-system/*`

## Acceptance criteria

- The case study answers: what was built, why it mattered, what Ali owned, how it worked, what tradeoffs were made, and what changed.
- A visitor can skim the essential story in approximately three minutes or read the full evidence in depth.
- Interactive views use correct tab semantics or an equally accessible interaction model.
- The route remains meaningful without client-side JavaScript and with reduced motion enabled.
- No confidential client, patient, or activation data appears in screenshots or copy.
- All stated metrics have a recorded source or are explicitly identified as estimates.
- M3-scoped ESLint, TypeScript, and `pnpm build` pass. Repository-wide legacy lint debt remains assigned to M6.

## Production slice evidence and verification record

- Promoted the complete Oscar dossier to `/projects/oscar-lab-system-en`; `/dev/v3-oscar` remains development-only and redirects to the public project in production.
- Preserved all unmigrated project routes through `LegacyProjectsShell` without exposing a permanent V2 URL.
- Extracted a reusable `CaseStudyShell`, chapter transitions, decision records, outcome panels, project navigation, and MDX dossier blocks for future project migrations.
- Registered `Problem`, `Constraints`, `DecisionRecord`, `EvidenceGallery`, `OutcomePanel`, and `Reflection` in the shared MDX component map.
- Added localized canonical, Open Graph, and Twitter metadata using the authentic Oscar screenshot as the social artifact.
- Added truthful `SoftwareApplication` and `BreadcrumbList` JSON-LD. It describes product capabilities and authorship without inventing ratings, pricing, usage, or impact metrics.
- Added the public Oscar route and its authentic image to the sitemap.
- Verified the public dossier and legacy fallback at desktop and 320 px mobile widths, in English and Arabic/RTL, with one page shell and no horizontal overflow.
- Verified the optimized build through `next start`: Oscar and the legacy fallback return 200, canonical/structured/sitemap output is present, and `/dev/v3-oscar` returns HTTP 307 to the public route.
- M3-scoped ESLint, full TypeScript, and `pnpm build` pass. Repository-wide `pnpm lint` still reports pre-existing V2/blog/code-block debt tracked for M6.
- The evidence registry deliberately remains at one available artifact and five required captures. That content-production debt is visible in the dossier and does not weaken or fabricate the current proof.

## Out of scope

- Migrating every remaining project.
- Adding decorative 3D or WebGL effects.

## Slice 1 evidence and verification record

- Preview route: `/dev/v3-oscar` in development; redirects to the existing public Oscar page in production.
- Added permissive validation for legacy project frontmatter and a strict, versioned `case_study` schema for migrated V3 projects.
- Parsed all five existing project files successfully; only Oscar opts into the V3 schema so other project routes remain compatible.
- Added structured Oscar role, platform, capabilities, confidentiality, hero, thumbnail, and owner-verified commercial outcome metadata.
- Replaced the unsupported “100% case loss / 15+ weekly hours” legacy business-impact string with the defensible shipped-and-sold fact.
- Existing media inventory: one dashboard screenshot. Missing evidence includes workflow states, case detail, finance/payroll, reports, settings, empty/error states, and update/licensing artifacts.
- The public distribution repository could not be independently discovered during the audit; it is not used as public proof in the prologue.
- Browser checks: 1440 px desktop and 320 px mobile, English and Arabic/RTL, image loading, anchor handoff, and horizontal overflow passed with no console warnings or errors.
- Targeted ESLint and full TypeScript checks passed.

## Slice 5 evidence and verification record

- Added an outcome panel whose only commercial result is “shipped and sold,” explicitly labeled owner-verified with the supporting record kept private.
- Explicitly states that no public time-saving, adoption, case-loss, or financial-improvement metric is asserted; unsupported historical impact claims have been removed rather than converted into estimates.
- Added a four-phase ownership record covering observation, definition, building, and commercial delivery/support.
- Added three retrospective improvements: evidence built into releases, a decoupled delivery plane, and recovery verification beyond manual backup.
- Labels every reflection as a proposed future direction rather than functionality already shipped.
- Added direct contact, project archive, and next-case paths, including the Labora project route.
- The Oscar dossier contains no tabs or hidden critical views; its complete narrative is semantic, server-rendered, keyboard-readable content without client JavaScript.
- Browser checks: 1440 px desktop and 320 px mobile, English and Arabic/RTL, outcome/ownership/reflection presence, link destinations, and zero horizontal overflow passed with no runtime errors.
- Targeted ESLint and full TypeScript checks passed.

## Slice 4 evidence and verification record

- Added the only currently available authentic Oscar dashboard as a full evidence artifact rather than repeating or cropping it into a manufactured gallery.
- Corrected the prologue artifact label by removing the unsupported 2024 screenshot date; the image itself visibly contains a 2025 interface date.
- Documented four directly visible facts: operational navigation scope, global case creation, the shared dashboard model, and the existence of a product-specific desktop interface.
- Documented four limits: the screenshot does not prove business impact, value accuracy, workflow depth/resilience, or the private commercial record.
- Treats dashboard numbers as interface data, not verified business or performance outcomes.
- Added an evidence registry with one available artifact and five required captures: case lifecycle, finance/payroll, reports/export, backup/recovery, and activation/update.
- Added a capture protocol requiring seeded demo data, consistent presentation, sensitive-data redaction, and claim-specific captions.
- Fixed a narrow-screen overflow path found during visual QA by clipping horizontal overflow at the Oscar preview shell.
- Browser checks: 1440 px desktop and 320 px mobile, English and Arabic/RTL, localized artifact caption, registry status counts, and zero horizontal overflow passed.
- Targeted ESLint and full TypeScript checks passed.

## Slice 3 evidence and verification record

- Added a conceptual system map separating Oscar’s local operational core from its activation and update delivery edge.
- Mapped documented product responsibilities across admin/user access, the WPF application shell, case/relationship/finance/reporting modules, EF Core, SQLite, and import/export/backup/restore.
- Added three bilingual decision records covering the Windows-native platform, local SQLite storage, and GitHub-backed activation/update delivery.
- Each record names context, choice, tradeoff, and evidence boundary; the architecture caption explicitly avoids claiming an undocumented internal class structure.
- The chapter does not claim cloud sync, multi-device operation, device distribution, or public access to proprietary source code.
- Kept the architecture map and decision records semantic and server-rendered with no interaction required.
- Browser checks: 1440 px desktop and 320 px mobile, English and Arabic/RTL, architecture/decision content presence, and horizontal overflow passed.
- Targeted ESLint and full TypeScript checks passed.

## Slice 2 evidence and verification record

- Added a bilingual operational-context chapter grounded in six years of direct laboratory work and Oscar’s shipped product scope.
- Documented the fragmented workflow and Oscar product model as a qualitative comparison; no unsupported time-saving or efficiency metric is presented.
- Represented the core path as a semantic ordered workflow: intake, case record, production state, financial record, and reporting.
- Recorded four environment-led constraints: Windows-native use, local-first data ownership, role boundaries, and proprietary licensing/update delivery.
- Kept the full chapter server-rendered with no client component, tabs, animation, or JavaScript dependency for critical content.
- Browser checks: 1440 px desktop and 320 px mobile, English and Arabic/RTL, semantic heading/list structure, and horizontal overflow passed.
- Targeted ESLint and full TypeScript checks passed.
