import { Divider } from "@/components/ornaments/Divider";
import { Rose } from "@/components/ornaments/Rose";
import { RoseSpray } from "@/components/ornaments/RoseSpray";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-clip bg-wine-deep text-ivory/85">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <RoseSpray
        variant="line"
        className="pointer-events-none absolute -top-8 -right-12 w-72 rotate-180 text-gold/25"
      />

      <div className="shell relative py-16 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <svg
            viewBox="0 0 24 30"
            className="h-9 w-7 text-gold-soft"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 2v26M5 10h14" />
          </svg>
          <p className="mt-5 font-serif text-4xl font-medium text-ivory sm:text-5xl">
            {site.name}
          </p>
          <p className="mt-3 font-serif text-xl text-gold-soft italic">
            {site.fullName}
          </p>
          <p className="mt-2 text-sm tracking-[0.2em] text-ivory/70 uppercase">
            {site.city} — {site.state}
          </p>
          <Divider tone="light" className="mt-8" />
        </div>

        <div className="mt-12 grid gap-10 text-center md:grid-cols-2 md:text-left">
          <nav aria-label="Rodapé">
            <p className="eyebrow !text-gold-soft">Navegação</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-7 gap-y-1 md:justify-start">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link inline-flex min-h-11 items-center hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex min-h-11 items-center hover:text-ivory"
                >
                  Como chegar
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:justify-self-end md:text-right">
            <p className="eyebrow !text-gold-soft">Contato</p>
            <ul className="mt-5 flex flex-col items-center gap-1 md:items-end">
              <li>
                <a
                  href={site.phone.href}
                  className="nav-link inline-flex min-h-11 items-center gap-3 hover:text-ivory"
                >
                  <PhoneIcon className="size-4 text-gold-soft" />
                  <span className="sr-only">Telefone:</span>
                  {site.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex min-h-11 items-center gap-3 hover:text-ivory"
                >
                  <WhatsAppIcon className="size-4 text-gold-soft" />
                  <span className="sr-only">WhatsApp:</span>
                  {site.whatsapp.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gold/25 pt-8 text-center text-xs text-ivory/65 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-2 font-serif text-base text-gold-soft italic">
            <Rose variant="line" className="size-4" />
            Santa Teresinha do Menino Jesus, rogai por nós.
          </p>
        </div>
      </div>
    </footer>
  );
}
