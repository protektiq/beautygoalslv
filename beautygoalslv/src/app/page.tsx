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
    </>
  );
}
