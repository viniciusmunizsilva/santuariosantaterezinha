import { Rose } from "@/components/ornaments/Rose";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/data/site";

const channels = [
  {
    id: "telefone",
    label: "Telefone",
    value: site.phone.label,
    href: site.phone.href,
    action: "Ligar agora",
    description: "Fale com a secretaria do Santuário.",
    Icon: PhoneIcon,
    external: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: site.whatsapp.label,
    href: site.whatsapp.href,
    action: "Enviar mensagem",
    description: "Envie sua mensagem diretamente pelo aplicativo.",
    Icon: WhatsAppIcon,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="section overflow-clip bg-[radial-gradient(70%_60%_at_50%_0%,var(--color-rose-pale),transparent_70%)]"
    >
      <Rose
        variant="line"
        hairline
        className="pointer-events-none absolute -top-24 left-1/2 size-[34rem] -translate-x-1/2 text-rose-deep/25"
      />
      <div className="shell relative">
        <SectionHeading
          id="contato-titulo"
          eyebrow="Contato"
          title="Fale com o Santuário"
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {channels.map((channel, index) => (
            <li
              key={channel.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 130}ms` } as React.CSSProperties}
            >
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col items-center rounded-[1.75rem] border border-gold/40 bg-white/80 px-6 py-10 text-center shadow-[var(--shadow-card)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-gold hover:shadow-[var(--shadow-lift)]"
              >
                <span className="grid size-16 place-items-center rounded-full bg-wine text-gold-soft transition-transform duration-500 group-hover:scale-105">
                  <channel.Icon className="size-7" />
                </span>
                <span className="eyebrow mt-6">{channel.label}</span>
                <span className="mt-2 font-serif text-[2.1rem] leading-tight font-semibold text-wine sm:text-4xl">
                  {channel.value}
                </span>
                <span className="mt-3 text-sm text-ink-soft">
                  {channel.description}
                </span>
                <span className="btn btn-primary mt-7 w-full sm:w-auto">
                  {channel.action}
                  <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
