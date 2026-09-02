# M5 — Supporting Routes and Conversion

**Status:** Slice 5 complete — M5 implementation is complete; production email delivery activates when Resend credentials are added.

## Outcome

Navigation, writing, contact, and system pages feel like one portfolio and provide clear routes from interest to trust to contact.

## Features

### Global navigation and footer

- [x] Roll out the V3 header to all routes.
- [x] Add current-page indication and robust mobile behavior.
- [x] Preserve theme and locale controls without making them the visual focus.
- [x] Ensure the CV action downloads or opens a real, current document.
- [x] Build a concise footer with directory, availability/contact, and essential social links.

### Writing index and articles

- [x] Restyle the blog index as an editorial engineering notebook.
- [x] Prioritize substantial articles and keep Lab Notes visually secondary.
- [x] Simplify category and search controls to match actual content volume.
- [x] Create a readable long-form article layout using V3 typography and evidence components.
- [x] Verify code blocks, tables, math, headings, and table of contents on mobile.
- [x] Preserve article metadata and Open Graph generation.

### Contact experience

- [x] Replace generic service-menu language with a short project-fit prompt.
- [x] Make direct email and form paths equally clear.
- [x] Connect the form to a real delivery mechanism with server-side validation and abuse protection.
- [x] Provide loading, success, validation, and service-failure states.
- [x] Avoid promising response times unless they can be maintained.

### System pages

- [x] Restyle loading, error, and not-found experiences using the V3 language.
- [x] Keep error recovery actions clear and avoid novelty terminal tropes.
- [x] Verify sitemap, robots, canonical URLs, and RSS if included in release scope.

### Content integrity

- [x] Remove or replace placeholder testimonials.
- [x] Audit English and Arabic shared copy for tone and consistency.
- [x] Validate every external, source, live-demo, email, CV, and social link.
- [x] Remove “coming soon” links that do not help the visitor.

## Likely files

- `app/blog/**/*`
- `app/contact/**/*`
- `app/not-found.tsx`
- `app/error.tsx`
- `app/loading.tsx`
- `components/v3/layout/*`
- `components/blog/*`
- `components/ContactForm.tsx`
- `messages/en.json`
- `messages/ar.json`

## Acceptance criteria

- A visitor can move from any case study or article to contact in one clear action.
- The contact form delivers a real message and handles failure honestly.
- Long-form content remains readable at 320 px and 200% zoom.
- Code blocks and wide media do not create page-level horizontal overflow.
- Navigation, theme, and locale choices work by keyboard and assistive technology.
- All public links resolve to intended real destinations.
- `pnpm lint` and `pnpm build` pass.

## Out of scope

- A full publishing CMS.
- Newsletter infrastructure unless Ali has committed to maintaining a newsletter.

## Slice 1 evidence and verification record

- Extracted a reusable `SiteFooter` with localized directory links, availability/contact details, and essential GitHub, LinkedIn, and email actions.
- Replaced the legacy Navbar/Footer shell on blog, blog articles, lab notes, and contact routes with the V3 `SiteHeader` and `SiteFooter`.
- Reused the same footer in the homepage contact chapter, project archive, and case-study shell so public V3 routes share one navigation language.
- Applied the V3 frame to global loading, error, and not-found states; loading now uses a status container so resolved pages retain one main landmark.
- Preserved route-specific blog newsletter and article content while removing duplicate layout footers and unused shell imports.
- Development HTTP checks passed for blog, article, lab notes, contact, and not-found routes in English and Arabic/RTL: expected status codes, V3 header/footer markers, one main landmark per resolved page, and no missing-translation or server-rendering errors.
- Direct TypeScript validation passed with `node node_modules/typescript/bin/tsc --noEmit`.

## Slice 2 evidence and verification record

- Replaced the generic contact page with a V3 project-fit invitation focused on context, friction, and the desired outcome.
- Kept a direct email path prominent in the hero, contact panel, shared footer, and the form fallback so visitors are never trapped in one interaction model.
- Added `ProjectFitForm` with accessible labels, native controls, inline field errors, an explicit preparing state, a prepared-email success state, and an honest failure state.
- The form prepares a structured `mailto:` draft rather than claiming server delivery; success copy explains that the visitor’s email client should open and provides a direct fallback.
- Added bilingual English/Arabic copy for the fit prompts, project types, validation messages, success/error states, and privacy boundary.
- Development HTTP checks passed for `/contact` in English and Arabic/RTL: 200 responses, one main landmark, V3 header/footer, project-fit copy, direct email path, and no missing-translation or server-rendering errors.
- Direct TypeScript validation passed with `node node_modules/typescript/bin/tsc --noEmit`.

