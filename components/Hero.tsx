import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-ink bg-grid-pattern bg-grid text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-orange/8 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-blue-soft/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-28 lg:px-8 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              <span className="h-px w-8 bg-brand-orange" aria-hidden />
              Porto Alegre · Atendimento a domicílio
            </p>

            <h1 className="mt-8 font-display text-[2.75rem] font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Consertos em
              <span className="mt-2 block text-brand-orange">eletrodomésticos</span>
              <span className="mt-3 block text-3xl font-normal text-slate-400 sm:text-4xl">
                com excelência técnica
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
              Assistência especializada em marcas nacionais e importadas premium.
              Peças originais, técnicos certificados e{" "}
              <span className="text-white">{siteConfig.warranty} de garantia</span> em cada
              serviço.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#solicitar-atendimento" className="btn-primary">
                Solicitar atendimento
              </a>
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

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-ink-light/60 p-8 backdrop-blur-md lg:p-10">
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-brand-orange/30" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                ServitecPoa
              </p>
              <p className="mt-4 font-display text-2xl leading-snug text-white">
                Sua assistência de confiança para linha residencial e premium.
              </p>

              <dl className="mt-8 space-y-5 border-t border-white/10 pt-8">
                {[
                  { label: "Experiência", value: siteConfig.experience },
                  { label: "Garantia nos reparos", value: siteConfig.warranty },
                  { label: "CNPJ", value: siteConfig.cnpjDisplay },
                  { label: "Cobertura", value: siteConfig.serviceArea },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-sm text-slate-500">{item.label}</dt>
                    <dd className="text-right text-sm font-semibold text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Nacionais", "Importados", "Domicílio", "Peças originais"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden items-center gap-8 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.15em] text-slate-600 sm:flex">
          <span>Electrolux</span>
          <span className="h-1 w-1 rounded-full bg-brand-orange" />
          <span>Samsung</span>
          <span className="h-1 w-1 rounded-full bg-brand-orange" />
          <span>Bertazzoni</span>
          <span className="h-1 w-1 rounded-full bg-brand-orange" />
          <span>Sub-Zero</span>
          <span className="h-1 w-1 rounded-full bg-brand-orange" />
          <span>Brastemp</span>
        </div>
      </div>
    </section>
  );
}
