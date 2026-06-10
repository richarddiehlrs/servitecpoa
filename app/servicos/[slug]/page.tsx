import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ServiceIcon } from "@/components/icons";
import { getServicePageJsonLd } from "@/lib/json-ld";
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

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `${siteConfig.url}/servicos/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${siteConfig.url}/servicos/${service.slug}`,
    },
  };
}

export default async function ServicoDetalhePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const whatsappMessage = encodeURIComponent(
    `Vim pelo site. Gostaria de agendar visita técnica para: ${service.title}.`,
  );
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <>
      <JsonLd data={getServicePageJsonLd(service)} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-orange">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link href="/servicos" className="hover:text-brand-orange">
              Serviços
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{service.title}</span>
          </nav>

          <header className="mt-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-dark">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold text-ink sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-orange">
              Porto Alegre e Região Metropolitana · Atendimento a domicílio
            </p>
          </header>

          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">{service.description}</p>
            <p className="leading-relaxed text-slate-600">
              A <strong>ServitecPoa</strong> oferece assistência técnica profissional com
              diagnóstico preciso, peças originais quando aplicável e{" "}
              <strong>{siteConfig.warranty} de garantia</strong> em todos os serviços. Nossos
              técnicos vão até sua residência em {siteConfig.serviceArea}, nos turnos da{" "}
              {siteConfig.shiftMorning} ou {siteConfig.shiftAfternoon}.
            </p>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Por que escolher a ServitecPoa?
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-600">
              <li>Atendimento a domicílio em Porto Alegre e RMS</li>
              <li>Especialistas em marcas nacionais e importadas premium</li>
              <li>Mais de {siteConfig.experience} de experiência</li>
              <li>CNPJ {siteConfig.cnpjDisplay}</li>
            </ul>
          </div>

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
