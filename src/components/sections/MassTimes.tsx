import type { CSSProperties } from "react";
import { Botanical } from "@/components/ornaments/Botanical";
import { massSchedule } from "@/data/site";

export function MassTimes() {
  return (
    <section
      id="missas"
      aria-labelledby="missas-titulo"
      className="relative overflow-clip py-20 sm:py-28 lg:pt-32 lg:pb-24"
    >
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
        <div data-reveal className="relative">
          <p className="eyebrow">Celebrações</p>
          <h2 id="missas-titulo" className="h-section mt-5 text-wine">
            Horários das <em>Santas Missas</em>
          </h2>
          <p className="mt-7 border-l border-gold pl-4 text-[0.95rem] leading-relaxed text-ink-soft">
            {massSchedule.updateNote}.
          </p>
          <Botanical
            sizes="300px"
            className="mt-10 hidden h-auto w-[17rem] -rotate-6 lg:-ml-10 lg:block"
          />
        </div>

        <div className="border-t border-wine/80">
          {massSchedule.days.map((day, index) => (
            <article
              key={day.id}
              data-reveal
              style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
              aria-labelledby={`dia-${day.id}`}
              className="grid gap-5 border-b border-gold/50 py-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:py-10"
            >
              <h3
                id={`dia-${day.id}`}
                className="text-[1.9rem] leading-tight text-wine italic sm:text-[2.1rem]"
              >
                {day.day}
              </h3>
              <ul
                aria-label={`Missas — ${day.day}`}
                className="grid max-w-xl grid-cols-3 gap-x-4 gap-y-3 sm:gap-y-4"
              >
                {day.times.map((time) => (
                  <li
                    key={time}
                    className="font-serif text-[2.35rem] leading-none font-semibold text-ink sm:text-[2.9rem]"
                  >
                    <time>{time}</time>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
