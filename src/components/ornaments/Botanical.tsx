import Image from "next/image";
import rosa from "@/assets/rosa-centifolia.png";

type BotanicalProps = {
  className?: string;
  sizes?: string;
};

/**
 * Gravura botânica — Rosa centifolia, de Pierre-Joseph Redouté (c. 1820, domínio público).
 * Decorativa; use com parcimônia e apenas sobre fundos claros.
 */
export function Botanical({ className = "", sizes = "320px" }: BotanicalProps) {
  return (
    <Image
      src={rosa}
      alt=""
      aria-hidden="true"
      sizes={sizes}
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
