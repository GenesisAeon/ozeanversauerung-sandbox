# ozeanversauerung-sandbox

[![GenesisAeon](https://img.shields.io/badge/GenesisAeon-P122-blue)](https://github.com/GenesisAeon)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Interactive ocean-acidification dispute map. Sibling UI to
[`ocean-acidification-utac`](https://github.com/GenesisAeon/ocean-acidification-utac)
(P122), built from the same published constants. **Deliberately has no
UTAC/CREP/AFET bridge and no invented Gamma** – see
[DISCLAIMER.md](DISCLAIMER.md).

The interface is German. Numbers and citations stay in their original units.

For a plain-language German companion, see [WHITEPAPER.md](WHITEOBER.md).

## What's real here

- **Findlay et al. (2025, *Global Change Biology*)** – the ocean acidification
  planetary boundary has been crossed globally: ~40% of surface ocean and
  ~60% of subsurface ocean (to 200 m), crossing estimated to have begun
  around 2020. Explicitly **not** a tipping point; reversal via reduced
  emissions is theoretically possible.
- **Findlay & Feely (2026, *National Science Review*)** – the same lead
  author revisiting the boundary metric: the original 80%-of-preindustrial
  Omega-arag threshold does not satisfy its own justifying criteria. Arctic
  waters are **already** undersaturated today; coral reefs would need an
  85% threshold.
- **`isGenuinelyDisputed()` is structurally true** because both stances
  (`boundary_crossed` and `definition_revision`) are present among
  `ALL_EVIDENCE`. Neither side is marked correct.

## What the controls do

1. Key numbers panel with all P122 constants (40%/60%/2020/80%/85%/Arctic).
2. Filter: all / boundary crossed / definition revision. Filtering hides
   rows; it does not resolve the dispute.
3. Status: "Wissenschaftlich umstritten" with `is_genuinely_disputed() = true`.
4. Detail drawer per entry: citation, DOI, core claim.
5. Honesty APIs visible: not a tipping point; 80% fails own criteria;
   definition not settled.
6. Links to the [Klimakatalog entry](https://klimakatalog.vercel.app/p/ocean-acidification-utac),
   [apps-hub](https://apps-hub-alpha.vercel.app/), and the
   [source package](https://github.com/GenesisAeon/ocean-acidification-utac).

Thresholds and labels are 1:1 from the Python package. Tests lock those values.

## License

Code: MIT. Documentation/data notes: see [DISCLAIMER.md](DISCLAIMER.md).

## Citation

See [CITATION.cff](CITATION.cff).
