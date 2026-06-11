import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { seoZones } from "@/lib/content/zones";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Regiões atendidas — assistência técnica Porto Alegre e RMS",
  description:
    "Assistência técnica de eletrodomésticos em todas as zonas de Porto Alegre e cidades da Região Metropolitana. Atendimento a domicílio — ServitecPoa.",
  path: "/regioes",
});

export default function RegioesPage() {
  const poa = seoZones.filter((z) => !z.isMetro);
  const metro = seoZones.filter((z) => z.isMetro);

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
              Cobertura local
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Assistência técnica de eletrodomésticos por região
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A ServitecPoa atende {siteConfig.serviceArea} com visita técnica a domicílio.
              Selecione sua região para saber mais sobre nosso atendimento local.
            </p>
          </header>

          <ZoneSection title="Porto Alegre — por zona e bairro" zones={poa} />
          <ZoneSection title="Região Metropolitana" zones={metro} />

          <CtaBlock />
        </article>
      </main>
      <Footer />
    </>
  );
}

function ZoneSection({
  title,
  zones,
}: {
  title: string;
  zones: typeof seoZones;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {zones.map((zone) => (
          <li key={zone.slug}>
            <Link href={`/regioes/${zone.slug}`} className="card-light group block h-full p-6">
              <h3 className="font-display text-xl font-semibold text-ink group-hover:text-brand-orange">
                {zone.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{zone.intro.slice(0, 100)}…</p>
              <p className="mt-3 text-xs text-slate-500">
                {zone.neighborhoods.slice(0, 3).join(" · ")}
                {zone.neighborhoods.length > 3 ? " · …" : ""}
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
