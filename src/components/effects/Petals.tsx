"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Petal = {
  id: number;
  fading: boolean;
  shape: string;
  style: CSSProperties;
};

const SHAPES = ["petal-a", "petal-b", "petal-c"] as const;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

function createPetals(count: number, compact: boolean): Petal[] {
  return Array.from({ length: count }, (_, id) => {
    // Só nas laterais, alternando os lados, para nunca cobrir a leitura
    const band = compact ? rand(0, 6) : rand(0, 11);
    const x = id % 2 === 0 ? band : 100 - band;
    const depth = Math.random(); // 0 = ao fundo (menor, difusa) · 1 = à frente
    const size = compact ? rand(10, 16) : 11 + depth * 17;
    const duration = rand(14, 24) - depth * 4;

    return {
      id,
      fading: Math.random() < 0.35,
      shape: SHAPES[id % SHAPES.length],
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
        "--alpha": (0.5 + depth * 0.45).toFixed(2),
        "--blur": depth < 0.25 && !compact ? "1px" : "0px",
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

  if (width < 768) return { count: lowPower ? 3 : 4, compact: true };
  if (width < 1280) return { count: lowPower ? 5 : 7, compact: false };
  return { count: lowPower ? 6 : 10, compact: false };
}

/**
 * Pétalas ambientes: depois da abertura, poucas pétalas caem pelas laterais.
 * São geradas uma única vez no cliente; todo o movimento é CSS
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
            <span className={`petal-shape ${petal.shape}`} />
          </span>
        </span>
      ))}
    </div>
  );
}
