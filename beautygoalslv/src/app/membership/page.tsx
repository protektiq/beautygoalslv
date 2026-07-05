import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import BookingStrip from "@/components/ui/BookingStrip";
import { cn } from "@/lib/utils";

type MembershipTier = {
  id: string;
  name: string;
  pitch: string;
  price: string;
  valueEstimate: string;
  inclusions: readonly string[];
  milestone?: string;
  featured?: boolean;
  ctaVariant: "gold" | "outline";
};

type ComparisonCell =
  | { type: "check" }
  | { type: "dash" }
  | { type: "text"; value: string };

type ComparisonRow = {
  feature: string;
  glowGetter: ComparisonCell;
  glowUp: ComparisonCell;
  glowGoals: ComparisonCell;
  ultimate: ComparisonCell;
};

const MEMBERSHIP_TIERS: readonly MembershipTier[] = [
  {
    id: "glow-getter",
    name: "Glow Getter",
    pitch: "The entry point to member savings",
    price: "99",
    valueEstimate: "Estimated value: ~$130+/mo",
    inclusions: [
      "10% off injectables",
      "15% off other services",
      "10% off retail",
      "Credits roll over",
    ],
    ctaVariant: "outline",
  },
  {
    id: "glow-up",
    name: "Glow Up",
    pitch: "One monthly treatment included",
    price: "175",
    valueEstimate: "Estimated value: ~$210–$275/mo",
    inclusions: [
      "HydraFacial",
      "Medium Depth Peel",
      "IPL Rejuvenation",
      "Acne Photofacial",
      "Melasma Laser Spot Treatment",
      "Laser Hair Reduction (up to 1 large area)",
    ],
    milestone:
      "🎁 After 6 months: Free Microneedling or Fractionated Laser ($400 value)",
    ctaVariant: "outline",
  },
  {
    id: "glow-goals",
    name: "Glow Goals",
    pitch: "Premium monthly treatments",
    price: "225",
    valueEstimate: "Estimated value: ~$269–$500+/mo",
    inclusions: [
      "HydraFacial Deluxe ($269)",
      "Diamond Glow Deluxe ($275)",
      "Melasma Laser x2",
      "PRX No-Peel Peel",
      "Emsella",
      "Fractionated Laser Resurfacing (face)",
      "ZO-3 Step Peel",
      "Laser Hair Reduction (2 medium or 1 XL area)",
    ],
    milestone:
      "🎁 After 6 months: Free Microneedling with RF or Erbium Laser ($650 value)",
    featured: true,
    ctaVariant: "gold",
  },
  {
    id: "ultimate-goals",
    name: "Ultimate Goals",
    pitch: "The most advanced monthly treatments",
    price: "499",
    valueEstimate: "Estimated value: ~$650–$1,000+/mo",
    inclusions: [
      "Microneedling with PRP/PRF/Exosome/Rejuran",
      "Pixel-8 Microneedling RF",
      "EmsculptNeo (any area)",
      "Erbium Fully Ablative",
      "Fractionated Laser Full Face+Neck+Chest",
      "PRX Biostimulator x2",
      "Keravive Scalp+LED",
      "Emsella x2",
      "Aerolase Face/Lip/Neck",
    ],
    milestone:
      "🎁 After 6 months: Free Sofwave Lift or Daxxify ($1,000 value)",
    ctaVariant: "outline",
  },
] as const;

const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    feature: "Monthly treatment included",
    glowGetter: { type: "dash" },
    glowUp: { type: "check" },
    glowGoals: { type: "check" },
    ultimate: { type: "check" },
  },
  {
    feature: "10% off injectables",
    glowGetter: { type: "check" },
    glowUp: { type: "check" },
    glowGoals: { type: "check" },
    ultimate: { type: "check" },
  },
  {
    feature: "15% off other services",
    glowGetter: { type: "check" },
    glowUp: { type: "check" },
    glowGoals: { type: "check" },
    ultimate: { type: "check" },
  },
  {
    feature: "Credits roll over",
    glowGetter: { type: "check" },
    glowUp: { type: "check" },
    glowGoals: { type: "check" },
    ultimate: { type: "check" },
  },
  {
    feature: "6-month milestone bonus",
    glowGetter: { type: "dash" },
    glowUp: { type: "text", value: "Free Microneedling ($400)" },
    glowGoals: { type: "text", value: "Free RF or Erbium ($650)" },
    ultimate: { type: "text", value: "Free Sofwave or Daxxify ($1,000)" },
  },
  {
    feature: "Access to Emsculpt / Emsella",
    glowGetter: { type: "dash" },
    glowUp: { type: "dash" },
    glowGoals: { type: "text", value: "Emsella included" },
    ultimate: { type: "text", value: "Both included" },
  },
  {
    feature: "Advanced laser treatments",
    glowGetter: { type: "dash" },
    glowUp: { type: "dash" },
    glowGoals: { type: "check" },
    ultimate: { type: "check" },
  },
] as const;

const tierCardClassName =
  "overflow-hidden rounded-[4px] border border-teak/15 bg-white transition-[border-color] duration-200 hover:border-teak";

