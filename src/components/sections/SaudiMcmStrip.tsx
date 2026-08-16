import { Link } from "@tanstack/react-router";
import m2 from "@/assets/mcm3/mcm-2.webp.asset.json";
import m5 from "@/assets/mcm3/mcm-5.webp.asset.json";
import m8 from "@/assets/mcm3/mcm-8.webp.asset.json";
import m11 from "@/assets/mcm3/mcm-11.webp.asset.json";
import m25 from "@/assets/mcm3/mcm-25.webp.asset.json";
import m41 from "@/assets/mcm3/mcm-41.webp.asset.json";

const TILES: { name: string; image: string }[] = [
  { name: "Travertine", image: m5.url },
  { name: "Linear Stone Surface", image: m2.url },
  { name: "Rammed Earth", image: m25.url },
  { name: "Rough Surface Stone", image: m41.url },
  { name: "Concrete Finish", image: m8.url },
  { name: "Decorative Surface", image: m11.url },
];

export function SaudiMcmStrip({ className = "" }: { className?: string }) {
  return (
    <section className={`w-full px-5 py-12 ${className}`}>
      <div className="mx-auto max-w-4xl">
        <div className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-copper">
          Saudi MCM
        </div>
        <p className="mt-2 text-sm text-ink-soft">
          Flexible clay-stone surfaces, made in Saudi Arabia.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 min-[420px]:grid-cols-3">
          {TILES.map((t) => (
            <Link
              key={t.name}
              to="/products/$family"
              params={{ family: "mcm" }}
              search={{ range: "local" as const }}
              className="group relative block aspect-square overflow-hidden rounded-xl border border-line/60"
            >
              <img
                src={t.image}
                alt={`${t.name} MCM finish`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-2.5 text-left font-mono text-[0.58rem] uppercase leading-tight tracking-[0.18em] text-white">
                {t.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
