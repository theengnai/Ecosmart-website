import { useState } from "react";
import { ShieldCheck, Lock, FileText } from "lucide-react";
import { z } from "zod";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { StoryHero } from "@/components/common/StoryHero";
import { Reveal } from "@/components/motion/Reveal";
import { AlternatingSlide } from "@/components/motion/AlternatingSlide";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FullBleedBand } from "@/components/media/FullBleedBand";
import { GALLERY } from "@/lib/gallery";
import hero from "@/assets/pages/hero-resources.jpg";

export const CERT_HERO = hero;

const CERTIFICATES: { code: string; title: string; note: string }[] = [
  {
    code: "ISO 9001",
    title: "Quality Management System",
    note: "Certified quality management across production, supply and project delivery.",
  },
  {
    code: "ISO 14001",
    title: "Environmental Management System",
    note: "Environmental management practices covering production and material handling.",
  },
  {
    code: "ISO 45001",
    title: "Occupational Health & Safety",
    note: "Health and safety management system for our facilities and site work.",
  },
  {
    code: "Test Report",
    title: "Product Test Report",
    note: "Independent laboratory test report issued for the flexible clay-stone tile system.",
  },
];

const STANDARDS = [
  { code: "SBC", note: "Saudi Building Code" },
  { code: "EN 13501-1", note: "Reaction to fire classification" },
  { code: "ASTM E84", note: "Surface burning characteristics" },
  { code: "ISO 10545-3", note: "Water absorption" },
  { code: "EN 1348", note: "Bond strength" },
];

const CERT_OPTIONS = ["ISO 9001", "ISO 14001", "ISO 45001", "Product test report"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  company: z.string().trim().min(1, "Please enter your company").max(120),
  role: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  project: z.string().trim().max(160).optional(),
  range: z.string().trim().max(80).optional(),
  certificates: z.array(z.string()).min(1, "Select at least one certificate"),
  message: z.string().trim().max(1000).optional(),
});

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-copper";
const labelClass =
  "font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft";

export function CertificatesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (c: string) =>
    setPicked((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      role: String(fd.get("role") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      project: String(fd.get("project") ?? ""),
      range: String(fd.get("range") ?? ""),
      certificates: picked,
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
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="05 — Certificates"
        n="05"
        title="Certified surfaces."
        emphasis="Documented on request."
        subcopy="Our management-system certificates and product test reports are issued directly to specifiers, contractors and developers. Complete the request form and our team will send the documents you need."
        image={hero}
        primary={{ label: "Request certificates", href: "#request" }}
      />

      {/* Certificate list — locked */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              What we hold
            </div>
            <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
              Certificates available on request.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
              These documents are not published for download. Tell us the project and which
              certificates you need — we will send them to you directly.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {CERTIFICATES.map((c, i) => (
              <AlternatingSlide key={c.code} index={i}>
                <div className="flex items-start justify-between gap-5 rounded-2xl border border-line/70 bg-canvas p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-copper/10 text-copper">
                      <FileText className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-copper">
                        {c.code}
                      </div>
                      <div className="mt-1.5 text-lg font-medium">{c.title}</div>
                      <p className="mt-2 text-sm text-ink-soft">{c.note}</p>
                    </div>
                  </div>
                  <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink-soft">
                    <Lock className="h-3 w-3" /> On request
                  </span>
                </div>
              </AlternatingSlide>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="scroll-mt-24 border-t border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Request access
          </div>
          <h2 className="display-serifish mt-3 text-3xl md:text-4xl">
            Tell us who you are and what you need.
          </h2>
          <p className="mt-4 text-sm text-ink-soft">
            We reply within one business day with the requested certificates.
          </p>

          <form onSubmit={onSubmit} className="mt-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Full name</span>
                <input name="name" maxLength={100} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Company</span>
                <input name="company" maxLength={120} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Role</span>
                <input name="role" maxLength={100} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Email</span>
                <input name="email" type="email" maxLength={255} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Phone</span>
                <input name="phone" maxLength={40} className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Project name / location</span>
                <input name="project" maxLength={160} className={inputClass} />
              </label>
              <label className="block md:col-span-2">
                <span className={labelClass}>Product range of interest</span>
                <select name="range" className={inputClass}>
                  <option>Saudi MCM</option>
                  <option>Global MCM</option>
                  <option>Other / not sure yet</option>
                </select>
              </label>
              <div className="md:col-span-2">
                <span className={labelClass}>Certificates needed</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {CERT_OPTIONS.map((c) => {
                    const active = picked.includes(c);
                    return (
                      <button
                        type="button"
                        key={c}
                        onClick={() => toggle(c)}
                        className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                          active
                            ? "border-copper bg-copper text-canvas"
                            : "border-line/70 bg-canvas text-ink-soft hover:border-copper/60 hover:text-ink"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>
              <label className="block md:col-span-2">
                <span className={labelClass}>Message</span>
                <textarea name="message" rows={5} maxLength={1000} className={inputClass} />
              </label>
            </div>

            {error ? (
              <div className="mt-6 rounded-xl border border-copper/50 bg-copper/10 p-4 text-sm text-ink">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-copper py-4 text-sm font-medium text-canvas transition-colors hover:bg-copper-deep"
            >
              Request certificates
            </button>

            {submitted ? (
              <div className="mt-6 rounded-2xl border border-copper bg-copper/10 p-6 text-center">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                  Request received
                </div>
                <div className="mt-2">
                  Thank you — our team will send the certificates shortly.
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </section>

      {/* Reference standards */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Reference standards
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            The standards our documents reference.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {STANDARDS.map((s, i) => (
              <AlternatingSlide key={s.code} index={i}>
                <div className="grid h-28 place-items-center rounded-xl border border-line bg-canvas px-3 text-center">
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
          <div className="mt-12 flex items-start gap-4 rounded-2xl border border-line/60 bg-canvas-2/40 p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-copper/10 text-copper">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <p className="text-sm text-ink-soft">
              Project-specific test values are confirmed against the intended application. Where a
              value is not certified for that use, we say so rather than estimate it.
            </p>
          </div>
        </div>
      </section>

      <FullBleedBand
        image={GALLERY.installDetail}
        kicker="Documented"
        title="Every product ships with a data sheet and an installation manual."
        height="sm"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
