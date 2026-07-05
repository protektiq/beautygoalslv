import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Before & After Gallery | Beauty Goals LV Las Vegas",
  description:
    "Real before and after results from Beauty Goals LV clients. Botox, fillers, laser treatments, Emsculpt, facial balancing, and more.",
};

const GalleryPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ Gallery"
        headline="Real clients. Real results."
        subtext="Every photo is an actual Beauty Goals LV client. No filters, no stock images."
      />

      <GalleryContent />
    </>
  );
};

export default GalleryPage;
