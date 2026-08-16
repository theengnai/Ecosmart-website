import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Package, Sparkles } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { SvgLineDraw } from "@/components/motion/SvgLineDraw";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-samples.jpg";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { ImageMarquee } from "@/components/media/ImageMarquee";
import { GALLERY, SCENES } from "@/lib/gallery";

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "Samples — EcoSmart" },
      { name: "description", content: "Request physical samples of EcoSmart finishing products — flexible clay-stone, PU stone, WPC, SPC, PVC — from EcoSmart." },
      { property: "og:title", content: "Samples — EcoSmart" },
      { property: "og:description", content: "Hold the material before you specify." },
      { property: "og:image", content: hero },
    ],
  }),
  component: SamplesPage,
});

const STEPS = [
  { n: "01", t: "Tell us", d: "Share the project, the product you'd like to see, and the address to ship to." },
  { n: "02", t: "We match", d: "We select the right chips from our finishing lines against your brief and confirm what we'll send." },
  { n: "03", t: "Shipped by EcoSmart", d: "The sample ships from our facility in Saudi Arabia with its specification card." },
];

const CONTENTS = [
  { label: "Physical sample", desc: "Real material, real finish — cut from the same production line as your project." },
  { label: "Specification card", desc: "Product name, reference standards and the certified values available on request." },
  { label: "TDS reference", desc: "Pointer to the full Technical Data Sheet and Installation Manual." },
  { label: "Project note", desc: "A short line about why we shortlisted this material for the brief you sent." },
];

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-copper";
const labelClass = "font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft";

const sampleSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  product: z.string().trim().min(1).max(120),
  address: z.string().trim().min(1, "Please enter a shipping address").max(300),
  message: z.string().trim().max(1000).optional(),
});

function SampleRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = sampleSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      product: String(fd.get("product") ?? ""),
      address: String(fd.get("address") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      setSubmitted(false);
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="request" className="scroll-mt-24 border-t border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
          Request a sample
        </div>
        <h2 className="display-serifish mt-3 text-3xl md:text-4xl">
          Tell us what to send, and where.
        </h2>
        <form onSubmit={onSubmit} className="mt-10 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Full name</span>
            <input name="name" maxLength={100} className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Company</span>
            <input name="company" maxLength={120} className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Email</span>
            <input name="email" type="email" maxLength={255} className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Phone</span>
            <input name="phone" maxLength={40} className={inputClass} />
          </label>
          <label className="block md:col-span-2">
            <span className={labelClass}>Product of interest</span>
            <select name="product" className={inputClass} defaultValue="Saudi MCM">
              <option>Saudi MCM</option>
              <option>Global MCM</option>
              <option>PU stone</option>
              <option>WPC / SPC / PVC</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="block md:col-span-2">
            <span className={labelClass}>Shipping address</span>
            <input name="address" maxLength={300} className={inputClass} />
          </label>
          <label className="block md:col-span-2">
            <span className={labelClass}>Project details</span>
            <textarea name="message" rows={5} maxLength={1000} className={inputClass} />
          </label>

          {error ? (
            <div className="md:col-span-2 rounded-xl border border-copper/50 bg-copper/10 p-4 text-sm">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            className="md:col-span-2 w-full rounded-full bg-copper py-4 text-sm font-medium text-canvas transition-colors hover:bg-copper-deep"
          >
            Request a sample
          </button>

          {submitted ? (
            <div className="md:col-span-2 rounded-2xl border border-copper bg-copper/10 p-6 text-center">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                Request received
              </div>
              <div className="mt-2">Thank you — we will confirm your sample shortly.</div>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function SamplesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="06 — Samples"
        title="Hold the material."
        emphasis="Then specify it."
        subcopy="Physical samples of our flexible clay-stone tiles and related finishing products, cut from production sheets and issued on request with a specification card."
        image={hero}
        primary={{ label: "Request a sample", href: "#request" }}
        secondary={{ label: "See the products", to: "/products" }}
      />

      <SampleRequestForm />

      <section className="relative border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            How it works
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Three steps.
          </h2>

          <div className="relative mt-20 grid gap-16">
            <SvgLineDraw
              className="pointer-events-none absolute left-6 top-0 h-full w-4 text-copper md:left-8"
              strokeWidth={2}
            />
            {STEPS.map((s) => (
              <Reveal key={s.n} className="relative grid grid-cols-[auto_1fr] gap-8 pl-2 md:gap-14">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-copper bg-canvas font-mono text-sm text-copper md:h-16 md:w-16">
                  {s.n}
                </div>
                <div className="pt-2">
                  <h3 className="display-serifish text-2xl md:text-4xl">{s.t}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What comes with a sample */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            What arrives
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Enough to specify with confidence.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTENTS.map((c, i) => (
              <ScaleIn key={c.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line/60 bg-canvas p-6 md:p-8">
                  <div className="display-serifish text-4xl text-copper">
                    0{i + 1}
                  </div>
                  <div className="mt-6 text-lg font-medium">{c.label}</div>
                  <p className="mt-2 text-sm text-ink-soft">{c.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping strip — honest */}
      <section className="border-y border-line/60 bg-ink px-5 py-16 text-canvas md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-copper/20 text-copper-light">
              <Package className="h-4 w-4" />
            </span>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/60">
                Dispatch
              </div>
              <div className="mt-1 text-base">
                Samples ship from Saudi Arabia. Lead time confirmed when we reply to your request.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">FAQ</div>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">Before you ask.</h2>
          </Reveal>
          <RevealGroup className="mt-10 divide-y divide-line/60" stagger={0.05}>
            {[
              { q: "Which products can I request as a sample?", a: "Our Decoration & Finishing lines — flexible clay-stone tiles, PU stone tiles, WPC door panels and decking, SPC flooring, PVC marble sheets, PVC laminated foam boards, PVC wood panels and the PVC laminated foam interior line." },
              { q: "How do I request one?", a: "Send a brief message describing the project, product and address. We'll confirm what we can send and the lead time." },
              { q: "Do the samples come with test certificates?", a: "Samples come with a specification card. Project-specific test certificates for the certified values (fire, thermal, acoustic, water absorption etc.) are issued on request against the intended application." },
              { q: "Are the colours accurate?", a: "As accurate as a small chip allows. For final specification of textured or natural-looking finishes we recommend a larger sample panel — ask us and we'll arrange it." },
            ].map((f) => (
              <details key={f.q} data-reveal-item className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-copper transition-transform group-open:rotate-45">
                    <Sparkles className="h-3 w-3" />
                  </span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </RevealGroup>
        </div>
      </section>

      <GalleryGrid
        images={[GALLERY.materialClay, GALLERY.materialFlex, GALLERY.installDetail, GALLERY.interiorBedroom, GALLERY.facadeDetail, GALLERY.archHall]}
        kicker="Texture up close"
        title="Feel the finish before you specify it."
        body="Samples are cut from production sheets — the same grain, tone and relief you will receive on site."
      />
      <ImageMarquee images={SCENES} duration={75} />

      <CTABand
        eyebrow="Ready?"
        title="Request a sample — we'll send it to you."
        href="#request"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
