# M4 — Project System and Remaining Work

**Status:** In progress — the V3 archive, LabOS dossier, and Image Cryptography research dossier are shipped; BASE 60 migration has started with its evidence-led prologue.

## Outcome

The Oscar system becomes a flexible project platform, and the projects index presents a curated body of work rather than a generic filterable card grid.

## Features

### Editorial project index

- [x] Replace the aurora/glass projects hero with the V3 visual system.
- [x] Lead with a clear editorial introduction and featured project.
- [x] Redesign project entries to show story, role, status, and result before technology tags.
- [x] Keep filters only if the final project count makes them useful; omit them while the archive remains five projects.
- [ ] When retained, make filter state shareable, keyboard accessible, and resilient to invalid query parameters.
- [ ] Provide a meaningful empty state and reset action.

### Reusable case-study variants

- [ ] Separate required project sections from optional evidence modules.
- [ ] Support web, desktop, SaaS, research, and confidential-project media needs.
- [x] Support shipped, active, and experiment status language.
- [ ] Support limited evidence without filling space with generic prose.
- [ ] Add a project-to-project narrative link based on relevance rather than date alone.

### Content migration

- [ ] Migrate LabOS with product vision, tenancy/workflow challenges, current status, and honest incomplete outcomes. (Formerly Labora.)
- [x] Migrate Image Cryptography as a focused technical exploration with method and findings.
- [ ] Migrate Base 60 Foundry with strong interface and configurator evidence.
- [ ] Migrate Freelancer Command Center if it contributes a distinct story; otherwise archive it from featured work.
- [ ] Audit every project for role, constraints, decisions, evidence, outcomes, and reflection.
- [ ] Remove README-style installation and feature-dump content from public case studies unless directly relevant.

### Media system

- [ ] Standardize thumbnail, hero, detail, diagram, and comparison media variants.
- [ ] Add dimensions, `sizes`, alt text, and captions for all project media.
- [ ] Ensure galleries handle portrait, landscape, and missing assets without layout shift.
- [ ] Define a process for redacting sensitive data.

## Likely files

- `app/projects/page.tsx`
- `app/projects/[slug]/page.tsx`
- `components/v3/projects/*`
- `content/projects/*.mdx`
- `public/images/projects/**/*`
- `lib/project-schema.ts`
- `lib/projects.ts`

## Slice 1 evidence and verification record

- Replaced the filter-heavy aurora/glass index with `ProjectArchive`: a warm V3 archive with a clear editorial thesis, oversized Oscar flagship, and supporting-project grid.
- Project cards lead with the project story, role, platform, and status; technology tags are no longer the primary reading path.
- Ordering is intentional: featured order first, then supporting work by title. Filters are deferred until the archive has enough content to justify them.
- Reused the localized V3 Selected Work copy and added bilingual archive labels, status language, and empty-proof messaging.
- Preserved the existing project URLs and public Oscar dossier route; all five current project entries remain reachable.
- Development HTTP checks passed for English and Arabic/RTL: one main landmark, archive content, Oscar/Labora/Cryptography links, and 200 responses without application errors.
- Owner visual QA confirmed the archive composition at desktop, tablet, and mobile breakpoints; the responsive hierarchy remains usable across all three sizes.
- Remaining M4 work is content migration for Labora, Image Cryptography, Base 60, and Freelancer Command Center, plus media dimensions/capture/redaction standards.

## Image Cryptography — Slice 1 evidence

- Replaced the incorrect copied Oscar body with a truthful V3 research record derived from the supplied graduation-project brief.
- Added a distinct research-instrument prologue using the real desktop application screenshot and the original → encrypted → S-box → decrypted sequence as the leading artifact.
- Recorded scope, authorship, platform, method, and the 2023–2024 academic context in validated `case_study` metadata.
- Labeled the work as an experiment and stated prominently that it is an academic proof of concept, not an independently audited production cryptosystem.
- Added intentional English and Arabic/RTL prologue copy; the next slice will explain the five-dimensional system and transformation pipeline.
- Production build, focused ESLint, and TypeScript checks pass. Browser regression passed at 1440 px, 768 px, and 375 px in English plus 375 px Arabic/RTL, with no horizontal overflow, missing imagery, or console errors.

