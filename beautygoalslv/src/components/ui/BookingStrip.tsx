import { cn } from "@/lib/utils";
import Button from "./Button";

type BookingStripProps = {
  headline: string;
  subtext: string;
  className?: string;
};

const BookingStrip = ({
  headline,
  subtext,
  className,
}: BookingStripProps) => {
  return (
    <section className={cn("section-padding-x bg-teak py-10 text-center md:py-12", className)}>
      <h2 className="mb-2.5 font-display text-[clamp(1.5rem,4vw,2rem)] italic text-ink">
        {headline}
      </h2>
      <p className="mb-6 text-[0.95rem] text-ink/60">{subtext}</p>
      <Button variant="black" href="/contact">
        Book a Free Consultation
      </Button>
    </section>
  );
};

export default BookingStrip;
