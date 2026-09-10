# Design QA — Editorial Index blog homepage

## Visual source of truth

- Reference: `C:\Users\alnaseem\Downloads\exec-30fd6807-9143-452b-b194-398b6c5a78ec.png`
- Target route: `/en/blog`
- Reference composition: warm ivory editorial shell; compact masthead; image-left featured essay; ruled archive; restrained coral accents.

## Comparison history

### Iteration 1 — blocked

The page retained the V3 global navigation and dark marketing masthead. It did not follow the approved editorial composition: the title scale, shell color, feature layout, and archive treatment were all materially different from the mockup.

### Iteration 2 — passed

The implementation now uses a dedicated publication header and footer, a warm ivory surface, the specified masthead hierarchy, an image-left featured essay, and a ruled chronological archive. The featured asset was replaced with an editorial PC render that matches the mockup's quiet product-photography treatment. Tablet retains the primary navigation; mobile uses an accessible native menu without horizontal overflow.

## Browser verification

- Implementation capture: `http://localhost:3001/en/blog` at the desktop browser viewport (captured 2026-09-05).
- Visual comparison: source and implementation were reviewed for spacing, typography, palette, header alignment, feature hierarchy, imagery, and archive structure.
- Semantics: exactly one `h1`; feature image has meaningful alt text.
- Accessibility: keyboard focus begins with the logo and follows the publication navigation; mobile menu is keyboard-operable.
- Responsive: desktop, tablet, and mobile layouts have no horizontal overflow.
- Motion: the application has reduced-motion rules.
- Console: no errors found on the blog homepage.
- Verification: `pnpm exec eslint 'app/[locale]/blog' components/v3/blog`, `pnpm test`, and `pnpm build` all pass.

## Final result

passed

---

# Product audit — public V3 routes

**Date:** 2026-09-09  
**Method:** desktop browser capture and accessibility-tree review of the public routes. No forms were submitted and no production provider calls were made.

## Routes reviewed

| Route | Result | Evidence / note |
| --- | --- | --- |
| `/` | Healthy | Clear single proposition, primary navigation, project entry points, and a visible contact path. |
| `/projects` | Healthy | The archive is scannable and every card exposes a normal project link. |
| `/projects/oscar-lab-system-en` | Healthy UI; evidence gap | The dossier has an effective hierarchy and accessible case-study navigation. Its own content identifies only one authentic artifact; the remaining product proof needs privacy-safe screenshots. |
| `/en/blog` | Healthy | Faithfully uses the Editorial Index system: calm masthead, featured essay, ruled archive, topic links, newsletter, and RSS. |
| `/en/blog/zero-latency-rendering-high-fidelity-3d-hardware-at-60-fps` | Healthy | One `h1`, cover alt/caption, semantic heading links, code copy controls, author note, article navigation, and newsletter are all exposed to the accessibility tree. |
| `/contact` | Healthy interface | The direct email path and the structured project-brief form are both clear; labels and native controls have logical keyboard order. |
| `/ar/blog/notes/tailwind-hack-two-lines-text-turncation` | Needs content-policy work | RTL chrome is correctly localized, but the article body and headline remain English. The code block is explicitly English and LTR, as intended. |

## Sampled accessibility checks

- The contact page's first Tab stop is the branded home link and has a clearly visible focus ring.
- The reviewed pages have a single meaningful `h1`; headings, links, images, form controls, and article navigation are exposed to the accessibility tree.
- Code blocks render with `lang="en"` and `dir="ltr"`, retain left-aligned line numbers, and provide horizontal scrolling in Arabic pages.

## Remaining production work

