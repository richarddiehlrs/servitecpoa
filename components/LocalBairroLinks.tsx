import Link from "next/link";
import type { LocalServicePage } from "@/lib/content/local-services";

type LocalBairroLinksProps = {
  pages: LocalServicePage[];
  title?: string;
  description?: string;
};

export function LocalBairroLinks({
  pages,
  title = "Atendimento por bairro em Porto Alegre",
  description = "Agende visita técnica a domicílio nos principais bairros atendidos pela ServitecPoa.",
}: LocalBairroLinksProps) {
  if (pages.length === 0) return null;

  return (
    <section className="mt-10 rounded-2xl border border-ink/8 bg-white p-6">
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/servicos/${page.slug}`}
              className="inline-flex rounded-full border border-ink/10 bg-cream px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-orange hover:text-brand-orange"
            >
              {page.bairro.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
