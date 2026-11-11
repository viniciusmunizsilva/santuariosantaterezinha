"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Emblem } from "@/components/ornaments/Emblem";
import { Rose } from "@/components/ornaments/Rose";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { navigation, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fundo marfim translúcido ao sair do topo — observado por sentinela,
  // sem listener de scroll.
  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Menu mobile: trava a rolagem, fecha com Esc e ao ampliar a tela
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      // Mantém o foco entre o botão de fechar e os links do menu
      const focusable = [
        toggleRef.current,
        ...menuRef.current.querySelectorAll<HTMLElement>("a, button"),
      ].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid
          ? "bg-ivory/85 shadow-[0_1px_0_rgb(179_148_86/0.35),0_12px_32px_-20px_rgb(101_30_39/0.35)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between gap-6 transition-[height] duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#inicio"
          className="group flex items-center gap-3 text-wine"
          aria-label={`${site.name} — início`}
          onClick={() => setOpen(false)}
        >
          <Emblem className="h-11 w-9 transition-transform duration-700 group-hover:rotate-[8deg]" />
          <span className="font-serif text-[1.35rem] leading-[1.05] font-semibold tracking-wide">
            <span className="block text-[0.7rem] font-sans font-semibold tracking-[0.28em] uppercase text-gold-deep">
              Santuário
            </span>
            Santa Teresinha
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.9rem] font-medium text-ink">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link hover:text-wine">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.maps.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden !min-h-11 !px-5 !py-2 text-sm sm:inline-flex"
          >
            <MapPinIcon className="size-4" />
            Como chegar
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="relative grid size-12 place-items-center rounded-full text-wine lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px bg-current transition-all duration-300 ${
                  open ? "w-0 opacity-0" : "w-4 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${
                  open ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id={menuId}
        ref={menuRef}
        inert={!open}
        className={`paper absolute inset-x-0 top-0 -z-10 h-dvh overflow-y-auto px-6 pt-24 pb-10 transition-[opacity,visibility,transform] duration-500 lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Menu" className="mx-auto flex max-w-md flex-col">
          <ul className="border-t border-gold/30">
            {navigation.map((item, index) => (
              <li key={item.href} className="border-b border-gold/30">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 font-serif text-[1.7rem] font-medium text-wine transition-[opacity,transform] duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
                >
                  {item.label}
                  <Rose variant="line" className="size-5 text-gold" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.maps.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8 w-full"
            onClick={() => setOpen(false)}
          >
            <MapPinIcon className="size-4" />
            Como chegar
          </a>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href={site.phone.href} className="btn btn-outline !px-3 text-sm">
              <PhoneIcon className="size-4" />
              Ligar
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !px-3 text-sm"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
