import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Consultation | Beauty Goals LV Las Vegas",
  description:
    "Book your complimentary consultation at Beauty Goals LV, Las Vegas. Call (702) 625-3838 or send a message — we respond within 24 hours.",
};

const formInputClassName =
  "w-full rounded-[2px] border border-teak/20 bg-white px-4 py-3 font-body text-[0.9rem] text-body transition-colors focus:border-teak focus:outline-none";

const formLabelClassName =
  "mb-[7px] block text-[0.73rem] font-semibold uppercase tracking-[0.08em] text-muted";

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

const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "10am – 6pm" },
  { day: "Saturday", hours: "10am – 4pm" },
  { day: "Sunday", hours: "By appointment", muted: true },
] as const;

type ContactDetailRowProps = {
  icon: string;
  label: string;
  children: ReactNode;
};

const ContactDetailRow = ({ icon, label, children }: ContactDetailRowProps) => {
  return (
    <div className="flex items-start gap-3.5 border-b border-teak/15 py-4 text-[0.9rem] text-body">
      <span className="mt-px shrink-0 text-[1.2rem]" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="mb-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-teak">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ Contact"
        headline="Book your consultation."
        subtext="All consultations are complimentary. We respond within 24 hours."
      />

      <section className="section-padding bg-warm-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_480px] lg:gap-20">
          <div className="max-w-[560px] min-w-0">
            <SectionEyebrow>Get in touch</SectionEyebrow>
            <h2 className="mb-7 h2-section text-body">
              We&apos;d love to meet you.
            </h2>

            <ContactDetailRow icon="📍" label="Address">
              <p>
                8961 W. Sahara Avenue, Suite 106
                <br />
                Las Vegas, NV 89117
              </p>
            </ContactDetailRow>

            <ContactDetailRow icon="📞" label="Phone">
              <a
                href="tel:7026253838"
                className="transition-colors hover:text-teak"
              >
                (702) 625-3838
              </a>
            </ContactDetailRow>

            <ContactDetailRow icon="✉️" label="Email">
              <a
                href="mailto:beautygoalsLV@gmail.com"
                className="transition-colors hover:text-teak"
              >
                beautygoalsLV@gmail.com
              </a>
            </ContactDetailRow>

            <ContactDetailRow icon="📸" label="Instagram">
              <p>
                <a
                  href="https://instagram.com/beautygoalslv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teak"
                >
                  @beautygoalslv
                </a>
                {" · "}
                <a
                  href="https://instagram.com/beautygoalsbymichelle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-teak"
                >
                  @beautygoalsbymichelle
                </a>
              </p>
            </ContactDetailRow>

            <div className="mt-2">
              <p className="mb-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-teak">
                Hours
              </p>
              <ul>
                {BUSINESS_HOURS.map((row) => (
                  <li
                    key={row.day}
                    className="flex justify-between border-b border-teak/10 py-1.5 text-[0.82rem] last:border-none"
                  >
                    <span>{row.day}</span>
                    <span
                      className={cn(
                        "font-medium",
                        "muted" in row && row.muted && "font-normal text-muted",
                      )}
                    >
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 inline-flex items-center gap-1.5 rounded-[2px] border border-teak/20 bg-teak/10 px-3.5 py-2 text-[0.78rem] text-teak">
              ⏱ We respond within 24 hours
            </p>

            <div
              className="mt-8 flex h-[280px] items-center justify-center rounded-[4px] border border-teak/15 bg-gradient-to-br from-[#1a1a1a] to-[#252015] text-[0.85rem] text-teak/40"
              role="img"
              aria-label="Map placeholder for 8961 W. Sahara Ave, Las Vegas"
            >
              📍 Map — 8961 W. Sahara Ave, Las Vegas
            </div>
          </div>

          <div className="w-full min-w-0 rounded-[4px] border border-teak/[0.12] bg-white p-6 md:p-9 lg:min-w-0">
            <h3 className="mb-6 font-display text-[1.25rem] italic text-body">
              Send us a message
            </h3>

            <form noValidate aria-label="Contact form">
              <div className="mb-5">
                <label htmlFor="contact-page-name" className={formLabelClassName}>
                  Full name *
                </label>
                <input
                  id="contact-page-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  className={formInputClassName}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contact-page-email" className={formLabelClassName}>
                  Email *
                </label>
                <input
                  id="contact-page-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  required
                  className={formInputClassName}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="contact-page-phone" className={formLabelClassName}>
                  Phone
                </label>
                <input
                  id="contact-page-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(702) 000-0000"
                  className={formInputClassName}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="contact-page-treatment"
                  className={formLabelClassName}
                >
                  Treatment interested in
                </label>
                <select
                  id="contact-page-treatment"
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
                <label
                  htmlFor="contact-page-message"
                  className={formLabelClassName}
                >
                  Message
                </label>
                <textarea
                  id="contact-page-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals, any questions, or preferred appointment times..."
                  className={cn(formInputClassName, "h-[110px] resize-y")}
                />
              </div>

              <Button type="button" className="mb-3 w-full text-center">
                Send message
              </Button>

              <p className="text-[0.78rem] text-muted">
                🔒 Your information is private and never shared.
              </p>

              <div className="mt-4 rounded-[3px] border border-teak/12 bg-teak/[0.06] p-3.5 text-[0.82rem] text-muted">
                Prefer to call?{" "}
                <a
                  href="tel:7026253838"
                  className="font-semibold text-teak transition-colors hover:text-teak-dark"
                >
                  (702) 625-3838
                </a>
                <br />
                Or text — we answer both.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
