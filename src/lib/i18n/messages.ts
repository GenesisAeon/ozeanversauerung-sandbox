import { formatDe } from "@/lib/utils";
import {
  ARCTIC_ALREADY_UNDERSATURATED_TODAY,
  CORAL_REEF_PROTECTIVE_THRESHOLD_PCT,
  ESTIMATED_CROSSING_YEAR,
  ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL,
  SUBSURFACE_DEPTH_LIMIT_M,
  SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
  SURFACE_OCEAN_BOUNDARY_CROSSED_PCT,
} from "@/lib/oa/constants";
import type { EvidenceEntry, Stance } from "@/lib/oa/evidence";

export type Locale = "de" | "en";

export type Messages = {
  language: string;
  documentTitle: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  lead: string;
  statusLabel: string;
  statusHeading: string;
  statusBody: string;
  filterHeading: string;
  filterHint: string;
  filterAll: string;
  filterCrossed: string;
  filterRevision: string;
  filterAria: string;
  hiddenOne: string;
  hiddenMany: (n: number) => string;
  hiddenSuffix: string;
  numbersHeading: string;
  evidenceHeading: string;
  evidenceLead: string;
  entriesCount: (visible: number, total: number) => string;
  coreClaim: string;
  citation: string;
  doiSource: string;
  close: string;
  drawerFoot: string;
  honestyHeading: string;
  sourcesHeading: string;
  sourcesLead: string;
  sourcesFoot: string;
  disclaimerHeading: string;
  disclaimerLead: string;
  disclaimerBody: string;
  linkKlimakatalog: string;
  linkAppsHub: string;
  linkGithub: string;
  linkSandboxGithub: string;
  stanceLabel: Record<Stance, string>;
  evidenceTitle: Record<EvidenceEntry["id"], string>;
  evidenceCore: Record<EvidenceEntry["id"], string>;
  headlineFindlay2025: string;
  headlineFindlay2026: string;
  keyNumberLabels: Record<string, string>;
  yes: string;
  no: string;
  sourceNotes: { findlay2025: string; findlay2026: string };
};

const evidenceCoreDe = (): Record<EvidenceEntry["id"], string> => ({
  findlay2025: `Die Ozeanversauerungs-Grenze (Omega-arag bei ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % des vorindustriellen Niveaus) ist weltweit überschritten: ca. ${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % der Meeresoberfläche und ca. ${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % des Unterwassers bis ${SUBSURFACE_DEPTH_LIMIT_M} m. Beginn der Überschreitung geschätzt um ${ESTIMATED_CROSSING_YEAR}. Explizit KEIN Kipppunkt - Umkehr durch reduzierte Emissionen ist theoretisch möglich.`,
  findlay2026: `Dieselbe Hauptautorin prüft den ursprünglichen ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)}-%-Schwellwert an seinen eigenen Kriterien und stellt fest: er erfüllt sie nicht. Arktische Gewässer sind bereits heute untersättigt (nicht erst projiziert). Warmwasser-Korallenriffe bräuchten eigentlich ${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} % statt ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} %. Die Fachwelt diskutiert pH/[H+] als alternatives Kontrollmaß. Die Versauerung selbst wird nicht infrage gestellt - nur die Definition der Grenze.`,
});

const evidenceCoreEn = (): Record<EvidenceEntry["id"], string> => ({
  findlay2025: `The ocean-acidification boundary (Omega-arag at ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % of the pre-industrial level) has been crossed globally: about ${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % of the ocean surface and about ${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % of the subsurface to ${SUBSURFACE_DEPTH_LIMIT_M} m. Crossing estimated around ${ESTIMATED_CROSSING_YEAR}. Explicitly NOT a tipping point - reversal via reduced emissions is theoretically possible.`,
  findlay2026: `The same lead author tests the original ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % threshold against its own criteria and finds: it does not meet them. Arctic waters are already undersaturated today (not only in projections). Warm-water coral reefs would need ${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} % rather than ${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} %. The literature discusses pH/[H+] as an alternative control metric. Acidification itself is not in doubt - only the boundary definition.`,
});

