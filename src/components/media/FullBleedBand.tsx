import type { GalleryImage } from "@/lib/gallery";

type Props = {
  image: GalleryImage;
  kicker?: string;
  title: string;
  body?: string;
  height?: "sm" | "md" | "lg";
  align?: "left" | "center";
};

const H = {
  sm: "h-[320px] md:h-[380px]",
  md: "h-[420px] md:h-[560px]",
  lg: "h-[520px] md:h-[680px]",
};

export function FullBleedBand({ image, kicker, title, body, height = "md", align = "left" }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${H[height]}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" />
      <div
        className={`relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-12 md:px-12 md:pb-16 ${
          align === "center" ? "items-center text-center" : "items-start"
        }`}
      >
        {kicker ? (
          <span className="mb-3 text-[11px] uppercase tracking-[0.28em] text-copper-light">{kicker}</span>
        ) : null}
        <h2 className="max-w-3xl font-display text-3xl leading-tight text-canvas md:text-5xl">{title}</h2>
        {body ? <p className="mt-4 max-w-2xl text-sm text-canvas/80 md:text-base">{body}</p> : null}
      </div>
    </section>
  );
}
