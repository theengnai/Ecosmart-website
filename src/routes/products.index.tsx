import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { StickyTOC } from "@/components/motion/StickyTOC";
import { BlurFocus } from "@/components/motion/BlurFocus";
import { AlternatingSlide } from "@/components/motion/AlternatingSlide";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { HighlightSweep } from "@/components/motion/HighlightSweep";
import { Counter } from "@/components/motion/Counter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import heroAsset from "@/assets/renders/products-hero-villa.png.asset.json";
import clayTileAsset from "@/assets/renders/flexible-clay-tile.png.asset.json";
import imgEps from "@/assets/pages/products-materials.jpg";
import imgPu from "@/assets/pages/hero-visualizer.jpg";
import imgWpc from "@/assets/pages/projects-band-3.jpg";
import { ImageMarquee } from "@/components/media/ImageMarquee";
import { FullBleedBand } from "@/components/media/FullBleedBand";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { SCENES, GALLERY } from "@/lib/gallery";

const hero = heroAsset.url;


export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — EcoSmart | Construction Systems & Finishing Products" },
      { name: "description", content: "EcoSmart's product library — construction systems (lightweight concrete panels, T-floor hourdi, hybrid precast, curved modular, portable cabins, EPS façades) and decoration & finishing lines (flexible clay-stone, PU stone, WPC, SPC, PVC), all delivered by EcoSmart." },
      { property: "og:title", content: "Products — EcoSmart" },
      { property: "og:description", content: "Construction systems and finishing products, delivered across Saudi Arabia." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProductsPage,
});

type ProductCard = {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  body: string;
  specs?: [string, string][];
  image: string;
  isComingSoon?: boolean;
  viewAllLink?: string;
};

type Section = {
  id: string;
  label: string;
  title: string;
  intro: string;
  cards: ProductCard[];
};

const SECTIONS: Section[] = [
  {
    id: "architectural-finishes",
    label: "Architectural Solutions",
    title: "Architectural Solutions",
    intro: "Flexible architectural surfaces selected for interior and exterior applications — lightweight, adaptable and designed for expressive material finishes.",
    cards: [
      {
        id: "flexible-clay-stone-panels",
        tag: "Exterior + Interior · Flexible surface system",
        title: "Flexible Clay-Stone Tiles",
        subtitle: "Modified Clay Material (MCM)",
        body: "Flexible MCM tiles are thin architectural surface materials made primarily from modified clay and mineral-based components. They reproduce stone, brick, concrete, wood and rammed-earth textures while adapting to flat and curved surfaces. Installed with a compatible adhesive system, they provide a lightweight finish for interior and exterior wall applications.",
        specs: [
          ["Composition", "Modified clay + mineral-based components"],
          ["Application", "Interior + exterior walls"],
          ["Form", "Flat + curved surfaces"],
          ["Installation", "Compatible adhesive system"],
          ["Finishes", "Stone · Brick · Concrete · Wood · Rammed Earth"],
        ],
        image: clayTileAsset.url,
        viewAllLink: "mcm",
      },
    ],
  },
  {
    id: "other-solutions",
    label: "Other Solutions — Coming Soon",
    title: "Other Solutions — Coming Soon",
    intro: "Further finishing and construction solutions are being prepared for the Saudi market. Details will be published as each range becomes available.",
    cards: [
      {
        id: "eps-decorative-facades",
        tag: "Exterior · Façade details",
        title: "EPS Insulated Decorative Façades",
        subtitle: "Shaped façade elements",
        body: "Shaped EPS elements — cornices, mouldings and bands — finished on site to combine decoration with insulation.",
        specs: [
          ["Application", "Exterior façade details"],
          ["Form", "Shaped profiles + panels"],
          ["Finish", "Mesh, basecoat, topcoat"],
        ],
        image: imgEps,
      },
      {
        id: "pu-stone",
        tag: "Interior + Exterior · Walls & Façades",
        title: "PU Stone Cladding",
        subtitle: "Polyurethane stone panels",
        body: "Lightweight polyurethane panels that reproduce the texture and tonal variation of quarried stone for walls and façades.",
        specs: [
          ["Application", "Feature walls + façades"],
          ["Form", "Interlocking panels"],
          ["Installation", "Direct adhesive mount"],
        ],
        image: imgPu,
        viewAllLink: "pu",
      },
      {
        id: "wpc",
        tag: "Exterior · Ground plane",
        title: "WPC External Decking",
        subtitle: "Wood-plastic composite",
        body: "Composite decking boards for outdoor floors and terraces, dimensionally stable in humid conditions.",
        specs: [
          ["Application", "Decks + terraces"],
          ["Form", "Profiled boards"],
          ["Installation", "Concealed clip"],
        ],
        image: imgWpc,
        viewAllLink: "wpc",
      },
    ],
  },
];



