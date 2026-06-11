import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { nobleBairros, poaZones } from "@/lib/content/zones";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Regiões atendidas — assistência técnica Porto Alegre",
  description:
    "Assistência técnica de eletrodomésticos em Jardim Europa, Boa Vista, Moinhos de Vento, Petrópolis e todas as zonas de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
  path: "/regioes",
});

export default function RegioesPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Início", item: siteConfig.url },
          { name: "Regiões", item: `${siteConfig.url}/regioes` },
        ])}
      />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Início", href: "/" }, { label: "Regiões atendidas" }]}
          />

          <header className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Cobertura em Porto Alegre
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Assistência técnica de eletrodomésticos por região
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A ServitecPoa atende {siteConfig.serviceArea} com visita técnica a domicílio.
              Jardim Europa e Boa Vista ficam na Zona Norte; Moinhos de Vento, Petrópolis e
              Três Figueiras na Zona Leste; Tristeza e Ipanema na Zona Sul.
            </p>
          </header>

          <ZoneSection
            title="Bairros nobres"
            subtitle="Atendimento premium a domicílio"
            zones={nobleBairros}
            featured
          />
          <ZoneSection
            title="Zonas de Porto Alegre"
            subtitle="Norte, Sul, Leste, Oeste e Centro Histórico"
            zones={poaZones}
          />

          <CtaBlock />
        </article>
      </main>
      <Footer />
    </>
  );
}

function ZoneSection({
  title,
  subtitle,
  zones,
  featured = false,
}: {
  title: string;
  subtitle: string;
  zones: typeof nobleBairros;
  featured?: boolean;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {zones.map((zone) => (
          <li key={zone.slug}>
            <Link
              href={`/regioes/${zone.slug}`}
              className={`group block h-full p-6 transition ${
                featured ? "panel-dark hover:border-gold/50" : "card-light"
              }`}
            >
              <h3
                className={`font-display text-xl font-semibold group-hover:text-brand-orange ${
                  featured ? "text-white" : "text-ink"
                }`}
              >
                {zone.name}
              </h3>
              {zone.zoneLabel && (
                <p className={`mt-1 text-xs ${featured ? "text-gold-light" : "text-brand-orange"}`}>
                  {zone.zoneLabel}
                </p>
              )}
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  featured ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {zone.intro.slice(0, 110)}…
              </p>
              <p className="mt-3 text-xs text-slate-500">
                {zone.neighborhoods.slice(0, 4).join(" · ")}
                {zone.neighborhoods.length > 4 ? " · …" : ""}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-orange">
                Ver atendimento →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
