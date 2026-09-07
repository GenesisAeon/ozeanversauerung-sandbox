import { useLocale } from "@/lib/i18n/locale";

const CITES = [
  {
    id: "findlay2025" as const,
    authors: "Findlay, H.S., Feely, R.A., Jiang, L.-Q., Pelletier, G., Bednarsek, N.",
    year: "2025",
    title: "Ocean Acidification: Another Planetary Boundary Crossed",
    journal: "Global Change Biology",
    doi: "10.1111/gcb.70238",
  },
  {
    id: "findlay2026" as const,
    authors: "Findlay, H.S., Feely, R.A.",
    year: "2026",
    title: "Revisiting the ocean acidification planetary boundary",
    journal: "National Science Review",
    doi: "10.1093/nsr/nwag173",
  },
];

export function Sources() {
  const { t } = useLocale();

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.sourcesHeading}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{t.sourcesLead}</p>
      <ul className="mt-5 space-y-4 text-sm">
        {CITES.map((c) => (
          <li key={`${c.authors}-${c.year}`} className="border-t border-ring pt-4">
            <p className="text-fg">
              {c.authors} ({c.year}). <span className="italic">{c.title}.</span>
              {c.journal ? ` ${c.journal}.` : null}
            </p>
            <p className="mt-1 text-muted">{t.sourceNotes[c.id]}</p>
            <a
              className="mt-1 inline-flex min-h-11 items-center font-mono text-xs text-accent underline-offset-4 hover:underline"
              href={`https://doi.org/${c.doi}`}
              target="_blank"
              rel="noreferrer"
            >
              doi:{c.doi}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-relaxed text-subtle">{t.sourcesFoot}</p>
    </section>
  );
}