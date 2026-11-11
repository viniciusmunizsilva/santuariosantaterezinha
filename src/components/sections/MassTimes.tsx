import type { CSSProperties, ComponentType, SVGProps } from "react";
import { Divider } from "@/components/ornaments/Divider";
import { RoseSpray } from "@/components/ornaments/RoseSpray";
import {
  ChaliceIcon,
  ChurchIcon,
  CrossIcon,
  SunIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { massSchedule, site } from "@/data/site";

const dayIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  domingo: SunIcon,
  semana: CrossIcon,
  sabado: ChurchIcon,
};

export function MassTimes() {
  return (
    <section
      id="horarios"
      aria-labelledby="horarios-titulo"
      className="section paper overflow-clip"
    >
      <RoseSpray
        variant="line"
        className="pointer-events-none absolute -top-6 -right-10 hidden w-72 rotate-180 text-gold/45 lg:block"
      />
      <RoseSpray
        variant="line"
        className="pointer-events-none absolute -bottom-8 -left-10 hidden w-72 text-gold/45 lg:block"
      />

      <div className="shell relative">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-full border border-gold/60 bg-white/60 text-gold-deep">
            <ChaliceIcon className="size-8" />
          </span>
          <h2
            id="horarios-titulo"
            className="mt-6 text-[2.5rem] leading-[1.08] font-medium text-wine sm:text-5xl lg:text-[3.6rem]"
          >
            {massSchedule.title}
          </h2>
          <Divider className="mt-6" />
          <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-wine/20 bg-white/70 px-5 py-2 text-sm font-medium text-wine">
            <span className="size-1.5 rounded-full bg-rose-deep" aria-hidden="true" />
            {massSchedule.updateNote}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {massSchedule.days.map((day, index) => {
            const Icon = dayIcons[day.id];
            return (
              <li
                key={day.id}
                data-reveal
                style={{ "--reveal-delay": `${index * 130}ms` } as CSSProperties}
                className="group relative"
              >
                <article
                  aria-labelledby={`dia-${day.id}`}
                  className="relative h-full rounded-[1.75rem] border border-gold/40 bg-white/75 p-2 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="flex h-full flex-col items-center rounded-[1.35rem] border border-gold/25 px-6 pt-9 pb-8 text-center sm:px-8">
                    <span className="grid size-14 place-items-center rounded-full bg-wine text-gold-soft shadow-[inset_0_0_0_1px_rgb(217_199_157/0.5),0_8px_18px_-8px_rgb(101_30_39/0.7)]">
                      <Icon className="size-6" />
                    </span>
                    <h3
                      id={`dia-${day.id}`}
                      className="mt-5 text-[1.9rem] leading-tight font-semibold text-wine"
                    >
                      {day.day}
                    </h3>
                    <span className="mt-4 h-px w-12 bg-gold" aria-hidden="true" />
                    <ul
                      aria-label={`Missas — ${day.day}`}
                      className="mt-6 flex w-full flex-wrap justify-center gap-2.5"
                    >
                      {day.times.map((time) => (
                        <li
                          key={time}
                          className="basis-[calc((100%-1.25rem)/3)] rounded-xl border border-gold/30 bg-ivory/80 px-1 py-3 font-serif text-[1.5rem] leading-none font-semibold text-ink"
                        >
                          <time>{time}</time>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p
          data-reveal
          className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 text-center text-[0.95rem] leading-relaxed text-ink-soft"
        >
          Em caso de dúvida sobre as celebrações, fale com a secretaria do
          Santuário.
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <WhatsAppIcon className="size-5" />
            Confirmar pelo WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
