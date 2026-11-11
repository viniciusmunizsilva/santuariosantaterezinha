import Image from "next/image";
import type { CSSProperties } from "react";
import portrait from "@/assets/santa-teresinha-retrato.jpg";
import { Rose } from "@/components/ornaments/Rose";
import { RoseSpray } from "@/components/ornaments/RoseSpray";
import { ArrowIcon, ClockIcon, MapPinIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

const step = (seconds: number) =>
  ({ "--hero-step": `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative isolate overflow-clip pt-28 pb-20 sm:pt-32 lg:flex lg:min-h-[min(100svh,58rem)] lg:items-center lg:pt-28 lg:pb-24"
    >
      {/* Fundo: marfim com luz dourada e um sopro de rosa */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_55%_at_76%_42%,rgb(217_199_157/0.55),transparent_70%),radial-gradient(40%_45%_at_0%_100%,rgb(232_183_180/0.4),transparent_70%),radial-gradient(35%_35%_at_100%_0%,rgb(232_183_180/0.28),transparent_70%),linear-gradient(180deg,#fdfaf3,var(--color-ivory)_55%,var(--color-ivory-deep))]"
      />
      <RoseSpray className="pointer-events-none absolute -bottom-20 -left-24 -z-10 hidden w-72 opacity-90 md:block xl:w-80" />
      <RoseSpray
        variant="line"
        className="pointer-events-none absolute -top-4 -right-10 -z-10 hidden w-72 rotate-180 text-gold/50 md:block"
      />

      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-10">
        {/* Texto */}
        <div className="relative text-center lg:text-left">
          <p className="hero-enter eyebrow" style={step(0)}>
            {site.fullName}
          </p>

          <h1
            id="hero-titulo"
            className="hero-enter mt-5 text-[2.75rem] leading-[1.04] font-medium text-wine sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]"
            style={step(0.12)}
          >
            Um lugar para encontrar o{" "}
            <em className="font-medium text-rose-deep [text-shadow:0_0_1px_rgb(101_30_39/0.25)]">
              amor
            </em>{" "}
            e a misericórdia de Deus.
          </h1>

          <p
            className="hero-enter mx-auto mt-6 max-w-xl text-[1.08rem] leading-relaxed text-ink-soft lg:mx-0"
            style={step(0.24)}
          >
            Bem-vindo ao <strong className="font-semibold text-ink">{site.name}</strong>,
            em {site.city} — uma casa de oração, acolhida e confiança, sob a
            intercessão de Santa Teresinha do Menino Jesus.
          </p>

          <div
            className="hero-enter mt-9 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            style={step(0.36)}
          >
            <a href="#horarios" className="btn btn-primary group/btn">
              <ClockIcon className="size-[1.15rem]" />
              Confira os horários das missas
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </a>
            <a
              href={site.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MapPinIcon className="size-[1.15rem]" />
              Como chegar
            </a>
          </div>
        </div>

        {/* Santa Teresinha — nicho em arco */}
        <div
          className="hero-enter relative mx-auto w-full max-w-[21rem] sm:max-w-sm lg:max-w-[27rem]"
          style={step(0.2)}
        >
          <div
            aria-hidden="true"
            className="halo absolute top-[4%] left-1/2 aspect-square w-[118%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_250_235/0.95),rgb(217_199_157/0.35)_62%,transparent)]"
          />
          <div
            aria-hidden="true"
            className="absolute top-[1%] left-1/2 aspect-square w-[108%] -translate-x-1/2 rounded-full border border-gold/45"
          />

          <figure className="relative">
            <div className="relative rounded-t-[999px] rounded-b-[1.75rem] border border-gold/60 bg-gradient-to-b from-white to-ivory-deep p-2.5 shadow-[var(--shadow-lift)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] bg-parchment">
                <Image
                  src={portrait}
                  alt="Santa Teresinha do Menino Jesus, carmelita de Lisieux, em fotografia histórica"
                  fill
                  priority
                  sizes="(min-width: 1024px) 26rem, (min-width: 640px) 23rem, 20rem"
                  placeholder="blur"
                  className="object-cover object-[50%_22%] [filter:sepia(0.6)_saturate(0.9)_contrast(1.05)_brightness(1.06)]"
                />
                {/* banho de luz quente + vinheta suave */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgb(179_148_86/0.22),transparent_35%,rgb(101_30_39/0.42))] mix-blend-multiply"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_30%,rgb(255_244_220/0.28),transparent_70%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-6 pt-16 pb-6 text-center">
                  <span className="block font-serif text-[1.65rem] leading-tight font-medium text-ivory italic">
                    Santa Teresinha
                  </span>
                  <span className="mt-1 block text-[0.68rem] font-semibold tracking-[0.26em] text-gold-soft uppercase">
                    do Menino Jesus
                  </span>
                </figcaption>
              </div>
            </div>

            {/* rosas junto ao nicho */}
            <RoseSpray className="pointer-events-none absolute -right-[24%] -bottom-[12%] w-[56%] -scale-x-100 drop-shadow-[0_10px_14px_rgb(101_30_39/0.22)]" />
            <Rose className="pointer-events-none absolute bottom-[6%] -left-[10%] w-[23%] drop-shadow-[0_8px_10px_rgb(101_30_39/0.2)]" />
          </figure>
        </div>
      </div>
    </section>
  );
}
