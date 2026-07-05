import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Med Spa Las Vegas | Beauty Goals LV — Botox, Fillers, Facials & More",
  description:
    "Beauty Goals LV is Las Vegas's premier med spa. Expert Botox, fillers, Sofwave, HydraFacial, Emsculpt, and more — led by Michelle Tio-Nguyen, FNP-C.",
};

const formInputClassName =
  "w-full rounded-[2px] border border-teak/20 bg-white px-4 py-3 font-body text-[0.9rem] text-body transition-colors focus:border-teak focus:outline-none";

const formLabelClassName =
  "mb-[7px] block text-[0.73rem] font-semibold uppercase tracking-[0.08em] text-muted";

const followButtonClassName =
  "inline-block cursor-pointer rounded-[2px] border border-teak bg-transparent px-[22px] py-2.5 font-body text-[0.76rem] font-semibold uppercase tracking-[0.07em] text-teak transition-all duration-200 hover:bg-teak hover:text-black";

const financingBadgeClassName =
  "rounded-[2px] border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[0.75rem] text-white/60";

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
    title: "Botox & Neurotoxins",
    description:
      "Reduce fine lines and wrinkles, slim the jawline, or treat hyperhidrosis.",
    price: "Starting at $450",
  },
  {
    title: "Dermal Fillers",
    description:
      "Restore volume, enhance contour, and achieve facial balance.",
    price: "Starting at $550",
  },
  {
    title: "Sofwave Non-Surgical Lift",
    description:
      "FDA-cleared ultrasound that lifts skin with zero downtime. One treatment.",
    price: "Consultation required",
  },
  {
    title: "XERF Skin Tightening",
    description:
      "Dual-frequency radiofrequency for firmer, tighter skin. No needles.",
    price: "New — ask for pricing",
  },
  {
    title: "HydraFacial & Diamond Glow",
    description:
      "Medical-grade resurfacing, extraction, and deep hydration.",
    price: "Starting at $205",
  },
  {
    title: "Aerolase Neo Elite",
    description:
      "650-microsecond laser treats 30+ conditions, safe for all skin types.",
    price: "Consultation required",
  },
  {
    title: "Emsculpt Neo",
    description:
      "Build muscle and eliminate fat simultaneously. 30% fat reduction on average.",
    price: "Packages available",
  },
  {
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

const BEFORE_AFTER = [
  {
    treatment: "Full Face Rejuvenation",
    detail: "Botox + Filler • 1 session",
  },
  {
    treatment: "Acne Correction",
    detail: "Aerolase • 3 sessions",
  },
  {
    treatment: "Facial Balancing",
    detail: "Filler • Cheeks + Chin",
  },
] as const;

const TESTIMONIALS = [
  {
    initials: "TR",
    name: "Tasha R.",
    quote:
      "She's precise, she listens to what your goals are, she's informative and always has her client's best interest in mind. I can't recommend her enough.",
    detail: "Botox + Fillers · Verified Google Review",
  },
  {
    initials: "MA",
    name: "Michelle A.",
    quote:
      "She educates you about the treatments and lets you know if you need it or not. It immediately slimmed down my face — something I never thought would happen!",
    detail: "Botox + Chin Filler · Verified Google Review",
  },
  {
    initials: "KC",
    name: "K.C.",
    quote:
      "She looks at the patient as a whole person. Takes her time and takes everything into consideration. Both my mom and I are very happy with the results.",
    detail: "Multiple treatments · Verified Google Review",
  },
] as const;

const INSTAGRAM_TILES = [
  "Real results & tips",
  "Before & after",
  "Treatment reels",
  "Glow tips",
  "New services",
  "Behind the scenes",
] as const;

const TREATMENT_OPTIONS = [
  "Botox / Neurotoxins",
  "Dermal Fillers",
  "Lip Filler",
  "Sofwave Non-Surgical Lift",
  "XERF Skin Tightening",
  "Aerolase Neo Elite",
  "HydraFacial",
  "Diamond Glow",
  "IPL Photofacial",
  "Microneedling RF",
  "Chemical Peels",
  "Erbium Laser Resurfacing",
  "Emsculpt Neo / Emsella",
  "Thread Lift",
  "Membership inquiry",
  "Not sure — need a consultation",
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

    <section className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionEyebrow>Real Results</SectionEyebrow>

        <h2 className="mb-3 font-display text-body">
          Results that speak for themselves.
        </h2>

        <p className="mb-10 max-w-[640px] text-[1.1rem] leading-relaxed text-muted">
          Every photo is a real Beauty Goals LV client. No filters, no stock
          images.
        </p>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BEFORE_AFTER.map((item) => (
            <li key={item.treatment}>
              <article className="overflow-hidden rounded border border-teak/[0.12] bg-black">
                <div className="flex min-h-[200px] bg-gradient-to-br from-[#111111] to-[#1f1a14]">
                  <div className="flex min-h-[200px] flex-1 items-center justify-center px-2 py-[60px] text-center text-[0.65rem] uppercase tracking-[0.1em] text-white/30">
                    Before
                  </div>
                  <div className="flex min-h-[200px] flex-1 items-center justify-center border-l border-teak/20 px-2 py-[60px] text-center text-[0.65rem] uppercase tracking-[0.1em] text-white/30">
                    After
                  </div>
                </div>

                <div className="bg-teak/[0.04] px-4 py-3.5">
                  <p className="text-[0.8rem] font-semibold text-white">
                    {item.treatment}
                  </p>
                  <p className="mt-0.5 text-[0.72rem] text-white/40">
                    {item.detail}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <Button href="/gallery" variant="outline">
            View full gallery →
          </Button>
        </div>
      </div>
    </section>

    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionEyebrow className="text-teak">Client Reviews</SectionEyebrow>

        <h2 className="mb-12 font-display text-white">
          What our clients say.
        </h2>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.name}>
              <article className="rounded border border-teak/15 bg-teak/[0.06] p-7">
                <p
                  className="mb-3 text-base text-teak"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </p>

                <blockquote className="mb-5 text-[0.88rem] italic leading-[1.7] text-white/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <footer className="flex items-center gap-2.5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teak/20 text-[0.75rem] font-semibold text-teak"
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <cite className="not-italic">
                      <p className="text-[0.82rem] font-medium text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-[0.72rem] text-white/35">
                        {testimonial.detail}
                      </p>
                    </cite>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div>
            <SectionEyebrow>@beautygoalslv</SectionEyebrow>
            <h2 className="font-display text-body">@beautygoalslv</h2>
          </div>
          <a
            href="https://instagram.com/beautygoalslv"
            target="_blank"
            rel="noopener noreferrer"
            className={followButtonClassName}
          >
            Follow us
          </a>
        </div>

        <ul className="grid grid-cols-3 gap-[3px] md:grid-cols-6">
          {INSTAGRAM_TILES.map((label) => (
            <li key={label}>
              <div
                className="flex aspect-square cursor-pointer items-center justify-center border border-teak/[0.08] bg-gradient-to-br from-[#1a1a1a] to-[#252015] p-2 transition-opacity duration-200 hover:opacity-80"
                role="img"
                aria-label={label}
              >
                <span className="text-center text-[0.65rem] text-teak/40">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-black px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-20 md:grid-cols-2">
        <div>
          <SectionEyebrow className="text-teak">Contact Us</SectionEyebrow>

          <h2 className="mb-5 font-display text-white">
            Let&apos;s start your glow-up.
          </h2>

          <p className="mb-8 leading-[1.7] text-white/55">
            Fill out the form and we&apos;ll be in touch within 24 hours. Prefer
            to call? We&apos;re at 702-625-3838 during business hours.
          </p>

          <address className="not-italic">
            <div className="flex items-start gap-3.5 border-b border-teak/15 py-4 text-[0.9rem] text-white">
              <span className="mt-px shrink-0 text-[1.2rem]" aria-hidden="true">
                📍
              </span>
              <div>
                <p className="mb-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-teak">
                  Address
                </p>
                <p>
                  8961 W. Sahara Avenue, Suite 106
                  <br />
                  Las Vegas, NV 89117
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 border-b border-teak/15 py-4 text-[0.9rem] text-white">
              <span className="mt-px shrink-0 text-[1.2rem]" aria-hidden="true">
                📞
              </span>
              <div>
                <p className="mb-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-teak">
                  Phone
                </p>
                <a
                  href="tel:7026253838"
                  className="transition-colors hover:text-teak"
                >
                  (702) 625-3838
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 border-b border-teak/15 py-4 text-[0.9rem] text-white">
              <span className="mt-px shrink-0 text-[1.2rem]" aria-hidden="true">
                ✉️
              </span>
              <div>
                <p className="mb-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-teak">
                  Email
                </p>
                <a
                  href="mailto:beautygoalsLV@gmail.com"
                  className="transition-colors hover:text-teak"
                >
                  beautygoalsLV@gmail.com
                </a>
              </div>
            </div>
          </address>

          <p className="mt-4 inline-flex items-center gap-1.5 rounded-[2px] border border-teak/20 bg-teak/10 px-3.5 py-2 text-[0.78rem] text-teak">
            ⏱ We respond within 24 hours
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="shrink-0 text-[0.73rem] uppercase tracking-[0.05em] text-white/40">
              Financing:
            </span>
            <span className={financingBadgeClassName}>CareCredit</span>
            <span className={financingBadgeClassName}>Patientfi</span>
          </div>
        </div>

        <form className="w-full" noValidate aria-label="Contact form">
          <div className="mb-5">
            <label htmlFor="contact-name" className={formLabelClassName}>
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className={formInputClassName}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="contact-email" className={formLabelClassName}>
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              className={formInputClassName}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="contact-phone" className={formLabelClassName}>
              Phone
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(702) 000-0000"
              className={formInputClassName}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="contact-treatment" className={formLabelClassName}>
              Treatment interested in
            </label>
            <select
              id="contact-treatment"
              name="treatment"
              defaultValue=""
              className={cn(formInputClassName, "cursor-pointer")}
            >
              <option value="">Select a treatment...</option>
              {TREATMENT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="contact-message" className={formLabelClassName}>
              Message (optional)
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Any questions or goals you'd like to share..."
              className={cn(formInputClassName, "h-[110px] resize-y")}
            />
          </div>

          <Button type="button" className="w-full text-center">
            Send Message
          </Button>

          <p className="mt-2.5 text-[0.78rem] text-muted">
            🔒 Your information is private and secure.
          </p>
        </form>
      </div>
    </section>
    </>
  );
}
