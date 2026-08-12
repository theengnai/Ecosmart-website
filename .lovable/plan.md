# Make the site image-rich

Goal: every page feels like a high-end architectural brochure — warm Saudi stone, travertine, clay plaster, curved forms, soft dusk light, deep burgundy/copper accents — matching the mood of the reference boards you shared. No reference image is copied; all new visuals are generated in that style.

## New reusable pieces

1. **Marquee strip** — a full-width band of images sliding horizontally, slow and continuous, pausing on hover. Used once or twice per page as a texture/atmosphere break.
2. **Full-bleed image band** — one edge-to-edge photograph with a short headline overlaid, used to break long text pages.
3. **Gallery grid** — a mixed-size (bento) grid of 5–8 images with a lightbox on click.
4. **Editorial split** — large image beside a short paragraph, alternating sides down a page.

All four are new components under `src/components/media/`, styled with existing design tokens (no hardcoded colors), lazy-loaded, with alt text.

## Where they go

- **Home** — hero section untouched. Add a full-bleed band between the material/product story sections, a marquee of interior/exterior scenes lower down, and a gallery grid above the footer CTA.
- **Products landing** — keep the current hero. Add a marquee of applied-finish scenes under the category cards, plus a full-bleed band before the footer.
- **Category pages (Saudi MCM, Global MCM, PU, EPS, WPC)** — a gallery grid of "in place" application shots below the product grid.
- **Product detail** — enrich the existing Related Projects block into a proper gallery grid with lightbox.
- **Projects** — the biggest visual upgrade: full-bleed opener band, editorial splits per project, and a closing marquee.
- **About** — editorial splits for the company story, one full-bleed band.
- **Design services / Visualizer / Resources / Samples / Contact** — one gallery grid or full-bleed band each, so no page is text-only.

## Imagery

Roughly 30–40 new generated images in the shared style, grouped by scene type:
- Interiors: warm plaster lounges, travertine walls, curved forms, burgundy accents, rattan and timber
- Exteriors: curved clay-plaster villas, palms, pools, dusk lighting
- Arch/heritage: arched plaster halls, carved screens, Arabic-calligraphy interiors
- Material close-ups: clay-stone texture, bent flexible sheet, plaster grain

Existing images you already approved stay exactly as they are; new work is additive.

## Technical notes

- Generated images saved to `src/assets/gallery/*` and externalized as `.asset.json` CDN pointers to keep the repo light.
- Marquee uses a CSS keyframe translate with a duplicated track (no JS loop), respects `prefers-reduced-motion`.
- Lightbox uses the existing shadcn Dialog.
- Images sized for web (≈1600px wide), `loading="lazy"`, explicit aspect ratios to avoid layout shift.
