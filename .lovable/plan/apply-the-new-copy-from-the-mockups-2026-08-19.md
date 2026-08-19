# Apply the new copy from the mockups

Use the exact wording shown in the three screenshots for those sections, then rewrite the rest of the site (homepage excluded) in the same voice: product-led, factual, calm.

## 1. Products landing hero — exact copy

Eyebrow: `01 — PRODUCTS & SOLUTIONS`
Title: `Curated architectural solutions.`
Emphasis line: `Built for better projects.`
Subcopy: `Explore Saudi MCM, selected Global MCM collections, and upcoming finishing and construction solutions for the Saudi market.`

Hero image, buttons and layout stay as they are.

## 2. Products library section — exact copy

Section renamed from "Products" to `Architectural Solutions`, with intro:
`Flexible architectural surfaces selected for interior and exterior applications — lightweight, adaptable and designed for expressive material finishes.`

Sidebar (sticky table of contents) items become: `Architectural Solutions`, `Flexible Clay-Stone`, `Other Solutions — Coming Soon`.

First card, exact:
- Tag: `01 · EXTERIOR + INTERIOR · FLEXIBLE SURFACE SYSTEM`
- Title: `Flexible Clay-Stone Tiles`
- Subtitle line: `Modified Clay Material (MCM)`
- Body: `Flexible MCM tiles are thin architectural surface materials made primarily from modified clay and mineral-based components. They reproduce stone, brick, concrete, wood and rammed-earth textures while adapting to flat and curved surfaces. Installed with a compatible adhesive system, they provide a lightweight finish for interior and exterior wall applications.`
- Spec rows replace the current ones: Composition — `Modified clay + mineral-based components`; Application — `Interior + exterior walls`; Form — `Flat + curved surfaces`; Installation — `Compatible adhesive system`; Finishes — `Stone · Brick · Concrete · Wood · Rammed Earth`
- Keeps the existing Saudi MCM / Global MCM buttons.

The EPS, PU and WPC cards are grouped under a `Other Solutions — Coming Soon` heading, keeping their current blurred coming-soon treatment with shortened, neutral one-line descriptions.

## 3. Saudi MCM category hero — exact copy

Eyebrow: `MADE IN SAUDI ARABIA`
Title: `Saudi MCM`
Emphasis: `Locally made. Architecturally flexible.`
Body: `Locally manufactured Modified Clay Material combining the character of stone, clay, brick, wood and rammed earth with a lightweight, flexible format for interior and exterior surfaces. Designed to support shorter supply chains, project adaptability and Saudi manufacturing capability — reflecting the ambitions of Vision 2030.`
Meta line: `SAUDI-MADE · LIGHTWEIGHT · FLEXIBLE · INTERIOR + EXTERIOR`

Grid heading below: `Explore Saudi MCM Finishes` with `Discover locally manufactured textures for façades, interior walls and distinctive architectural applications.`

Global MCM gets a parallel hero in the same structure: `SELECTED INTERNATIONALLY`, `Global MCM`, `Selected collections. Consistent quality.`, with matching body and meta line, and grid heading `Explore Global MCM Collections`.

## 4. Same voice across the rest of the site

Homepage untouched. Rewrite headings, intros and section copy on: product detail pages, Projects, About, Design services, Visualizer, Resources, Samples, Contact — so each reads like the mockups: short declarative title, one italic emphasis line, a 2–4 sentence factual paragraph focused on the material and its application, and uppercase mono attribute strips instead of marketing claims. No new unverifiable claims (no invented certifications, dates or statistics); existing verified technical values are kept.

## Technical notes

- Copy lives inline in `src/routes/products.index.tsx`, `src/routes/products.$family.index.tsx`, `src/routes/products.$family.$slug.tsx` and the other route files; family taglines in `src/data/products.ts`.
- Category hero needs a small structure change to support the eyebrow, italic emphasis line and attribute strip seen in the mockup.
- Page `head()` titles/descriptions updated to match the new wording.
- No image, layout or component changes beyond what the copy structure requires.
