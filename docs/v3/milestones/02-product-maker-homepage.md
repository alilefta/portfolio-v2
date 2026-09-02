# M2 — Product Maker Homepage

**Status:** Complete — approved and promoted to the public `/` route. Repository-wide legacy lint cleanup remains tracked for M6.

## Outcome

A memorable, concise homepage that expresses Ali’s maker personality and routes visitors toward the strongest evidence or a conversation.

## Narrative order

1. Maker hero
2. Credibility strip
3. Selected work
4. Cinematic chapter transition
5. Working protocol
6. Short origin story
7. Engineering writing and contact invitation

## Features

### Maker hero

- [x] Write one specific positioning statement focused on products and systems.
- [x] Use Ali’s portrait and one authentic workbench/product artifact.
- [x] Add two primary paths: inspect selected work and start a conversation.
- [x] Communicate availability without a generic animated status pill.
- [x] Ensure the complete value proposition survives on small screens without hidden content.

### Credibility strip

- [x] Present only verified proof: commercial product, domain experience, academic result, and platform breadth.
- [x] Link relevant proof to its case study or supporting page.
- [x] Avoid equal bento cards; use an editorial strip or typographic sequence.

### Featured projects

- [x] Feature Oscar, Labora, and Image Cryptography in a deliberate hierarchy.
- [x] Give each project a distinctive composition based on its story and media.
- [x] Show full role, status, platform, and outcome evidence for the flagship; keep supporting projects concise according to their hierarchy.
- [x] Implement responsive image `sizes` and stable aspect ratios.
- [x] Provide useful fallbacks for missing or private media.

### Working protocol and origin

- [x] Replace generic “How I Work” steps with a credible product workflow.
- [x] Connect dental-lab precision to software practice without repeating the same slogan.
- [x] Keep the origin story short and link to the full article when useful.
- [x] Use documentary pacing for one transition, not every section.

### Writing and conversion

- [x] Show a curated maximum of three substantial articles or notes.
- [x] Add a direct contact invitation with clear expectations.
- [x] Ensure CV download and social links point to real destinations.

### Content and data

- [x] Add `featured` and `featuredOrder` support to validated project metadata.
- [x] Remove hard-coded homepage project selection where possible.
- [x] Add all new shared copy to both locale message files.
- [x] Remove fake testimonials and unverifiable social proof from the homepage.

## Likely files

- `app/page.tsx`
- `components/v3/home/*`
- `components/v3/projects/ProjectPreview.tsx`
- `lib/project-schema.ts`
- `lib/projects.ts`
- `content/projects/*.mdx`
- `messages/en.json`
- `messages/ar.json`

## Acceptance criteria

- The homepage contains approximately seven clear narrative chapters, not a flat stack of equal sections.
- Visitors can identify Ali’s specialty, strongest proof, and contact path within the first viewport or immediate continuation.
- Every visible metric or testimonial is verified or removed.
- Project previews are useful without hover and operable with keyboard and touch.
- Only interaction-specific islands ship client JavaScript.
- The homepage works at 320, 768, 1024, and 1440 px in LTR and RTL.
- `pnpm lint` and `pnpm build` pass.

## Out of scope

- Complete deep case studies for every project.
- Final blog and contact visual migration.

## Slice 1 verification record

- Preview route: `/dev/v3-homepage` in development; intentionally returns 404 in production.
- Targeted ESLint: passed.
- Full TypeScript check: passed.
- Next.js 16.3.2 production build: passed.
- Browser checks: 320, 768, 1024, and 1440 px; English and Arabic/RTL; light/dark inherited from M1; no horizontal overflow or console errors.
- Real assets used: Ali’s portrait and the Oscar Lab System dashboard.
- The existing V2 homepage remains untouched until the full M2 composition is reviewed.

## Slice 2 verification record

- Added validated `featured`, `featuredOrder`, and unique `homepage_key` metadata for Oscar, Labora, and Image Cryptography.
- Oscar is the flagship dossier; supporting projects use distinct product and research compositions.
- Labora is described only as in development because its existing deployment metadata is stale and contradictory.
- Image Cryptography uses only its frontmatter evidence because its current MDX body contains unrelated Oscar copy.
- Targeted ESLint and full TypeScript checks: passed.
- Browser checks: desktop and 320 px mobile, English and Arabic/RTL, image loading, links, and horizontal overflow passed.
- The existing V2 homepage remains untouched.

## Slice 3 verification record

- Added one blue cinematic transition between project evidence and process; the remaining sections keep an editorial product-maker rhythm.
- Replaced generic process language with a four-stage protocol: observe the real workflow, model states and failure, design the critical path, and evaluate the production result.
- Added a concise origin chapter connecting physical craft, operational friction, and software products, with a route to the full origin article.
- Homepage claims stay within verified evidence; potentially stale performance and synchronization details from the existing article were not repeated.
- Targeted ESLint and full TypeScript checks: passed.
- Next.js 16.3.2 production build: passed.
- Browser checks: 1440 px desktop and 320 px mobile, English and Arabic/RTL, link destination, and horizontal overflow passed.
- The existing V2 homepage remains untouched.

## Slice 4 verification record

- Added an editorial writing chapter driven by explicit `homepageFeatured` and `homepageOrder` MDX metadata, capped at three substantial notes.
- Added a project-brief contact chapter that asks for context, friction, and desired change instead of using a generic call to action.
- Added a restrained footer with verified GitHub, LinkedIn, email, project, writing, and contact destinations.
- No CV link is rendered because the repository does not contain a real CV artifact.
- Removed the development-only “next slice” placeholder; the preview now has a complete narrative ending.
- Targeted ESLint, full TypeScript, and Next.js 16.3.2 production build: passed.
- Browser checks: 320, 768, 1024, and 1440 px; English and Arabic/RTL; no horizontal overflow.
- The existing V2 homepage remains untouched pending review and explicit promotion.

## Promotion verification record

- Promoted the approved V3 composition from `/dev/v3-homepage` to `/` and removed the preview route.
- Added specific homepage title, description, canonical URL, Open Graph metadata, Twitter metadata, and truthful `Person` plus `WebSite` structured data.
- Rebuilt the Open Graph, Twitter, favicon, and Apple icon imagery around the V3 identity, correcting the outdated name, role, and framework version.
- Corrected `robots.txt` to reference `/sitemap.xml` and disallow development routes.
- Verified `/`, `/projects`, `/blog`, `/contact`, and the Oscar project route return `200`; the retired preview route returns `404`.
- Verified the sitemap contains the public homepage and content routes and excludes development routes.
- Verified active homepage navigation, canonical metadata, structured data, and zero browser console warnings or errors.
- Targeted ESLint, generated route types, full TypeScript, and a warning-free Next.js 16.3.2 production build passed.
- V2 is preserved by the immutable `portfolio-v2-final` tag and documented in `docs/v3/V2_ARCHIVE.md`.
