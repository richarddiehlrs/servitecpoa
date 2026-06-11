import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/lib/content/blog";
import { getBreadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — dicas de assistência técnica em Porto Alegre",
  description:
    "Artigos sobre conserto de eletrodomésticos, manutenção preventiva e dicas para Porto Alegre. Blog ServitecPoa.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Início", item: siteConfig.url },
          { name: "Blog", item: `${siteConfig.url}/blog` },
        ])}
      />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Blog" }]} />

          <header className="mt-6 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Blog ServitecPoa
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
              Dicas de assistência técnica de eletrodomésticos
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Conteúdo útil sobre conserto, manutenção e cuidados com eletrodomésticos em Porto
              Alegre e região.
            </p>
          </header>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card-light group flex h-full flex-col p-6">
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                    {" · "}
                    {post.readTime}
                  </time>
                  <h2 className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-brand-orange">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-brand-orange">
                    Ler artigo →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
