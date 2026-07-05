import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import BookingStrip from "@/components/ui/BookingStrip";

export const metadata: Metadata = {
  title: "Med Spa Services Las Vegas | Beauty Goals LV",
  description:
    "15+ advanced treatments: Botox, fillers, Sofwave, XERF, Aerolase, HydraFacial, Emsculpt Neo, thread lift, and more. Starting at $99/mo membership.",
};

type Service = {
  name: string;
  description: string;
  price: string;
};

type ServiceCategory = {
  tag: string;
  description: string;
  services: readonly Service[];
};

const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    tag: "Injectables",
    description:
      "Neurotoxins & hyaluronic acid fillers, performed by Michelle Tio-Nguyen, FNP-C",
    services: [
      {
        name: "Botox / Dysport / Xeomin / Daxxify",
        description:
          "Temporarily relax overactive muscles to smooth forehead lines, crow's feet, and frown lines. Also treats jaw clenching (TMJ) and excessive sweating.",
        price:
          "Botox $550 · Dysport $600 · Xeomin $450 · Daxxify from $800 · Letybo $650",
      },
      {
        name: "Dermal Fillers",
        description:
          "Add volume, smooth deep lines, and create facial balance with hyaluronic acid filler. Areas include cheeks, chin, jaw, under-eye, nose, and laugh lines.",
        price:
          "From $550 · Cheeks from $600 · Jaw from $1,100 · Chin from $600 · Facial balancing from $1,100",
      },
      {
        name: "Lip Filler",
        description:
          "Natural-looking volume and definition using hyaluronic acid. Fully reversible. We prioritize proportion and balance over dramatic size.",
        price: "Starting at $550",
      },
    ],
  },
  {
    tag: "Facials & Lasers",
    description:
      "Medical-grade skin treatments performed by our advanced aestheticians",
    services: [
      {
        name: "HydraFacial",
        description:
          "Patented 4-in-1 cleanse, exfoliate, extract, and hydrate treatment. Immediate glow, zero downtime. Add Dermaplaning, LED, or specialty boosters.",
        price: "From $205 · Deluxe $269",
      },
      {
        name: "Diamond Glow",
        description:
          "Diamond-tip resurfacing + simultaneous infusion of medical-grade serums. Next-level deep cleanse for lasting radiance.",
        price: "Express $215 · Deluxe $275",
      },
      {
        name: "Microneedling",
        description:
          "FDA-cleared collagen induction therapy. Add PRP, PRF, Exosome, or Rejuran for amplified results. Treats scars, pores, texture, and wrinkles.",
        price:
          "From $375 · With RF from $650 · With PRP $625 · With Exosome $675",
      },
      {
        name: "IPL Photofacial",
        description:
          "Broadband light targets sun spots, age spots, redness, and rosacea. Stimulates collagen and evens skin tone with minimal downtime.",
        price: "Full face $225 · Acne $210",
      },
      {
        name: "Chemical Peels",
        description:
          "From light maintenance peels ($50) to deeper resurfacing peels targeting acne, pigmentation, and aging. ZO-3 Step Peel available.",
        price: "From $50 · Medium depth from $250",
      },
      {
        name: "Erbium Laser Resurfacing",
        description:
          'Resurface the face, neck, chest, and hands. Fractionated for minimal downtime ("glass skin") or fully ablative for maximum results.',
        price: "Fractionated from $400 · Ablative from $600",
      },
    ],
  },
  {
    tag: "Specialty Treatments",
    description:
      "Advanced technology for lifting, tightening, and transformation",
    services: [
      {
        name: "Sofwave Non-Surgical Face Lift",
        description:
          "FDA-cleared ultrasound technology delivers energy deep into the dermis to rebuild collagen. One treatment lifts brows, neck, and jawline. Safe for all skin types.",
        price: "Consultation required for pricing",
      },
      {
        name: "XERF Skin Tightening",
        description:
          "Advanced dual-frequency radiofrequency tightens tissue, improves tone, and stimulates collagen remodeling. No needles, no downtime. 2–3 treatments recommended per year.",
        price: "Intro pricing: contact us",
      },
      {
        name: "Aerolase Neo Elite",
        description:
          "650-microsecond laser energy treats 30+ conditions including acne, melasma, rosacea, psoriasis, spider veins, and laser hair removal. Safe for all Fitzpatrick skin types.",
        price: "Consultation required for pricing",
      },
      {
        name: "Thread Lift (PDO)",
        description:
          "Dissolvable PDO sutures lift sagging skin and stimulate collagen production. A minimally invasive alternative to surgery for those wanting visible lift.",
        price: "Consultation required for pricing",
      },
    ],
  },
  {
    tag: "Body Contouring",
    description: "Non-invasive fat reduction and muscle building",
    services: [
      {
        name: "Emsculpt Neo",
        description:
          "The only treatment that simultaneously eliminates fat AND builds muscle. 30-minute sessions deliver 30% fat reduction and 25% muscle increase on average. Certified by BTL.",
        price: "Packages available, consultation required",
      },
      {
        name: "Emsella Pelvic Floor",
        description:
          "FDA-cleared electromagnetic treatment strengthens the pelvic floor to improve urinary incontinence and sexual wellness. Sit fully clothed for 28 minutes.",
        price: "Packages available, consultation required",
      },
    ],
  },
] as const;

