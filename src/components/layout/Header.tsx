"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { navigation, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Sobre o hero (vinho) o cabeçalho é transparente; ao rolar, ganha fundo
  // marfim. Observado por sentinela, sem listener de scroll.
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

  const light = scrolled && !open; // fundo marfim, texto vinho

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
        light
          ? "bg-ivory/90 text-wine shadow-[0_1px_0_rgb(179_148_86/0.4)] backdrop-blur-md"
          : "on-dark bg-transparent text-ivory"
      }`}
    >
      <div
        className={`shell flex items-center justify-between gap-6 transition-[height] duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#inicio"
          className="flex items-center"
          aria-label={`${site.name} — início`}
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-[1.3rem] leading-[1.05] font-semibold tracking-wide">
            <span
              className={`block font-sans text-[0.62rem] font-semibold tracking-[0.3em] uppercase transition-colors duration-500 ${
                light ? "text-gold-deep" : "text-gold-soft"
              }`}
            >
              Santuário
            </span>
            Santa Teresinha
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.9rem] font-medium">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn hidden !min-h-11 !px-5 !py-2 text-sm sm:inline-flex ${
              light ? "btn-wine" : "btn-line-light"
            }`}
          >
            <WhatsAppIcon className="size-[1.1rem]" />
            WhatsApp
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="relative -mr-2 grid size-12 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-7" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-7 bg-current transition-transform duration-500 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute right-0 h-px bg-current transition-transform duration-500 ${
                  open ? "top-1/2 w-7 -rotate-45" : "top-full w-4"
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
        className={`on-dark absolute inset-x-0 top-0 -z-10 flex h-dvh flex-col overflow-y-auto bg-wine-night px-6 pt-28 pb-8 text-ivory transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Menu">
          <ul>
            {navigation.map((item, index) => (
              <li key={item.href} className="border-b border-gold/25">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-baseline gap-4 py-4 font-serif text-[2rem] leading-tight transition-[opacity,transform] duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${90 + index * 55}ms` : "0ms" }}
                >
                  <span className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-gold-soft">
                    0{index + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto grid gap-3 pt-10">
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ivory w-full"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp {site.whatsapp.label}
          </a>
          <a href={site.phone.href} className="btn btn-line-light w-full">
            <PhoneIcon className="size-5" />
            {site.phone.label}
          </a>
        </div>
      </div>
    </header>
  );
}
