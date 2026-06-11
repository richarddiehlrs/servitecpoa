import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ServiceIcon } from "@/components/icons";
import { getServicosWebPageJsonLd, getServicesItemListJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços de assistência técnica de eletrodomésticos em Porto Alegre",
  description:
    "Conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas e linha premium a domicílio em Porto Alegre. ServitecPoa — garantia de 90 dias.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <JsonLd data={[getServicosWebPageJsonLd(), getServicesItemListJsonLd()]} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Serviços" }]} />

          <header className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Serviços profissionais
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Assistência técnica de eletrodomésticos em Porto Alegre
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {siteConfig.primaryCategory} com atendimento <strong>a domicílio</strong> em{" "}
              {siteConfig.serviceArea}. Técnicos qualificados, peças originais e garantia de{" "}
              {siteConfig.warranty} em todos os reparos.
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

          <CtaBlock />
        </article>
      </main>
      <Footer />
    </>
  );
}
