import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ServiceIcon } from "@/components/icons";
import { getServiceDetail } from "@/lib/content/service-details";
import { getFaqJsonLd, getServicePageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { getServiceBySlug, seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const detail = getServiceDetail(slug);
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
                  Trabalhamos com {detail.brands.join(", ")} e demais marcas compatíveis.{" "}
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

          <section className="mt-10 rounded-2xl border border-ink/8 bg-white p-6">
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
