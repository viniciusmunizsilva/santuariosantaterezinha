import Image from "next/image";
import portrait from "@/assets/santa-terezinha-retrato.jpg";
import { Botanical } from "@/components/ornaments/Botanical";

export function Terezinha() {
  return (
    <section
      id="santa-terezinha"
      aria-labelledby="terezinha-titulo"
      className="relative overflow-clip py-24 sm:py-32 lg:py-40"
    >
      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-24">
        {/* Retrato histórico em nicho, com a rosa de Redouté */}
        <figure data-reveal className="relative mx-auto w-full max-w-[19rem] lg:max-w-[23rem]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-wine-night outline outline-1 outline-offset-[7px] outline-gold/60">
            <Image
              src={portrait}
              alt="Fotografia histórica de Santa Terezinha do Menino Jesus com o hábito carmelita"
              fill
              sizes="(min-width: 1024px) 23rem, 19rem"
              placeholder="blur"
              className="object-cover object-[50%_25%] [filter:sepia(0.5)_contrast(1.05)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(44_11_17/0.6))]"
            />
          </div>
          <Botanical
            sizes="240px"
            className="absolute -right-[32%] -bottom-[14%] h-auto w-[62%] rotate-[8deg] lg:-right-[38%]"
          />
          <figcaption className="mt-7 max-w-[60%] text-xs leading-relaxed text-ink-soft">
            Teresa no Carmelo de Lisieux — fotografia histórica.
          </figcaption>
        </figure>

        <div data-reveal>
          <p className="eyebrow">Santa Terezinha do Menino Jesus</p>
          <h2 id="terezinha-titulo" className="h-section mt-5 text-wine">
            Uma vida que floresceu em <em>amor.</em>
          </h2>

          <div className="mt-9 max-w-xl space-y-5 text-[1.06rem] leading-[1.75] text-ink-soft">
            <p>
              Teresa Martin nasceu em Alençon, na França, em 1873. Aos quinze
              anos entrou no Carmelo de Lisieux, onde viveu em oração e
              simplicidade até partir, aos 24 anos, em 1897.
            </p>
            <p>
              Ali descobriu a sua “pequena via”: chegar a Deus com a confiança
              de uma criança, fazendo as pequenas coisas de cada dia com grande
              amor.
            </p>
            <p>
              Prometeu fazer cair do céu uma chuva de rosas — e a rosa tornou-se
              sinal das graças alcançadas por sua intercessão. Canonizada em
              1925, é Doutora da Igreja desde 1997.
            </p>
          </div>

          <figure className="mt-10 max-w-xl border-t border-gold/60 pt-8">
            <blockquote className="font-serif text-[1.9rem] leading-[1.15] text-wine italic sm:text-[2.4rem]">
              “Vou passar o meu céu fazendo o bem sobre a terra.”
            </blockquote>
            <figcaption className="eyebrow mt-4">Santa Terezinha</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