const KPIS = [
  { v: 6, s: "", l: "Construction systems" },
  { v: 10, s: "", l: "Finishing product lines" },
  { v: 100, s: "%", l: "Delivered across Saudi Arabia" },
  { v: 1, s: "", l: "KSA maker of flexible clay-stone" },
];

const SWATCHES = [
  { name: "Ivory Travertine", hex: "#f9f7f5" },
  { name: "Beige Travertine", hex: "#e2d0a9" },
  { name: "Cream Travertine", hex: "#c6b48d" },
  { name: "Ancient Wood", hex: "#ab8770" },
  { name: "Rammed Earth", hex: "#a06b48" },
  { name: "Desert Brick", hex: "#8b5a3c" },
  { name: "Grey Travertine", hex: "#b4b4b4" },
  { name: "Slate Stone", hex: "#727272" },
  { name: "Charcoal", hex: "#2a2622" },
  { name: "Najdi Stone", hex: "#c9b39a" },
  { name: "Silver Mist", hex: "#8a8580" },
  { name: "Snow Rock", hex: "#ffffff" },
];

function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="01 — Products & Solutions"
        title="Curated architectural solutions."
        emphasis="Built for better projects."
        subcopy="Explore Saudi MCM, selected Global MCM collections, and upcoming finishing and construction solutions for the Saudi market."
        image={hero}
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Request a sample", to: "/samples" }}
      />


      {/* Sticky TOC of families with BlurFocus imagery + AlternatingSlide spec rows */}
      <StickyTOC
        eyebrow="Library"
        items={SECTIONS.map((s) => ({ 
          id: s.id, 
          label: s.label,
          subItems: s.id === "architectural-finishes"
            ? [{ id: "flexible-clay-stone-panels", label: "Flexible Clay-Stone" }]
            : undefined,
        }))}
      >
        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-28 border-b border-line/40 mb-32 pb-32 last:mb-0 last:border-b-0 last:pb-0">
            <div className="mb-12">
              <h2 className="display-serifish text-3xl md:text-5xl text-ink">
                {section.title}
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-ink-soft">{section.intro}</p>
            </div>

            <div className="space-y-32">
              {section.cards.map((f, i) => {
                const isLive = f.id === "flexible-clay-stone-panels";
                return (
                <article key={f.id} id={f.id} className="scroll-mt-28">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <BlurFocus className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                      <img
                        src={f.image}
                        alt={f.title}
                        className={`h-full w-full object-cover ${isLive ? "" : "scale-105 blur-lg saturate-50"}`}
                      />
                      {!isLive && (
                        <div className="absolute inset-0 flex items-center justify-center bg-canvas/40">
                          <span className="rounded-full border border-line bg-canvas/80 px-5 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft backdrop-blur-sm">
                            Coming soon
                          </span>
                        </div>
                      )}
                    </BlurFocus>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                          0{i + 1} · {f.tag}
                        </div>
                        {!isLive && (
                          <div className="rounded bg-canvas-2 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                            Coming soon
                          </div>
                        )}
                      </div>
                      <h3 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
                        {f.title}
                      </h3>

                      {!isLive ? (
                        <>
                          <div className="pointer-events-none select-none blur-[6px] opacity-60">
                            <p className="mt-6 text-base leading-relaxed text-ink-soft">
                              {f.body}
                            </p>
                            <div className="mt-10 space-y-2">
                              {f.specs?.map((row) => (
                                <div
                                  key={row[0]}
                                  className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-baseline gap-4 border-b border-line/50 py-3 font-mono text-xs uppercase tracking-[0.2em]"
                                >
                                  <span className="min-w-0 text-left text-ink-soft">{row[0]}</span>
                                  <span className="min-w-0 justify-self-end text-right text-ink">{row[1]}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <button
                            type="button"
                            disabled
                            aria-disabled="true"
                            className="mt-10 inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-line bg-canvas-2 px-6 py-3 text-sm text-ink-soft opacity-70"
                          >
                            <span className="font-medium tracking-wide">Coming soon</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="mt-6 text-base leading-relaxed text-ink-soft">
                            {f.body}
                          </p>
                          <div className="mt-10 space-y-2">
                            {f.specs?.map((row, j) => (
                              <AlternatingSlide key={row[0]} index={j}>
                                <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-baseline gap-4 border-b border-line/50 py-3 font-mono text-xs uppercase tracking-[0.2em]">
                                  <span className="min-w-0 text-left text-ink-soft">{row[0]}</span>
                                  <span className="min-w-0 justify-self-end text-right text-ink">{row[1]}</span>
                                </div>
                              </AlternatingSlide>
                            ))}
                          </div>

                          {f.viewAllLink === "mcm" ? (
                            <div className="mt-10 flex flex-wrap gap-3">
                              <Link
                                to="/products/$family"
                                params={{ family: "mcm" }}
                                search={{ range: "local" as const }}
                                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                              >
                                <span className="font-medium tracking-wide">Saudi MCM</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                              </Link>
                              <Link
                                to="/products/$family"
                                params={{ family: "mcm" }}
                                search={{ range: "imported" as const }}
                                className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                              >
                                <span className="font-medium tracking-wide">Global MCM</span>
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                              </Link>
                            </div>
                          ) : f.viewAllLink ? (
                            <Link
                              to="/products/$family"
                              params={{ family: f.viewAllLink }}
                              search={{ range: "local" as const }}
                              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                            >
                              <span className="font-medium tracking-wide">
                                View all {f.title.split(" ")[0]}
                              </span>
                              <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                strokeWidth={2}
                              />
                            </Link>
                          ) : null}
                        </>
                      )}
                    </div>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        ))}
      </StickyTOC>

      {/* NEW — Performance ratings strip */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The range
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            The Ecosmart product ranges, at a glance.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.l}>
                <div className="display-serifish text-4xl text-copper md:text-6xl">
                  <Counter value={k.v} suffix={k.s} />
                </div>
                <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                  {k.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — Finish library swatch wall */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Finish library · selected
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            A sample of the tones we work in.
          </h2>
          <div className="mt-14 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {SWATCHES.map((sw, i) => (
              <ScaleIn key={sw.name} delay={i * 0.03}>
                <div className="group">
                  <div
                    className="aspect-square w-full rounded-lg shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-transform group-hover:-translate-y-1"
                    style={{ backgroundColor: sw.hex }}
                  />
                  <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft">
                    {sw.name}
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <ImageMarquee images={SCENES} duration={70} />
      <FullBleedBand
        image={GALLERY.interiorLounge}
        kicker="Applied finishes"
        title="Warm stone surfaces, engineered to be light, fast and flexible."
        body="The same clay-stone language across curved walls, façades, columns and interiors."
        height="md"
      />
      <GalleryGrid
        images={[GALLERY.archHall, GALLERY.exteriorVilla, GALLERY.materialFlex, GALLERY.interiorBoutique, GALLERY.exteriorCourtyard, GALLERY.installDetail]}
        kicker="In place"
        title="Where our products end up."
      />

      <CTABand
        eyebrow="Not sure which fits?"
        title="Request a sample — we'll send it to you."
        href="/samples"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
