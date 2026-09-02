# M1 — Visual Foundation

**Status:** In progress — foundation implemented and visually verified; legacy font cleanup and repository-wide lint debt remain.

## Outcome

A production-ready V3 design foundation that can reproduce the approved hybrid mockup without glassmorphism or page-specific hacks.

## Features

### V3 design tokens

- [x] Add semantic paper, ink, line, blue, yellow, coral, and dark-surface tokens.
- [x] Add responsive page-gutter, reading-width, section-spacing, radius, and shadow tokens.
- [x] Define deliberate light and dark palettes.
- [x] Add global focus-ring and text-selection styles.
- [x] Add a global reduced-motion fallback.

### Typography system

- [x] Test the shortlisted display and body fonts with real homepage copy.
- [x] Test Arabic companion typography and RTL line wrapping.
- [x] Define display, heading, body, label, and technical metadata styles.
- [ ] Remove unused font registrations after the choice is approved.
- [x] Verify font loading does not cause visible layout shift.

### Layout and UI primitives

- [x] Create `Section`, `Container`, and readable-content layout primitives.
- [x] Create V3 button/link variants with complete hover, active, focus, and disabled states.
- [x] Create `Label`, `Metric`, `MediaFrame`, and annotation primitives.
- [x] Create the new header and mobile navigation shell.
- [x] Create the chapter-transition primitive with reduced-motion behavior.

### Development fixtures

- [x] Add a temporary internal showcase route or component fixture for visual states.
- [x] Display primitives in English, Arabic, light, and dark contexts.
- [x] Include long labels, missing images, narrow screens, and keyboard focus states.

## Likely files

- `app/globals.css`
- `app/layout.tsx`
- `components/v3/layout/*`
- `components/v3/ui/*`
- `messages/en.json`
- `messages/ar.json`

## Acceptance criteria

- No V3 primitive uses backdrop blur, translucent glass surfaces, glow borders, or aurora backgrounds.
- Typography remains legible at 320 px and at 200% browser zoom.
- All interactive primitives are keyboard operable and have visible focus.
- Dark mode has intentional colors rather than inverted light-mode values.
- Arabic examples render in the correct direction without clipped decoration or broken alignment.
- No unnecessary client boundary is introduced for static primitives.
- `pnpm lint` and `pnpm build` pass.

## Out of scope

- Final homepage content.
- Full project case-study rendering.
- Removing legacy V2 styles.

## Verification record

- Targeted ESLint for `components/v3`, the showcase route, and the root layout: passed.
- Full TypeScript check: passed.
- Next.js production build: passed.
- Browser checks: 1440 px and 320 px, light/dark, English/Arabic RTL, mobile navigation, focus visibility, project media, and horizontal overflow passed.
- Repository-wide ESLint remains blocked by pre-existing V2 errors in `components/home/MyAppraoch.tsx` and `components/ui/shadcn-io/code-block/*`; these were not introduced by M1.
- Unused V2 font registrations remain intentionally in place until V2 components are retired.
