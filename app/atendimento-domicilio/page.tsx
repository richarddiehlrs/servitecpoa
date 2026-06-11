import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Atendimento a domicílio — assistência técnica Porto Alegre",
  description:
    "Agende visita técnica a domicílio em Porto Alegre. Assistência técnica de eletrodomésticos. Preencha o formulário ou fale pelo WhatsApp.",
  path: "/atendimento-domicilio",
});

const steps = [
  {
    step: "01",
    title: "Preencha o formulário",
    description:
      "Informe seus dados, CEP e detalhes do equipamento. O endereço é preenchido automaticamente pelo CEP.",
  },
  {
    step: "02",
    title: "Confirme no WhatsApp",
    description:
      "Abrimos uma conversa com sua solicitação organizada. Basta confirmar o envio para agendar.",
  },
  {
    step: "03",
    title: "Visita técnica no local",
    description:
      "Nosso técnico vai até sua residência no turno escolhido para diagnóstico e reparo com peças originais.",
  },
];

export default function AtendimentoDomicilioPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Início", item: siteConfig.url },
          { name: "Atendimento a domicílio", item: `${siteConfig.url}/atendimento-domicilio` },
        ])}
      />
      <Header />
      <main className="section-surface pt-28">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Atendimento a domicílio" },
            ]}
          />

          <header className="panel-dark relative mt-8 overflow-hidden p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Visita técnica no seu endereço
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Assistência técnica de eletrodomésticos a domicílio
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Toda assistência da ServitecPoa é realizada no conforto da sua casa em{" "}
              <strong className="font-medium text-white">{siteConfig.serviceArea}</strong>.
              Preencha o formulário abaixo ou fale diretamente pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#formulario" className="btn-primary">
                Preencher formulário
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light text-center"
              >
                WhatsApp {siteConfig.phoneDisplay}
              </a>
            </div>
          </header>

          <section className="mt-16" aria-labelledby="como-funciona">
            <SectionHeading
              label="Como funciona"
              title="Agendamento simples e transparente"
              description="Em poucos passos você solicita a visita técnica sem sair de casa."
              align="left"
            />
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <li key={item.step} className="card-elevated relative p-8">
                  <span className="font-display text-4xl font-light text-cream-dark">
                    {item.step}
                  </span>
                  <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="Informações do atendimento"
          >
            {[
              { label: "Área", value: siteConfig.serviceArea },
              { label: "Manhã", value: siteConfig.shiftMorning },
              { label: "Tarde", value: siteConfig.shiftAfternoon },
              { label: "Garantia", value: siteConfig.warranty },
            ].map((item) => (
              <div key={item.label} className="card-elevated px-5 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </section>

          <section id="formulario" className="mt-20 scroll-mt-28">
            <SectionHeading
              label="Formulário"
              title="Dados para agendar a visita"
              description="Campos com * são obrigatórios. Após enviar, você será direcionado ao WhatsApp para confirmar o agendamento."
              align="left"
            />
            <div className="mt-10">
              <ContactForm showHeader={false} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
