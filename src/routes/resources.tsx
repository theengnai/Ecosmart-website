import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HeadphonesIcon, Sparkles } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { StickyTOC } from "@/components/motion/StickyTOC";
import { TextColorShift } from "@/components/motion/TextColorShift";
import { AlternatingSlide } from "@/components/motion/AlternatingSlide";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-resources.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Technical Resources — EcoSmart" },
      { name: "description", content: "Technical Data Sheets and Installation Manuals for every EcoSmart product. Project-specific test certificates issued on request." },
      { property: "og:title", content: "Technical Resources — EcoSmart" },
      { property: "og:description", content: "TDS + Installation Manual per product. Certificates on request." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ResourcesPage,
});

const SAUDI_CERTS: [string, string][] = [
  ["Reaction to Fire — EN 13501-1", "Classification report for the Saudi-made flexible clay-stone tile system."],
  ["Surface Burning — ASTM E84", "Flame spread and smoke developed index for the flexible clay-stone range."],
  ["Water Absorption — ISO 10545-3", "Absorption test result for the Saudi flexible clay-stone body."],
  ["Bond Strength — EN 1348", "Adhesive pull-off values for tiles fixed to cementitious substrates."],
  ["Freeze–Thaw / Weathering", "Accelerated weathering and UV stability results for exterior use."],
  ["Local Content — IKTVA / Vision 2030", "Declaration of 100% Saudi-sourced raw materials and local production."],
];

const GLOBAL_CERTS: [string, string][] = [
  ["Reaction to Fire — EN 13501-1", "Classification report covering the imported MCM sheet series."],
  ["Surface Burning — ASTM E84", "Flame spread and smoke developed index for imported series."],
  ["Water Absorption — ISO 10545-3", "Absorption values per imported series and thickness."],
  ["Bond Strength — EN 1348", "Pull-off adhesion values for the imported MCM sheet system."],
  ["Dimensional Stability & Colour Fastness", "Thermal cycling and UV colour-fastness reports for exterior façades."],
  ["Origin & Conformity", "Certificate of origin and conformity documentation per shipment."],
];

const CATEGORIES = [
  {
    id: "mcm-saudi-certificate",
    label: "MCM Saudi certificate",
    Icon: ShieldCheck,
    intro: "Test certificates issued for the Saudi (locally produced) flexible clay-stone MCM range. Project-specific figures are confirmed against the intended application.",
    files: SAUDI_CERTS,
  },
  {
    id: "mcm-global-certificate",
    label: "MCM Global certificate",
    Icon: ShieldCheck,
    intro: "Test certificates and conformity documentation for the Global (imported) MCM series — issued per series and shipment on request.",
    files: GLOBAL_CERTS,
  },
];

