import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { seoBrands } from "@/lib/content/brands";

export function Brands() {
  const nationalLinks = seoBrands.filter((b) => !b.isPremium);
  const importedLinks = seoBrands.filter((b) => b.isPremium);

  return (
    <section id="marcas" className="section-muted py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Marcas"
          title="Assistência técnica para nacionais e importados premium"
          description="Conserto por marca em Porto Alegre — da linha residencial aos eletrodomésticos embutidos de alto padrão."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <BrandPanel
            title="Linha nacional"
            subtitle="Marcas líderes no mercado brasileiro"
            brands={nationalLinks}
          />
          <BrandPanel
            title="Linha importada"
            subtitle="Premium, built-in e alta performance"
            brands={importedLinks}
            featured
          />
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/marcas"
            className="text-sm font-semibold text-brand-orange hover:underline"
          >
            Ver todas as marcas atendidas →
          </Link>
        </p>
      </div>
    </section>
  );
}

function BrandPanel({
  title,
  subtitle,
  brands,
  featured = false,
}: {
  title: string;
  subtitle: string;
  brands: typeof seoBrands;
  featured?: boolean;
}) {
  return (
    <article className={featured ? "panel-dark p-8 sm:p-10" : "card-elevated p-8 sm:p-10"}>
      <header>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            featured ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          {subtitle}
        </p>
        <h3
          className={`mt-2 font-display text-2xl font-semibold ${
            featured ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h3>
      </header>
      <ul className="mt-8 columns-2 gap-x-6 sm:columns-3">
        {brands.map((brand) => (
          <li
            key={brand.slug}
            className={`mb-3 break-inside-avoid text-sm font-medium ${
              featured ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <Link
              href={`/marcas/${brand.slug}`}
              className="inline-flex items-center gap-2 transition hover:text-brand-orange"
            >
              <span
                className={`h-1 w-1 rounded-full ${
                  featured ? "bg-gold-light" : "bg-gold-dark"
                }`}
                aria-hidden
              />
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
