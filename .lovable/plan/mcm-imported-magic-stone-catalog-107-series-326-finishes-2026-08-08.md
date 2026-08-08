# MCM Imported — Magic Stone catalog (107 series, 326 finishes)

## What the files contain

The spreadsheet lists **107 product series** across 4 groups, all "Flexible Stone", interior + exterior, 3–5 mm, sheet sizes 1200×600 up to 2900×1200 mm:

| Series group | Series |
| --- | --- |
| Regenerated Stone Series | 45 |
| 3D Big Panel Series | 41 |
| Project Regular Use Series | 14 |
| Rammed Earth Board Series | 7 |

Each series has 1–6 named colour variants — **326 variant images** total in the archive (e.g. `01_Dolomitic Travertine/Andean White.png`). All 107 series have images.

## Recommended structure (the "best approach")

Treat a **series as the product** (107 products), and its colours as variants inside it. 326 separate tiles would be an unusable wall of near-identical swatches; 107 series tiles with a colour strip reads as a real catalog.

```text
/products/mcm?range=imported
┌──────────────────────────────────────────────┐
│ Hero: MCM — Imported · 107 series · 326 colours│
│ [MCM Local] [MCM Imported]                    │
│ Sticky bar: All · Regenerated · 3D Big Panel  │
│             · Project Regular · Rammed Earth  │  ← + search box
├──────────────────────────────────────────────┤
│ ## Regenerated Stone Series (45)              │
│ [grid 2 / 3 / 4 / 5 cols of series cards]     │
│ ## 3D Big Panel Series (41)                   │
│ ...                                           │
└──────────────────────────────────────────────┘
```

- **Sticky group filter bar** at the top of the page: clicking a group scrolls to that section and dims the rest (All shows every section, section by section as you scroll).
- **Text search** next to the filters to jump to a series by name — with 107 items this matters more than another filter row.
- Each **series card**: cover image (first colour), series name, group tag, colour-dot strip + "6 colours" count.
- **Sections are collapsed to the first 12 cards** with a "Show all 45" toggle so the page stays scrollable; "All" view therefore lands around 48 visible cards instead of 107.
- **Series detail page** (`/products/mcm/<series-slug>`): large cover, all colour variants as an image grid with names, spec table (thickness, sizes, category, usable area, colour count), plus the existing related-projects and CTA blocks.

## Implementation

1. **Images** — extract the 326 files from the archive into `src/assets/mcm-imported/<series-slug>/<colour-slug>.webp`. They are tiny (~13 KB each, 4.2 MB total), so they stay as normal repo assets; PNGs get kept as-is.
2. **Data** — new `src/data/mcm-imported.ts` generated from the spreadsheet: for each series `{ slug, name, group, thickness, sizes, application: "Both", variants: [{ name, image }] }`. Map into the existing `Product` type with `family: "MCM"`, `origin: "Imported"`, `code: MCM-I-001…107`, `cover` = first variant, and a `variants` field added to the type. Descriptions are written per series group (the sheet has no per-series copy) plus a per-series line built from its name, texture family and colour range.
3. **Category page** (`src/routes/products.$family.index.tsx`) — when `range=imported`, render the grouped/sectioned layout with the sticky group bar, search and per-section "show all"; the Local range keeps its current flat grid and Interior/Exterior filter.
4. **Detail page** (`src/routes/products.$family.$slug.tsx`) — add a colour-variant gallery block for imported series and drive the spec table from the sheet fields.
5. Update the products page copy/counters so MCM Imported no longer says "coming soon".

Fields ignored as not useful: image-status column, folder paths, and the duplicated catalog header rows.
