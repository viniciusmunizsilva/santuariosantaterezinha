import { RoseSpray } from "@/components/ornaments/RoseSpray";
import { SanctuaryIllustration } from "@/components/ornaments/SanctuaryIllustration";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const pillars = [
  {
    title: "Acolher",
    text: "Portas abertas a quem chega, em qualquer momento da caminhada.",
  },
  {
    title: "Celebrar",
    text: "A Santa Missa todos os dias, coração da vida do Santuário.",
  },
  {
    title: "Confiar",
    text: "Com Santa Teresinha, aprender o caminho da confiança em Deus.",
  },
];

export function About() {
  return (
    <section
      id="santuario"
      aria-labelledby="santuario-titulo"
      className="section overflow-clip"
    >
      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        {/* Composição visual */}
        <div data-reveal="left" className="relative order-last mx-auto w-full max-w-md lg:order-none lg:max-w-none">
          <div className="parallax-soft relative">
            <div className="relative overflow-hidden rounded-t-[999px] rounded-b-3xl border border-gold/50 bg-gradient-to-b from-white via-ivory to-ivory-deep p-3 shadow-[var(--shadow-lift)]">
              <div className="relative grid aspect-[5/6] place-items-end overflow-hidden rounded-t-[999px] rounded-b-2xl border border-gold/30 bg-[radial-gradient(90%_60%_at_70%_18%,#fff7e4,transparent_70%)] px-3 pb-6">
                <SanctuaryIllustration className="w-full text-wine" />
              </div>
            </div>
            <RoseSpray className="pointer-events-none absolute -bottom-10 -left-8 w-40 sm:-left-14 sm:w-52" />
          </div>
          <p className="mt-12 text-center font-serif text-lg text-ink-soft italic lg:text-left lg:pl-36">
            {site.city} — {site.state}
          </p>
        </div>

        {/* Texto */}
        <div>
          <SectionHeading
            id="santuario-titulo"
            eyebrow="O Santuário"
            title="Um santuário dedicado ao amor misericordioso de Deus."
          />

          <div data-reveal className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            <p>
              O <strong className="font-semibold text-wine">{site.name}</strong>{" "}
              é o{" "}
              <strong className="font-semibold text-wine">{site.fullName}</strong>
              : uma casa de oração em {site.city}, de portas abertas para todos
              os que desejam encontrar-se com Deus.
            </p>
            <p>
              Sob o olhar de Santa Teresinha do Menino Jesus, nossa missão é
              acolher cada pessoa que chega — para rezar, celebrar a Santa
              Missa, agradecer uma graça ou simplesmente encontrar um momento
              de silêncio e paz.
            </p>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-gold/30 bg-gold/30 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
                className="bg-ivory p-6"
              >
                <p className="font-serif text-2xl font-semibold text-wine">
                  {pillar.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {pillar.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