## Slice 3 evidence and verification record

- Rebuilt `/blog` as an editorial engineering notebook driven entirely by real MDX entries; removed the mock archive, decorative category counts, and simulated newsletter signup.
- Promoted substantial essays through a current-entry feature and a numbered article ledger, while moving Lab Notes into a deliberately quieter secondary register.
- Rebuilt long-form article pages around a readable 48rem measure, marginal entry metadata, a sticky table of contents, inspectable tags, author context, and older/newer entry navigation.
- Added notebook-specific MDX rendering for headings, paragraphs, lists, links, callouts, code, and horizontally scrollable tables without changing the shared case-study MDX components.
- Restyled the Lab Notes index and detail pages so the complete writing route family shares one visual and semantic system.
- Rebuilt dynamic article Open Graph images in the V3 paper, ink, blue, yellow, and coral palette and removed their runtime external font request.
- Added localized English and Arabic/RTL interface copy for the notebook index, article chrome, Lab Notes archive, and note detail pages.
- Development HTTP checks passed for the index, article, Lab Notes archive, and note detail routes: 200 responses, one main landmark, expected V3 copy, and no missing-translation or server-rendering errors. Arabic/RTL index rendering also passed.
- Direct TypeScript and focused ESLint validation passed.
- Responsive regression caught overflowing display text at 1024px and 1440px. The notebook hero now waits until `xl` for its split layout, uses a wider tracking rhythm, and constrains both headline columns with explicit minimum-width behavior.
- Browser UI regression passed at 375, 768, 1024, 1280, 1440, and 1920px: hero and featured titles remain contained, no title/card collision occurs, mobile navigation opens and closes with four links, and the page has no horizontal overflow.
- Long-form article, Lab Notes index, and Lab Note detail regressions passed from 375px through 1440px; article code regions stay contained, the desktop table of contents hydrates with six entries, and Arabic/RTL layouts remain within the viewport.

## Slice 4 evidence and verification record

- Replaced the terminal-themed loading, runtime-error, and not-found presentations with one reusable V3 system-state composition using the portfolio’s editorial typography, hard borders, and restrained color signals.
- Removed fabricated stack traces and stopped rendering runtime error messages or digests to visitors. The error boundary now uses Next.js 16’s recovery callback and offers a stable route back home.
- Added complete English and Arabic/RTL system-state copy, including localized 404 metadata and explicit recovery actions.
- Corrected sitemap freshness semantics: static routes no longer claim a new modification date on every request, malformed content dates are omitted instead of silently replaced with today, and route priorities reflect the public information hierarchy.
- Updated robots output with the canonical host and a `/dev` exclusion that covers the complete prototype route family.
- Removed a redundant global `index, follow` meta directive that conflicted with Next.js’s automatic `noindex` on 404 responses; indexable pages remain crawlable through the robots policy and sitemap.
- Browser regression passed for the English 404 at 375, 768, 1024, and 1440px and Arabic/RTL at 375, 768, and 1440px: one main landmark, one shared header/footer, contained display type, working recovery destinations, and no page-level horizontal overflow.
- Direct TypeScript and focused ESLint validation passed with no errors.
- M5 intentionally remains open: the current project-fit form prepares an honest email draft rather than delivering server-side, and no current CV artifact exists in `public/` to expose from navigation.
- Public link checks confirmed the GitHub profile, Freelancer Command Center repository, and BASE 60 live demo resolve. Four repository URLs returned public 404s; their source actions were removed, and BASE 60’s privacy label was corrected from open source to closed source. LinkedIn blocks automated validation and remains a manual release check.

## Slice 5 evidence and verification record

- Published the supplied one-page A4 CV unchanged at `/ali-lefta-cv.pdf`; source and public copies have matching SHA-256 hashes, and a rendered visual review found no clipping or layout defects.
- Added localized CV download actions to the desktop header, mobile navigation, and shared footer.
- Replaced the client-side email-draft simulation with a real `/api/contact` route using server-side Zod validation and Resend’s HTTPS email API.
- Kept email credentials server-only through `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`, documented in `.env.example`.
- Added origin checking, a hidden honeypot field, payload limits, and a best-effort per-instance request limit as the initial abuse-protection layer.
- The form now distinguishes successful delivery, provider failure, validation failure, rate limiting, and an unconfigured provider. The unconfigured state never claims delivery and keeps the direct email fallback visible.
- Production delivery is intentionally dormant until valid Resend credentials and a verified sender domain are configured.
