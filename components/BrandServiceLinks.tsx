import Link from "next/link";
import type { BrandServicePage } from "@/lib/content/brand-services";

type BrandServiceLinksProps = {
  pages: BrandServicePage[];
  title?: string;
  /** "service" (padrão) mostra o serviço; "brand" mostra serviço + marca (use em páginas de serviço) */
  labelBy?: "service" | "brand";
};

export function BrandServiceLinks({
  pages,
  title = "Serviços especializados por marca",
  labelBy = "service",
}: BrandServiceLinksProps) {
  if (pages.length === 0) return null;

  return (
    <section className="mt-10 rounded-2xl border border-gold/25 bg-gold/5 p-6">
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Páginas dedicadas com atendimento a domicílio em Porto Alegre.
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={`/marcas/${page.slug}`}
              className="inline-flex rounded-full border border-ink/10 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-orange hover:text-brand-orange"
            >
              {labelBy === "brand" ? `${page.serviceShort} ${page.brandName}` : page.serviceTitle}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
