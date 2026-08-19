import type { LucideIcon } from "lucide-react";
import { Home, ShieldCheck, Globe, Recycle } from "lucide-react";
import vision2030 from "@/assets/vision-2030.png.asset.json";

type TrustItem =
  | { Icon: LucideIcon; image?: undefined; en: string; ar: string }
  | { Icon?: undefined; image: string; en: string; ar: string };

const ITEMS: TrustItem[] = [
  { Icon: Home, en: "Made in Saudi Arabia", ar: "صناعة سعودية" },
  { Icon: ShieldCheck, en: "10-Year Performance Warranty", ar: "ضمان أداء لمدة 10 سنوات" },
  { Icon: Globe, en: "Tested to International Standards", ar: "مختبرة وفق المعايير العالمية" },
  { Icon: Recycle, en: "Sustainable & Environmentally Friendly", ar: "مستدامة وصديقة للبيئة" },
  { image: vision2030.url, en: "Supporting Vision 2030", ar: "دعم رؤية 2030" },
];

export function TrustStrip({ className = "" }: { className?: string }) {
  return (
    <section
      className={`w-full border-t border-line/60 bg-canvas-2 px-5 py-4 md:px-10 md:py-5 ${className}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-4 md:grid-cols-5 md:gap-6">
        {ITEMS.map(({ Icon, image, en, ar }) => (
          <div key={en} className="flex items-start gap-2.5">
            {image ? (
              <img
                src={image}
                alt="Vision 2030"
                className="mt-0.5 h-5 w-auto shrink-0 object-contain"
              />
            ) : (
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-copper" strokeWidth={1.4} />
            )}
            <div className="min-w-0">
              <div className="text-[0.72rem] leading-tight text-ink md:text-[0.8rem]">{en}</div>
              <div className="text-[0.68rem] leading-tight text-ink-soft" dir="rtl">
                {ar}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
