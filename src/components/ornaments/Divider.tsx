import { Rose } from "./Rose";

type DividerProps = {
  className?: string;
  /** Use "light" sobre fundos escuros (vinho). */
  tone?: "gold" | "light";
  align?: "center" | "start";
};

/** Divisor ornamental: filete dourado com uma pequena rosa ao centro. */
export function Divider({
  className = "",
  tone = "gold",
  align = "center",
}: DividerProps) {
  const color = tone === "light" ? "text-gold-soft" : "text-gold";
  const line =
    "h-px w-14 sm:w-20 bg-gradient-to-r from-transparent to-current";

  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-3 ${color} ${
        align === "center" ? "justify-center" : "justify-start"
      } ${className}`}
    >
      {align === "center" && <span className={line} />}
      <span className="size-1 rotate-45 bg-current" />
      <Rose variant="line" className="size-6" />
      <span className="size-1 rotate-45 bg-current" />
      <span className={`${line} rotate-180`} />
    </div>
  );
}
