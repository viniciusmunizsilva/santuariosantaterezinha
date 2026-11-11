import type { CSSProperties } from "react";
import { Divider } from "@/components/ornaments/Divider";
import { Rose } from "@/components/ornaments/Rose";
import { RoseSpray } from "@/components/ornaments/RoseSpray";

const teachings = [
  {
    title: "A pequena via",
    text: "Um caminho de santidade ao alcance de todos: viver as pequenas coisas de cada dia com grande amor, sem buscar feitos extraordinários.",
  },
  {
    title: "Confiança",
    text: "Reconhecer-se pequeno e abandonar-se, como uma criança, nos braços do Pai — certo de que a sua misericórdia é maior que toda fraqueza.",
  },
  {
    title: "Simplicidade",
    text: "Uma vida escondida no Carmelo, feita de oração, silêncio e delicadeza com quem estava ao seu lado.",
  },
  {
    title: "As rosas",
    text: "Teresinha prometeu fazer cair do céu uma chuva de rosas. Por isso a rosa tornou-se sinal das graças alcançadas por sua intercessão.",
  },
];

const milestones = [
  { year: "1873", label: "Nasce em Alençon, na França" },
  { year: "1888", label: "Entra no Carmelo de Lisieux" },
  { year: "1925", label: "É canonizada pelo Papa Pio XI" },
  { year: "1997", label: "É proclamada Doutora da Igreja" },
];

export function Teresinha() {
  return (
    <section
      id="santa-teresinha"
      aria-labelledby="teresinha-titulo"
      className="on-dark section relative overflow-clip bg-wine text-ivory/85"
    >
      {/* atmosfera: luz dourada e rosa ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgb(179_148_86/0.28),transparent_70%),radial-gradient(45%_40%_at_8%_100%,rgb(232_183_180/0.16),transparent_70%),linear-gradient(180deg,var(--color-wine),var(--color-wine-deep))]"
      />
      <Rose
        variant="line"
        hairline
        className="pointer-events-none absolute -top-40 -right-40 size-[38rem] text-gold/30"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="shell relative">
        {/* Título — citação */}
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow !text-gold-soft">Santa Teresinha do Menino Jesus</p>
          <h2
            id="teresinha-titulo"
            className="mt-6 text-[2.5rem] leading-[1.1] font-medium text-ivory italic sm:text-6xl lg:text-[4.25rem]"
          >
            <span className="text-gold-soft" aria-hidden="true">“</span>
            Fazei-me amar a Deus como Ele merece ser amado.
            <span className="text-gold-soft" aria-hidden="true">”</span>
          </h2>
          <Divider tone="light" className="mt-8" />
        </div>

        <div className="mt-16 grid items-center gap-14 lg:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Medalhão — a rosa de Santa Teresinha */}
          <div
            data-reveal="scale"
            aria-hidden="true"
            className="relative mx-auto w-full max-w-[20rem] lg:max-w-none"
          >
            <div className="parallax-soft relative mx-auto aspect-[4/5] w-[84%]">
              <div className="halo absolute -inset-[9%] rounded-[50%] border border-gold/40" />
              <div className="absolute -inset-[4.5%] rounded-[50%] border border-dashed border-gold-soft/40" />
              <div className="relative grid size-full place-items-center overflow-hidden rounded-[50%] border-2 border-gold bg-[radial-gradient(70%_60%_at_50%_38%,#fffaf0,var(--color-ivory)_55%,var(--color-parchment))] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)]">
                <Rose
                  variant="line"
                  hairline
                  className="absolute size-[135%] text-gold/35"
                />
                <Rose className="relative w-[62%] drop-shadow-[0_14px_18px_rgb(101_30_39/0.25)]" />
              </div>
              <RoseSpray className="pointer-events-none absolute -bottom-[10%] -left-[22%] w-[64%] drop-shadow-[0_10px_14px_rgb(0_0_0/0.3)]" />
              <RoseSpray className="pointer-events-none absolute -top-[9%] -right-[20%] w-[50%] rotate-180 drop-shadow-[0_10px_14px_rgb(0_0_0/0.3)]" />
            </div>
          </div>

          {/* Texto */}
          <div>
            <div data-reveal className="space-y-5 text-[1.08rem] leading-relaxed">
              <p>
                <span className="float-left mt-1.5 mr-3 font-serif text-[4.6rem] leading-[0.72] font-medium text-gold-soft">
                  T
                </span>
                eresa Martin nasceu em Alençon, na França, em 1873, e aos quinze
                anos entrou no Carmelo de Lisieux. Ali viveu uma vida escondida,
                de oração e de pequenos gestos, até partir para o céu aos vinte
                e quatro anos, em 1897.
              </p>
              <p>
                Em seus escritos, reunidos em{" "}
                <cite className="text-ivory">História de uma Alma</cite>, deixou
                à Igreja um caminho simples e luminoso para chegar a Deus: o
                amor vivido nas pequenas coisas e a confiança sem limites na
                misericórdia do Pai.
              </p>
            </div>

            <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {teachings.map((item, index) => (
                <li
                  key={item.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                  className="border-t border-gold/35 pt-5"
                >
                  <h3 className="flex items-center gap-3 text-2xl font-semibold text-ivory">
                    <Rose variant="line" className="size-5 shrink-0 text-gold-soft" />
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/75">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Citação em destaque */}
        <figure
          data-reveal
          className="relative mx-auto mt-20 max-w-3xl rounded-[2rem] border border-gold/40 bg-white/[0.04] px-7 py-12 text-center sm:px-14 lg:mt-24"
        >
          <Rose className="absolute -top-7 left-1/2 size-14 -translate-x-1/2" />
          <blockquote className="font-serif text-[1.75rem] leading-snug text-ivory italic sm:text-4xl">
            “Vou passar o meu céu fazendo o bem sobre a terra.”
          </blockquote>
          <figcaption className="mt-5 text-xs font-semibold tracking-[0.24em] text-gold-soft uppercase">
            Santa Teresinha do Menino Jesus
          </figcaption>
        </figure>

        {/* Marcos */}
        <ol className="mt-16 grid grid-cols-2 gap-x-5 gap-y-10 text-center lg:grid-cols-4">
          {milestones.map((item, index) => (
            <li
              key={item.year}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <p className="font-serif text-[2.6rem] font-medium text-gold-soft sm:text-5xl">
                {item.year}
              </p>
              <p className="mt-2 text-sm text-ivory/75">{item.label}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-center font-serif text-lg text-ivory/80 italic">
          Sua festa é celebrada em 1º de outubro.
        </p>
      </div>
    </section>
  );
}
