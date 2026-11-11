import type { SVGProps } from "react";

/**
 * Ilustração em traço da fachada do Santuário (corpo da igreja e torre do relógio).
 * É um desenho ornamental — NÃO substitui a fotografia oficial, que deve ser
 * fornecida pela administração (ver README, "Pendências").
 */
export function SanctuaryIllustration(props: SVGProps<SVGSVGElement>) {
  const windows = [58, 104, 150, 262, 308];
  return (
    <svg
      viewBox="14 6 456 384"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Ilustração da fachada do Santuário Santa Teresinha, com sua torre do relógio"
      {...props}
    >
      {/* resplendor */}
      <g stroke="#b39456" strokeWidth="1" opacity="0.55">
        <circle cx="392" cy="70" r="46" />
        <circle cx="392" cy="70" r="62" strokeDasharray="1 7" />
      </g>

      {/* torre */}
      <path d="M392 22v30M381 33h22" strokeWidth="2.2" />
      <path d="M366 52h52l6 14h-64l6-14Z" />
      <path d="M362 66h60v296h-60z" />
      <path d="M372 76h40v20h-40z" />
      <circle cx="392" cy="124" r="12" />
      <path d="M392 116v8l5 3" strokeWidth="1.2" />
      {[158, 196, 234, 272, 310].map((y) => (
        <path key={y} d={`M386 ${y}h12v20h-12z`} />
      ))}

      {/* corpo da igreja */}
      <path d="M24 196c70-14 136-20 190-20s104 5 148 13" />
      <path d="M30 196v166M24 362h432" />
      <path d="M176 362V160h76v202" />
      <path d="M170 160h88" />
      <circle cx="214" cy="192" r="15" />
      <path d="M214 177v30M199 192h30" strokeWidth="1" opacity="0.7" />
      <g stroke="#b39456" strokeWidth="1.2">
        <path d="M196 226h36M200 238h28M196 250h36M200 262h28" />
      </g>
      {windows.map((x) => (
        <path key={x} d={`M${x} 300v-58a11 11 0 0 1 22 0v58z`} />
      ))}
      {[40, 90, 136, 250, 296, 344].map((x) => (
        <path key={x} d={`M${x} ${x < 176 ? 196 - (x - 30) * 0.1 : 180 + (x - 250) * 0.08}v166`} opacity="0.45" strokeWidth="1" />
      ))}
      <path d="M196 362v-44a18 18 0 0 1 36 0v44" />
      <path d="M214 300v62" strokeWidth="1" />
      {[70, 116, 274, 320].map((x) => (
        <path key={x} d={`M${x - 10} 362v-30a10 10 0 0 1 20 0v30`} />
      ))}

      {/* chão e jardim */}
      <g stroke="#66765a" strokeWidth="1.3">
        <path d="M8 378h464" opacity="0.6" />
        <path d="M20 378c2-14 10-20 16-22-1 9 2 16 6 22M440 378c2-12 8-17 14-19-1 8 1 13 5 19" />
      </g>
    </svg>
  );
}
