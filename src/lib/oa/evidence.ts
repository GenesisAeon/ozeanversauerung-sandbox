/**
 * Structured evidence entries for the ocean-acidification dispute map.
 * Ported 1:1 from ocean-acidification-utac (P122, v1.0.0).
 * No UTAC/CREP/AFET framing -- see constants.ts and DISCLAIMER.md.
 */

import {
  ARCTIC_ALREADY_UNDERSATURATED_TODAY,
  BOUNDARY_METRIC_REVISION_NOTE,
  CORAL_REEF_PROTECTIVE_THRESHOLD_PCT,
  ESTIMATED_CROSSING_YEAR,
  FINDLAY_2025_CITATION,
  FINDLAY_FEELY_2026_CITATION,
  ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL,
  SUBSURFACE_DEPTH_LIMIT_M,
  SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
  SURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
} from "./constants.ts";

/**
 * Stance of an evidence entry relative to the dispute.
 * - boundary_crossed: planetary boundary crossing finding (Findlay 2025)
 * - definition_revision: boundary metric under revision (Findlay & Feely 2026)
 */
export type Stance = "boundary_crossed" | "definition_revision";

export type EvidenceEntry = {
  id: "findlay2025" | "findlay2026";
  label: string;
  stance: Stance;
  citation: string;
};

export const ALL_EVIDENCE: readonly EvidenceEntry[] = [
  {
    id: "findlay2025",
    label: "Findlay et al. 2025 (planetary boundary crossed globally)",
    stance: "boundary_crossed",
    citation: FINDLAY_2025_CITATION,
  },
  {
    id: "findlay2026",
    label: "Findlay & Feely 2026 (boundary metric under active revision)",
    stance: "definition_revision",
    citation: FINDLAY_FEELY_2026_CITATION,
  },
];

export function boundaryCrossedEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "boundary_crossed");
}

export function definitionRevisionEvidence(): readonly EvidenceEntry[] {
  return ALL_EVIDENCE.filter((e) => e.stance === "definition_revision");
}

/**
 * True if evidence stances pull in more than one direction -- structural,
 * not a hardcoded claim. Removing either stance must be able to flip this.
 */
export function isGenuinelyDisputed(): boolean {
  const directions = new Set(ALL_EVIDENCE.map((e) => e.stance));
  return directions.size > 1;
}

export function surfaceOceanBoundaryCrossedPct(): number {
  return SURFACE_OCEAN_BOUNDARY_CROSSED_PCT;
}

export function subsurfaceOceanBoundaryCrossedPct(): number {
  return SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT;
}

export function subsurfaceDepthLimitM(): number {
  return SUBSURFACE_DEPTH_LIMIT_M;
}

export function estimatedCrossingYear(): number {
  return ESTIMATED_CROSSING_YEAR;
}

export function originalThresholdPctOfPreindustrial(): number {
  return ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL;
}

/** Source paper framing: boundary crossing is NOT a tipping point. */
export function isBoundaryCrossingATippingPoint(): boolean {
  return false;
}

export function isReversalTheoreticallyPossible(): boolean {
  return true;
}

/** Headline honesty check: 80% threshold fails its own justifying criteria. */
export function does80pctThresholdMeetOriginalCriteria(): boolean {
  return false;
}

export function coralReefProtectiveThresholdPct(): number {
  return CORAL_REEF_PROTECTIVE_THRESHOLD_PCT;
}

export function isArcticAlreadyUndersaturatedToday(): boolean {
  return ARCTIC_ALREADY_UNDERSATURATED_TODAY;
}

export function isBoundaryDefinitionSettledScience(): boolean {
  return false;
}

export { BOUNDARY_METRIC_REVISION_NOTE };
