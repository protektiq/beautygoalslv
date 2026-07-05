"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type ServiceItem = {
  name: string;
  sub: string;
  href: string;
};

type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

const serviceColumns: ServiceGroup[][] = [
  [
    {
      title: "Injectables",
      items: [
        {
          name: "Botox & Neurotoxins",
          sub: "From $450",
          href: "/services",
        },
        {
          name: "Dermal Fillers",
          sub: "From $550",
          href: "/services",
        },
        {
          name: "Lip Filler",
          sub: "From $550",
          href: "/services",
        },
      ],
    },
    {
      title: "Body Contouring",
      items: [
        {
          name: "Emsculpt Neo",
          sub: "Consultation required",
          href: "/services",
        },
        {
          name: "Emsella",
          sub: "Pelvic floor therapy",
          href: "/services",
        },
      ],
    },
  ],
  [
    {
      title: "Facials & Lasers",
      items: [
        {
          name: "HydraFacial",
          sub: "From $205",
          href: "/services",
        },
        {
          name: "Diamond Glow",
          sub: "From $215",
          href: "/services",
        },
        {
          name: "Aerolase Neo Elite",
          sub: "30+ conditions treated",
          href: "/services",
        },
        {
          name: "IPL Photofacial",
          sub: "From $210",
          href: "/services",
        },
        {
          name: "Microneedling RF",
          sub: "Skin resurfacing",
          href: "/services",
        },
        {
          name: "Chemical Peels",
          sub: "Medical-grade peels",
          href: "/services",
        },
        {
          name: "Erbium Laser Resurfacing",
          sub: "Fractional laser",
          href: "/services",
        },
      ],
    },
    {
      title: "Specialty",
      items: [
        {
          name: "Sofwave Non-Surgical Lift",
          sub: "FDA-cleared, no downtime",
          href: "/services",
        },
        {
          name: "XERF Skin Tightening",
          sub: "New at Beauty Goals LV",
          href: "/services",
        },
        {
          name: "Thread Lift",
          sub: "Minimally invasive lifting",
          href: "/services",
        },
      ],
    },
  ],
];

const allServices = serviceColumns.flatMap((column) =>
  column.flatMap((group) => group.items),
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  { label: "Promotions", href: "/promotions" },
] as const;

const navLinkClassName =
  "px-3 py-2 font-body text-[0.82rem] font-medium uppercase tracking-[0.06em] text-white/75 transition-colors hover:text-teak";

const mobileLinkClassName =
  "block py-3 font-body text-[0.82rem] font-medium uppercase tracking-[0.06em] text-white/75 transition-colors hover:text-teak";

const mobileServiceLinkClassName =
  "block py-2 pl-4 font-body text-[0.82rem] normal-case tracking-normal text-white/60 transition-colors hover:text-teak";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const handleOpenServicesMenu = () => {
    setServicesMenuOpen(true);
  };

  const handleCloseServicesMenu = () => {
    setServicesMenuOpen(false);
  };

  const handleToggleServicesMenu = () => {
    setServicesMenuOpen((open) => !open);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Main navigation"
        className="flex h-[72px] items-center border-b border-[rgba(185,160,104,0.2)] bg-black"
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6">
          <Link
            href="/"
            className="font-display text-[1.45rem] italic tracking-[0.01em] text-teak"
            onClick={handleCloseMenu}
          >
            Beauty Goals LV
          </Link>

          <button
            type="button"
            className="p-2 text-white min-[901px]:hidden"
            onClick={handleToggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X aria-hidden className="h-6 w-6" />
            ) : (
              <Menu aria-hidden className="h-6 w-6" />
            )}
          </button>

          <div className="hidden min-[901px]:flex min-[901px]:items-center min-[901px]:gap-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClassName}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={handleOpenServicesMenu}
              onMouseLeave={handleCloseServicesMenu}
            >
              <button
                type="button"
                className={navLinkClassName}
                aria-expanded={servicesMenuOpen}
                aria-haspopup="menu"
                aria-controls="services-desktop-menu"
                onClick={handleToggleServicesMenu}
              >
                Services ▾
              </button>

              <div
                id="services-desktop-menu"
                className={`absolute left-[-160px] top-[calc(100%+1px)] w-[600px] grid-cols-2 gap-x-6 rounded-b border border-[rgba(185,160,104,0.2)] border-t-2 border-t-teak bg-near-black p-7 ${
                  servicesMenuOpen ? "grid" : "hidden"
                }`}
                role="menu"
                aria-label="Services menu"
              >
                {serviceColumns.map((column, columnIndex) => (
                  <div key={columnIndex}>
                    {column.map((group, groupIndex) => (
                      <div
                        key={group.title}
                        className={groupIndex > 0 ? "mt-5" : undefined}
                      >
                        <div className="mb-3 border-b border-[rgba(185,160,104,0.25)] pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-teak">
                          {group.title}
                        </div>
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            role="menuitem"
                            className="block border-b border-white/5 py-[7px] text-[0.82rem] normal-case tracking-normal text-white/80 transition-colors hover:text-teak"
                          >
                            {item.name}
                            <span className="mt-px block text-[0.7rem] text-white/40">
                              {item.sub}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="col-span-2 mt-2 border-t border-white/10 pt-4">
                  <Link
                    href="/services"
                    role="menuitem"
                    className="text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-teak transition-colors hover:text-teak-light"
                  >
                    View all services & pricing →
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClassName}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-[2px] bg-teak px-5 py-[9px] font-body text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-black transition-colors hover:bg-teak-light"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-[rgba(185,160,104,0.2)] bg-black transition-[max-height] duration-300 ease-in-out min-[901px]:hidden ${
          isOpen ? "max-h-[calc(100vh-72px)]" : "max-h-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-6">
          <div className="flex flex-col">
            <Link
              href="/"
              className={mobileLinkClassName}
              onClick={handleCloseMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={mobileLinkClassName}
              onClick={handleCloseMenu}
            >
              About
            </Link>

            <Link
              href="/services"
              className={mobileLinkClassName}
              onClick={handleCloseMenu}
            >
              Services
            </Link>
            {allServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className={mobileServiceLinkClassName}
                onClick={handleCloseMenu}
              >
                {service.name}
              </Link>
            ))}

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={mobileLinkClassName}
                onClick={handleCloseMenu}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 block w-full rounded-[2px] bg-teak py-[9px] text-center font-body text-[0.82rem] font-semibold uppercase tracking-[0.05em] text-black transition-colors hover:bg-teak-light"
              onClick={handleCloseMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
