import PageHero from "@/components/PageHero";
import BookingStrip from "@/components/ui/BookingStrip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

type TeamMember = {
  imageLabel: string;
  name: string;
  title: string;
  bio: string;
  certifications: readonly string[];
};

type PhilosophyItem = {
  title: string;
  description: string;
};

const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    imageLabel: "Michelle Tio-Nguyen, FNP-C",
    name: "Michelle Tio-Nguyen",
    title: "FNP-C · CEO & Master Injector",
    bio: "With 13 years in medicine and 10 years in aesthetic practice, Michelle specializes in facial balancing, full-face rejuvenation, and natural results. She is a master injector of Botulinum Toxin, Dermal Filler, and PDO threads, and an expert in cosmetic lasers. She regularly attends advanced training in Regenerative Aesthetics and Anti-Aging Procedures.",
    certifications: [
      "FNP-C Board Certified",
      "Master Injector",
      "PDO Threads",
      "Sofwave Certified",
      "Aerolase Trained",
      "Regenerative Aesthetics",
    ],
  },
  {
    imageLabel: "Jennifer Guizar",
    name: "Jennifer Guizar",
    title: "Advanced Medical Aesthetician",
    bio: "Jennifer brings passion and precision to every treatment. Certified in HydraFacial, Diamond Glow, Microneedling RF, Dermaplaning, Erbium Laser, PRX Peel, and laser hair removal, she creates fully customized skincare plans for each client's unique needs and skin type.",
    certifications: [
      "HydraFacial Certified",
      "Diamond Glow",
      "Microneedling RF",
      "Erbium Laser",
      "PRX Peel",
      "Laser Hair Removal",
    ],
  },
  {
    imageLabel: "Zayna Rodriguez",
    name: "Zayna Rodriguez",
    title: "Advanced Medical Aesthetician",
    bio: "Born and raised in Oahu, HI, Zayna brings warmth and meticulous skill to every appointment. She specializes in HydraFacials, laser treatments, and microneedling, and is known for building lasting relationships with her clients and crafting experiences tailored to each person's journey.",
    certifications: [
      "HydraFacial Trained",
      "Laser Treatments",
      "Microneedling",
      "Chemical Peels",
    ],
  },
] as const;

const PHILOSOPHY_ITEMS: readonly PhilosophyItem[] = [
  {
    title: "Personalized above all",
    description:
      "No two faces are the same. Every plan begins with a thorough consultation where we listen — really listen — to your concerns, goals, and lifestyle before recommending a single treatment.",
  },
  {
    title: "Natural results, always",
    description:
      "We believe in enhancing what you have, not changing who you are. Our goal is results so natural that people ask if you've been on vacation — not if you've had work done.",
  },
  {
    title: "Education first",
    description:
      "An informed client is our best client. We'll walk you through every treatment option, including whether you actually need it, so you can make decisions that are right for you.",
  },
] as const;

type TeamCardProps = TeamMember;

const TeamCard = ({
  imageLabel,
  name,
  title,
  bio,
  certifications,
}: TeamCardProps) => {
  return (
    <article className="overflow-hidden rounded-[4px] border border-teak/[0.12] bg-white">
      <div
        className="flex aspect-[3/4] max-h-[320px] items-center justify-center bg-gradient-to-br from-near-black to-[#1f1a14] p-5 text-center font-display text-[1.1rem] italic text-teak/40"
        aria-hidden="true"
      >
        {imageLabel}
      </div>

      <div className="p-6">
        <h3 className="mb-1 font-display text-[1.2rem] font-medium text-body">
          {name}
        </h3>
        <p className="mb-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-teak">
          {title}
        </p>
        <p className="mb-4 text-[0.85rem] leading-[1.65] text-muted">{bio}</p>
        <ul className="flex flex-wrap gap-1.5">
          {certifications.map((cert) => (
            <li
              key={cert}
              className="rounded-[2px] border border-teak/25 px-[9px] py-[3px] text-[0.68rem] tracking-[0.04em] text-teak"
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const AboutPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ About Us"
        headline="Meet the team behind your glow."
        subtext="Three licensed professionals, one shared goal — helping you look and feel like the best version of yourself."
      />

      <section className="bg-warm-white px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionEyebrow>Our Providers</SectionEyebrow>
          <h2 className="mb-10 font-display text-body">
            Expert hands. Genuine care.
          </h2>

          <ul className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <li key={member.name}>
                <TeamCard {...member} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionEyebrow>Our Philosophy</SectionEyebrow>
          <h2 className="font-display text-body">
            Beauty should feel like you — just better.
          </h2>

          <ul className="mt-[60px] grid grid-cols-1 gap-10 md:grid-cols-3">
            {PHILOSOPHY_ITEMS.map((item) => (
              <li
                key={item.title}
                className="border-t-2 border-teak p-8"
              >
                <h3 className="mb-3 font-display text-[1.15rem] text-body">
                  {item.title}
                </h3>
                <p className="text-[0.87rem] leading-[1.65] text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BookingStrip
        headline="Ready to meet the team?"
        subtext="Complimentary consultations with Michelle, Jennifer, or Zayna."
      />
    </>
  );
};

export default AboutPage;
