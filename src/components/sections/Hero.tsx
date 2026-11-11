import Image from "next/image";
import type { CSSProperties } from "react";
import { site } from "@/data/site";

const step = (seconds: number) =>
  ({ "--hero-step": `${seconds}s` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="on-dark relative isolate overflow-clip bg-wine-night text-ivory"
    >
      {/* Atmosfera: luz quente atrás da imagem, penumbra nas bordas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(48%_62%_at_50%_78%,rgb(150_74_52/0.55),transparent_72%),linear-gradient(180deg,rgb(44_11_17/0.2),var(--color-wine-night))] lg:bg-[radial-gradient(40%_70%_at_24%_48%,rgb(150_74_52/0.6),transparent_72%),radial-gradient(50%_60%_at_100%_0%,rgb(101_30_39/0.7),transparent_70%)]"
      />

      <div className="shell relative grid lg:min-h-[min(100svh,58rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-8">
        {/* Mensagem */}
        <div className="relative z-10 pt-28 text-center sm:pt-32 lg:order-last lg:self-center lg:pt-24 lg:pb-36 lg:text-left">
          <p className="hero-enter eyebrow" style={step(0)}>
            {site.fullName}
          </p>

          <h1
            id="hero-titulo"
            className="hero-enter mt-6 text-[3.1rem] leading-[1] tracking-[-0.01em] sm:text-7xl lg:text-[5.4rem] xl:text-[6.5rem]"
            style={step(0.12)}
          >
            A vida com Jesus é <em className="text-gold-soft">mais feliz!</em>
          </h1>
        </div>

        {/* Santa Teresinha — a imagem é a protagonista */}
        <div
          className="hero-enter relative mx-auto mt-8 h-[21rem] w-full max-w-[24rem] sm:h-[26rem] lg:mx-0 lg:mt-0 lg:h-auto lg:max-w-none lg:self-end"
          style={step(0.18)}
        >
          <div className="absolute inset-x-0 top-0 lg:relative lg:-ml-10 lg:pt-24 xl:-ml-16">
            <div className="relative mx-auto w-[19.5rem] sm:w-[23rem] lg:w-full lg:max-w-[36rem]">
              {/* auréola */}
              <div
                aria-hidden="true"
                className="halo absolute top-[17%] left-[51%] aspect-square w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(220_170_110/0.5),rgb(179_148_86/0.12)_70%,transparent)]"
              />
              <div
                aria-hidden="true"
                className="absolute top-[17%] left-[51%] aspect-square w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-soft/60"
              />
              <Image
                src="/images/santa-teresinha-statue.png"
                alt="Imagem de Santa Teresinha do Menino Jesus segurando rosas e o crucifixo"
                width={1134}
                height={1387}
                priority
                sizes="(min-width: 1024px) 36rem, (min-width: 640px) 23rem, 20rem"
                className="relative h-auto w-full drop-shadow-[0_30px_40px_rgb(0_0_0/0.45)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Borda inferior: a página marfim "sobe" em curva sobre a cena */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="absolute inset-x-0 -bottom-px z-10 h-10 w-full sm:h-16 lg:h-24"
      >
        <path
          d="M0 96V58C220 16 470 0 720 22s500 62 720 22v52Z"
          fill="var(--color-ivory)"
        />
        <path
          d="M0 58C220 16 470 0 720 22s500 62 720 22"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}
