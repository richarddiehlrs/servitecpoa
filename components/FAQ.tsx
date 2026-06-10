import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="section-surface py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Perguntas frequentes"
          description="Esclarecemos as principais dúvidas sobre nossos serviços de assistência técnica."
        />

        <div className="mt-14 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-elegant">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg font-medium text-ink group-open:text-brand-orange">
                  {faq.question}
                </span>
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 text-slate-500 transition group-open:rotate-45 group-open:border-brand-orange group-open:text-brand-orange"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-12 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
