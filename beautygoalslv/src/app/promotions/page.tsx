import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Current Promotions | Beauty Goals LV Las Vegas",
  description:
    "Current promotions and special offers at Beauty Goals LV. Intro pricing on XERF, new client specials, and bundle savings.",
};

type Promotion = {
  id: string;
  tag: string;
  name: string;
  discount: string;
  description: string;
  ctaLabel: string;
  note: string;
};

const PROMOTIONS: readonly Promotion[] = [
  {
    id: "xerf-intro",
    tag: "New treatment: intro pricing",
    name: "XERF Skin Tightening",
    discount: "Special introductory rate, limited appointments",
    description:
      "Be among the first to experience XERF, our newest dual-frequency radiofrequency treatment. No needles, no downtime.",
    ctaLabel: "Claim this offer",
    note: "Limited spots available, contact us for pricing",
  },
  {
    id: "new-client-special",
    tag: "New client special",
    name: "Complimentary Consultation + $50 Off",
    discount: "$50 credit toward your first treatment",
    description:
      "First time at Beauty Goals LV? Book a complimentary consultation and receive $50 credit toward any treatment booked on the same visit.",
    ctaLabel: "Book your consult",
    note: "Valid for new clients only · One per person",
  },
  {
    id: "tattoo-removal-package",
    tag: "Bundle & save",
    name: "Tattoo Removal Package",
    discount: "Buy 5 sessions, get the 6th free",
    description:
      "Commit to your full removal journey and save. Sizes from 2x2 ($100) to 10x10 ($300).",
    ctaLabel: "Get started",
    note: "Ongoing offer · Cannot combine with membership discount",
  },
] as const;

type PromoCardProps = Promotion;

const PromoCard = ({
  tag,
  name,
  discount,
  description,
  ctaLabel,
  note,
}: PromoCardProps) => {
  return (
    <article className="overflow-hidden rounded-[4px] border border-teak/[0.12] bg-white">
      <div className="border-b-2 border-teak bg-ink p-7">
        <span className="mb-2.5 block text-[0.68rem] font-bold uppercase tracking-[0.1em] text-teak">
          {tag}
        </span>
        <h3 className="mb-1.5 font-display text-[1.3rem] italic text-warm-white">
          {name}
        </h3>
        <p className="text-[0.85rem] text-warm-white/[0.65]">{discount}</p>
      </div>

      <div className="p-6">
        <p className="mb-4 text-[0.85rem] leading-[1.6] text-muted">
          {description}
        </p>

        <Button variant="gold" size="sm" href="/contact">
          {ctaLabel}
        </Button>

        <p className="mt-3 flex items-center gap-1.5 text-[0.75rem] text-muted">
          <span aria-hidden="true">⏱</span>
          {note}
        </p>
      </div>
    </article>
  );
};

const PromotionsPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ Promotions"
        headline="Current specials."
        subtext="Limited-time offers on treatments and memberships."
      />

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="sr-only">Current promotions</h2>
          <ul className="mb-10 grid grid-cols-1 gap-6 min-[601px]:mb-[60px] min-[601px]:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            {PROMOTIONS.map((promo) => (
              <li key={promo.id}>
                <PromoCard {...promo} />
              </li>
            ))}
          </ul>

          <div className="rounded-[4px] border border-teak/15 bg-ink px-4 py-10 text-center md:px-6 md:py-12">
            <h2 className="mb-3 font-display text-[clamp(1.25rem,3.5vw,1.5rem)] italic text-warm-white">
              Year-round savings with a membership
            </h2>
            <p className="mb-6 text-warm-white/45">
              Members save 10-15% on every visit, every month, no waiting for
              a promotion.
            </p>
            <Button variant="gold" href="/membership">
              View membership plans
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionsPage;
