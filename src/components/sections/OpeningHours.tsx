import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

const question = encodeURIComponent(
  "Olá! Gostaria de saber os horários de funcionamento do Santuário.",
);

/**
 * Horários de funcionamento do Santuário — informação distinta das missas.
 * Enquanto `site.openingHours` estiver vazio (aguardando a administração),
 * a seção convida a consultar pelo WhatsApp, sem inventar horários.
 */
export function OpeningHours() {
  const hours = site.openingHours;

  return (
    <section
      id="funcionamento"
      aria-labelledby="funcionamento-titulo"
      className="bg-ivory-deep"
    >
      <div
        data-reveal
        className="shell grid gap-8 py-16 sm:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16"
      >
        <div>
          <p className="eyebrow">Visitação e secretaria</p>
          <h2 id="funcionamento-titulo" className="h-section mt-5 text-wine">
            Horários de <em>funcionamento</em>
          </h2>
        </div>

        <div className="lg:pb-2">
          {hours.length > 0 ? (
            <dl className="border-t border-wine/80">
              {hours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-6 border-b border-gold/50 py-4"
                >
                  <dt className="font-serif text-2xl text-wine italic">
                    {item.label}
                  </dt>
                  <dd className="font-serif text-2xl font-semibold text-ink">
                    {item.hours}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <>
              <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                Consulte os horários de funcionamento pelo WhatsApp.
              </p>
              <a
                href={`${site.whatsapp.href}?text=${question}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wine mt-6 w-full sm:w-auto"
              >
                <WhatsAppIcon className="size-5" />
                Consultar pelo WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
