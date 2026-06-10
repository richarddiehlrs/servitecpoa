import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { WaveDivider } from "@/components/WaveDivider";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Vídeo no navy */}
      <div className="relative bg-navy-deep">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-gold/8 blur-[100px]" />
        <HeroVideo />
      </div>

      {/* Onda: transição navy → creme */}
      <WaveDivider />

      {/* Conteúdo principal — creme com texto escuro (alto contraste) */}
      <div className="relative bg-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgb(201 164 92 / 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgb(21 34 56 / 0.06) 0%, transparent 40%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-8 lg:pt-14">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">
                <span className="accent-line" aria-hidden />
                Porto Alegre · Atendimento a domicílio
              </p>

              <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Consertos em
                <span className="mt-2 block text-brand-orange">eletrodomésticos</span>
                <span className="mt-3 block text-2xl font-medium text-slate-700 sm:text-3xl">
                  com excelência técnica
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
                Assistência especializada em marcas nacionais e importadas premium.
                Peças originais, técnicos certificados e{" "}
                <strong className="font-semibold text-ink">{siteConfig.warranty} de garantia</strong> em
                cada serviço.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/atendimento-domicilio" className="btn-primary">
                  Solicitar atendimento
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="panel-dark relative p-8 lg:p-9">
                <div
                  className="absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                  aria-hidden
                />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
                  ServitecPoa
                </p>
                <p className="mt-4 font-display text-2xl font-semibold leading-snug text-white">
                  Sua assistência de confiança para linha residencial e premium.
                </p>

                <dl className="mt-8 space-y-5 border-t border-white/15 pt-8">
                  {[
                    { label: "Experiência", value: siteConfig.experience },
                    { label: "Garantia nos reparos", value: siteConfig.warranty },
                    { label: "CNPJ", value: siteConfig.cnpjDisplay },
                    { label: "Cobertura", value: siteConfig.serviceArea },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline justify-between gap-4">
                      <dt className="text-sm font-medium text-slate-300">{item.label}</dt>
                      <dd className="text-right text-sm font-bold text-white">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Nacionais", "Importados", "Domicílio", "Peças originais"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 hidden items-center justify-center gap-8 rounded-2xl border border-ink/8 bg-white/70 px-8 py-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-elegant sm:flex">
            <span>Electrolux</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Samsung</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Bertazzoni</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Sub-Zero</span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span>Brastemp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
