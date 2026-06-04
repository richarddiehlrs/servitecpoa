import { FeatureIcon, type FeatureIconKey } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features: {
  num: string;
  title: string;
  description: string;
  icon: FeatureIconKey;
}[] = [
  {
    num: "01",
    title: "Atendimento a domicílio",
    description:
      "Técnico especializado vai até sua residência em Porto Alegre e região metropolitana para diagnóstico e reparo.",
    icon: "home",
  },
  {
    num: "02",
    title: "Peças originais",
    description:
      "Priorizamos componentes originais e de primeira linha, especialmente em marcas importadas e linha premium.",
    icon: "check",
  },
  {
    num: "03",
    title: "Garantia de 90 dias",
    description:
      "Todos os serviços realizados possuem garantia formal, assegurando qualidade e sua tranquilidade.",
    icon: "shield",
  },
  {
    num: "04",
    title: "Técnicos qualificados",
    description:
      "Equipe com mais de 15 anos de experiência em assistência técnica de eletrodomésticos.",
    icon: "tool",
  },
  {
    num: "05",
    title: "Nacionais e importados",
    description:
      "Especialização em Bertazzoni, Sub-Zero, Gorenje, Electrolux, Samsung, LG e demais marcas.",
    icon: "globe",
  },
  {
    num: "06",
    title: "Orçamento transparente",
    description:
      "Diagnóstico claro e comunicação honesta sobre prazos, valores e necessidade de peças.",
    icon: "document",
  },
];

export function Features() {
  return (
    <section id="diferenciais" className="section-light py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Nossa expertise"
          title="Assistência técnica com padrão premium"
          description="Combinamos experiência, transparência e atendimento personalizado para devolver o funcionamento dos seus eletrodomésticos com segurança."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li key={feature.num} className="card-light group p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                  <FeatureIcon name={feature.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-4xl font-light text-slate-200">
                  {feature.num}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