const FINANCING_PROVIDERS = ["CareCredit", "Patientfi"] as const;

const serviceCardClassName =
  "rounded-[4px] border border-teak/10 bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-teak hover:shadow-[0_4px_24px_rgba(185,160,104,0.08)]";

type ServiceCardProps = Service;

const ServiceCard = ({ name, description, price }: ServiceCardProps) => {
  return (
    <article className={serviceCardClassName}>
      <h3 className="mb-2 font-display text-[1.05rem] text-body">{name}</h3>
      <p className="mb-3.5 text-[0.83rem] leading-[1.55] text-muted">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[0.82rem] font-semibold text-teak">{price}</span>
      </div>
    </article>
  );
};

type ServiceCategorySectionProps = ServiceCategory;

const ServiceCategorySection = ({
  tag,
  description,
  services,
}: ServiceCategorySectionProps) => {
  return (
    <section className="mb-[72px]">
      <div className="mb-8 flex flex-wrap items-baseline gap-5 border-b border-teak/20 pb-4">
        <h2 className="inline-block rounded-[2px] border border-teak px-2.5 py-1 text-[clamp(0.65rem,1.5vw,0.7rem)] font-semibold uppercase tracking-[0.08em] text-teak">
          {tag}
        </h2>
        <p className="text-[0.85rem] text-muted">{description}</p>
      </div>

      <ul className="grid grid-cols-1 gap-5 min-[601px]:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {services.map((service) => (
          <li key={service.name}>
            <ServiceCard {...service} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ Services"
        headline="Every treatment, tailored to you."
        subtext="15+ advanced services from injectables to body contouring, delivered by Las Vegas's most experienced aesthetic team."
      />

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 rounded-[4px] border border-teak/25 bg-ink px-4 py-6 md:mb-[60px] md:flex-row md:items-center md:gap-6 md:px-10 md:py-8">
            <div>
              <h2 className="mb-1.5 font-display text-[clamp(1.1rem,3vw,1.3rem)] italic text-warm-white">
                Glow Getter Membership
              </h2>
              <p className="text-[0.85rem] text-warm-white/[0.65]">
                10% off injectables · 15% off all other services · Credits roll
                over every month
              </p>
            </div>

            <div className="shrink-0 text-center">
              <p className="font-display text-[2.2rem] leading-none text-teak">
                $99
              </p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.06em] text-warm-white/40">
                per month
              </p>
            </div>

            <Button variant="outline" href="/membership" size="sm" className="w-full text-center md:w-auto">
              See all plans
            </Button>
          </div>

          {SERVICE_CATEGORIES.map((category) => (
            <ServiceCategorySection key={category.tag} {...category} />
          ))}

          <div className="flex flex-wrap items-center gap-4 rounded-[4px] border border-teak/15 bg-teak/[0.06] p-4 md:p-6">
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-body">
                Financing available for all treatments
              </p>
              <p className="mt-1 text-[0.85rem] text-muted">
                CareCredit and Patientfi accepted. Ask about monthly payment
                plans for treatments over $500.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {FINANCING_PROVIDERS.map((provider) => (
                <span
                  key={provider}
                  className="rounded-[2px] border border-teak/30 bg-teak/10 px-4 py-2 text-[0.8rem] text-teak"
                >
                  {provider}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingStrip
        headline="Not sure where to start?"
        subtext="Book a complimentary consultation and we'll build your personalized treatment plan."
      />
    </>
  );
};

export default ServicesPage;
