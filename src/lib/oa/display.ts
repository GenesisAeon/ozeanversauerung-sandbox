import {
  ARCTIC_ALREADY_UNDERSATURATED_TODAY,
  BOUNDARY_METRIC_REVISION_NOTE,
  CORAL_REEF_PROTECTIVE_THRESHOLD_PCT,
  ESTIMATED_CROSSING_YEAR,
  FINDLAY_2025_DOI,
  FINDLAY_FEELY_2026_DOI,
  ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL,
  SUBSURFACE_DEPTH_LIMIT_M,
  SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
  SURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
} from "./constants.ts";
import type { EvidenceEntry, Stance } from "./evidence.ts";
import { formatDe } from "../utils.ts";

export const STANCE_LABEL_DE: Record<Stance, string> = {
  boundary_crossed: "Grenze überschritten",
  definition_revision: "Maßstab in Revision",
};

export const EVIDENCE_TITLE_DE: Record<EvidenceEntry["id"], string> = {
  findlay2025: "Findlay et al. 2025 - planetare Grenze überschritten",
  findlay2026: "Findlay & Feely 2026 - Maßstab unter Revision",
};

export const EVIDENCE_CORE_DE: Record<EvidenceEntry["id"], string> = {
  findlay2025: `Die Ozeanversauerungs-Grenze (Omega-arag bei ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % des vorindustriellen Niveaus) ist weltweit überschritten: ca. ${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % der Meeresoberfläche und ca. ${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % des Unterwassers bis ${SUBSURFACE_DEPTH_LIMIT_M} m. Beginn der Überschreitung geschätzt um ${ESTIMATED_CROSSING_YEAR}. Explizit KEIN Kipppunkt - Umkehr durch reduzierte Emissionen ist theoretisch möglich.`,
  findlay2026: `Dieselbe Hauptautorin prüft den ursprünglichen ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)}-%-Schwellwert an seinen eigenen Kriterien und stellt fest: er erfüllt sie nicht. Arktische Gewässer sind bereits heute untersättigt (nicht erst projiziert). Warmwasser-Korallenriffe bräuchten eigentlich ${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} % statt ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} %. Die Fachwelt diskutiert pH/[H+] als alternatives Kontrollmaß. Die Versauerung selbst wird nicht infrage gestellt - nur die Definition der Grenze.`,
};

export const EVIDENCE_DOI: Record<EvidenceEntry["id"], string> = {
  findlay2025: FINDLAY_2025_DOI,
  findlay2026: FINDLAY_FEELY_2026_DOI,
};

export const EVIDENCE_URL: Record<EvidenceEntry["id"], string> = {
  findlay2025: `https://doi.org/${FINDLAY_2025_DOI}`,
  findlay2026: `https://doi.org/${FINDLAY_FEELY_2026_DOI}`,
};

export function stanceLabelDe(stance: Stance): string {
  return STANCE_LABEL_DE[stance];
}

export function headlineFor(entry: EvidenceEntry): string {
  if (entry.id === "findlay2025") {
    return `${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % Oberfläche / ${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % Unterwasser (bis ${SUBSURFACE_DEPTH_LIMIT_M} m) · ab ~${ESTIMATED_CROSSING_YEAR}`;
  }
  return `${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % erfüllt Kriterien nicht · Riffe: ${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} % · Arktis heute untersättigt`;
}

export const KEY_NUMBERS = [
  {
    id: "surface",
    label: "Oberfläche überschritten",
    value: `${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} %`,
  },
  {
    id: "subsurface",
    label: `Unterwasser bis ${SUBSURFACE_DEPTH_LIMIT_M} m`,
    value: `${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} %`,
  },
  {
    id: "year",
    label: "Beginn (geschätzt)",
    value: String(ESTIMATED_CROSSING_YEAR),
  },
  {
    id: "threshold",
    label: "Original-Schwellwert Omega-arag",
    value: `${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} %`,
  },
  {
    id: "coral",
    label: "Korallen-Schutzschwelle",
    value: `${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} %`,
  },
  {
    id: "arctic",
    label: "Arktis heute untersättigt",
    value: ARCTIC_ALREADY_UNDERSATURATED_TODAY ? "ja" : "nein",
  },
] as const;

export { BOUNDARY_METRIC_REVISION_NOTE };
