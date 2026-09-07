import { isGenuinelyDisputed } from "@/lib/oa";
import { useLocale } from "@/lib/i18n/locale";

export function DisclaimerBox() {
  const disputed = isGenuinelyDisputed();
  const { t } = useLocale();

  const links = [
    {
      href: "https://klimakatalog.vercel.app/p/ocean-acidification-utac",
      label: t.linkKlimakatalog,
    },
    {
      href: "https://apps-hub-alpha.vercel.app/",
      label: t.linkAppsHub,
    },
    {
      href: "https://github.com/GenesisAeon/ocean-acidification-utac",
      label: t.linkGithub,
    },
    {
      href: "https://github.com/GenesisAeon/ozeanversauerung-sandbox",
      label: t.linkSandboxGithub,
    },
  ];

  return (
    <section className="rounded-xl bg-surface p-4 shadow-border sm:p-5">
      <h2 className="font-heading text-2xl tracking-tight">{t.disclaimerHeading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-fg">{t.disclaimerLead}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {t.disclaimerBody}{" "}
        <span className="font-mono text-accent">
          is_genuinely_disputed() = {disputed ? "true" : "false"}
        </span>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <a
            key={link.href}
            className="inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}