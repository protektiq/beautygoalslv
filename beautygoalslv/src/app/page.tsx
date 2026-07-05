import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const HERO_STATS = [
  { value: "13+", label: "Years medical experience" },
  { value: "10+", label: "Years aesthetic medicine" },
  { value: "15+", label: "Advanced treatments" },
  { value: "8K", label: "Instagram followers" },
] as const;

const TREATMENTS = [
  "Botox",
  "Fillers",
  "Sofwave",
  "XERF",
  "Aerolase",
  "HydraFacial",
  "Emsculpt Neo",
  "Thread Lift",
  "Microneedling",
] as const;

const SOCIAL_PROOF = [
  { value: "★ 5.0", label: "Google rating" },
  { value: "8,000+", label: "Instagram followers" },
  { value: "13 yrs", label: "Medical expertise" },
  { value: "CareCredit", label: "Financing available" },
  { value: "Patientfi", label: "Payment plans" },
] as const;

const SERVICES = [
  {
    icon: "💉",
    title: "Botox & Neurotoxins",
    description:
      "Reduce fine lines and wrinkles, slim the jawline, or treat hyperhidrosis.",
    price: "Starting at $450",
  },
  {
    icon: "✨",
    title: "Dermal Fillers",
    description:
      "Restore volume, enhance contour, and achieve facial balance.",
    price: "Starting at $550",
  },
  {
    icon: "🌊",
    title: "Sofwave Non-Surgical Lift",
    description:
      "FDA-cleared ultrasound that lifts skin with zero downtime. One treatment.",
    price: "Consultation required",
  },
  {
    icon: "⚡",
    title: "XERF Skin Tightening",
    description:
      "Dual-frequency radiofrequency for firmer, tighter skin. No needles.",
    price: "New — ask for pricing",
  },
  {
    icon: "💎",
    title: "HydraFacial & Diamond Glow",
    description:
      "Medical-grade resurfacing, extraction, and deep hydration.",
    price: "Starting at $205",
  },
  {
    icon: "🔬",
    title: "Aerolase Neo Elite",
    description:
      "650-microsecond laser treats 30+ conditions, safe for all skin types.",
    price: "Consultation required",
  },
  {
    icon: "💪",
    title: "Emsculpt Neo",
    description:
      "Build muscle and eliminate fat simultaneously. 30% fat reduction on average.",
    price: "Packages available",
  },
  {
    icon: "🧵",
    title: "Thread Lift",
    description:
      "Minimally invasive PDO threads for dramatic lifting without surgery.",
    price: "Consultation required",
  },
] as const;

const CREDENTIALS = [
  "Family Nurse Practitioner — Board Certified (FNP-C)",
  "Master injector — Botulinum Toxin, Dermal Filler, PDO Threads",
  "Certified in Regenerative Aesthetics & Advanced Anti-Aging",
  "Expert in cosmetic lasers: Aerolase, Sofwave, Erbium, IPL",
  "Regular attendee — national aesthetics conferences & trainings",
] as const;

