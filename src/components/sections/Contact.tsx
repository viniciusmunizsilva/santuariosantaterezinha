import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="on-dark relative isolate overflow-clip bg-wine text-ivory"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_90%_at_100%_100%,rgb(44_11_17/0.9),transparent_70%)]"
      />

      <div data-reveal className="shell py-20 sm:py-28 lg:py-32">
        <p className="eyebrow">Contato e atendimento</p>
        <h2
          id="contato-titulo"
          className="mt-5 max-w-4xl text-[2.7rem] leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-[5rem]"
        >
          Precisa de alguma <em className="text-gold-soft">informação?</em>
        </h2>
        <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-ivory/80">
          Para dúvidas, solicitações ou outras informações, entre em contato
          conosco pelo WhatsApp.
        </p>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ivory !min-h-[4.25rem] !gap-4 !px-8 !text-left"
          >
            <WhatsAppIcon className="size-8 shrink-0" />
            <span>
              <span className="block text-xs font-semibold tracking-[0.18em] uppercase opacity-70">
                Conversar no WhatsApp
              </span>
              <span className="block font-serif text-[1.7rem] leading-tight font-semibold">
                {site.whatsapp.label}
              </span>
            </span>
          </a>

          <a
            href={site.phone.href}
            className="group inline-flex min-h-12 items-center gap-3 text-ivory/85"
          >
            <PhoneIcon className="size-5 text-gold-soft" />
            <span>
              <span className="sr-only">Telefone: </span>
              <span aria-hidden="true">ou ligue </span>
              <span className="link font-serif text-2xl font-semibold text-ivory">
                {site.phone.label}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