export const messages: Record<Locale, Messages> = {
  de: {
    language: "Sprache",
    documentTitle: "Ozeanversauerung",
    eyebrow: "Ozeanversauerung-Sandbox \u00b7 ocean-acidification-utac P122",
    titleLead: "Grenze überschritten.",
    titleAccent: " Maßstab umstritten.",
    lead: "Die Ozeanversauerung hat die planetare Grenze weltweit überschritten - und dieselbe Forschungslinie stellt den Maßstab selbst infrage. Diese Karte glättet den Streit nicht.",
    statusLabel: "Status",
    statusHeading: "Wissenschaftlich umstritten",
    statusBody:
      "Findlay et al. 2025: Grenze überschritten (~40 % Oberfläche / ~60 % Unterwasser bis 200 m, ab ~2020). Findlay & Feely 2026: der 80-%-Schwellwert erfüllt die eigenen Kriterien nicht (Arktis heute untersättigt; Korallen bräuchten 85 %). Struktureller Check über die Einträge - keine Seite wird als richtig markiert. Kein Kipppunkt.",
    filterHeading: "Richtung",
    filterHint: "Filter ändert die Ansicht, nicht den Befund.",
    filterAll: "beide",
    filterCrossed: "Grenze überschritten",
    filterRevision: "Maßstab in Revision",
    filterAria: "Nach Richtung filtern",
    hiddenOne: "1 Eintrag ausgeblendet",
    hiddenMany: (n) => `${n} Einträge ausgeblendet`,
    hiddenSuffix: "- der Streit bleibt offen.",
    numbersHeading: "Kennzahlen (1:1 aus P122)",
    evidenceHeading: "Evidenz",
    evidenceLead: "Beide Befunde gleichzeitig sichtbar halten - Überschreitung und Maßstab-Revision.",
    entriesCount: (visible, total) => `${visible} / ${total} Einträge`,
    coreClaim: "Kernaussage",
    citation: "Zitat",
    doiSource: "DOI / Quelle",
    close: "Schließen",
    drawerFoot: "Zwei Einträge, ein offener Streit - is_genuinely_disputed() bleibt strukturell.",
    honestyHeading: "Honesty-Checks",
    sourcesHeading: "Quellen",
    sourcesLead:
      "Konstanten 1:1 aus ocean-acidification-utac (P122). Die Oberfläche ist übersetzt; Zahlen und Zitationen bleiben in ihren Einheiten.",
    sourcesFoot:
      "Keine UTAC/CREP/AFET-Verknüpfung. Die Ozeanchemie steht für sich. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "Reale, aktuell ungelöste wissenschaftliche Kontroverse - keine Seite wird bevorzugt. Kein Kipppunkt.",
    disclaimerBody:
      "Keine UTAC-, CREP- oder AFET-Brücke. Kein erfundenes Gamma. Die Zahlen stammen 1:1 aus ocean-acidification-utac (P122, v1.0.0).",
    linkKlimakatalog: "Klimakatalog \u00b7 ocean-acidification-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Quellpaket auf GitHub",
    linkSandboxGithub: "GitHub-Paket (Sandbox)",
    stanceLabel: {
      boundary_crossed: "Grenze überschritten",
      definition_revision: "Maßstab in Revision",
    },
    evidenceTitle: {
      findlay2025: "Findlay et al. 2025 - planetare Grenze überschritten",
      findlay2026: "Findlay & Feely 2026 - Maßstab unter Revision",
    },
    evidenceCore: evidenceCoreDe(),
    headlineFindlay2025: `${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % Oberfläche / ${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % Unterwasser (bis ${SUBSURFACE_DEPTH_LIMIT_M} m) \u00b7 ab ~${ESTIMATED_CROSSING_YEAR}`,
    headlineFindlay2026: `${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % erfüllt Kriterien nicht \u00b7 Riffe: ${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} % \u00b7 Arktis heute untersättigt`,
    keyNumberLabels: {
      surface: "Oberfläche überschritten",
      subsurface: `Unterwasser bis ${SUBSURFACE_DEPTH_LIMIT_M} m`,
      year: "Beginn (geschätzt)",
      threshold: "Original-Schwellwert Omega-arag",
      coral: "Korallen-Schutzschwelle",
      arctic: "Arktis heute untersättigt",
    },
    yes: "ja",
    no: "nein",
    sourceNotes: {
      findlay2025:
        "Grenze überschritten: ~40 % Oberfläche / ~60 % Unterwasser bis 200 m; Beginn ~2020. Kein Kipppunkt.",
      findlay2026:
        "80-%-Schwellwert erfüllt eigene Kriterien nicht; Arktis heute untersättigt; Korallen bräuchten 85 %.",
    },
  },
  en: {
    language: "Language",
    documentTitle: "Ocean acidification",
    eyebrow: "Ocean-acidification sandbox \u00b7 ocean-acidification-utac P122",
    titleLead: "Boundary crossed.",
    titleAccent: " Metric disputed.",
    lead: "Ocean acidification has crossed the planetary boundary globally - and the same research line questions the metric itself. This map does not smooth the dispute.",
    statusLabel: "Status",
    statusHeading: "Scientifically disputed",
    statusBody:
      "Findlay et al. 2025: boundary crossed (~40 % surface / ~60 % subsurface to 200 m, from ~2020). Findlay & Feely 2026: the 80 % threshold fails its own criteria (Arctic already undersaturated today; corals would need 85 %). A structural check across the entries - neither side is marked correct. Not a tipping point.",
    filterHeading: "Direction",
    filterHint: "The filter changes the view, not the finding.",
    filterAll: "both",
    filterCrossed: "Boundary crossed",
    filterRevision: "Metric under revision",
    filterAria: "Filter by direction",
    hiddenOne: "1 entry hidden",
    hiddenMany: (n) => `${n} entries hidden`,
    hiddenSuffix: "- the dispute stays open.",
    numbersHeading: "Key numbers (1:1 from P122)",
    evidenceHeading: "Evidence",
    evidenceLead: "Keep both findings visible at once - crossing and metric revision.",
    entriesCount: (visible, total) => `${visible} / ${total} entries`,
    coreClaim: "Core claim",
    citation: "Citation",
    doiSource: "DOI / source",
    close: "Close",
    drawerFoot: "Two entries, one open dispute - is_genuinely_disputed() stays structural.",
    honestyHeading: "Honesty checks",
    sourcesHeading: "Sources",
    sourcesLead:
      "Constants 1:1 from ocean-acidification-utac (P122). The chrome is translated; numbers and citations stay in their units.",
    sourcesFoot:
      "No UTAC/CREP/AFET link. Ocean chemistry stands on its own. Owner: GenesisAeon / Johann Römer. MIT.",
    disclaimerHeading: "Disclaimer",
    disclaimerLead:
      "A real, currently unresolved scientific controversy - neither side is preferred. Not a tipping point.",
    disclaimerBody:
      "No UTAC, CREP, or AFET bridge. No invented gamma. Numbers are 1:1 from ocean-acidification-utac (P122, v1.0.0).",
    linkKlimakatalog: "Climate catalog \u00b7 ocean-acidification-utac",
    linkAppsHub: "GenesisAeon Apps-Hub",
    linkGithub: "Source package on GitHub",
    linkSandboxGithub: "GitHub package (sandbox)",
    stanceLabel: {
      boundary_crossed: "Boundary crossed",
      definition_revision: "Metric under revision",
    },
    evidenceTitle: {
      findlay2025: "Findlay et al. 2025 - planetary boundary crossed",
      findlay2026: "Findlay & Feely 2026 - metric under revision",
    },
    evidenceCore: evidenceCoreEn(),
    headlineFindlay2025: `${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % surface / ${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} % subsurface (to ${SUBSURFACE_DEPTH_LIMIT_M} m) \u00b7 from ~${ESTIMATED_CROSSING_YEAR}`,
    headlineFindlay2026: `${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} % fails its criteria \u00b7 reefs: ${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} % \u00b7 Arctic undersaturated today`,
    keyNumberLabels: {
      surface: "Surface crossed",
      subsurface: `Subsurface to ${SUBSURFACE_DEPTH_LIMIT_M} m`,
      year: "Onset (estimated)",
      threshold: "Original Omega-arag threshold",
      coral: "Coral protective threshold",
      arctic: "Arctic undersaturated today",
    },
    yes: "yes",
    no: "no",
    sourceNotes: {
      findlay2025:
        "Boundary crossed: ~40 % surface / ~60 % subsurface to 200 m; onset ~2020. Not a tipping point.",
      findlay2026:
        "80 % threshold fails its own criteria; Arctic undersaturated today; corals would need 85 %.",
    },
  },
};

