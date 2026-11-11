import type { ReactNode } from "react";
import { Divider } from "@/components/ornaments/Divider";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  align?: "center" | "start";
  tone?: "dark" | "light";
  className?: string;
};

/** Cabeçalho padrão de seção: sobretítulo, título serifado e divisor floral. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  align = "start",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      data-reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <p className={`eyebrow ${tone === "light" ? "!text-gold-soft" : ""}`}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-[2.35rem] leading-[1.08] font-medium sm:text-5xl lg:text-[3.4rem] ${
          tone === "light" ? "text-ivory" : "text-wine"
        }`}
      >
        {title}
      </h2>
      <Divider
        className="mt-7"
        align={align}
        tone={tone === "light" ? "light" : "gold"}
      />
    </div>
  );
}
