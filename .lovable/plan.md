# Homepage breathing room, Certificates gate, and product page cleanup

## 1. Homepage hero (mobile)

- Increase top/bottom padding of the hero on mobile to ~72px top / 72px bottom (keeps desktop as-is), so the headline, chat widget and caption get more breathing space.
- Let the hero grow past one screen height on mobile instead of being squeezed into it.

## 2. New "Saudi MCM" strip under the chat widget

A small, simple band directly below the chat widget on the homepage:

- Title: "Saudi MCM" with a short one-line subtitle.
- Six tiles, 3 per row (2 per row on very small phones), each an MCM series image with a dark bottom gradient and the series name over it:
  Travertine · Linear Stone Surface · Rammed Earth · Rough Surface Stone · Concrete Finish · Decorative Surface.
- Each tile links to the Saudi MCM range filtered to that series.

## 3. Dark mode hero background

Reduce the architectural grid opacity strongly in dark mode (both mobile and desktop hero backgrounds) so it reads as a faint texture instead of a visible grid.

## 4. Hide Projects and Design Services

- Removed from the desktop menu, mobile menu and footer links.
- Pages stay in the codebase and the URLs keep working, so nothing is lost.
- Homepage: remove the "Discover inspiring projects and applications." section (section list and rail re-numbered accordingly).

## 5. Resources → Certificates

- Rename the page to "Certificates" everywhere (menu, footer, page title, metadata). The `/resources` URL stays alive; the page is also reachable at `/certificates`.
- Certificates are listed (ISO 9001, ISO 14001, ISO 45001, and the product test report) but are not downloadable on the page.
- Add a request form styled like the Contact form, with: name, company, role, email, phone, project name/location, product range of interest, which certificates are needed, and a message.
- On submit the form shows a confirmation ("Thank you — our team will send the certificates shortly"). No backend and no instant unlock for now; wiring up delivery/storage is a later step.

## 6. Samples page

- Merge the flow into one page: the request form sits directly on the Samples page (form first, supporting content as the second section) instead of sending the user to another page with another "Request a sample" button.
- Remove the "View sample kits" button (homepage and Samples page).

## 7. Product pages

- Global MCM stays visible, but its individual product tiles become non-clickable (no detail page opens) — presented as a catalogue view only.
- In the "how it looks when applied" area, use project/application photography instead of the standalone product swatch.
- Remove "Designed for use, not just for spec."
- Remove "Also worth a look." and its related product tiles.
- Remove the "This range applied" block from individual product pages (it stays where it appears elsewhere on the site).
- Keep the zoom lens, but reduce magnification (about 2.5x → 1.6x) and enlarge the lens slightly, so it shows a wider view of the application.
- Remove the "Access technical specifications and documentation" section from the products page — that is now covered by Certificates.
- Homepage: change "Curated products and material systems." to "Saudi MCM — Other Solutions Coming Soon" and swap its image for a different one.

## Technical notes

- Files touched: `src/components/sections/HeroSection.tsx`, `src/components/hero/HeroStage.tsx`, a new `SaudiMcmStrip` component, `src/routes/index.tsx`, `src/components/nav/TopBar.tsx`, `src/components/common/SiteFooter.tsx`, `src/routes/resources.tsx` (+ a `certificates.tsx` route), `src/routes/samples.tsx`, `src/routes/products.index.tsx`, `src/routes/products.$family.index.tsx`, `src/routes/products.$family.$slug.tsx`, `src/components/common/MagnifyImage.tsx`, `src/routes/sitemap[.]xml.ts`.
- Dark-mode grid opacity handled with a CSS variable/`dark:` class rather than hardcoded colors.
- The four attached certificate PDFs are not published as downloads in this pass, since access stays gated behind the form for now.
