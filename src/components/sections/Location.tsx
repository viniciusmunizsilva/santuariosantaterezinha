import { ArrowIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

export function Location() {
  const { street, postalCode } = site.address;

  return (
    <section
      id="como-chegar"
      aria-labelledby="como-chegar-titulo"
      className="py-20 sm:py-28"
    >
      <div className="shell grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-20">
        <div
          data-reveal="fade"
          className="relative aspect-[4/3] overflow-hidden bg-parchment outline outline-1 outline-offset-[6px] outline-gold/60 sm:aspect-[16/9] lg:aspect-[16/10]"
        >
          <iframe
            title={`Mapa — ${site.name}, ${site.city}/${site.state}`}
            src={site.maps.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 size-full border-0 [filter:sepia(0.2)_saturate(0.9)]"
          />
        </div>

        <div data-reveal className="order-first lg:order-none">
          <p className="eyebrow">Localização</p>
          <h2 id="como-chegar-titulo" className="h-section mt-5 text-wine">
            Como <em>chegar</em>
          </h2>
          <address className="mt-7 text-[1.05rem] leading-relaxed text-ink-soft not-italic">
            <span className="block font-medium text-ink">{site.name}</span>
            {street && <span className="block">{street}</span>}
            {site.city} — {site.state}
            {postalCode ? ` · CEP ${postalCode}` : ""}
          </address>
          <a
            href={site.maps.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wine group mt-8 w-full sm:w-auto"
          >
            Abrir no Google Maps
            <ArrowIcon className="size-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
