import Link from "next/link";
import { ServiceIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { seoServices } from "@/lib/seo";

export function Services() {
  return (
    <section id="servicos" className="section-dark py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Serviços"
          title="Soluções completas para seu lar"
          description="Do diagnóstico à instalação, cuidamos de cada detalhe com rigor técnico e agilidade em Porto Alegre."
          theme="dark"
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/servicos/${service.slug}`}
                className="card-dark group block p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-orange/20 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white group-hover:text-brand-orange">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold text-brand-orange">
                  Saiba mais →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center">
          <Link
            href="/servicos"
            className="text-sm font-semibold text-brand-orange hover:underline"
          >
            Ver página completa de serviços
          </Link>
        </p>
      </div>
    </section>
  );
}