## Image Cryptography — Slice 2 evidence

- Added a bilingual method chapter grounded in the supplied brief and checked against the working Python source.
- Transcribed the five implemented nonlinear equations and the actual `solve_ivp` interval and maximum-step settings into a legible research panel.
- Explained the complete seed → solve → RGB S-box → transform → reverse pipeline, including the tiled key field and channel-wise NumPy operations.
- Documented the forward and inverse formulas and corrected the public explanation to describe a modulo-256 pixel-value shift rather than a spatial pixel rotation.
- Presented vectorization as an engineering decision without inventing a performance result, and repeated the boundary that reversibility does not establish production cryptographic security.
- Focused ESLint, TypeScript, and production build pass. Fresh-tab browser regression passes at desktop, tablet, and mobile, including Arabic/RTL with LTR equations, no horizontal overflow, and no console errors.

## Image Cryptography — Slice 3 evidence

- Added a bilingual evidence chapter covering entropy, NPCR, UACI, horizontal and vertical correlation, PSNR, recovery SSIM, and reported encryption time.
- Paired each measurement with a narrow interpretation and an explicit statement of what it does not prove.
- Reused the working application screenshot as the reliable research artifact; rejected two ambiguously named loose image files because both visually contained noise fields and could not support a truthful before/after claim.
- Added experiment-scope, reproduction, and independent-audit limitations, keeping every result attributed to the supplied graduation paper rather than presenting it as a fresh benchmark.
- Focused lint, TypeScript, and production build pass. Desktop English and mobile Arabic/RTL browser checks confirm all eight values, the research gallery, loaded imagery, no horizontal overflow, and no console or missing-message errors.

## Image Cryptography — Slice 4 evidence

- Added a bilingual productization chapter grounded in the desktop GUI, evaluation, threading, and PyInstaller source paths.
- Reconstructed the application information architecture as a code-native visual showing the General/Evaluation split, four synchronized image states, experiment inputs, and progress surface.
- Reframed the feature set as a researcher workflow—configure, run, inspect, preserve—plus a capability map covering experiment setup, observation, operation, and delivery.
- Documented the software layers from Tkinter orchestration through numerical, analysis, and packaging dependencies.
- Highlighted three product engineering decisions: keeping the transformation loop visible, moving numerical work off the UI thread, and rejecting invalid experiment parameters before execution.
- Translation validation, focused lint, TypeScript, and production build pass. Desktop, tablet, and Arabic mobile browser checks confirm the workspace reconstruction, capability groups, packaging record, loaded imagery, no horizontal overflow, and no console or missing-message errors.

## Image Cryptography — Slice 5 evidence

- Added the final research outcome, end-to-end ownership record, evidence-led future-work roadmap, closing call to action, and narrative navigation from LabOS to BASE 60.
- Classified the completed work as graduation research plus a working Windows prototype while retaining the academic proof-of-concept and no-independent-audit boundary.
- Added research-specific page-title language and `SoftwareApplication` plus breadcrumb structured data for the public project route.
- Marked the Image Cryptography migration complete; no incorrect Oscar body copy, placeholder results, or unsupported security claims remain in the published dossier.
- Translation validation, focused lint, TypeScript, and production build pass. Fresh Arabic mobile and English desktop browser checks confirm the conclusion, research-specific title, structured data, CTAs, LabOS/BASE 60 navigation, no horizontal overflow, and no console or missing-message errors.

## BASE 60 — Slice 1 evidence

- Reframed BASE 60 as an advanced, ongoing portfolio prototype rather than a deployed production store.
- Established the product thesis around three connected systems: the commerce storefront, the logic-aware Crucible 3D architect, and the Overseer operations interface.
- Replaced generic and unsupported claims with validated scope, end-to-end ownership, current status, capabilities, and explicit production gaps from the supplied project brief.
- Added a distinct industrial amber/black prologue that uses the project's own visual language without turning the full portfolio page into a terminal-themed interface.
- Added a reusable four-image gallery using real builder, storefront, order-operations, and product-ingestion evidence; every image has dimensions, alt text, a caption, and an explicit evidence statement.
- Labeled visible administration records and telemetry as demo data and avoided adoption, performance, revenue, or production-readiness claims.
- Added intentional English and Arabic/RTL copy. The next slice will explain the compatibility problem and the resolver architecture beneath the 3D experience.

