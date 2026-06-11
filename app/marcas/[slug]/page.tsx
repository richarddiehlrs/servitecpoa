import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getBrandBySlug, seoBrands } from "@/lib/content/brands";
import { getBrandPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoBrands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return {};

  return createPageMetadata({
    title: brand.seoTitle,
    description: brand.seoDescription,
    path: `/marcas/${brand.slug}`,
    keywords: [
      `conserto ${brand.name.toLowerCase()} porto alegre`,
      `assistência técnica ${brand.name.toLowerCase()} porto alegre`,
      "assistência técnica de eletrodomésticos porto alegre",
    ],
  });
}

export default async function MarcaPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const relatedServices = seoServices.filter((s) =>
    brand.services.includes(s.title),
  );

  return (
    <>
      <JsonLd data={getBrandPageJsonLd(brand)} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Marcas", href: "/marcas" },
              { label: brand.name },
            ]}
          />

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              {brand.isPremium ? "Linha premium" : "Linha nacional"}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {brand.seoTitle}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-orange">
              {siteConfig.serviceArea} · Atendimento a domicílio
            </p>
          </header>

          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">{brand.intro}</p>
            {brand.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            <h2 className="font-display text-2xl font-semibold text-ink">
              Serviços para {brand.name}
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-600">
              {brand.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {relatedServices.length > 0 && (
            <section className="mt-10">
              <h2 className="font-display text-xl font-semibold text-ink">
                Páginas de serviço relacionadas
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
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
          )}

          <CtaBlock
            title={`Agendar conserto ${brand.name}`}
            description={`Assistência técnica de eletrodomésticos a domicílio em ${siteConfig.serviceArea}.`}
          />

          <p className="mt-8">
            <Link href="/marcas" className="text-sm font-semibold text-brand-orange hover:underline">
              ← Ver todas as marcas
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
