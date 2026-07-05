import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import BookingStrip from "@/components/ui/BookingStrip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "About Us Las Vegas | Beauty Goals LV: Michelle Tio-Nguyen, FNP-C",
  description:
    "Meet the Beauty Goals LV team: Michelle Tio-Nguyen (FNP-C), Mary Uosef, and Zayna Rodriguez. 13+ years of aesthetic expertise in Las Vegas.",
};

type TeamMember = {
  imageSrc: string;
  name: string;
  title: string;
  bio?: string;
  tags?: readonly string[];
};

type PhilosophyItem = {
  title: string;
  description: string;
};

const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    imageSrc: "/images/team/michelle-tio-nguyen.jpeg",
    name: "Michelle Tio-Nguyen",
    title: "FNP-C · CEO of Beauty Goals LV",
    bio: "With over 15 years in the medical field and 13 years in the cosmetic and aesthetics industry, Michelle specializes in facial balancing, full-face rejuvenation, and natural results. She is a master injector of Botulinum Toxin, Dermal Filler, and PDO threads, and an expert in cosmetic lasers. She regularly attends industry conferences and trainings in Regenerative Aesthetics, Advanced Anti-Aging Procedures, and Medical-Grade Skincare.",
    tags: [
      "Master Injector",
      "PDO Threads",
      "Cosmetic Lasers",
      "Regenerative Aesthetics",
    ],
  },
  {
    imageSrc: "/images/team/mary-uosef.jpeg",
    name: "Mary Uosef",
    title: "Advanced Aesthetician",
    bio: "Mary is an Advanced Aesthetician with eight years of experience helping clients achieve healthy, confident skin through personalized, results-driven care. She combines advanced clinical knowledge with a compassionate, client-focused approach to create customized treatment plans and medical-grade skincare regimens tailored to each client's unique needs and goals.",
    tags: ["8 Years Experience", "Medical-Grade Skincare"],
  },
  {
    imageSrc: "/images/team/zayna-rodriguez.png",
    name: "Zayna Rodriguez",
    title: "Advanced Medical Aesthetician",
    bio: "Born and raised in Oahu, HI, Zayna moved to Las Vegas in 2017. With 5 years of experience as an aesthetician and a warm, bubbly personality, she brings a meticulous work ethic to every appointment, specializing in HydraFacials, laser treatments, and microneedling for each client's unique journey.",
    tags: ["HydraFacials", "Laser Treatments", "Microneedling"],
  },
  {
    imageSrc: "/images/team/sasha-rueda.jpeg",
    name: "Sasha Rueda",
    title: "Client Care Manager",
    bio: "As Client Care Manager, Sasha is passionate about creating exceptional client experiences rooted in genuine care, connection, and trust. Whether coordinating appointments, answering questions, or serving as a trusted point of contact, she strives to make every interaction uplifting, seamless, and personal.",
  },
  {
    imageSrc: "/images/team/jennifer-lunkwitz.jpg",
    name: "Jennifer Lunkwitz",
    title: "Advanced Medical Aesthetician",
  },
] as const;

const PHILOSOPHY_ITEMS: readonly PhilosophyItem[] = [
  {
    title: "Personalized above all",
    description:
      "No two faces are the same. Every plan begins with a thorough consultation where we listen, really listen, to your concerns, goals, and lifestyle before recommending a single treatment.",
  },
  {
    title: "Natural results, always",
    description:
      "We believe in enhancing what you have, not changing who you are. Our goal is results so natural that people ask if you've been on vacation, not if you've had work done.",
  },
  {
    title: "Education first",
    description:
      "An informed client is our best client. We'll walk you through every treatment option, including whether you actually need it, so you can make decisions that are right for you.",
  },
] as const;

type TeamCardProps = TeamMember;

const TeamCard = ({ imageSrc, name, title, bio, tags }: TeamCardProps) => {
  return (
    <article className="overflow-hidden rounded-[4px] border border-teak/[0.12] bg-white">
      <div className="relative aspect-[3/4] max-h-[320px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Portrait of ${name}`}
          fill
          sizes="(min-width: 901px) 33vw, (min-width: 601px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-1 font-display text-[1.2rem] font-medium text-body">
          {name}
        </h3>
        <p className="mb-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-teak">
          {title}
        </p>
        {bio && (
          <p className="mb-4 text-[0.85rem] leading-[1.65] text-muted">
            {bio}
          </p>
        )}
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-[2px] border border-teak/25 px-[9px] py-[3px] text-[0.68rem] tracking-[0.04em] text-teak"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
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
        subtext="A team of dedicated professionals, one shared goal: helping you look and feel like the best version of yourself."
      />

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-[1200px]">
          <SectionEyebrow>Our Providers</SectionEyebrow>
          <h2 className="mb-10 h2-section text-body">
            Expert hands. Genuine care.
          </h2>

          <ul className="grid grid-cols-1 gap-10 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <li key={member.name}>
                <TeamCard {...member} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1200px]">
          <SectionEyebrow>Our Philosophy</SectionEyebrow>
          <h2 className="h2-section text-body">
            Beauty should feel like you. Just better.
          </h2>

          <ul className="mt-10 grid grid-cols-1 gap-10 min-[601px]:mt-[60px] min-[601px]:grid-cols-3">
            {PHILOSOPHY_ITEMS.map((item) => (
              <li key={item.title} className="border-t-2 border-teak p-8">
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
        subtext="Complimentary consultations with Michelle, Mary, or Zayna."
      />
    </>
  );
};

export default AboutPage;