const ComparisonCellContent = ({ cell }: { cell: ComparisonCell }) => {
  if (cell.type === "check") {
    return <span className="font-bold text-teak">✓</span>;
  }

  if (cell.type === "dash") {
    return <span className="text-teak/25">—</span>;
  }

  return <span>{cell.value}</span>;
};

type TierCardProps = MembershipTier;

const TierCard = ({
  name,
  pitch,
  price,
  valueEstimate,
  inclusions,
  milestone,
  featured = false,
  ctaVariant,
}: TierCardProps) => {
  return (
    <article
      className={cn(
        tierCardClassName,
        featured && "relative border-2 border-teak",
      )}
    >
      {featured && (
        <span className="absolute left-1/2 top-[-1px] z-10 -translate-x-1/2 whitespace-nowrap rounded-b-[4px] bg-teak px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-black">
          Most popular
        </span>
      )}

      <div className={cn("bg-black px-6 py-7", featured && "pt-9")}>
        <h3 className="mb-1.5 font-display text-[1.1rem] italic text-white">
          {name}
        </h3>
        <p className="mt-2 text-[0.82rem] leading-normal text-white/50">
          {pitch}
        </p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="mt-1 text-[1.2rem] font-semibold text-teak">$</span>
          <span className="font-display text-[2.4rem] leading-none text-teak">
            {price}
          </span>
          <span className="text-[0.75rem] text-white/40">/mo</span>
        </div>
      </div>

      <div className="p-6">
        <p className="mb-4 rounded-[2px] bg-teak/[0.07] px-3 py-2 text-[0.75rem] font-semibold text-teak">
          {valueEstimate}
        </p>

        <ul className="mb-5">
          {inclusions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 border-b border-teak/[0.08] py-1.5 text-[0.81rem] text-muted"
            >
              <span className="mt-0.5 shrink-0 text-[0.75rem] text-teak">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {milestone && (
          <p className="mb-4 rounded-[2px] bg-teak/[0.06] px-3 py-2.5 text-[0.75rem] italic text-teak">
            {milestone}
          </p>
        )}

        <Button
          variant={ctaVariant}
          href="/contact"
          className="w-full text-center"
        >
          Sign up — call (702) 625-3838
        </Button>
      </div>
    </article>
  );
};

const MembershipPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ Membership"
        headline="Your skin, on a plan."
        subtext="Four membership tiers designed to make consistent, expert skincare achievable at every budget. Credits always roll over — never lose what you pay for."
      />

      <section className="bg-warm-white px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <ul className="mb-[60px] grid grid-cols-1 gap-4 min-[601px]:grid-cols-2 min-[901px]:grid-cols-4">
            {MEMBERSHIP_TIERS.map((tier) => (
              <li key={tier.id}>
                <TierCard {...tier} />
              </li>
            ))}
          </ul>

          <h3 className="mb-6 font-display text-body">Plan comparison</h3>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-[0.84rem]">
              <thead>
                <tr>
                  <th className="sticky left-0 z-20 border-b-2 border-teak bg-black px-4 py-3.5 text-left text-[0.78rem] font-medium tracking-[0.04em] text-teak">
                    Feature
                  </th>
                  <th className="border-b-2 border-teak bg-black px-4 py-3.5 text-left text-[0.78rem] font-medium text-white">
                    Glow Getter
                    <br />
                    $99
                  </th>
                  <th className="border-b-2 border-teak bg-black px-4 py-3.5 text-left text-[0.78rem] font-medium text-white">
                    Glow Up
                    <br />
                    $175
                  </th>
                  <th className="border-b-2 border-teak bg-black px-4 py-3.5 text-left text-[0.78rem] font-medium text-white">
                    Glow Goals
                    <br />
                    $225
                  </th>
                  <th className="border-b-2 border-teak bg-black px-4 py-3.5 text-left text-[0.78rem] font-medium text-white">
                    Ultimate
                    <br />
                    $499
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, index) => (
                  <tr key={row.feature}>
                    <td
                      className={cn(
                        "sticky left-0 z-10 border-b border-teak/10 px-4 py-3 text-muted",
                        index % 2 === 1 ? "bg-warm-white" : "bg-white",
                      )}
                    >
                      {row.feature}
                    </td>
                    <td
                      className={cn(
                        "border-b border-teak/10 px-4 py-3 text-muted",
                        index % 2 === 1 && "bg-warm-white",
                      )}
                    >
                      <ComparisonCellContent cell={row.glowGetter} />
                    </td>
                    <td
                      className={cn(
                        "border-b border-teak/10 px-4 py-3 text-muted",
                        index % 2 === 1 && "bg-warm-white",
                      )}
                    >
                      <ComparisonCellContent cell={row.glowUp} />
                    </td>
                    <td
                      className={cn(
                        "border-b border-teak/10 px-4 py-3 text-muted",
                        index % 2 === 1 && "bg-warm-white",
                      )}
                    >
                      <ComparisonCellContent cell={row.glowGoals} />
                    </td>
                    <td
                      className={cn(
                        "border-b border-teak/10 px-4 py-3 text-muted",
                        index % 2 === 1 && "bg-warm-white",
                      )}
                    >
                      <ComparisonCellContent cell={row.ultimate} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BookingStrip
        headline="Ready to become a member?"
        subtext="Call us or send a message — we'll find the right plan."
      />
    </>
  );
};

export default MembershipPage;
