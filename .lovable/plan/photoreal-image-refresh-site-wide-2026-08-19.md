# Photoreal image refresh, site-wide

Replace the site's stylised/AI-looking imagery with new photoreal images matching the look of the reference photos you sent: real interiors and façades shot on-site, natural daylight or warm interior lighting, honest material texture, no glossy CGI feel.

## What gets replaced

Roughly 35 images across these groups:

- **Scene gallery** (11): lounge, bedroom, majlis, boutique, lobby, arched hall, villa at dusk, desert courtyard, façade detail, clay macro, installation detail.
- **Page heroes** (12): contact, design, projects, certificates, samples, visualizer, Global MCM hero, products materials/samples, project bands 1-3.
- **Section tiles** (6): design, gallery, materials, samples, technical, visualizer.
- **About page** (6): hero façade, fabric detail, architect/building/façade/interior solution tiles.
- **Renders** (3): MCM Saudi hero, products hero villa, flexible clay tile.

## What stays

- The 45 Saudi MCM product swatches (`mcm3`) and the 13 `mcm2` textures — these are your real product photos and should not be replaced by generated ones.
- The `pu` PU-stone catalogue photos.
- Logos and icons.

## Visual direction (from your references)

- Warm neutral palette: sand, cream, limestone, clay brown; occasional dark slate.
- Real architectural context — furniture, plants, windows, shadows, people's spaces — not floating material samples.
- Collection-cover style shots (Rammed Earth, Rough Surface, Linear Surface, Travertine) cropped clean, with the site rendering the label text over them, so typography stays consistent and bilingual.
- Camera feel: phone/DSLR realism, slight perspective, natural imperfection; no studio-perfect renders.

## Technical notes

- Images generated at premium quality, saved to `src/assets/...`, replacing files in place so no import paths change (`src/lib/gallery.ts`, `src/data/*`, route files keep working).
- Alt text in `src/lib/gallery.ts` updated where a scene changes meaningfully.
- The five homepage solution tiles will point at the new Rammed Earth / Rough Surface / Linear Surface / Travertine covers.
- Work runs in batches by group so the site stays coherent; each batch verified in the preview.