## BASE 60 — Slice 2 evidence

- Added a dedicated compatibility chapter that frames PC configuration as a physical, electrical, and platform constraint problem.
- Visualized the resolver contract as structured input → pure rules → shared state → 3D feedback, keeping domain decisions independent from presentation timing.
- Documented six rule families from the brief: socket/chipset, memory generation, power/connectors, GPU clearance, cooling envelope, and M.2/expansion.
- Added a concrete buyer-facing feedback model that explains conflicts instead of presenting mysterious disabled actions.
- Added bilingual English and Arabic/RTL copy for the full chapter, including the rule cards and architecture flow.
- Verified the route at desktop and mobile widths in both locales: four Slice 2 headings, six rule cards, no horizontal overflow, no broken images, and no console errors.

## BASE 60 — Slice 4 evidence

- Added the Overseer operations chapter as a distinct second-audience story for the product team behind the storefront.
- Documented three operational surfaces: registry management, order dispatch, and telemetry—with each surface tied to a concrete workflow rather than dashboard decoration.
- Added a module-ingestion sequence covering identity, technical specifications, stock allocation, and visual assets.
- Added an order-state board from queued through complete, while explicitly keeping webhooks, idempotency, fulfilment integrations, and refunds in the future-work boundary.
- Added a telemetry panel with synthetic sample values and clear provenance language; no adoption, revenue, or live-operations claims are made.
- Added bilingual English and Arabic/RTL copy for the complete chapter.
- Fresh browser checks pass at desktop and mobile widths in both locales: eight BASE 60 chapter headings, three operations surfaces, four dispatch states, no horizontal overflow, no broken images, and no console errors.

## BASE 60 — Slice 5 evidence

- Added the closing dossier with a truthful current-state classification, evidence boundary, architecture decisions, and production roadmap.
- Documented the three decisions that define the product: rules before spectacle, server-friendly commerce plus client interaction islands, and telemetry with provenance.
- Added practical next-build work covering payment reconciliation, stock safety, authentication, permissions, live aggregation, automated coverage, 3D performance, accessibility, and localization.
- Added bilingual closing CTA and project navigation back to the archive and the preceding research project.
- Added `SoftwareApplication` and `BreadcrumbList` structured data plus project-specific metadata for the public BASE 60 route.
- Marked BASE 60 migration complete for the current evidence boundary; future production hardening remains explicitly documented rather than implied.

## BASE 60 — Slice 5 evidence

- Added the closing BASE 60 conclusion chapter with a truthful current-state classification, evidence boundary, ownership decisions, and production roadmap.
- Recorded the three architecture decisions that define the product: rules before spectacle, server-friendly commerce plus client interaction islands, and telemetry with provenance.
- Added a practical production roadmap covering payment reconciliation, stock safety, authentication, permissions, live aggregation, automated coverage, 3D performance, accessibility, and localization.
- Added a bilingual closing CTA and project navigation back to the archive and the preceding research project.
- Added `SoftwareApplication` and `BreadcrumbList` structured data plus project-specific metadata for the public BASE 60 route.
- Marked BASE 60 migration complete for the current evidence boundary; future production hardening remains explicitly documented rather than implied.

## Acceptance criteria

- Every published project has a distinct thesis and does not read like a duplicated template.
- Project order is intentional and controlled through content metadata.
- Project cards/previews communicate value before stack details.
- Optional case-study sections collapse cleanly when evidence is unavailable.
- No page exposes placeholder, fabricated, or confidential content.
- The index and every case study work across LTR, RTL, mobile, keyboard, and reduced-motion contexts.
- `pnpm lint` and `pnpm build` pass.

## Out of scope

- New portfolio projects created solely to fill the grid.
- Complex filtering for a small collection.
