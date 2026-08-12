import type { GalleryImage } from "@/lib/gallery";

type Props = {
  image: GalleryImage;
  kicker?: string;
  title: string;
  body: string;
  reverse?: boolean;
};

export function EditorialSplit({ image, kicker, title, body, reverse = false }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-12 md:px-12 md:py-20">
      <div
        className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
          reverse ? "md:[&>figure]:order-2" : ""
        }`}
      >
        <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-canvas-2">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
          />
        </figure>
        <div>
          {kicker ? (
            <span className="text-[11px] uppercase tracking-[0.28em] text-copper">{kicker}</span>
          ) : null}
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{body}</p>
        </div>
      </div>
    </section>
  );
}
