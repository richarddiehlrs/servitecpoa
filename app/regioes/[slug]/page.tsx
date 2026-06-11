import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getZoneBySlug, seoZones } from "@/lib/content/zones";
import { getZonePageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoZones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) return {};

  return createPageMetadata({
    title: zone.seoTitle,
    description: zone.seoDescription,
    path: `/regioes/${zone.slug}`,
    keywords: [
      `assistência técnica eletrodomésticos ${zone.name.toLowerCase()}`,
      `conserto eletrodomésticos ${zone.name.toLowerCase()}`,
      "assistência técnica de eletrodomésticos porto alegre",
    ],
  });
}

export default async function RegiaoPage({ params }: Props) {
  const { slug } = await params;
  const zone = getZoneBySlug(slug);
  if (!zone) notFound();

  return (
    <>
      <JsonLd data={getZonePageJsonLd(zone)} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Regiões", href: "/regioes" },
              { label: zone.name },
            ]}
          />

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {zone.category === "bairro"
                ? `Bairro nobre · ${zone.zoneLabel ?? "Porto Alegre"}`
                : `${zone.name} · Porto Alegre`}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {zone.seoTitle}
            </h1>
          </header>

          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">{zone.intro}</p>
            {zone.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            <h2 className="font-display text-2xl font-semibold text-ink">
              {zone.category === "zona"
                ? `Bairros atendidos na ${zone.name}`
                : `Bairros e adjacências atendidos em ${zone.name}`}
            </h2>
            <ul className="list-disc columns-2 gap-x-8 pl-5 text-slate-600">
              {zone.neighborhoods.map((neighborhood) => (
                <li key={neighborhood} className="break-inside-avoid">
                  {neighborhood}
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-semibold text-ink">
              Serviços disponíveis
            </h2>
            <p className="text-slate-600">
              Oferecemos {siteConfig.primaryCategory.toLowerCase()} completa em {zone.name}:
              conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas, fogões
              premium e instalação de eletrodomésticos.
            </p>
          </div>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">Nossos serviços</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {seoServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-orange hover:text-brand-orange"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <CtaBlock
            title={`Agendar visita em ${zone.name}`}
            description={`Técnico a domicílio com garantia de ${siteConfig.warranty}.`}
          />

          <p className="mt-8">
            <Link href="/regioes" className="text-sm font-semibold text-brand-orange hover:underline">
              ← Ver todas as regiões
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
