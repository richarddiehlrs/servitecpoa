import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a ServitecPoa — assistência técnica em Porto Alegre",
  description:
    "Conheça a ServitecPoa: assistência técnica de eletrodomésticos em Porto Alegre com 15+ anos de experiência, atendimento a domicílio e garantia de 90 dias.",
  path: "/sobre",
});

const values = [
  {
    title: "Experiência comprovada",
    description: `Mais de ${siteConfig.experience} atuando em assistência técnica de eletrodomésticos em Porto Alegre.`,
  },
  {
    title: "Atendimento a domicílio",
    description:
      "Toda assistência é realizada no conforto da sua casa, com agendamento nos turnos da manhã e tarde.",
  },
  {
    title: "Linha nacional e premium",
    description:
      "Especialização em marcas nacionais e importadas como Bertazzoni, Sub-Zero, Gorenje, Falmec e demais.",
  },
  {
    title: "Garantia e transparência",
    description: `Todos os reparos possuem garantia de ${siteConfig.warranty} e orçamento apresentado antes do serviço.`,
  },
];

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Início", item: siteConfig.url },
          { name: "Sobre", item: `${siteConfig.url}/sobre` },
        ])}
      />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Quem somos
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              ServitecPoa — assistência técnica de eletrodomésticos
            </h1>
            <p className="mt-2 text-lg font-medium text-brand-orange">
              {siteConfig.primaryCategory} · {siteConfig.serviceArea}
            </p>
          </header>

          <div className="prose prose-slate mt-8 max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">
              A <strong>ServitecPoa</strong> é uma empresa especializada em{" "}
              {siteConfig.primaryCategory.toLowerCase()} em Porto Alegre.
              Atuamos com foco em conserto, manutenção e instalação de eletrodomésticos nacionais e
              importados premium, sempre com atendimento a domicílio.
            </p>
            <p className="leading-relaxed text-slate-600">
              Nossa equipe reúne técnicos qualificados com experiência em refrigeradores, máquinas
              de lavar, lava e seca, coifas, adegas climatizadas, cooktops e fornos embutidos.
              Trabalhamos com diagnóstico preciso, peças originais quando aplicável e comunicação
              transparente sobre prazos e valores.
            </p>
            <p className="leading-relaxed text-slate-600">
              Empresa formalizada com CNPJ {siteConfig.cnpjDisplay}, atendemos de segunda a sábado
              nos horários {siteConfig.shiftMorning} e {siteConfig.shiftAfternoon}. Cada serviço
              inclui garantia de {siteConfig.warranty}.
            </p>
          </div>

          <section className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6">
                <h2 className="font-display text-xl font-semibold text-ink">{value.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-ink">Navegue pelo site</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {[
                { href: "/servicos", label: "Serviços" },
                { href: "/marcas", label: "Marcas" },
                { href: "/regioes", label: "Regiões" },
                { href: "/blog", label: "Blog" },
                { href: "/atendimento-domicilio", label: "Agendar visita" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-orange hover:text-brand-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <CtaBlock />
        </article>
      </main>
      <Footer />
    </>
  );
}
