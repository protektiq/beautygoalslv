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
    <section className={cn("bg-teak px-6 py-12 text-center", className)}>
      <h2 className="mb-2.5 font-display text-[2rem] italic text-black">
        {headline}
      </h2>
      <p className="mb-6 text-[0.95rem] text-black/60">{subtext}</p>
      <Button variant="black" href="/contact">
        Book a Free Consultation
      </Button>
    </section>
  );
};

export default BookingStrip;
