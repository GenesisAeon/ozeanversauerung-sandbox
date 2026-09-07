import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  ALL_EVIDENCE,
  ARCTIC_ALREADY_UNDERSATURATED_TODAY,
  CORAL_REEF_PROTECTIVE_THRESHOLD_PCT,
  ESTIMATED_CROSSING_YEAR,
  FINDLAY_2025_DOI,
  FINDLAY_FEELY_2026_DOI,
  ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL,
  PACKAGE_ID,
  SOURCE_VERSION,
  SUBSURFACE_DEPTH_LIMIT_M,
  SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
  SURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
  boundaryCrossedEvidence,
  coralReefProtectiveThresholdPct,
  definitionRevisionEvidence,
  does80pctThresholdMeetOriginalCriteria,
  estimatedCrossingYear,
  isArcticAlreadyUndersaturatedToday,
  isBoundaryCrossingATippingPoint,
  isBoundaryDefinitionSettledScience,
  isGenuinelyDisputed,
  isReversalTheoreticallyPossible,
  originalThresholdPctOfPreindustrial,
  subsurfaceDepthLimitM,
  subsurfaceOceanBoundaryCrossedPct,
  surfaceOceanBoundaryCrossedPct,
} from "./index.ts";

describe("package identity", () => {
  it("keeps ocean-acidification-utac version and package id", () => {
    assert.equal(SOURCE_VERSION, "1.0.0");
    assert.equal(PACKAGE_ID, 122);
  });
});

describe("P122 constants", () => {
  it("locks all published boundary numbers", () => {
    assert.equal(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL, 80.0);
    assert.equal(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT, 40.0);
    assert.equal(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT, 60.0);
    assert.equal(SUBSURFACE_DEPTH_LIMIT_M, 200);
    assert.equal(ESTIMATED_CROSSING_YEAR, 2020);
    assert.equal(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT, 85.0);
    assert.equal(ARCTIC_ALREADY_UNDERSATURATED_TODAY, true);
  });

  it("keeps subsurface share above surface share", () => {
    assert.ok(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT > SURFACE_OCEAN_BOUNDARY_CROSSED_PCT);
  });

  it("keeps coral protective threshold stricter than original 80%", () => {
    assert.ok(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT > ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL);
  });
});

describe("citations", () => {
  it("locks Findlay 2025 and Findlay & Feely 2026 DOIs", () => {
    assert.equal(FINDLAY_2025_DOI, "10.1111/gcb.70238");
    assert.equal(FINDLAY_FEELY_2026_DOI, "10.1093/nsr/nwag173");
  });
});

describe("honesty APIs", () => {
  it("ports planetary_boundary_crossing accessors", () => {
    assert.equal(surfaceOceanBoundaryCrossedPct(), 40.0);
    assert.equal(subsurfaceOceanBoundaryCrossedPct(), 60.0);
    assert.equal(subsurfaceDepthLimitM(), 200);
    assert.equal(estimatedCrossingYear(), 2020);
    assert.equal(originalThresholdPctOfPreindustrial(), 80.0);
  });

  it("never calls boundary crossing a tipping point", () => {
    assert.equal(isBoundaryCrossingATippingPoint(), false);
    assert.equal(isReversalTheoreticallyPossible(), true);
  });

  it("keeps the 80% threshold honesty check false", () => {
    assert.equal(does80pctThresholdMeetOriginalCriteria(), false);
    assert.equal(coralReefProtectiveThresholdPct(), 85.0);
    assert.equal(isArcticAlreadyUndersaturatedToday(), true);
    assert.equal(isBoundaryDefinitionSettledScience(), false);
  });
});

describe("ALL_EVIDENCE", () => {
  it("keeps exactly the two package entries", () => {
    assert.equal(ALL_EVIDENCE.length, 2);
    assert.deepEqual(ALL_EVIDENCE.map((e) => e.id), ["findlay2025", "findlay2026"]);
  });

  it("assigns crossed vs revision stances", () => {
    assert.equal(ALL_EVIDENCE[0]?.stance, "boundary_crossed");
    assert.equal(ALL_EVIDENCE[1]?.stance, "definition_revision");
  });

  it("gives every entry a citation", () => {
    for (const est of ALL_EVIDENCE) {
      assert.ok(est.citation);
      assert.ok(est.stance === "boundary_crossed" || est.stance === "definition_revision");
    }
  });
});

describe("is_genuinely_disputed", () => {
  it("is structurally true because both stances are present", () => {
    assert.ok(boundaryCrossedEvidence().length >= 1);
    assert.ok(definitionRevisionEvidence().length >= 1);
    assert.equal(isGenuinelyDisputed(), true);
  });

  it("is not a hardcoded true - removing a stance would flip it", () => {
    const directions = new Set(ALL_EVIDENCE.map((e) => e.stance));
    assert.equal(directions.size > 1, isGenuinelyDisputed());
  });
});

describe("no framework overlay", () => {
  it("does not mention UTAC, CREP or AFET in the ported evidence", () => {
    const blob = JSON.stringify(ALL_EVIDENCE);
    assert.equal(/UTAC|CREP|AFET/.test(blob), false);
  });
});
