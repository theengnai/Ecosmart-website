import { useRef, useState } from "react";

/**
 * Image with a circular magnifier lens that follows the cursor on hover.
 * Disabled on touch devices (no hover).
 */
export function MagnifyImage({
  src,
  alt,
  className = "",
  zoom = 1.6,
  lensSize = 220,

}: {
  src: string;
  alt: string;
  className?: string;
  zoom?: number;
  lensSize?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSize({ w: rect.width, h: rect.height });
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos(null)}
      className={`relative overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {pos ? (
        <div
          aria-hidden
          className="pointer-events-none absolute hidden rounded-full border border-canvas/70 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] md:block"
          style={{
            width: lensSize,
            height: lensSize,
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${size.w * zoom}px ${size.h * zoom}px`,
            backgroundPosition: `${-(pos.x * zoom - lensSize / 2)}px ${-(pos.y * zoom - lensSize / 2)}px`,
          }}
        />
      ) : null}
    </div>
  );
}