1. **Complete the project-evidence set.** Oscar is visually convincing, but the dossier still needs the promised privacy-safe captures for workflow lifecycle, finance/payroll, reporting/export, backup/recovery, and activation/update. This is the largest remaining credibility improvement for recruiters and clients.
2. **Make the Arabic content policy consistent.** Arabic Lab Notes must either receive real Arabic MDX bodies or be marked `noindex`, omitted from Arabic alternates/sitemap, and routed only once translations exist. Arabic UI around English articles creates a thin, mixed-language experience.
3. **Configure transactional delivery before launch.** The contact and subscription endpoints are implemented with validation, honeypots, origin checks, and rate limits, but production needs verified Resend credentials and sender domains: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, and (for segmentation) `RESEND_SUBSCRIBER_SEGMENT_ID`.
4. **Run final device and motion regression before deploying.** This audit captured desktop and a sampled keyboard path only. Recheck the final production build at phone/tablet widths, with `prefers-reduced-motion`, and with the deployed canonical domain.

## Limits

- This was not a screen-reader session, automated accessibility scan, performance trace, or a replacement for a device lab.
- Subscription and contact delivery were intentionally not submitted, to avoid creating a real contact or provider record during an audit.

## Result

**Ready for final pre-deployment QA after the Arabic-indexing decision and production email configuration.**

---

# Design QA — Lab notes archive

## Visual source of truth

- Source system: the approved Editorial Index, including its warm ivory surface, restrained coral accents, serif display typography, and ruled information layouts.
- Target route: `/en/blog/notes`.

## Final verification

- Composition: the dark, card-oriented archive is replaced with a calm secondary register that belongs to the editorial publication.
- Hierarchy: one clear `h1`, a compact back link, an archive-count marker, and a scannable ruled list with ID, format, note, and topic columns.
- Responsive behavior: rows collapse into a single-column reading order at small widths; desktop retains the table-like scan pattern without horizontal overflow.
- Accessibility: every record remains a normal link; type and topic metadata stay readable; the newsletter block uses the shared accessible subscription flow.
- Localization: English and Arabic column and type labels are explicitly translated.
- Verification: `pnpm exec eslint 'app/[locale]/blog/notes/page.tsx'`, `pnpm test`, and `pnpm build` pass.

## Final result

passed

---

# Design QA — Individual Lab note

## Visual source of truth

- Source system: the approved Editorial Index and the redesigned Lab notes archive.
- Target route: `/en/blog/notes/[slug]`.

## Final verification

- The previous dark, isolated note view is replaced by the same warm editorial surface used throughout the publication.
- Header presents the note number, technical format, tags, and a single readable headline without competing decoration.
- The MDX record has a narrow, comfortable reading measure with existing code, links, and prose formatting preserved.
- The closing prompt and adjacent-note links are ordinary, keyboard-accessible links; a single available neighbor still occupies a coherent full row.
- English and Arabic are verified in-browser, including RTL alignment, localized supporting copy, and directional icons.
- Metadata now supplies a title, description, canonical URL, `hreflang` alternates, and article Open Graph data.
- Verification: `pnpm exec eslint 'app/[locale]/blog/notes/[slug]/page.tsx'`, `pnpm test`, and `pnpm build` pass.

## Final result

passed

---

# Design QA — Editorial article template

## Visual source of truth

- Source system: the approved Editorial Index mockup and its warm, low-chrome publication language.
- Target route: `/en/blog/[slug]`.
- Before capture: the existing article route used dark theme tokens, which visibly broke from the publication homepage.

## Final verification

- Article header: warm ivory masthead, compact metadata, serif headline, and controlled dek measure.
- Cover figure: full-width editorial image with a meaningful visible caption.
- Reading: serif section headings, 65-character reading column, generous line height, readable code and lists.
- Table of contents: sticky on large screens, active-section state, keyboard focus styling, and verified navigation for headings beginning with a numeral.
- Author note: calm postscript with a clear contact route.
- Previous/next: labels are explicit and a single available neighbor occupies the full reading-navigation row.
- Browser review: no horizontal overflow; the article, TOC, and article-navigation links render as accessible links.
- Verification: lint, `pnpm test`, and `pnpm build` pass.

## Final result

passed