const STANDARDS = [
  { code: "SBC", note: "Saudi Building Code" },
  { code: "EN 14992", note: "Precast concrete wall elements" },
  { code: "EN 15037", note: "Precast beam-and-block floor systems" },
  { code: "EN 13369", note: "Common rules for precast" },
  { code: "EN 13501-1", note: "Reaction to fire classification" },
  { code: "EN 15534", note: "WPC decking family" },
  { code: "EN 13163", note: "EPS thermal insulation" },
  { code: "ISO 10140", note: "Sound insulation, laboratory" },
  { code: "ASTM E84", note: "Surface burning characteristics" },
  { code: "ASTM C518", note: "Thermal conductivity" },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Technical library"
        title="Specified against"
        emphasis="the certificate."
        subcopy="A Technical Data Sheet and an Installation Manual for every EcoSmart product. Project-specific test certificates issued on request."
        image={hero}
        primary={{ label: "View certificates", href: "#certificates" }}
      />

      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            How we publish values
          </div>
          <TextColorShift
            className="display-serifish mt-8 text-2xl leading-[1.35] text-ink-soft md:text-4xl"
            text="Technical values are issued against the relevant test certificate and are shown as 'To be confirmed' rather than estimated — so figures on our datasheets are never assumed. Final figures come with the certificate, on request, for the specified application."
          />
        </div>
      </section>

      <div id="certificates" className="scroll-mt-28" />
      <StickyTOC
        eyebrow="Certificates"
        items={CATEGORIES.map((c) => ({ id: c.id, label: c.label }))}
      >
        {CATEGORIES.map((c) => {
          const Icon = c.Icon;
          return (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-28 border-b border-line/40 pb-24 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center border border-copper/40 bg-copper/10 text-copper shadow-[10px_10px_0_color-mix(in_oklab,var(--copper)_12%,transparent)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="display-serifish text-3xl md:text-5xl">{c.label}</h3>
              </div>
              <p className="mt-6 max-w-2xl text-base text-ink-soft">{c.intro}</p>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {c.files.map((f, j) => (
                  <AlternatingSlide key={f[0]} index={j}>
                    <a
                      href="/contact"
                      className="group relative flex min-h-28 items-start justify-between gap-5 overflow-hidden border border-line/70 bg-canvas p-5 transition-all hover:-translate-y-1 hover:border-copper hover:shadow-[0_20px_40px_-25px_rgba(0,0,0,0.3)]"
                    >
                      <span className="absolute inset-y-0 left-0 w-1 bg-copper/60 transition-all group-hover:w-2" />
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 inline-flex items-center justify-center border border-copper/20 bg-copper/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-copper">
                          Certificate
                        </span>
                        <div>
                          <div className="text-sm font-medium leading-snug text-ink group-hover:text-copper md:text-base">
                            {f[0]}
                          </div>
                          <div className="mt-1 text-sm text-ink-soft">
                            {f[1]}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-lg text-ink-soft transition-transform group-hover:translate-y-0.5 group-hover:text-copper">
                        →
                      </span>
                    </a>
                  </AlternatingSlide>
                ))}
              </div>
            </article>
          );
        })}
      </StickyTOC>

      {/* Reference standards — as cited in the TDS document */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Reference standards
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            The standards our datasheets reference.
          </h2>
          <p className="mt-6 max-w-2xl text-sm text-ink-soft">
            These are the applicable / typical test-method families cited across our TDS library — they indicate how each property is tested. Structural design across our systems is engineered to the Saudi Building Code.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
            {STANDARDS.map((s, i) => (
              <AlternatingSlide key={s.code} index={i}>
                <div className="grid h-28 place-items-center rounded-xl border border-line bg-canvas px-3 text-center transition-colors hover:border-copper">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-ink">
                      {s.code}
                    </div>
                    <div className="mt-2 text-[0.7rem] text-ink-soft">{s.note}</div>
                  </div>
                </div>
              </AlternatingSlide>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates — the honest position */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-line/60 bg-canvas-2/40 p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-16 md:p-14">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-copper/10 text-copper">
            <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Certificates
            </div>
            <h3 className="display-serifish mt-3 text-2xl md:text-3xl">
              Project-specific test certificates on request.
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-ink-soft">
              For fire performance, thermal, acoustic, structural, water absorption and other certified values — tell us the product and the intended application and we'll issue the corresponding certificate.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5 md:self-auto"
          >
            <Sparkles className="h-4 w-4" /> Request a certificate
          </a>
        </div>
      </section>

      {/* Talk to us */}
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-line/60 bg-canvas p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-16 md:p-14">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-copper/10 text-copper">
            <HeadphonesIcon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Direct line
            </div>
            <h3 className="display-serifish mt-3 text-2xl md:text-3xl">
              Talk to us before you write the spec.
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-ink-soft">
              Bring a plan, a section, or the brief — we'll tell you which of our systems fits and which certified values you'll need.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-full border border-ink/25 px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-canvas md:self-auto"
          >
            Contact us
          </a>
        </div>
      </section>

      <CTABand
        eyebrow="Studios, contractors, developers"
        title="Request the full technical library."
        href="/contact"
        cta="Request access"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
