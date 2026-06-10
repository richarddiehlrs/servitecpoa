import Link from "next/link";
import { ServiceIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { seoServices } from "@/lib/seo";

export function Services() {
  return (
    <section id="servicos" className="section-services py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Serviços"
          title="Soluções completas para seu lar"
          description="Do diagnóstico à instalação, cuidamos de cada detalhe com rigor técnico e agilidade em Porto Alegre."
          theme="dark"
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {seoServices.map((service) => (
            <li key={service.slug}>
              <Link href={`/servicos/${service.slug}`} className="card-service group block p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-light transition group-hover:bg-brand-orange group-hover:text-white">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink group-hover:text-brand-orange">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-gold-dark group-hover:text-brand-orange">
                  Saiba mais
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="relative mt-12 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-gold-light backdrop-blur-sm transition hover:border-gold hover:bg-white/15 hover:text-white"
          >
            Ver página completa de serviços
          </Link>
        </p>
      </div>
    </section>
  );
}
