import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandServiceLinks } from "@/components/BrandServiceLinks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import {
  brandServicePages,
  getBrandServicePage,
  getBrandServicePagesForBrand,
} from "@/lib/content/brand-services";
import { getBrandBySlug, seoBrands } from "@/lib/content/brands";
import { getBrandPageJsonLd, getBrandServicePageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { getServiceBySlug, seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...seoBrands.map((brand) => ({ slug: brand.slug })),
    ...brandServicePages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brandService = getBrandServicePage(slug);

  if (brandService) {
    return createPageMetadata({
      title: brandService.seoTitle,
      description: brandService.seoDescription,
      path: `/marcas/${brandService.slug}`,
      keywords: [
        `${brandService.brandName.toLowerCase()} porto alegre`,
        `${brandService.serviceTitle.toLowerCase()} ${brandService.brandName.toLowerCase()}`,
        `assistência técnica ${brandService.brandName.toLowerCase()} porto alegre`,
        "eletrodomésticos premium porto alegre",
      ],
    });
  }

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
  const brandService = getBrandServicePage(slug);

  if (brandService) {
    return <BrandServicePageView page={brandService} />;
  }

  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const relatedServices = seoServices.filter((s) => brand.services.includes(s.title));
  const brandServiceLinks = getBrandServicePagesForBrand(brand.slug);

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

          {brand.isPremium && brandServiceLinks.length > 0 && (
            <BrandServiceLinks
              pages={brandServiceLinks}
              title={`${brand.name} — serviços em Porto Alegre`}
            />
          )}

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

function BrandServicePageView({
  page,
}: {
  page: NonNullable<ReturnType<typeof getBrandServicePage>>;
}) {
  const brand = getBrandBySlug(page.brandSlug);
  const service = getServiceBySlug(page.serviceSlug);
  const siblingPages = getBrandServicePagesForBrand(page.brandSlug).filter(
    (item) => item.slug !== page.slug,
  );
  const whatsappMessage = encodeURIComponent(
    `Vim pelo site. Gostaria de agendar ${page.serviceTitle} ${page.brandName} em Porto Alegre.`,
  );
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <>
      <JsonLd data={getBrandServicePageJsonLd(page)} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Marcas", href: "/marcas" },
              { label: page.brandName, href: `/marcas/${page.brandSlug}` },
              { label: page.serviceTitle },
            ]}
          />

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Linha premium · {page.brandName}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-orange">
              {siteConfig.primaryCategory} · Atendimento a domicílio
            </p>
          </header>

          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">{page.intro}</p>
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            {page.problems.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Problemas comuns em {page.brandName}
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                  {page.problems.map((problem) => (
                    <li key={problem}>{problem}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="font-display text-2xl font-semibold text-ink">
              Perguntas frequentes — {page.brandName}
            </h2>
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {siblingPages.length > 0 && (
            <BrandServiceLinks
              pages={siblingPages}
              title={`Outros serviços ${page.brandName} em Porto Alegre`}
            />
          )}

          <section className="mt-6 rounded-2xl border border-ink/8 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Links relacionados</h2>
            <p className="mt-2 text-sm text-slate-600">
              {brand && (
                <>
                  <Link
                    href={`/marcas/${brand.slug}`}
                    className="font-semibold text-brand-orange hover:underline"
                  >
                    Assistência técnica {page.brandName}
                  </Link>
                  {" · "}
                </>
              )}
              {service && (
                <Link
                  href={`/servicos/${service.slug}`}
                  className="font-semibold text-brand-orange hover:underline"
                >
                  {service.title} em Porto Alegre
                </Link>
              )}
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/atendimento-domicilio" className="btn-primary text-center">
              Solicitar orçamento
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark text-center"
            >
              WhatsApp — {siteConfig.phoneDisplay}
            </a>
            <a href={getWhatsAppUrl()} className="btn-outline-dark text-center sm:hidden">
              WhatsApp geral
            </a>
          </div>

          <CtaBlock title={page.h1} />

          {brand && (
            <p className="mt-8">
              <Link
                href={`/marcas/${brand.slug}`}
                className="text-sm font-semibold text-brand-orange hover:underline"
              >
                ← Ver todos os serviços {page.brandName}
              </Link>
            </p>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
