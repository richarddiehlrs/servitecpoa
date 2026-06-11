import { siteConfig } from "@/lib/site";

export function Reviews() {
  const { reviews, social } = siteConfig;
  const hasRating = reviews.reviewCount > 0;

  return (
    <section id="avaliacoes" className="section-muted py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Avaliações
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
            O que dizem nossos clientes em Porto Alegre
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Confiança construída com atendimento técnico de qualidade. Veja avaliações no Google
            Meu Negócio e deixe a sua após o serviço.
          </p>
          {hasRating && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white px-6 py-3 shadow-elegant">
              <span className="text-2xl font-bold text-brand-orange">
                {reviews.ratingValue.toFixed(1)}
              </span>
              <div className="text-left text-sm">
                <p className="font-semibold text-ink">Google Meu Negócio</p>
                <p className="text-slate-500">{reviews.reviewCount} avaliações</p>
              </div>
            </div>
          )}
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.highlights.map((quote) => (
            <li key={quote} className="card-elevated p-7">
              <div className="flex gap-1 text-gold-dark" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Cliente ServitecPoa · Google
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex"
          >
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
