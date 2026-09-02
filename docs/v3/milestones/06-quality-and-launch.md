# M6 — Quality, Launch, and Cleanup

## Outcome

V3 ships as a fast, accessible, localized, evidence-backed portfolio with the obsolete V2 presentation layer removed.

## Features

### Accessibility QA

- [ ] Complete a keyboard-only pass on every public route.
- [ ] Test landmarks, headings, names, descriptions, and dynamic states with a screen reader.
- [ ] Validate text, UI, and focus contrast.
- [ ] Test at 200% zoom and with larger default text.
- [ ] Test `prefers-reduced-motion`, forced colors, and dark mode.
- [ ] Confirm galleries, tabs, menus, filters, and forms expose correct states.

### Responsive and browser QA

- [ ] Test at 320, 375, 768, 1024, 1440, and wide desktop sizes.
- [ ] Test a real iOS and Android device when available.
- [ ] Verify current Chrome, Safari, Firefox, and Edge behavior.
- [ ] Check long English strings and representative Arabic content.
- [ ] Confirm no page-level horizontal overflow or content hidden behind sticky UI.

### Performance

- [ ] Measure LCP, CLS, and INP on the homepage and Oscar case study.
- [ ] Audit client component boundaries and remove unnecessary JavaScript.
- [ ] Optimize hero and project images; verify dimensions, formats, priority, and `sizes`.
- [ ] Remove unused fonts, icons, and motion dependencies.
- [ ] Remove external texture requests and expensive continuous effects.
- [ ] Run production Lighthouse and document any justified budget exception.

### SEO and sharing

- [ ] Verify unique titles, descriptions, canonicals, and social images.
- [ ] Validate sitemap and robots output in production mode.
- [ ] Validate Person, WebSite, Article, and project structured data where used.
- [ ] Confirm localized metadata and `lang`/`dir` output.
- [ ] Check social previews for the homepage, Oscar, and one article.

### Content and privacy review

- [ ] Fact-check metrics, dates, roles, statuses, and technical claims.
- [ ] Proofread English and review Arabic copy with a fluent human.
- [ ] Check screenshots for patient, customer, license, email, and environment secrets.
- [ ] Confirm every testimonial has permission and attribution; otherwise remove it.
- [ ] Confirm CV and contact details are current.

### Legacy cleanup

- [ ] Remove unreferenced V2 homepage components and `_old` variants.
- [ ] Remove glass, aurora, and obsolete component tokens once no longer referenced.
- [ ] Remove unused fonts and dependencies.
- [ ] Delete dead translation keys only after reference checks.
- [ ] Update the root README with V3 setup, content workflow, and architecture links.

### Release

- [ ] Run `pnpm lint`.
- [ ] Run `pnpm build`.
- [ ] Perform a production-mode smoke test of every route.
- [ ] Verify analytics without collecting unnecessary personal data.
- [ ] Record a rollback point before production deployment.
- [ ] Perform a post-deploy link, form, metadata, and Core Web Vitals smoke test.

## Acceptance criteria

- WCAG 2.2 AA issues found in the agreed manual and automated checks are resolved or documented with owners.
- Representative mobile measurements meet LCP ≤ 2.5 s, CLS ≤ 0.1, and INP ≤ 200 ms, or exceptions are documented with evidence.
- No placeholder, fabricated, private, or stale content remains publicly visible.
- Every public route has working navigation, metadata, localization, and recovery states.
- The production build is clean and the deployed smoke test passes.
- Legacy glass-design code that is no longer used has been removed.

## Release is not complete when

- Only the desktop homepage has been reviewed.
- Case-study evidence is still placeholder content.
- Arabic or reduced-motion behavior is deferred without an explicit follow-up owner.
- The contact form only simulates success.
- Build warnings or broken links are accepted without review.
