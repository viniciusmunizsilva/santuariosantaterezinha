import type { SVGProps } from "react";

type RoseProps = SVGProps<SVGSVGElement> & {
  /** "color": rosa em tons de rosa · "line": traço dourado · "wine": silhueta vinho */
  variant?: "color" | "line" | "wine";
  /** Traço fino constante, para rosas grandes usadas como marca-d'água. */
  hairline?: boolean;
};

const PETAL = "M0 5C-23-1-27-34 0-45C27-34 23-1 0 5Z";

const palettes = {
  color: {
    layers: ["#f1cbc8", "#e8b7b4", "#dc9f9b", "#cc8782"],
    stroke: "#b96f6b",
    strokeWidth: 0.7,
    core: "#a8565a",
  },
  wine: {
    layers: ["#651e27", "#651e27", "#651e27", "#651e27"],
    stroke: "#f8f3e9",
    strokeWidth: 1.1,
    core: "#f8f3e9",
  },
  line: {
    layers: ["none", "none", "none", "none"],
    stroke: "currentColor",
    strokeWidth: 1.2,
    core: "currentColor",
  },
} as const;

/** Camadas de pétalas: [quantidade, escala, rotação inicial] */
const LAYERS: ReadonlyArray<readonly [number, number, number]> = [
  [5, 1, 0],
  [5, 0.76, 36],
  [5, 0.53, 12],
  [3, 0.32, 40],
];

/**
 * Rosa vista de cima — emblema da identidade do Santuário.
 * Puramente decorativa: sempre oculta de leitores de tela.
 */
export function Rose({
  variant = "color",
  hairline = false,
  ...props
}: RoseProps) {
  const palette = palettes[variant];

  return (
    <svg
      viewBox="-50 -50 100 100"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {LAYERS.map(([count, scale, offset], layer) => (
        <g key={layer} transform={`scale(${scale})`}>
          {Array.from({ length: count }, (_, i) => (
            <path
              key={i}
              d={PETAL}
              transform={`rotate(${offset + (360 / count) * i})`}
              fill={palette.layers[layer]}
              stroke={palette.stroke}
              strokeWidth={hairline ? 1 : palette.strokeWidth / scale}
              vectorEffect={hairline ? "non-scaling-stroke" : undefined}
              strokeLinejoin="round"
            />
          ))}
        </g>
      ))}
      <path
        d="M-3.2 1.6C-4.4-2.4-.6-5.4 2.6-3.4C5 -1.8 3.8 2.4.6 2.2C-1.2 2-1.6.2-.4-.6"
        fill="none"
        stroke={palette.core}
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect={hairline ? "non-scaling-stroke" : undefined}
      />
    </svg>
  );
}
