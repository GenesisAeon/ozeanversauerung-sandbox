import { isGenuinelyDisputed } from "@/lib/oa";
import { STRINGS_DE } from "@/lib/oa/strings.de.ts";
import { Split } from "lucide-react";

export function DisputeStatus() {
  const disputed = isGenuinelyDisputed();

  return (
    <section
      className="rounded-xl bg-surface px-4 py-5 shadow-border sm:px-6 sm:py-6"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-elevated text-accent">
          <Split className="size-4" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-2xs font-medium uppercase tracking-[0.16em] text-subtle">
            {STRINGS_DE.statusLabel}
          </p>
          <h2 className="mt-1 font-heading text-2xl leading-tight tracking-tight sm:text-3xl">
            {STRINGS_DE.statusHeading}
          </h2>
          <p className="mt-2 font-mono text-xs text-accent">
            is_genuinely_disputed() = {disputed ? "true" : "false"}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {STRINGS_DE.statusBody}
          </p>
        </div>
      </div>
    </section>
  );
}
