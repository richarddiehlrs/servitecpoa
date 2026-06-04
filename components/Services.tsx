import { ServiceIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="section-dark py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Serviços"
          title="Soluções completas para seu lar"
          description="Do diagnóstico à instalação, cuidamos de cada detalhe com rigor técnico e agilidade."
          theme="dark"
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="card-dark group p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-orange/20 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
