import Link from "next/link";
import type { BrandServicePage } from "@/lib/content/brand-services";

type BrandServiceLinksProps = {
  pages: BrandServicePage[];
  title?: string;
};

export function BrandServiceLinks({
  pages,
  title = "Serviços especializados por marca",
}: BrandServiceLinksProps) {
  if (pages.length === 0) return null;

  return (
    <section className="mt-10 rounded-2xl border border-gold/25 bg-gold/5 p-6">
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Páginas dedicadas para cada tipo de serviço com esta marca em Porto Alegre.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/marcas/${page.slug}`}
              className="inline-flex rounded-full border border-ink/10 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-orange hover:text-brand-orange"
            >
              {page.serviceTitle}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
