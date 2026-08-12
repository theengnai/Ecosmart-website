import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GalleryImage } from "@/lib/gallery";

type Props = {
  images: GalleryImage[];
  kicker?: string;
  title?: string;
  body?: string;
  className?: string;
};

const SPANS = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-2",
];

export function GalleryGrid({ images, kicker, title, body, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : images[open];

  return (
    <section className={`mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 md:py-24 ${className}`}>
      {(kicker || title || body) && (
        <header className="mb-8 max-w-2xl md:mb-12">
          {kicker ? (
            <span className="text-[11px] uppercase tracking-[0.28em] text-copper">{kicker}</span>
          ) : null}
          {title ? (
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
          ) : null}
          {body ? <p className="mt-3 text-sm text-ink-soft md:text-base">{body}</p> : null}
        </header>
      )}

      <div className="grid auto-rows-[180px] grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-[200px] md:grid-cols-6">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative overflow-hidden rounded-2xl bg-canvas-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
              SPANS[i % SPANS.length]
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
            <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          {active ? (
            <img src={active.src} alt={active.alt} className="w-full rounded-2xl object-contain" />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
