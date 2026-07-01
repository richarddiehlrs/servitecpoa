import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandNameList } from "@/components/BrandNameList";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { BrandServiceLinks } from "@/components/BrandServiceLinks";
import { LocalBairroLinks } from "@/components/LocalBairroLinks";
import { ServiceIcon } from "@/components/icons";
import { getBrandServicePagesForService } from "@/lib/content/brand-services";
import {
  getBairroZonePage,
  getLocalPagesForService,
  getLocalServicePage,
  localServicePages,
} from "@/lib/content/local-services";
import { getServiceDetail } from "@/lib/content/service-details";
import { getFaqJsonLd, getLocalServicePageJsonLd, getServicePageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { getServiceBySlug, seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...seoServices.map((service) => ({ slug: service.slug })),
    ...localServicePages.map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const localPage = getLocalServicePage(slug);

  if (localPage) {
    return createPageMetadata({
      title: localPage.seoTitle,
      description: localPage.seoDescription,
      path: `/servicos/${localPage.slug}`,
      keywords: [
        `${localPage.serviceTitle.toLowerCase()} ${localPage.bairro.name.toLowerCase()}`,
        `conserto eletrodomésticos ${localPage.bairro.name.toLowerCase()}`,
        `assistência técnica ${localPage.bairro.name.toLowerCase()} porto alegre`,
      ],
    });
  }

  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicoDetalhePage({ params }: Props) {
  const { slug } = await params;
  const localPage = getLocalServicePage(slug);

  if (localPage) {
    return <LocalServicePageView page={localPage} />;
  }

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const detail = getServiceDetail(slug);
  const localPages = getLocalPagesForService(service.slug);
  const brandServiceLinks = getBrandServicePagesForService(service.slug);
  const whatsappMessage = encodeURIComponent(
    `Vim pelo site. Gostaria de agendar visita técnica para: ${service.title}.`,
  );
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <>
      <JsonLd
        data={[
          ...getServicePageJsonLd(service),
          ...(detail ? [getFaqJsonLd(detail.faqs)] : []),
        ]}
      />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: service.title },
            ]}
          />

          <header className="mt-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-dark">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {service.title} em Porto Alegre
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-orange">
              {siteConfig.primaryCategory} · {siteConfig.serviceArea} · Atendimento a domicílio
            </p>
          </header>

          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">{service.description}</p>

            {detail?.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}

            {!detail && (
              <p className="leading-relaxed text-slate-600">
                A <strong>ServitecPoa</strong> oferece {siteConfig.primaryCategory.toLowerCase()}{" "}
                com diagnóstico preciso, peças originais quando aplicável e{" "}
                <strong>{siteConfig.warranty} de garantia</strong> em todos os serviços.
              </p>
            )}

            {detail && (
              <>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Problemas que resolvemos
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                  {detail.problems.map((problem) => (
                    <li key={problem}>{problem}</li>
                  ))}
                </ul>

                <h2 className="font-display text-2xl font-semibold text-ink">
                  Marcas atendidas
                </h2>
                <p className="text-slate-600">
                  Trabalhamos com <BrandNameList brands={detail.brands} /> e demais marcas
                  compatíveis.{" "}
                  <Link href="/marcas" className="font-semibold text-brand-orange hover:underline">
                    Ver todas as marcas
                  </Link>
                  .
                </p>

                <h2 className="font-display text-2xl font-semibold text-ink">
                  Como funciona o atendimento
                </h2>
                <ol className="list-decimal space-y-4 pl-5 text-slate-600">
                  {detail.process.map((step) => (
                    <li key={step.title}>
                      <strong className="text-ink">{step.title}</strong> — {step.description}
                    </li>
                  ))}
                </ol>

                <h2 className="font-display text-2xl font-semibold text-ink">
                  Por que escolher a ServitecPoa?
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                  <li>{siteConfig.primaryCategory} com atendimento a domicílio</li>
                  <li>Mais de {siteConfig.experience} de experiência em Porto Alegre</li>
                  <li>Especialistas em marcas nacionais e importadas premium</li>
                  <li>CNPJ {siteConfig.cnpjDisplay}</li>
                  <li>Garantia de {siteConfig.warranty} em todos os reparos</li>
                </ul>

                <h2 className="font-display text-2xl font-semibold text-ink">
                  Perguntas frequentes
                </h2>
                {detail.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          <LocalBairroLinks
            pages={localPages}
            title={`${service.title} por bairro em Porto Alegre`}
            description="Selecione seu bairro para ver detalhes do atendimento a domicílio na sua região."
          />

          {brandServiceLinks.length > 0 && (
            <BrandServiceLinks
              pages={brandServiceLinks}
              title={`${service.title} — marcas premium em Porto Alegre`}
            />
          )}

          <section className="mt-6 rounded-2xl border border-ink/8 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Atendemos sua região</h2>
            <p className="mt-2 text-sm text-slate-600">
              Visita técnica em toda Porto Alegre.{" "}
              <Link href="/regioes" className="font-semibold text-brand-orange hover:underline">
                Ver regiões atendidas
              </Link>
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

          <CtaBlock title={`Agendar ${service.title.toLowerCase()} em Porto Alegre`} />

          <p className="mt-8">
            <Link href="/servicos" className="text-sm font-semibold text-brand-orange hover:underline">
              ← Ver todos os serviços
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

function LocalServicePageView({ page }: { page: NonNullable<ReturnType<typeof getLocalServicePage>> }) {
  const service = getServiceBySlug(page.serviceSlug);
  const detail = getServiceDetail(page.serviceSlug);
  const whatsappMessage = encodeURIComponent(
    `Vim pelo site. Gostaria de agendar visita técnica para ${page.serviceTitle} no bairro ${page.bairro.name}.`,
  );
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <>
      <JsonLd data={getLocalServicePageJsonLd(page)} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Serviços", href: "/servicos" },
              ...(service
                ? [{ label: service.title, href: `/servicos/${service.slug}` }]
                : []),
              { label: page.bairro.name },
            ]}
          />

          <header className="mt-8">
            {service && (
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-dark">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </span>
            )}
            <h1 className="mt-6 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-orange">
              {page.bairro.zoneLabel} · Porto Alegre · Atendimento a domicílio
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
                  Problemas que resolvemos em {page.bairro.name}
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-slate-600">
                  {page.problems.map((problem) => (
                    <li key={problem}>{problem}</li>
                  ))}
                </ul>
              </>
            )}

            {detail && (
              <>
                <h2 className="font-display text-2xl font-semibold text-ink">Marcas atendidas</h2>
                <p className="text-slate-600">
                  Trabalhamos com <BrandNameList brands={detail.brands} /> e demais marcas
                  compatíveis em {page.bairro.name}.
                </p>
              </>
            )}

            <h2 className="font-display text-2xl font-semibold text-ink">
              Perguntas frequentes — {page.bairro.name}
            </h2>
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-ink/8 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Região e cobertura</h2>
            <p className="mt-2 text-sm text-slate-600">
              Atendemos {page.bairro.name} e a {page.bairro.zoneLabel}.{" "}
              <Link
                href={`/regioes/${page.bairro.zoneSlug}`}
                className="font-semibold text-brand-orange hover:underline"
              >
                Ver {page.bairro.zoneLabel}
              </Link>
              {getBairroZonePage(page.bairro.slug) ? (
                <>
                  {" "}
                  ou{" "}
                  <Link
                    href={`/regioes/${getBairroZonePage(page.bairro.slug)!.slug}`}
                    className="font-semibold text-brand-orange hover:underline"
                  >
                    página do bairro {page.bairro.name}
                  </Link>
                </>
              ) : null}
              .
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
          </div>

          <CtaBlock
            title={`Agendar ${page.serviceTitle.toLowerCase()} em ${page.bairro.name}`}
            description={`Assistência técnica a domicílio na ${page.bairro.zoneLabel}, Porto Alegre.`}
          />

          {service && (
            <p className="mt-8">
              <Link
                href={`/servicos/${service.slug}`}
                className="text-sm font-semibold text-brand-orange hover:underline"
              >
                ← Ver {service.title} em toda Porto Alegre
              </Link>
            </p>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
