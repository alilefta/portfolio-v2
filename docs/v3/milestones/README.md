# Portfolio V3 Milestones

This roadmap delivers V3 as a sequence of independently verifiable features. Milestones are ordered by dependency, not by estimated calendar date.

| Milestone | Outcome | Depends on |
| --- | --- | --- |
| [M1 — Visual foundation](./01-visual-foundation.md) | V3 tokens, typography, primitives, and page shell | None |
| [M2 — Product Maker homepage](./02-product-maker-homepage.md) | A concise, expressive public-facing portfolio | M1 |
| [M3 — Oscar flagship case study](./03-oscar-flagship-case-study.md) | The Clinical Workshop evidence system in production | M1, project schema slice from M2 |
| [M4 — Project system and remaining work](./04-project-system.md) | Reusable project index and migrated case studies | M3 |
| [M5 — Supporting routes and conversion](./05-supporting-routes.md) | Cohesive writing, contact, navigation, and footer experience | M2, M4 |
| [M6 — Quality, launch, and cleanup](./06-quality-and-launch.md) | Accessible, performant, localized V3 release | M1–M5 |

## Delivery rules

- Every milestone ends with a buildable application and a reviewable vertical slice.
- Use real copy and project evidence before declaring a section complete.
- Do not add a new animation until the static hierarchy works.
- Do not delete V2 components until their V3 replacement is accepted and referenced.
- Any claim without evidence is removed, qualified, or marked as content debt.
- New shared UI must work in English, Arabic/RTL, light mode, dark mode, and reduced-motion mode.

## Recommended review gates

1. **Direction gate:** approve typography, palette, and hero on real devices after M1.
2. **Narrative gate:** approve the homepage’s content order after M2.
3. **Evidence gate:** verify Oscar claims, screenshots, and decision records after M3.
4. **Consistency gate:** compare every project and supporting route after M5.
5. **Release gate:** accessibility, performance, content, and production checks in M6.
