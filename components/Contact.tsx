import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="section-muted py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="panel-dark flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              Contato
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Fale com a ServitecPoa
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Atendimento a domicílio em {siteConfig.serviceArea}. Agende sua visita técnica ou
              fale diretamente conosco.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  WhatsApp e telefone
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-xl font-semibold text-brand-orange hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  CNPJ
                </p>
                <p className="mt-1 text-sm text-white">{siteConfig.cnpjDisplay}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Horários de visita
                </p>
                <ul className="mt-1 space-y-1 text-sm text-slate-300">
                  {siteConfig.hours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <SectionHeading
              label="Agendamento"
              title="Visita técnica a domicílio"
              description="Preencha o formulário com CEP, dados do equipamento e turno preferido. Confirmamos tudo pelo WhatsApp."
              align="left"
            />
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/atendimento-domicilio" className="btn-primary text-center">
                Solicitar atendimento a domicílio
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark text-center"
              >
                WhatsApp direto
              </a>
              <a href={`tel:+55${siteConfig.phone}`} className="btn-outline-dark text-center">
                Ligar — {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
