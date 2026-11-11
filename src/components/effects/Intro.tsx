"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/** Chave de sessão: a abertura é exibida uma única vez por visita. */
export const INTRO_STORAGE_KEY = "sst:intro";

/**
 * Script inline executado antes da primeira pintura: se a abertura já foi vista
 * nesta sessão, marca o <html> para que o CSS nem chegue a exibi-la.
 */
export const introBootScript = `try{if(sessionStorage.getItem("${INTRO_STORAGE_KEY}"))document.documentElement.dataset.intro="seen"}catch(e){}`;

const SKIP_EVENTS = ["pointerdown", "keydown", "wheel", "touchmove"] as const;
const SHAPES = ["petal-a", "petal-b", "petal-c"] as const;

/** Pseudoaleatório determinístico: o mesmo resultado no servidor e no cliente. */
const noise = (index: number, salt: number) => {
  const x = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/** A rajada de pétalas: três planos de profundidade, tamanhos e ritmos distintos. */
const GUST = Array.from({ length: 120 }, (_, i) => {
  const depth = noise(i, 1); // 0 = ao fundo · 1 = em primeiro plano
  const size = 12 + depth * depth * 46;
  return {
    shape: SHAPES[i % SHAPES.length],
    style: {
      "--y": `${(noise(i, 2) * 96 - 12).toFixed(1)}vh`,
      "--size": `${size.toFixed(0)}px`,
      "--dur": `${(2.3 - depth * 0.8 + noise(i, 3) * 0.4).toFixed(2)}s`,
      "--delay": `${(noise(i, 4) * 1.7).toFixed(2)}s`,
      "--fall": `${(14 + noise(i, 5) * 34).toFixed(0)}vh`,
      "--arc": `${(noise(i, 6) * 16 - 8).toFixed(0)}vh`,
      "--spin": `${(2.2 + noise(i, 7) * 3).toFixed(1)}s`,
      "--rot": `${(noise(i, 8) * 360).toFixed(0)}deg`,
      "--ax": (noise(i, 9) * 2 - 1).toFixed(2),
      "--ay": (noise(i, 10) * 2 - 1).toFixed(2),
      "--alpha": (0.5 + depth * 0.5).toFixed(2),
      "--blur": depth > 0.82 ? "2px" : depth < 0.2 ? "1px" : "0px",
    } as CSSProperties,
  };
});

/**
 * Abertura: sobre o vinho, uma rajada de pétalas atravessa a tela enquanto o
 * nome do Santuário se revela; em seguida a cena se dissolve no hero, que tem
 * o mesmo fundo — a página "surge" sem corte. Sequência 100% CSS (≈5s): as pétalas passam à frente do nome e saem,
 * deixando-o sozinho em cena por um instante;
 * qualquer interação a encerra na hora. Não bloqueia o conteúdo.
 */
export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      /* armazenamento indisponível: a abertura apenas se repete */
    }

    const end = () => {
      document.documentElement.dataset.intro = "seen";
      setDone(true);
    };

    // Já oculta por CSS (sessão anterior ou prefers-reduced-motion)
    if (getComputedStyle(el).display === "none") {
      end();
      return;
    }

    const skip = () => el.classList.add("is-skipping");
    const onEnd = (event: AnimationEvent) => {
      if (event.target === el && event.animationName === "intro-out") end();
    };

    SKIP_EVENTS.forEach((name) =>
      window.addEventListener(name, skip, { once: true, passive: true }),
    );
    el.addEventListener("animationend", onEnd);

    return () => {
      SKIP_EVENTS.forEach((name) => window.removeEventListener(name, skip));
      el.removeEventListener("animationend", onEnd);
    };
  }, []);

  if (done) return null;

  return (
    <div ref={ref} className="intro" aria-hidden="true">
      <div className="intro-bg" />
      <div className="intro-content">
        <p className="intro-kicker pl-[0.42em] text-[0.72rem] font-semibold text-gold-soft uppercase">
          Santuário
        </p>
        <p className="intro-name mt-3 font-serif text-[3.1rem] leading-none font-medium sm:text-8xl">
          Santa <em className="text-gold-soft">Teresinha</em>
        </p>
        <span className="intro-rule mt-7 block h-px w-28 bg-gold" />
      </div>
      {/* As pétalas passam à frente do nome e depois deixam a cena só para ele */}
      <div className="absolute inset-0">
        {GUST.map((petal, index) => (
          <span key={index} className="ipetal" style={petal.style}>
            <i className={petal.shape} />
          </span>
        ))}
      </div>
    </div>
  );
}
