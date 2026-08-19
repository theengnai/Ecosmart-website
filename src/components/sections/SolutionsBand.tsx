import { Link } from "@tanstack/react-router";
import tileRammed from "@/assets/gallery/tile-rammed-earth.png.asset.json";
import tileRough from "@/assets/gallery/tile-rough-surface.png.asset.json";
import tileLinear from "@/assets/gallery/tile-linear-surface.png.asset.json";
import tileTravertine from "@/assets/gallery/tile-travertine.png.asset.json";
import tileOther from "@/assets/gallery/tile-other-solutions.png.asset.json";

type Tile = {
  series: string;
  en: string;
  ar: string;
  image: string;
  comingSoon?: boolean;
};

const TILES: Tile[] = [
  { series: "Rammed Earth", en: "Rammed earth", ar: "رامد ارث", image: tileRammed.url },
  { series: "Rough Surface Stone", en: "Rough Surface", ar: "الأسطح الخشنة", image: tileRough.url },
  { series: "Linear Stone Surface", en: "linear Surface", ar: "الأسطح المقلمة", image: tileLinear.url },
  { series: "Travertine", en: "Travertine", ar: "ترافرتين", image: tileTravertine.url },
  { series: "", en: "other solutions", ar: "حلول أخرى", image: tileOther.url, comingSoon: true },
];

function TileInner({ t }: { t: Tile }) {
  return (
    <>
      <img
        src={t.image}
        alt={`${t.en} finish`}
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          t.comingSoon ? "opacity-60" : ""
        }`}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      {t.comingSoon ? (
        <span className="pointer-events-none absolute inset-x-0 top-3 text-center text-[0.5rem] leading-tight text-white/85 md:text-sm">
          coming soon
        </span>
      ) : null}
      <span className="pointer-events-none absolute inset-x-0 bottom-0 p-1.5 text-center md:p-3">
        <span className="block text-[0.6rem] font-semibold leading-tight text-white md:text-base">
          {t.en}
        </span>
        <span className="mt-0.5 block text-[0.55rem] leading-tight text-white/85 md:text-sm">
          {t.ar}
        </span>
      </span>
    </>
  );
}

export function SolutionsBand({ className = "" }: { className?: string }) {
  return (
    <section className={`w-full bg-canvas-2 px-5 py-6 md:px-10 md:py-8 ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-5 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10">
        <div>
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-copper">
            Our Solutions
          </div>
          <h2 className="mt-2 text-xl leading-snug text-ink md:text-2xl">
            Premium surfaces for modern architecture.
          </h2>
          <p className="mt-1 text-sm leading-snug text-ink-soft md:text-base" dir="rtl">
            أسطح راقية للهندسة المعمارية العصرية.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {TILES.map((t) =>
            t.comingSoon ? (
              <div
                key={t.en}
                aria-disabled="true"
                className="group relative block aspect-[3/4] cursor-default overflow-hidden rounded-xl bg-ink md:aspect-[4/3] md:rounded-2xl"
              >
                <TileInner t={t} />
              </div>
            ) : (
              <Link
                key={t.en}
                to="/products/$family"
                params={{ family: "mcm" }}
                search={{ range: "local" as const, series: t.series }}
                hash="series"
                className="group relative block aspect-[3/4] overflow-hidden rounded-xl md:aspect-[4/3] md:rounded-2xl"
              >
                <TileInner t={t} />
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