export function stanceLabel(stance: Stance, t: Messages): string {
  return t.stanceLabel[stance];
}

export function headlineForLocale(entry: EvidenceEntry, t: Messages): string {
  return entry.id === "findlay2025" ? t.headlineFindlay2025 : t.headlineFindlay2026;
}

export function keyNumbersForLocale(t: Messages) {
  return [
    { id: "surface", label: t.keyNumberLabels.surface, value: `${formatDe(SURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} %` },
    { id: "subsurface", label: t.keyNumberLabels.subsurface, value: `${formatDe(SUBSURFACE_OCEAN_BOUNDARY_CROSSED_PCT)} %` },
    { id: "year", label: t.keyNumberLabels.year, value: String(ESTIMATED_CROSSING_YEAR) },
    { id: "threshold", label: t.keyNumberLabels.threshold, value: `${formatDe(ORIGINAL_THRESHOLD_OMEGA_ARAG_PCT_OF_PREINDUSTRIAL)} %` },
    { id: "coral", label: t.keyNumberLabels.coral, value: `${formatDe(CORAL_REEF_PROTECTIVE_THRESHOLD_PCT)} %` },
    { id: "arctic", label: t.keyNumberLabels.arctic, value: ARCTIC_ALREADY_UNDERSATURATED_TODAY ? t.yes : t.no },
  ] as const;
}
