import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSnapSections } from "@/hooks/useSnapSections";
import { useIsMobile } from "@/hooks/use-mobile";
import { TopBar } from "@/components/nav/TopBar";
import { SectionRail } from "@/components/nav/SectionRail";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionShell, type SectionMeta } from "@/components/sections/SectionShell";
import { IntroOverlay } from "@/components/intro/IntroOverlay";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { SectionTransition } from "@/components/nav/SectionTransition";

import imgVisualizer from "@/assets/gallery/exterior-villa-dusk.jpg";
import imgSamples from "@/assets/gallery/material-clay-macro.jpg";
import imgTechnical from "@/assets/gallery/facade-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoSmart — Build Better. Build Saudi." },
      {
        name: "description",
        content:
          "Saudi company delivering construction systems and decoration & finishing products. Saudi Arabia. Aligned to Vision 2030 and the Saudi Building Code.",
      },
      { property: "og:title", content: "EcoSmart — Build Better. Build Saudi." },
      {
        property: "og:description",
        content:
          "Construction systems and finishing products, delivered across Saudi Arabia.",
      },
    ],
  }),
  component: Index,
});

const TOTAL = 5;

const RAIL = [
  "Ecosmart AI",
  "Visualizer",
  "Products",
  "Samples",
  "Partner",
];

const SECTIONS: Record<number, SectionMeta> = {
  1: {
    index: 2, total: TOTAL,
    eyebrow: "Visualizer",
    title: "Visualize your project in real time.",
    subtitle: "See it before you build it.",
    body:
      "Drop materials onto your plan or render and watch surfaces resolve at the right scale, joint, and tone — no plug-ins, no waiting.",
    bullets: ["Real-time preview", "No plug-ins", "Any plan or render"],
    image: imgVisualizer,
    primaryCta: { label: "Try the visualizer", href: "/visualizer" },
    secondaryCta: { label: "Watch a demo", href: "/visualizer" },
  },
  2: {
    index: 3, total: TOTAL,
    eyebrow: "Products",
    title: "Saudi MCM — Other Solutions Coming Soon",
    subtitle: "Flexible clay-stone, made in Saudi Arabia.",
    body:
      "A living library of architectural surfaces — sourced, vetted, and ready to specify. Filter by finish, format, performance, or feeling.",
    bullets: ["Sourced & vetted", "Ready to specify", "Filter by finish or format"],
    image: imgTechnical,
    primaryCta: { label: "Explore the library", href: "/products" },
    secondaryCta: { label: "Talk to a specialist", href: "/contact" },
  },
  3: {
    index: 4, total: TOTAL,
    eyebrow: "Samples",
    title: "Request physical samples with confidence.",
    subtitle: "Hold the material in your hand.",
    body:
      "Order curated sample boxes shipped across the GCC. Every sample arrives with its specification card and finish reference.",
    bullets: ["Shipped across the GCC", "Specification card included", "Finish reference on every chip"],
    image: imgSamples,
    primaryCta: { label: "Request samples", href: "/samples" },
  },
};


function Index() {
  const isMobile = useIsMobile(true);
  const { active, go } = useSnapSections(TOTAL, !isMobile);
  const [displayed, setDisplayed] = useState(active);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (active === displayed) return;
    setTransitioning(true);
    // Wait for the transition logo to fully cover the screen before swapping content.
    const swapDelay = isMobile ? 550 : 700;
    const t = window.setTimeout(() => {
      setDisplayed(active);
      setTransitioning(false);
    }, swapDelay);
    return () => window.clearTimeout(t);
  }, [active, displayed, isMobile]);

  if (isMobile) {
    const scrollToSection = (i: number) => {
      const el = document.getElementById(`section-${i}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <div className="relative w-full">
        <IntroOverlay />
        <TopBar />

        <section id="section-0" className="w-full">
          <HeroSection active onPickItem={scrollToSection} />
        </section>

        {[1, 2, 3].map((i) => (
          <section key={i} id={`section-${i}`} className="min-h-[100svh] w-full">
            <SectionShell active meta={SECTIONS[i]} />
          </section>
        ))}

        <section id="section-4" className="min-h-[100svh] w-full">
          <PartnerSection active />
        </section>

        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <IntroOverlay />
      <TopBar />
      <SectionRail labels={RAIL} active={active} onPick={go} />

      {/* slide stack */}
      <motion.div
        key={displayed}
        initial={{ opacity: 0 }}
        animate={{ opacity: transitioning ? 0 : 1 }}
        transition={{ duration: transitioning ? 0.18 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 h-full w-full"
      >
        {displayed === 0 && <HeroSection active onPickItem={go} />}
        {displayed >= 1 && displayed <= 3 && (
          <SectionShell active meta={SECTIONS[displayed]} />
        )}
        {displayed === 4 && <PartnerSection active />}
      </motion.div>

      <SectionTransition activeKey={active} />


      {/* section counter bottom-left */}
      <div className="fixed bottom-6 left-8 z-30 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-soft">
        <span className="text-copper">{String(active + 1).padStart(2, "0")}</span>
        <span className="mx-2 opacity-50">/</span>
        {String(TOTAL).padStart(2, "0")}
      </div>
      <WhatsAppButton />
    </div>
  );
}

