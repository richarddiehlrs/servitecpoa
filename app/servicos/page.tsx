import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ServiceIcon } from "@/components/icons";
import { getServicosWebPageJsonLd, getServicesItemListJsonLd } from "@/lib/json-ld";
import { seoKeywords, seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Serviços de assistência técnica em Porto Alegre",
  description:
    "Conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas e linha premium a domicílio em Porto Alegre. ServitecPoa — garantia de 90 dias.",
  keywords: [...seoKeywords],
  alternates: {
    canonical: `${siteConfig.url}/servicos`,
  },
  openGraph: {
    title: "Serviços | ServitecPoa — Eletrodomésticos Porto Alegre",
    description:
      "Assistência técnica profissional a domicílio. Nacionais e importados premium.",
    url: `${siteConfig.url}/servicos`,
  },
};

export default function ServicosPage() {
  return (
    <>
      <JsonLd data={[getServicosWebPageJsonLd(), getServicesItemListJsonLd()]} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-orange">
              Início
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Serviços</span>
          </nav>

          <header className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Serviços profissionais
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Assistência técnica em eletrodomésticos
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Atendimento <strong>a domicílio</strong> em {siteConfig.serviceArea}. Técnicos
              qualificados, peças originais e garantia de {siteConfig.warranty} em todos os
              reparos.
            </p>
          </header>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="card-light group flex h-full flex-col p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-semibold text-ink group-hover:text-brand-orange">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-brand-orange">
                    Ver detalhes →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-3xl bg-ink p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-white">
              Agende visita técnica a domicílio
            </h2>
            <p className="mt-2 text-slate-400">{siteConfig.phoneDisplay}</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/#solicitar-atendimento" className="btn-primary">
                Solicitar atendimento
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