export default function Home() {
  return (
    <>
    <section className="overflow-x-hidden bg-black">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-[60px]">
        <div className="text-center md:text-left">
          <SectionEyebrow className="text-teak">
            Las Vegas Premier Med Spa
          </SectionEyebrow>

          <h1 className="mb-7 font-display text-[clamp(2.8rem,6vw,4.8rem)] italic leading-[1.1] text-white">
            Where <em className="text-teak">expertise</em> meets natural
            beauty.
          </h1>

          <p className="mx-auto mb-10 max-w-[480px] text-base leading-[1.7] text-white/60 md:mx-0">
            Michelle Tio-Nguyen, FNP-C — 10 years of master-level injectables,
            advanced lasers, and personalized aesthetic medicine at 8961 W.
            Sahara Ave.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button href="/contact" variant="gold">
              Book a Consultation
            </Button>
            <Button href="/services" variant="outline-white">
              Explore Services
            </Button>
          </div>

          <p className="mt-5 text-[0.8rem] text-white/50">
            Membership from <strong className="text-teak">$99/mo</strong> — 10–15%
            off all services · Credits always roll over
          </p>
        </div>

        <aside
          className="rounded border border-teak/15 bg-teak/[0.05] px-10 py-12"
          aria-label="Practice highlights"
        >
          <dl className="mb-10 grid grid-cols-2 gap-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-[2.8rem] leading-none text-teak">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-body text-[0.75rem] tracking-[0.04em] text-white/50">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-teak/20 pt-7">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.1em] text-teak">
              Treatments offered
            </p>
            <ul className="flex flex-wrap gap-1.5" aria-label="Treatment list">
              {TREATMENTS.map((treatment) => (
                <li
                  key={treatment}
                  className="rounded-[2px] border border-teak/30 px-[11px] py-[5px] text-[0.72rem] text-white/65"
                >
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section
      className="border-y border-teak/15 bg-near-black px-6 py-5"
      aria-label="Social proof"
    >
      <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-6 md:justify-between md:gap-4">
        {SOCIAL_PROOF.map((item) => (
          <li key={item.label} className="min-w-[120px] flex-1 text-center">
            <p className="font-display text-[1.4rem] font-normal leading-none text-teak">
              {item.value}
            </p>
            <p className="mt-0.5 font-body text-[0.7rem] uppercase tracking-[0.06em] text-white/[0.45]">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </section>

    <section className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionEyebrow>Our Treatments</SectionEyebrow>

        <h2 className="mb-3 font-display text-body">
          Everything your skin needs, under one roof.
        </h2>

        <p className="mb-12 max-w-[640px] text-[1.1rem] leading-relaxed text-muted">
          From a first-time HydraFacial to a full-face Sofwave lift, every
          treatment is tailored to your goals by our licensed team.
        </p>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-px border border-teak/10 bg-teak/10">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <article className="group flex h-full flex-col bg-white p-8 transition-colors duration-200 hover:bg-warm-white">
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teak/[0.12] text-[1.2rem]"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h4 className="mb-1.5 font-display text-lg font-medium text-body">
                  {service.title}
                </h4>

                <p className="mb-3.5 flex-1 text-[0.85rem] leading-normal text-muted">
                  {service.description}
                </p>

                <p className="text-[0.78rem] font-semibold tracking-[0.04em] text-teak">
                  {service.price}
                </p>

                <Link
                  href="/services"
                  className="mt-2 inline-block text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-muted transition-colors duration-200 group-hover:text-teak"
                >
                  View treatment →
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View all services & pricing
          </Button>
        </div>
      </div>
    </section>

    <section className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
        <div
          className="mx-auto flex aspect-[3/4] max-h-[520px] w-full max-w-md flex-col items-center justify-center rounded border border-teak/20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2520] text-center md:mx-0 md:max-w-none"
          aria-hidden="true"
        >
          <p className="font-display text-[1.1rem] italic text-teak/50">
            Michelle Tio-Nguyen
            <br />
            FNP-C
          </p>
        </div>

        <div>
          <SectionEyebrow>Meet Michelle</SectionEyebrow>

          <h2 className="mb-5 font-display text-body">
            Master injector. Skin expert. Your partner.
          </h2>

          <p className="mb-7 text-muted">
            Michelle Tio-Nguyen, FNP-C brings 13 years of medical expertise and
            a decade of aesthetic mastery to every appointment. Her approach:
            listen first, treat second — always preserving what makes you, you.
          </p>

          <ul className="flex flex-col gap-2.5">
            {CREDENTIALS.map((credential) => (
              <li
                key={credential}
                className="flex items-start gap-3 text-[0.87rem] text-muted"
              >
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teak"
                  aria-hidden="true"
                />
                {credential}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/about" variant="gold">
              Meet the full team
            </Button>
            <Button href="/contact" variant="outline">
              Book with Michelle
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
