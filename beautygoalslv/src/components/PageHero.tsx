type PageHeroProps = {
  breadcrumb: string;
  breadcrumbHighlight: string;
  headline: string;
  subtext: string;
};

const PageHero = ({
  breadcrumb,
  breadcrumbHighlight,
  headline,
  subtext,
}: PageHeroProps) => {
  return (
    <section className="border-b border-[rgba(185,160,104,0.15)] bg-black px-6 pb-[60px] pt-[72px] text-center">
      <div className="mx-auto max-w-[680px]">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center justify-center gap-2 text-[0.73rem] uppercase tracking-[0.06em] text-white/30"
        >
          <span>{breadcrumb}</span>
          <span className="text-teak">{breadcrumbHighlight}</span>
        </nav>

        <h1 className="mb-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] italic text-white">
          {headline}
        </h1>

        <p className="text-base leading-[1.7] text-white/[0.65]">{subtext}</p>
      </div>
    </section>
  );
};

export default PageHero;
