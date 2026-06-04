import { Brands } from "@/components/Brands";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Brands />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
