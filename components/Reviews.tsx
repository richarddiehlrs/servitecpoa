import { siteConfig } from "@/lib/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-gold-dark" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function Reviews() {
  const { reviews, social } = siteConfig;
  const hasGoogleRating = reviews.reviewCount > 0;

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
            Depoimentos de clientes atendidos a domicílio. Confira também as avaliações públicas no
            Google Meu Negócio e deixe a sua após o serviço.
          </p>
          {hasGoogleRating ? (
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-white px-6 py-3 shadow-elegant">
              <span className="text-2xl font-bold text-brand-orange">
                {reviews.ratingValue.toFixed(1)}
              </span>
              <div className="text-left text-sm">
                <p className="font-semibold text-ink">Google Meu Negócio</p>
                <p className="text-slate-500">{reviews.reviewCount} avaliações verificadas</p>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm text-slate-500">
              Veja e deixe sua avaliação no perfil oficial da ServitecPoa no Google.
            </p>
          )}
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.items.map((review) => (
            <li key={`${review.author}-${review.location}`} className="card-elevated p-7">
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-ink">{review.author}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {review.location} · Porto Alegre
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex"
          >
            Ver avaliações no Google
          </a>
          <a
            href={social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-orange hover:underline"
          >
            Deixar minha avaliação →
          </a>
        </div>
      </div>
    </section>
  );
}
