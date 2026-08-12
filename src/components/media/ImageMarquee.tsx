import type { GalleryImage } from "@/lib/gallery";

type Props = {
  images: GalleryImage[];
  /** seconds for a full loop */
  duration?: number;
  reverse?: boolean;
  className?: string;
};

export function ImageMarquee({ images, duration = 60, reverse = false, className = "" }: Props) {
  const track = [...images, ...images];
  return (
    <div className={`group relative w-full overflow-hidden py-2 ${className}`} aria-hidden={false}>
      <div
        className="flex w-max gap-4 will-change-transform motion-reduce:animate-none group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${duration}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {track.map((img, i) => (
          <figure
            key={`${img.src}-${i}`}
            className="relative h-[220px] w-[320px] shrink-0 overflow-hidden rounded-2xl sm:h-[280px] sm:w-[420px]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  );
}
