import Link from "next/link";
import { nobleBairros, poaZones, rmsCities } from "@/lib/content/zones";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocalAreas() {
  return (
    <section id="regioes" className="section-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Cobertura"
          title="Atendemos Porto Alegre e Região Metropolitana"
          description="Assistência técnica de eletrodomésticos a domicílio nos bairros nobres, em todas as zonas de Porto Alegre e principais cidades da RMS."
        />

        <div className="mt-14">
          <h3 className="font-display text-xl font-semibold text-ink">
            Bairros nobres
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nobleBairros.map((zone) => (
              <li key={zone.slug}>
                <Link
                  href={`/regioes/${zone.slug}`}
                  className="card-light block px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-orange/40 hover:text-brand-orange"
                >
                  {zone.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">Zonas de Porto Alegre</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {poaZones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/regioes/${zone.slug}`}
                    className="card-light block px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-orange/40 hover:text-brand-orange"
                  >
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-ink">Região Metropolitana</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {rmsCities.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/regioes/${zone.slug}`}
                    className="card-light block px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-brand-orange/40 hover:text-brand-orange"
                  >
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/regioes"
            className="text-sm font-semibold text-brand-orange hover:underline"
          >
            Ver todas as regiões e bairros atendidos →
          </Link>
        </p>
      </div>
    </section>
  );
}
