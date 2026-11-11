import type { SVGProps } from "react";
import { Leaf } from "./Leaf";
import { Rose } from "./Rose";

type RoseSprayProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "line";
};

/**
 * Ramo com três rosas e folhagem — usado nos cantos das composições.
 * Decorativo; espelhe com `-scale-x-100` conforme o canto.
 */
export function RoseSpray({ variant = "color", ...props }: RoseSprayProps) {
  const tone = variant === "line" ? "line" : "leaf";
  const stem = variant === "line" ? "currentColor" : "#5a6a4f";

  return (
    <svg viewBox="0 0 260 220" aria-hidden="true" focusable="false" {...props}>
      <g fill="none" stroke={stem} strokeWidth="1.4" strokeLinecap="round">
        <path d="M8 214C40 170 62 150 92 132" />
        <path d="M60 158C96 150 132 152 170 168" />
        <path d="M92 132C104 100 128 78 160 62" />
      </g>
      <Leaf x={36} y={178} rotate={-150} scale={0.9} tone={tone} />
      <Leaf x={70} y={152} rotate={62} scale={0.8} tone={tone} />
      <Leaf x={120} y={152} rotate={38} scale={1.05} tone={tone} />
      <Leaf x={170} y={168} rotate={12} scale={1.1} tone={tone} />
      <Leaf x={108} y={104} rotate={-128} scale={0.95} tone={tone} />
      <Leaf x={150} y={66} rotate={-22} scale={1.15} tone={tone} />
      <Leaf x={140} y={72} rotate={-98} scale={0.85} tone={tone} />
      <Rose variant={variant} x={42} y={82} width={104} height={104} />
      <Rose variant={variant} x={118} y={6} width={76} height={76} />
      <Rose variant={variant} x={150} y={118} width={58} height={58} />
    </svg>
  );
}
