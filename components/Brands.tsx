import { SectionHeading } from "@/components/ui/SectionHeading";
import { importedBrands, nationalBrands } from "@/lib/site";

export function Brands() {
  return (
    <section id="marcas" className="section-light py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Marcas"
          title="Nacionais e importados de alto padrão"
          description="Atendemos desde a linha residencial até eletrodomésticos embutidos e importados premium."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <BrandPanel
            title="Linha nacional"
            subtitle="Marcas líderes no mercado brasileiro"
            brands={nationalBrands}
          />
          <BrandPanel
            title="Linha importada"
            subtitle="Premium, built-in e alta performance"
            brands={importedBrands}
            featured
          />
        </div>
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
  brands: readonly string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl p-8 sm:p-10 ${
        featured
          ? "bg-ink text-white shadow-elegant-lg"
          : "border border-slate-200/80 bg-white shadow-elegant"
      }`}
    >
      <header>
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            featured ? "text-brand-orange" : "text-slate-500"
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
            key={brand}
            className={`mb-3 break-inside-avoid text-sm font-medium ${
              featured ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <span
                className={`h-1 w-1 rounded-full ${
                  featured ? "bg-brand-orange" : "bg-brand-orange/60"
                }`}
                aria-hidden
              />
              {brand}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
