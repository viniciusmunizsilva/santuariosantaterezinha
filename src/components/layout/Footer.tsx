import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="on-dark bg-wine-night text-ivory/80">
      <div className="shell py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,5fr)_auto_auto] md:gap-14 lg:gap-24">
          <div>
            <p className="font-serif text-[2rem] leading-tight text-ivory">
              {site.name}
            </p>
            <p className="mt-1 font-serif text-lg text-gold-soft italic">
              {site.fullName}
            </p>
            <p className="mt-3 text-xs tracking-[0.22em] uppercase">
              {site.city} — {site.state}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link inline-flex min-h-10 items-center hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Atendimento</p>
            <ul className="mt-4">
              <li>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex min-h-10 items-center whitespace-nowrap hover:text-ivory"
                >
                  WhatsApp {site.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={site.phone.href}
                  className="link inline-flex min-h-10 items-center whitespace-nowrap hover:text-ivory"
                >
                  Telefone {site.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex min-h-10 items-center hover:text-ivory"
                >
                  Abrir no Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-gold/25 pt-6 pr-16 text-xs text-ivory/60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-serif text-base text-gold-soft italic">
            Santa Teresinha do Menino Jesus, rogai por nós.
          </p>
        </div>
      </div>
    </footer>
  );
}
