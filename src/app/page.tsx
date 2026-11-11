import { Intro } from "@/components/effects/Intro";
import { Petals } from "@/components/effects/Petals";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { MassTimes } from "@/components/sections/MassTimes";
import { Teresinha } from "@/components/sections/Teresinha";

export default function HomePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:rounded-full focus:bg-wine focus:px-5 focus:py-3 focus:text-ivory"
      >
        Pular para o conteúdo
      </a>

      <Intro />
      <Petals />
      <ScrollReveal />

      <div id="top-sentinel" aria-hidden="true" className="absolute top-0 h-6 w-px" />
      <Header />

      <main id="conteudo">
        <Hero />
        <About />
        <Teresinha />
        <MassTimes />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
