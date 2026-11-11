"use client";

import { useEffect, useRef, useState } from "react";
import { Rose } from "@/components/ornaments/Rose";
import { site } from "@/data/site";

/** Chave de sessão: a abertura é exibida uma única vez por visita. */
export const INTRO_STORAGE_KEY = "sst:intro";

/**
 * Script inline executado antes da primeira pintura: se a abertura já foi vista
 * nesta sessão, marca o <html> para que o CSS nem chegue a exibi-la.
 */
export const introBootScript = `try{if(sessionStorage.getItem("${INTRO_STORAGE_KEY}"))document.documentElement.dataset.intro="seen"}catch(e){}`;

const SKIP_EVENTS = ["pointerdown", "keydown", "wheel", "touchmove"] as const;

/**
 * Abertura (website reveal): rosa → nome → frase → cortina que se abre.
 * A sequência é 100% CSS (≈3s); o JS apenas registra a visita e permite
 * encerrá-la imediatamente a qualquer interação. Não bloqueia a navegação.
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

    // Já oculta por CSS (sessão anterior ou prefers-reduced-motion)
    if (getComputedStyle(el).display === "none") {
      setDone(true);
      return;
    }

    const skip = () => el.classList.add("is-skipping");
    const finish = (event: AnimationEvent) => {
      if (
        event.target === el &&
        (event.animationName === "intro-dismiss" ||
          event.animationName === "intro-fade")
      ) {
        document.documentElement.dataset.intro = "seen";
        setDone(true);
      }
    };

    SKIP_EVENTS.forEach((name) =>
      window.addEventListener(name, skip, { once: true, passive: true }),
    );
    el.addEventListener("animationend", finish);

    return () => {
      SKIP_EVENTS.forEach((name) => window.removeEventListener(name, skip));
      el.removeEventListener("animationend", finish);
    };
  }, []);

  if (done) return null;

  return (
    <div ref={ref} className="intro" aria-hidden="true">
      <div className="intro-curtain intro-curtain--left" />
      <div className="intro-curtain intro-curtain--right" />
      <div className="intro-content">
        <Rose className="intro-rose size-20 sm:size-24" />
        <p className="intro-name mt-6 font-serif text-3xl font-medium text-wine sm:text-5xl">
          {site.name}
        </p>
        <span className="intro-rule mt-5 block h-px w-24 bg-gold" />
        <p className="intro-phrase mt-5 max-w-xs font-serif text-lg italic text-ink-soft sm:max-w-none sm:text-xl">
          “A minha vocação é o amor.”
        </p>
      </div>
    </div>
  );
}
