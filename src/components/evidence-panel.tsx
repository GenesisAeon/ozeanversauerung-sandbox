import {
  ALL_EVIDENCE,
  EVIDENCE_TITLE_DE,
  type EvidenceEntry,
  headlineFor,
} from "@/lib/oa";
import { StanceBadge } from "@/components/stance-badge";
import { STRINGS_DE } from "@/lib/oa/strings.de.ts";
import { cn } from "@/lib/utils";

export function EvidencePanel({
  visible,
  selectedId,
  onSelect,
}: {
  visible: readonly EvidenceEntry[];
  selectedId: EvidenceEntry["id"] | null;
  onSelect: (id: EvidenceEntry["id"]) => void;
}) {
  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl tracking-tight">{STRINGS_DE.evidenceHeading}</h2>
          <p className="mt-1 text-sm text-muted">
            Beide Befunde gleichzeitig sichtbar halten - Ueberschreitung und Massstab-Revision.
          </p>
        </div>
        <p className="font-mono text-2xs text-subtle">
          {visible.length} / {ALL_EVIDENCE.length} Eintraege
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {visible.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => onSelect(entry.id)}
            aria-pressed={selectedId === entry.id}
            className={cn(
              "grid w-full gap-2 rounded-lg bg-elevated p-4 text-left transition-[box-shadow,background-color] duration-150 ease-out",
              selectedId === entry.id
                ? "shadow-border-hover"
                : "shadow-border hover:shadow-border-hover",
            )}
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-medium leading-snug text-fg">
                {EVIDENCE_TITLE_DE[entry.id]}
              </p>
              <StanceBadge stance={entry.stance} />
            </div>
            <p className="font-mono text-xs tabular-nums text-muted">
              {headlineFor(entry)}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
