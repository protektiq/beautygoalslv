import GalleryContent from "@/components/GalleryContent";
import PageHero from "@/components/PageHero";

const GalleryPage = () => {
  return (
    <>
      <PageHero
        breadcrumb="Home"
        breadcrumbHighlight="/ Gallery"
        headline="Real clients. Real results."
        subtext="Every photo is an actual Beauty Goals LV client — no filters, no stock images."
      />

      <GalleryContent />
    </>
  );
};

export default GalleryPage;
