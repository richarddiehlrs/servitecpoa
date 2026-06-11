import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBlock } from "@/components/CtaBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getBlogPostBySlug } from "@/lib/content/blog";
import { getBlogPostJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { seoServices } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedServices = seoServices.filter((s) =>
    post.relatedServices.includes(s.slug),
  );

  return (
    <>
      <JsonLd data={getBlogPostJsonLd(post)} />
      <Header />
      <main className="bg-cream pt-28">
        <article className="mx-auto max-w-3xl px-5 py-12 lg:px-8 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <header className="mt-8">
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
              {post.readTime} de leitura
            </time>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
          </header>

          <div className="prose prose-slate mt-10 max-w-none">
            {post.sections.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-semibold text-ink">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {relatedServices.length > 0 && (
            <section className="mt-10 rounded-2xl border border-ink/8 bg-white p-6">
              <h2 className="font-display text-lg font-semibold text-ink">
                Serviços relacionados
              </h2>
              <ul className="mt-3 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="text-sm font-semibold text-brand-orange hover:underline"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <CtaBlock />

          <p className="mt-8">
            <Link href="/blog" className="text-sm font-semibold text-brand-orange hover:underline">
              ← Voltar ao blog
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
