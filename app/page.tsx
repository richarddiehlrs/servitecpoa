import type { Metadata } from "next";
import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocalAreas } from "@/components/LocalAreas";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Assistência Técnica de Eletrodomésticos em Porto Alegre",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Brands />
        <LocalAreas />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
