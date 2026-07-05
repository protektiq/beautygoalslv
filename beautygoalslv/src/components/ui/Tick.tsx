import { cn } from "@/lib/utils";

type TickProps = {
  className?: string;
};

const Tick = ({ className }: TickProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-[18px] w-[18px] shrink-0", className)}
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tick;
