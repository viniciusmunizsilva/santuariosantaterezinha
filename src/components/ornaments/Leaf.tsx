type LeafProps = {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  tone?: "leaf" | "line";
};

/** Folha de roseira, para compor ramos dentro de um <svg>. */
export function Leaf({ x, y, rotate, scale = 1, tone = "leaf" }: LeafProps) {
  const line = tone === "line";
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M0 0C7-11 25-12 34 0C25 12 7 11 0 0Z"
        fill={line ? "none" : "#66765a"}
        stroke={line ? "currentColor" : "#4f5d45"}
        strokeWidth={line ? 1.1 : 0.6}
        strokeLinejoin="round"
      />
      <path
        d="M2 0H31M10 0L15-5M17 0L22-5M10 0L15 5M17 0L22 5"
        fill="none"
        stroke={line ? "currentColor" : "#8a9a7c"}
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity={line ? 0.7 : 0.8}
      />
    </g>
  );
}
