/**
 * Real, independently verified constants for ocean-acidification-utac (P122).
 * Ported 1:1 from src/ocean_acidification_utac/constants.py (package v1.0.0).
 * Deliberately has NO UTAC/CREP/AFET bridge. See DISCLAIMER.md.
 */

export const PACKAGE_ID = 122;
export const SOURCE_VERSION = "1.0.0";

export const OCEAN_ACIDIFICATION_NOTE =
  "The ocean acidification planetary boundary (aragonite saturation state " +
  "Omega-arag dropping to 80% of pre-industrial levels) has been crossed " +
  "globally. This is NOT framed as a tipping point: no abrupt, self-" +
  "reinforcing regime shift is implied, and reversal via reduced emissions " +
  "is theoretically possible. The same lead author later showed the original " +
  "80% threshold does not satisfy its own justifying criteria.";

export const ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL = 80.0;
export const SURFACE_OCEAN_BOUNDARY_CROSSED_PCT = 40.0;
export const SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT = 60.0;
export const SUBSURFACE_DEPTH_LIMIT_M = 200;
export const ESTIMATED_CROSSING_YEAR = 2020;
export const CORAL_REEF_PROTECTIVE_THRESHOLD_PCT = 85.0;
export const ARCTIC_ALREADY_UNDERSATURATED_TODAY = true;

export const FINDLAY_2025_CITATION =
  "Findlay, H.S., Feely, R.A., Jiang, L.-Q., Pelletier, G., Bednarsek, N. " +
  "(2025). \"Ocean Acidification: Another Planetary Boundary Crossed\". " +
  "Global Change Biology, e70238. DOI: 10.1111/gcb.70238.";

export const FINDLAY_2025_DOI = "10.1111/gcb.70238";

export const FINDLAY_FEELY_2026_CITATION =
  "Findlay, H.S., Feely, R.A. (2026). \"Revisiting the ocean acidification " +
  "planetary boundary\". National Science Review. DOI: 10.1093/nsr/nwag173.";

export const FINDLAY_FEELY_2026_DOI = "10.1093/nsr/nwag173";

export const BOUNDARY_METRIC_REVISION_NOTE =
  "The original 80%-of-preindustrial Omega-arag threshold was meant to " +
  "(1) prevent polar undersaturation and (2) protect warm-water coral reefs. " +
  "Neither holds: Arctic surface and subsurface waters are already " +
  "undersaturated today, and protecting coral reefs would require an 85% " +
  "threshold. The field is actively debating replacing Omega-arag with " +
  "pH/[H+] as the boundary control variable. This does not retract the " +
  "2025 crossing finding -- it debates how the boundary should be defined.";
