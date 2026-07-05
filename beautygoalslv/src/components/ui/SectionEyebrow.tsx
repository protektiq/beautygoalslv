import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

const SectionEyebrow = ({ children, className }: SectionEyebrowProps) => {
  return (
    <span
      className={cn(
        "mb-4 block text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teak",
        className,
      )}
    >
      {children}
      <span
        className="mt-2 block h-[1.5px] w-8 bg-teak"
        aria-hidden="true"
      />
    </span>
  );
};

export default SectionEyebrow;
