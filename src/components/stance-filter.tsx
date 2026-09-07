import { Button } from "@/components/ui/button";
import type { Stance } from "@/lib/oa";
import { STRINGS_DE } from "@/lib/oa/strings.de.ts";
import { cn } from "@/lib/utils";

export type StanceFilter = "all" | Stance;

const OPTIONS: { id: StanceFilter; label: string }[] = [
  { id: "all", label: STRINGS_DE.filterAll },
  { id: "boundary_crossed", label: STRINGS_DE.filterCrossed },
  { id: "definition_revision", label: STRINGS_DE.filterRevision },
];

export function StanceFilter({
  value,
  onChange,
}: {
  value: StanceFilter;
  onChange: (next: StanceFilter) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Nach Richtung filtern"
    >
      {OPTIONS.map((opt) => (
        <Button
          key={opt.id}
          type="button"
          variant="chip"
          size="sm"
          data-active={value === opt.id}
          aria-pressed={value === opt.id}
          onClick={() => onChange(opt.id)}
          className={cn("min-w-11 px-4")}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}
