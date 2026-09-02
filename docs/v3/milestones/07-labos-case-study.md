# M7 — LabOS Case Study

**Status:** Slice 1–6 implemented — content capture and future product evidence remain intentionally open.

## Source boundary

LabOS is an in-development, multi-tenant SaaS platform for dental laboratories. The brief is authoritative for product direction and current engineering focus, but it does not prove that every listed domain area is shipped. Portfolio copy must use “under development,” “designed to,” or “current focus” for intended work and reserve “implemented” for verified repository or product evidence.

## Outcome

LabOS becomes the second V3 reference story: a work-in-progress SaaS platform where Ali’s dental-laboratory knowledge shapes the domain model, while tenant isolation and authorization shape the engineering story.

## Slices

### Slice 1 — Product prologue and current status

- Establish LabOS as an under-development multi-tenant SaaS product.
- Explain the one-line thesis: an operating system for modern dental laboratories.
- Show role, current engineering focus, stack, and evidence availability.
- Use an authentic product screenshot or an explicitly labeled interface exploration; never present a roadmap screen as shipped functionality.

### Slice 2 — Domain workflow and product model

- Ground the problem in fragmented paper, spreadsheet, messaging, and disconnected-tool workflows.
- Show the intended chain: cases → dentists/clinics → staff → production → inventory → finance → reporting.
- Explain the distinction between a staff record and an application member.
- Keep the story about operational coordination, not a feature checklist.

### Slice 3 — Tenant boundary and authorization workshop

- Map organization/tenant context, Better Auth Organizations, the Lab domain entity, PostgreSQL/Prisma, and server-side authorization.
- Document the consequential decisions: tenant context derived from membership, default-deny permissions, and staff identity separated from application access.
- Explain Authorization V1 as active migration work, including invariants and legacy-path removal.
- State what the diagram cannot prove: production scale, security certification, or complete feature coverage.

### Slice 4 — Evidence room and reusable gallery

- Introduce `CaseStudyGallery` for multiple authentic LabOS screenshots or diagrams.
- Each artifact gets a claim-specific caption, dimensions, alt text, and a redaction/evidence boundary.
- Support dashboard, organization switcher, invitations, staff/member linking, case workflow, authorization, and responsive states only when real captures exist.
- Reuse the gallery for Oscar and later projects; do not duplicate project-specific carousel logic.

### Slice 5 — Engineering challenges and ownership

- Tell the migration story: inventorying actions, moving from loose `labId` values to verified organization context, cutting over invitations, and testing isolation.
- Highlight concurrency and invariants around membership, ownership, staff linking, and financial mutations.
- Attribute ownership carefully: discovery, domain modeling, architecture, implementation, testing, and migration support only where verified.

### Slice 6 — Current state and next direction

- Close with “under active development / work in progress.”
- Separate current foundation work from future modules and roadmap intent.
- Name the next credible proof needed rather than inventing adoption, performance, or business-impact metrics.
- Link back to the project archive and contact path.

## Evidence rules

- No completion language for inventory, finance, reporting, notifications, or production workflow unless a current implementation or capture supports it.
- No tenant-count, performance, security, adoption, or time-saving metrics are asserted without a recorded source.
- Screenshots must remove patient, customer, invitation, email, environment-secret, and tenant-identifying data.
- A gallery is a proof surface, not a substitute for explaining what each artifact demonstrates.

## Slice 2 evidence and verification record

- Added the LabOS domain-context chapter: coordination across cases, people, materials, deadlines, finance, and communication rather than another isolated CRUD surface.
- Added a bilingual before/after comparison covering records, staff versus application members, operational visibility, and relationships to dentists/clinics.
- Added the connected domain chain from cases through dentists/clinics, staff, production, inventory, finance, and reporting.
- Qualified the chapter as intended product modeling and current direction; it does not claim every workflow is complete or deployed.
- Added the next-slice transition toward tenant boundaries and permission evaluation.
- Development HTTP checks passed in English and Arabic/RTL with one server-rendered main landmark and no translation or server-rendering errors.

## Slice 3 evidence and verification record

