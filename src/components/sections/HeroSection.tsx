import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SolutionsBand } from "@/components/sections/SolutionsBand";
import { TrustStrip } from "@/components/sections/TrustStrip";
import heroHomepageAsset from "@/assets/gallery/hero-homepage.png.asset.json";

export function HeroSection({ active }: { active: boolean; onPickItem?: (i: number) => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "ecosmart-widget-height") {
        const iframe = iframeRef.current;
        if (iframe) iframe.style.height = e.data.height + "px";
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!active) return null;

  return (
    <div className="flex w-full flex-col overflow-y-auto lg:h-full">
      {/* ---------- hero band ---------- */}
      <div className="relative w-full overflow-hidden lg:flex-1">
        <img
          src={heroHomepageAsset.url}
          alt="Modern Saudi villa exterior with illuminated travertine wall panels at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,13,8,0.86) 0%, rgba(20,13,8,0.62) 45%, rgba(20,13,8,0.35) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-8 px-5 pb-10 pt-[104px] md:px-10 lg:grid-cols-2 lg:gap-10 lg:pb-8 lg:pt-24">
          {/* copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-copper-light">
              Architectural Surfaces
            </div>
            <h1
              className="mt-4 text-white"
              style={{
                fontFamily: '"Jost", system-ui, sans-serif',
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                fontSize: "clamp(2.1rem, 4.4vw, 3.6rem)",
              }}
            >
              Engineered for
              <br />
              <span className="text-copper-light">Saudi Arabia.</span>
              <br />
              Inspired by Vision.
            </h1>

            <div className="mt-5 space-y-1 text-right md:text-left" dir="rtl">
              <p className="text-lg text-copper-light md:text-xl">مصممة للمملكة العربية السعودية.</p>
              <p className="text-lg text-white md:text-xl">ملهمة برؤية طموحة.</p>
              <p className="text-lg text-white md:text-xl">صناعة محلية. إلهام عالمي.</p>
            </div>

            <Link
              to="/products/$family"
              params={{ family: "mcm" }}
              search={{ range: "local" as const }}
              className="group mt-7 inline-flex items-center gap-3 rounded-full border border-copper-light/70 px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.26em] text-copper-light transition-colors hover:bg-copper hover:text-canvas"
            >
              Explore Saudi MCM
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.6} />
            </Link>
          </motion.div>

          {/* chat widget */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              ref={iframeRef}
              id="ecosmart-widget"
              src="https://demo.neuro-systems.org"
              title="EcoSmart AI Consultant"
              allow="microphone"
              className="h-[300px] sm:h-[380px] lg:h-[480px]"
              style={{
                width: "100%",
                maxWidth: "640px",
                border: "none",
                display: "block",
                margin: "0 auto",
                background: "transparent",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ---------- solutions + trust ---------- */}
      <SolutionsBand />
      <TrustStrip />
    </div>
  );
}
