import { cn } from "@/lib/utils";

type FinancingBadgesTheme = "dark" | "light";

type FinancingBadgesProps = {
  theme: FinancingBadgesTheme;
  className?: string;
};

const FINANCING_PROVIDERS = ["CareCredit", "Patientfi"] as const;

const themeStyles: Record<
  FinancingBadgesTheme,
  { label: string; badge: string }
> = {
  dark: {
    label: "shrink-0 text-[0.73rem] uppercase tracking-[0.05em] text-white/40",
    badge:
      "rounded-[2px] border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[0.75rem] text-white/60",
  },
  light: {
    label: "shrink-0 text-[0.73rem] uppercase tracking-[0.05em] text-muted",
    badge:
      "rounded-[2px] border border-teak/30 bg-teak/10 px-4 py-2 text-[0.8rem] text-teak",
  },
};

const FinancingBadges = ({ theme, className }: FinancingBadgesProps) => {
  const styles = themeStyles[theme];

  return (
    <div
      className={cn("flex flex-wrap items-center gap-4", className)}
      aria-label="Financing options"
    >
      <span className={styles.label}>Financing available:</span>
      {FINANCING_PROVIDERS.map((provider) => (
        <span key={provider} className={styles.badge}>
          {provider}
        </span>
      ))}
    </div>
  );
};

export default FinancingBadges;