- Added a buyer-facing trust architecture chapter: organization context, membership, permission evaluation, and resource policy must agree before a tenant-scoped action is allowed.
- Added a semantic four-step trust path covering Better Auth identity, organization membership, centralized permission evaluation, and tenant-owned resources.
- Added three reusable decision records for verified organization context, default-deny authorization bundles, and the separation of staff records from application access.
- Framed the active Authorization V1 work as a risk-reduction and auditability story without claiming certification, production scale, or complete policy rollout.
- Added bilingual architecture copy and RTL-compatible layouts.
- Development HTTP checks passed in English and Arabic/RTL with one main landmark and no missing-translation or server-rendering errors.

## Slice 4 evidence and verification record

- Added the LabOS evidence room with the reusable `CaseStudyGallery`, a single available interface exploration, and a five-item capture registry.
- Captions distinguish interface direction from completed functionality; the artifact uses synthetic demonstration data and exposes no tenant-identifying records.
- Added capture requirements for organization switching, membership/invitations, case workflow, authorization boundaries, and operational reporting.
- Added a bilingual capture protocol covering demo data, one question per artifact, redaction, and shipped/active/exploration state labeling.
- Integrated the same gallery component into Oscar, with controls hidden when only one artifact exists.
- The built-in image generator was unavailable due to the current usage limit, so no generated screenshots were added or presented as real product evidence. Authentic captures can be added later through the existing item contract.
- Development HTTP checks passed in English and Arabic/RTL with one main landmark, gallery content, and no missing-translation or server-rendering errors.

## Slice 5 evidence and verification record

- Added the engineering-ownership chapter with commercially legible framing: LabOS is being made safe to grow through reversible migration slices, not by stacking features on ambiguous boundaries.
- Added a four-step migration path: inventory existing assumptions, move to verified organization context, cut over invitations/membership/staff linking, and verify isolation before widening the change.
- Added four challenge cards for tenant isolation, identity versus access, membership lifecycle, and concurrency-sensitive invariants.
- Added a four-phase ownership record covering domain observation, platform modeling, implementation, and proof through isolation/lifecycle/denial-path testing.
- Kept all language in active-development terms and explicitly excluded security certification, scale, and completed-rollout claims.
- Development HTTP checks passed in English and Arabic/RTL with one main landmark and no missing-translation or server-rendering errors.

## Slice 6 evidence and verification record

- Added the closing current-state chapter with a clear “under development / work in progress” status and a boundary around unsupported adoption, scale, security, performance, and business-impact claims.
- Separated the foundation that is being hardened now (organization context, membership lifecycle, Authorization V1, and isolation testing) from the future operating-platform direction.
- Added a three-horizon direction model: foundation now, workflow surfaces next, and a connected operating picture later. Future modules remain direction rather than shipped proof.
- Added a buyer-facing closing CTA to start a project conversation, a project archive link, and navigation to the next project.
- Added bilingual Slice 6 copy and RTL-safe layouts.
- Development HTTP checks passed for LabOS in English and Arabic/RTL: 200 responses, one main landmark, closing and direction copy present, contact/archive/next-project links present, and no missing-translation or server-rendering errors.
- Direct TypeScript validation passed with `node node_modules/typescript/bin/tsc --noEmit`; the shared `Section` tone union now includes the existing coral theme used by the LabOS chapter.

## Slice 1 evidence and verification record

- Added LabOS V3 frontmatter to the existing Labora route, preserving the URL while updating the product name and status to under development.
- Added a LabOS prologue with the multi-tenant SaaS thesis, product/platform ownership, current foundation focus, and explicit limited-evidence language.
- Used the existing interface image as an interface exploration with synthetic demonstration data; it is not presented as proof of completed feature coverage.
- Added `CaseStudyGallery` as a reusable client enhancement with server-rendered first-artifact fallback, previous/next controls for multi-image sets, numbered selection, keyboard Arrow/Home/End support, live evidence announcements, visible focus states, and reduced-motion-safe transitions.
- Integrated the same gallery API into Oscar’s evidence room, where its single available artifact intentionally renders without meaningless carousel controls.
- Development HTTP checks passed for LabOS and Oscar: 200 responses, one main landmark, gallery content, no server-rendering fallback errors, and Arabic/RTL output.

## Reusable implementation targets

- `components/v3/projects/CaseStudyGallery.tsx` — server-first gallery shell and serializable item contract.
- `components/v3/projects/CaseStudyGallery.tsx` — isolated keyboard and selection island.
- `components/v3/projects/LabOSCaseStudy.tsx` — LabOS-specific composition using the shared shell and dossier primitives.
- `content/projects/labos-en.mdx` — migrated frontmatter and narrative once source screenshots and verified implementation notes are available.
