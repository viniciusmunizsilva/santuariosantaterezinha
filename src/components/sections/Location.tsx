import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon, MapPinIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

export function Location() {
  const { street, postalCode } = site.address;

  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-titulo"
      className="section bg-ivory-deep"
    >
      <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading
            id="localizacao-titulo"
            eyebrow="Localização"
            title="Esperamos por você!"
          />

          <div data-reveal className="mt-8">
            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
              Venha rezar conosco. O Santuário está de portas abertas para
              acolher você e sua família.
            </p>

            <address className="mt-8 flex items-start gap-4 not-italic">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-wine text-gold-soft">
                <MapPinIcon className="size-5" />
              </span>
              <span className="text-ink">
                <span className="block font-serif text-2xl font-semibold text-wine">
                  {site.name}
                </span>
                {street && <span className="block">{street}</span>}
                <span className="block text-ink-soft">
                  {site.city} — {site.state}
                  {postalCode ? ` · CEP ${postalCode}` : ""}
                </span>
              </span>
            </address>

            <a
              href={site.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary group/btn mt-9"
            >
              Como chegar
              <ArrowIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              <span className="sr-only">(abre o Google Maps em nova aba)</span>
            </a>
          </div>
        </div>

        <div data-reveal="right" className="relative">
          <div className="rounded-[2rem] border border-gold/50 bg-white/70 p-2.5 shadow-[var(--shadow-lift)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-parchment sm:aspect-[16/11]">
              <iframe
                title={`Mapa — ${site.name}, ${site.city}/${site.state}`}
                src={site.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 size-full border-0 [filter:sepia(0.18)_saturate(0.92)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
