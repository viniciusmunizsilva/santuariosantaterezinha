import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

/** Atalho fixo para o WhatsApp — o principal canal de atendimento. */
export function WhatsAppFab() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com o Santuário pelo WhatsApp ${site.whatsapp.label}`}
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-gold text-wine-night shadow-[0_8px_24px_-6px_rgb(44_11_17/0.6)] ring-1 ring-ivory/40 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-offset-4 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
