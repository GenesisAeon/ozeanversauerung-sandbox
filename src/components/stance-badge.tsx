import type { Stance } from "@/lib/oa";
import { stanceLabelDe } from "@/lib/oa";
import { cn } from "@/lib/utils";

export function StanceBadge({ stance, className }: { stance: Stance; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full px-2.5 text-2xs font-medium tracking-wide",
        stance === "boundary_crossed"
          ? "bg-moderate/15 text-moderate"
          : "bg-higher/15 text-higher",
        className,
      )}
    >
      {stanceLabelDe(stance)}
    </span>
  );
}
