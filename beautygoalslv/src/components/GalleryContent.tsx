"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type GalleryFilter =
  | "All results"
  | "Botox & Fillers"
  | "Facials & Lasers"
  | "Body Contouring"
  | "Acne & Pigmentation";

type GalleryItem = {
  id: string;
  treatment: string;
  meta: string;
  categories: readonly GalleryFilter[];
};

const GALLERY_FILTERS: readonly GalleryFilter[] = [
  "All results",
  "Botox & Fillers",
  "Facials & Lasers",
  "Body Contouring",
  "Acne & Pigmentation",
] as const;

const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    id: "full-face-rejuvenation",
    treatment: "Full Face Rejuvenation",
    meta: "Botox + Filler · 1 session",
    categories: ["Botox & Fillers"],
  },
  {
    id: "acne-correction",
    treatment: "Acne Correction",
    meta: "Aerolase Neo · 3 sessions",
    categories: ["Facials & Lasers", "Acne & Pigmentation"],
  },
  {
    id: "melasma-treatment",
    treatment: "Melasma Treatment",
    meta: "Laser · 4 sessions",
    categories: ["Facials & Lasers", "Acne & Pigmentation"],
  },
  {
    id: "facial-balancing",
    treatment: "Facial Balancing",
    meta: "Cheeks + Chin filler",
    categories: ["Botox & Fillers"],
  },
  {
    id: "lip-enhancement",
    treatment: "Lip Enhancement",
    meta: "Hyaluronic acid filler · 1 syringe",
    categories: ["Botox & Fillers"],
  },
  {
    id: "emsculpt-neo",
    treatment: "Emsculpt Neo",
    meta: "Abdomen · 4 sessions",
    categories: ["Body Contouring"],
  },
  {
    id: "under-eye-filler",
    treatment: "Under-Eye Filler",
    meta: "Tear trough · 1 syringe",
    categories: ["Botox & Fillers"],
  },
  {
    id: "jawline-slimming",
    treatment: "Jawline Slimming",
    meta: "Masseter Botox · 40 units",
    categories: ["Botox & Fillers"],
  },
  {
    id: "acne-scarring",
    treatment: "Acne Scarring",
    meta: "Microneedling RF · 3 sessions",
    categories: ["Facials & Lasers"],
  },
] as const;

const filterButtonBaseClassName =
  "cursor-pointer rounded-[2px] border border-teak/25 bg-white px-5 py-[9px] font-body text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-muted transition-all duration-200";

const filterButtonActiveClassName =
  "border-teak bg-teak text-black hover:border-teak hover:bg-teak hover:text-black";

type GalleryCardProps = Pick<GalleryItem, "treatment" | "meta">;

const GalleryCard = ({ treatment, meta }: GalleryCardProps) => {
  return (
    <article className="overflow-hidden rounded-[4px] border border-teak/10 bg-black transition-[border-color] duration-200 hover:border-teak">
      <div className="flex">
      <div
        className="flex min-h-[160px] flex-1 flex-col items-center justify-center bg-gradient-to-br from-[#111] to-[#1a1508] px-2.5 py-5"
        role="img"
        aria-label={`${treatment} — before treatment`}
      >
          <span className="mb-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-white/30">
            Before
          </span>
        </div>
        <div
          className="flex min-h-[160px] flex-1 flex-col items-center justify-center border-l border-teak/15 bg-gradient-to-br from-[#0d1a0d] to-[#111] px-2.5 py-5"
          role="img"
          aria-label={`${treatment} — after treatment`}
        >
          <span className="mb-1.5 text-[0.62rem] uppercase tracking-[0.12em] text-white/30">
            After
          </span>
        </div>
      </div>

      <div className="px-4 py-3.5">
        <p className="text-[0.82rem] font-semibold text-body">{treatment}</p>
        <p className="mt-[3px] text-[0.72rem] text-muted">{meta}</p>
      </div>
    </article>
  );
};

const GalleryContent = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("All results");

  const filteredItems =
    activeFilter === "All results"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categories.includes(activeFilter));

  const handleFilterClick = (filter: GalleryFilter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="bg-warm-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="sr-only">Filter gallery results</h2>
        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Gallery filters"
        >
          {GALLERY_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cn(
                  filterButtonBaseClassName,
                  isActive && filterButtonActiveClassName,
                  !isActive &&
                    "hover:border-teak hover:bg-teak hover:text-black",
                )}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          {filteredItems.map((item) => (
            <li key={item.id}>
              <GalleryCard treatment={item.treatment} meta={item.meta} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GalleryContent;
