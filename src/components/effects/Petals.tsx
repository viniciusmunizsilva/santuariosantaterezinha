"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Petal = {
  id: number;
  fading: boolean;
  style: CSSProperties;
};

/** Rosa claro → rosa queimado: [luz, tom, sombra] */
const TONES = [
  ["#fbe6e3", "#f1cbc8", "#e3aaa6"],
  ["#f6d6d3", "#e8b7b4", "#d79793"],
  ["#f0c4c0", "#dc9f9b", "#c98580"],
  ["#e9b3ae", "#cf8a85", "#b96f6b"],
] as const;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

function createPetals(count: number, compact: boolean): Petal[] {
  return Array.from({ length: count }, (_, id) => {
    // Distribuição nas bordas, alternando os lados, para não cobrir a leitura
    const band = compact ? rand(0, 7) : rand(0, 13);
    const x = id % 2 === 0 ? band : 100 - band;
    const depth = Math.random(); // 0 = ao fundo (menor, difusa) · 1 = à frente
    const size = compact ? rand(9, 15) : 10 + depth * 16;
    const duration = rand(13, 22) - depth * 3;
    const [light, tone, dark] = TONES[Math.floor(Math.random() * TONES.length)];

    return {
      id,
      fading: Math.random() < 0.35,
      style: {
        "--x": `${x.toFixed(2)}%`,
        "--size": `${size.toFixed(1)}px`,
        "--dur": `${duration.toFixed(1)}s`,
        // atraso negativo: a cena já começa "em andamento", sem rajada inicial
        "--delay": `${(-rand(0, duration)).toFixed(1)}s`,
        "--drift": `${rand(-5, 5).toFixed(1)}vw`,
        "--sway": `${rand(8, 26).toFixed(0)}px`,
        "--sway-dur": `${rand(2.8, 5.2).toFixed(1)}s`,
        "--spin-dur": `${rand(6, 13).toFixed(1)}s`,
        "--rot": `${rand(0, 360).toFixed(0)}deg`,
        "--ax": rand(-1, 1).toFixed(2),
        "--ay": rand(-1, 1).toFixed(2),
        "--alpha": (0.45 + depth * 0.45).toFixed(2),
        "--blur": depth < 0.25 && !compact ? "1px" : "0px",
        "--tone-light": light,
        "--tone": tone,
        "--tone-dark": dark,
      } as CSSProperties,
    };
  });
}

type DeviceHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

/** Quantas pétalas o dispositivo comporta (0 = efeito desativado). */
function petalBudget(): { count: number; compact: boolean } {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return { count: 0, compact: false };
  }

  const nav = navigator as DeviceHints;
  if (nav.connection?.saveData) return { count: 0, compact: false };

  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  if (cores <= 2 || memory <= 1) return { count: 0, compact: false };

  const lowPower = cores <= 4 || memory <= 2;
  const width = window.innerWidth;

  if (width < 768) return { count: lowPower ? 3 : 5, compact: true };
  if (width < 1280) return { count: lowPower ? 6 : 10, compact: false };
  return { count: lowPower ? 8 : 16, compact: false };
}

/**
 * Pétalas de rosa caindo suavemente pelas laterais da página.
 * As pétalas são geradas uma única vez no cliente; todo o movimento é CSS
 * (transform/opacity no compositor), sem re-renderizações nem bibliotecas.
 */
export function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const start = () => {
      const { count, compact } = petalBudget();
      if (count > 0) setPetals(createPetals(count, compact));
    };

    // Só depois que a página estiver ociosa: nunca compete com o carregamento
    if (typeof window.requestIdleCallback === "function") {
      const idle = window.requestIdleCallback(start, { timeout: 2500 });
      return () => window.cancelIdleCallback(idle);
    }
    const timer = setTimeout(start, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={petal.fading ? "petal petal--fading" : "petal"}
          style={petal.style}
        >
          <span className="petal-sway">
            <span className="petal-shape" />
          </span>
        </span>
      ))}
    </div>
  );
}
