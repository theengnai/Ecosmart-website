# Site-wide image refresh (homepage untouched)

Replace roughly 80% of the site's photography with a single, coherent visual language: warm Saudi stone and clay architecture at dusk, rammed-earth and travertine façades, curved MCM-clad walls, and studio shots of the material itself. The homepage (hero, its sections, the AI card) stays exactly as it is.

## Use the uploaded renders where they belong

- The dusk travertine villa render (image-48) becomes the Products page hero — matching the "Curated architectural solutions" screen.
- The curved rammed-earth entrance at dusk (image-51) becomes the Saudi MCM category hero — matching the "Saudi MCM / Locally made" screen.
- The curved clay-stone tile on a dark studio background (image-52) becomes the lead product visual on the Products library page for Flexible Clay-Stone Tiles.

Both renders are added as CDN-hosted assets so the repo stays light.

## What else changes

New images in the same style (warm limestone, rammed earth, clay texture, façade detail, dusk lighting, Saudi/Gulf architecture) replace the current photography on:

- Products library page — the supporting section images
- Saudi MCM and Global MCM category pages — heroes and any editorial imagery
- Single product pages — the "related projects" gallery (currently reusing generic About photos)
- Projects page — hero, featured bands and the project grid
- About page — hero façade plus the three solution images and the material detail shot
- Design services, Resources, Samples, Contact, Visualizer — page heroes

Each page keeps its layout, copy and crops; only the image sources change. Alt text is updated so it describes the new imagery.

## Not touched

- `src/routes/index.tsx` and every homepage component (hero, section slides, ChatCard tiles, intro overlay)
- The MCM product swatch/catalog photography (Saudi mcm3 set, Global imported set, PU colour blocks) — those are real product images
- Logos and icons

## Technical notes

- Uploaded renders are registered via `lovable-assets create` from `/mnt/user-uploads/`, producing `.asset.json` pointers imported in the routes.
- Remaining replacements are generated images written to `src/assets/pages/` and `src/assets/about/`, overwriting the existing filenames where the import already exists so no import graph changes are needed; new filenames are added only where a page needs an extra image.
- `og:image` entries that point at a replaced hero keep working since the filename is reused.
