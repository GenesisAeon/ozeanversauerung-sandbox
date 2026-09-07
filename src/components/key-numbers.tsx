import { KEY_NUMBERS } from "@/lib/oa";
import {
  does80pctThresholdMeetOriginalCriteria,
  isBoundaryCrossingATippingPoint,
  isBoundaryDefinitionSettledScience,
  isReversalTheoreticallyPossible,
} from "@/lib/oa";
import { STRINGS_DE } from "@/lib/oa/strings.de.ts";

export function KeyNumbers() {
  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{STRINGS_DE.numbersHeading}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {KEY_NUMBERS.map((n) => (
          <div key={n.id} className="rounded-lg bg-elevated p-3">
            <p className="text-2xs font-medium uppercase tracking-[0.12em] text-subtle">
              {n.label}
            </p>
            <p className="mt-1 font-mono text-lg tabular-nums text-fg">{n.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 text-2xs font-medium uppercase tracking-[0.14em] text-subtle">
        {STRINGS_DE.honestyHeading}
      </h3>
      <ul className="mt-3 space-y-2 font-mono text-xs text-muted">
        <li>
          is_boundary_crossing_a_tipping_point() ={" "}
          <span className="text-accent">{String(isBoundaryCrossingATippingPoint())}</span>
        </li>
        <li>
          is_reversal_theoretically_possible() ={" "}
          <span className="text-accent">{String(isReversalTheoreticallyPossible())}</span>
        </li>
        <li>
          does_80pct_threshold_meet_original_criteria() ={" "}
          <span className="text-accent">
            {String(does80pctThresholdMeetOriginalCriteria())}
          </span>
        </li>
        <li>
          is_boundary_definition_settled_science() ={" "}
          <span className="text-accent">
            {String(isBoundaryDefinitionSettledScience())}
          </span>
        </li>
      </ul>
    </section>
  );
}
