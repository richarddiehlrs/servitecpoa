import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { seoBrands } from "@/lib/content/brands";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Marcas atendidas — assistência técnica em Porto Alegre",
  description:
    "Conserto de eletrodomésticos Brastemp, Electrolux, Samsung, LG, Bertazzoni, Sub-Zero, Gorenje e mais em Porto Alegre. ServitecPoa a domicílio.",
  path: "/marcas",
});

export default function MarcasPage() {
  const national = seoBrands.filter((b) => !b.isPremium);
  const premium = seoBrands.filter((b) => b.isPremium);

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Início", item: siteConfig.url },
          { name: "Marcas", item: `${siteConfig.url}/marcas` },
        ])}
      />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Início", href: "/" }, { label: "Marcas" }]}
          />

          <header className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Marcas atendidas
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Assistência técnica por marca em Porto Alegre
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A ServitecPoa é especializada em {siteConfig.primaryCategory.toLowerCase()},
              atendendo marcas nacionais e importadas premium com visita técnica a domicílio em{" "}
              {siteConfig.serviceArea}.
            </p>
          </header>

          <BrandGrid title="Linha nacional" brands={national} />
          <BrandGrid title="Linha importada premium" brands={premium} featured />

          <CtaBlock />
        </article>
      </main>
      <Footer />
    </>
  );
}

function BrandGrid({
  title,
  brands,
  featured = false,
}: {
  title: string;
  brands: typeof seoBrands;
  featured?: boolean;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <li key={brand.slug}>
            <Link
              href={`/marcas/${brand.slug}`}
              className={`group block h-full p-6 transition ${
                featured ? "panel-dark hover:border-gold/50" : "card-light"
              }`}
            >
              <h3
                className={`font-display text-xl font-semibold group-hover:text-brand-orange ${
                  featured ? "text-white" : "text-ink"
                }`}
              >
                {brand.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  featured ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {brand.intro.slice(0, 120)}…
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-orange">
                Ver assistência →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
