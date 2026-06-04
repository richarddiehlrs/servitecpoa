import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="section-light py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,340px)_1fr] xl:gap-16">
          <aside>
            <SectionHeading
              label="Contato"
              title="Atendemos a domicílio"
              description="Toda assistência é realizada no seu endereço em Porto Alegre e região metropolitana. Preencha o formulário ou fale diretamente conosco."
              align="left"
            />

            <div className="mt-10 space-y-6">
              <InfoCard
                title="WhatsApp e telefone"
                content={
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-brand-orange hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                }
              />
              <InfoCard title="CNPJ" content={siteConfig.cnpjDisplay} />
              <InfoCard title="Área de atendimento" content={siteConfig.serviceArea} />
              <InfoCard
                title="Horários de visita"
                content={
                  <ul className="mt-1 space-y-1 text-sm text-slate-300">
                    {siteConfig.hours.map((hour) => (
                      <li key={hour}>{hour}</li>
                    ))}
                  </ul>
                }
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row xl:flex-col">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                WhatsApp direto
              </a>
              <a href={`tel:+55${siteConfig.phone}`} className="btn-outline-dark text-center">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-ink px-5 py-4 text-slate-300 shadow-elegant">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{title}</p>
      <div className="mt-2 text-sm text-white">{content}</div>
    </div>
  );
}
