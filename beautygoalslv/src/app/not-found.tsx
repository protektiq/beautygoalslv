import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center bg-black px-4 py-16 text-center">
      <p className="font-display text-[clamp(5rem,20vw,9rem)] leading-none text-teak">
        404
      </p>

      <h1 className="mb-4 mt-6 font-display text-[clamp(1.75rem,4vw,2.25rem)] text-white">
        Page not found
      </h1>

      <p className="mb-10 max-w-md text-base leading-relaxed text-white/[0.65]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="inline-block rounded-[2px] bg-teak px-8 py-3.5 font-body text-[0.82rem] font-semibold uppercase tracking-[0.07em] text-black transition-colors hover:bg-teak-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teak focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Back to Beauty Goals LV
      </Link>
    </section>
  );
};

export default NotFoundPage;
