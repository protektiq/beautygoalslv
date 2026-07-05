import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const treatmentLinks = [
  { label: "Botox & Fillers", href: "/services" },
  { label: "Sofwave Lift", href: "/services" },
  { label: "XERF", href: "/services" },
  { label: "Aerolase", href: "/services" },
  { label: "HydraFacial", href: "/services" },
  { label: "Emsculpt Neo", href: "/services" },
  { label: "Thread Lift", href: "/services" },
  { label: "All services →", href: "/services" },
] as const;

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  { label: "Promotions", href: "/promotions" },
  { label: "Book Now", href: "/contact" },
  { label: "Contact", href: "/contact" },
] as const;

const columnHeadingClassName =
  "mb-4 text-[clamp(0.65rem,1.5vw,0.7rem)] font-semibold uppercase tracking-[0.1em] text-teak";

const columnLinkClassName =
  "mb-2 block text-[0.82rem] leading-relaxed text-warm-white/45 transition-colors hover:text-teak";

const columnTextClassName =
  "mb-2 block text-[0.82rem] leading-relaxed text-warm-white/45";

const Footer = () => {
  return (
    <footer className="section-padding-x border-t border-[rgba(185,160,104,0.15)] bg-ink pb-8 pt-12 md:pt-[60px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-12 min-[901px]:grid-cols-[2fr_1fr_1fr_1fr] min-[901px]:gap-12">
          <div>
            <div className="mb-3.5 font-display text-[clamp(1.35rem,4vw,1.5rem)]">
              Beauty{" "}
              <span className="italic text-teak">Goals</span>{" "}
              LV
            </div>
            <p className="max-w-none text-[0.85rem] leading-relaxed text-warm-white/40 min-[901px]:max-w-[260px]">
              Las Vegas&apos;s premier medical aesthetics spa. Expert injectables,
              advanced lasers, and personalized care, led by Michelle
              Tio-Nguyen, FNP-C.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="shrink-0 text-[0.73rem] uppercase tracking-[0.05em] text-warm-white/40">
                Financing:
              </span>
              <span className="rounded-[2px] border border-warm-white/10 bg-warm-white/[0.07] px-3 py-1.5 text-[0.75rem] text-warm-white/60">
                CareCredit
              </span>
              <span className="rounded-[2px] border border-warm-white/10 bg-warm-white/[0.07] px-3 py-1.5 text-[0.75rem] text-warm-white/60">
                Patientfi
              </span>
            </div>
          </div>

          <div>
            <h2 className={columnHeadingClassName}>Treatments</h2>
            {treatmentLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={columnLinkClassName}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h2 className={columnHeadingClassName}>Quick Links</h2>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={columnLinkClassName}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h2 className={columnHeadingClassName}>Visit Us</h2>
            <address className="not-italic break-words">
              <p className={columnTextClassName}>
                8961 W. Sahara Ave
                <br />
                Suite 106
                <br />
                Las Vegas, NV 89117
              </p>
              <a
                href="tel:7026253838"
                className={columnLinkClassName}
              >
                702-625-3838
              </a>
              <a
                href="mailto:beautygoalsLV@gmail.com"
                className={columnLinkClassName}
              >
                beautygoalsLV@gmail.com
              </a>
              <p className={columnTextClassName}>
                Mon–Fri: 10am – 6pm
                <br />
                Sat: 10am – 4pm
                <br />
                Sun: By appointment
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[rgba(185,160,104,0.12)] pt-6">
          <p className="text-[0.75rem] text-warm-white/30">
            © 2026 Beauty Goals LV. All rights reserved. | Las Vegas, NV
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/BEAUTYGOALSLV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Beauty Goals LV on Facebook"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(185,160,104,0.2)] text-warm-white/50 transition-colors hover:border-teak hover:text-teak"
            >
              <FaFacebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/beautygoalslv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Beauty Goals LV on Instagram"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(185,160,104,0.2)] text-warm-white/50 transition-colors hover:border-teak hover:text-teak"
            >
              <FaInstagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.tiktok.com/@beauty_goals_lv?_r=1&_t=ZT-966uvtDJ2lC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Beauty Goals LV on TikTok"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[rgba(185,160,104,0.2)] text-warm-white/50 transition-colors hover:border-teak hover:text-teak"
            >
              <FaTiktok className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
