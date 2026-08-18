// components/landing-v2/site-header-v2.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Menu,
  X,
  ArrowUpRight,
  Scale,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const navLinks = [
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Cennik", href: "#cennik" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteHeaderV2() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection("kontakt");
        return;
      }

      const scrollPosition = window.scrollY + 220;

      let currentSection = "";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            currentSection = id;
            break;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection("");
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blokada scrolla w tle gdy otwarte jest menu mobilne
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl"
            : "bg-navy/60 backdrop-blur-md border-b border-white/5 py-3.5 sm:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-white/10 text-emerald-400 border border-white/10 transition-transform group-hover:scale-105">
              <Scale className="size-4.5 sm:size-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white">
                  UPADŁOŚĆ
                  <span className="text-emerald-400 font-normal">.pl</span>
                </span>
                <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-400/30">
                  Chorzów / Śląsk
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-white/50">
                Kancelaria Prawa Upadłościowego
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/5 p-1 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs xl:text-sm rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-navy font-bold shadow-sm"
                      : "font-medium text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* PRAWA STRONA: STATUS + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col text-right">
              <span className="flex items-center justify-end gap-1.5 text-[11px] font-medium text-white/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Bezpłatna konsultacja
              </span>
              <span className="text-xs font-semibold text-white/90">
                Pon–Pt: 8:00 – 19:00
              </span>
            </div>

            <a
              href="tel:515515314"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 text-xs xl:text-sm font-bold text-navy-900 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="size-3.5" />
              <span>515 515 314</span>
            </a>
          </div>

          {/* MOBILE PRZYCISKI (TELEFON + HAMBURGER) */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:515515314"
              className="flex size-9 items-center justify-center rounded-full bg-emerald-500 text-navy-900 font-bold shadow-md"
              aria-label="Zadzwoń"
            >
              <Phone className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md"
              aria-label={open ? "Zamknij" : "Menu"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* NOWOCZESNE MENU MOBILNE (DRAWER Z WYŻSZYM Z-INDEXEM I BRAKIEM KOLIZJI) */}
      {open && (
        <div className="fixed inset-0 top-14.25 z-60 bg-navy-950/98 backdrop-blur-2xl px-5 py-6 flex flex-col justify-between overflow-y-auto lg:hidden text-white animate-in fade-in slide-in-from-top-4 duration-200">
          {/* GÓRNA CZĘŚĆ: STATUS + KAFELKI NAWIGACJI */}
          <div className="space-y-4">
            {/* Status w menu */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/50">
                Menu Kancelarii
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-400 border border-emerald-400/30">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Konsultacja 0 zł
              </span>
            </div>

            {/* Lista linków jako dotykowe kafelki */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm"
                        : "bg-white/5 text-white/90 border border-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="text-base font-semibold">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className={`size-4 ${isActive ? "text-emerald-400" : "text-white/40"}`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* DOLNA CZĘŚĆ: SZYBKI KONTAKT I ADRES (BEZ KOLIZJI Z PICKEREM) */}
          <div className="pt-5 mt-4 border-t border-white/10 space-y-3 pb-8">
            <a
              href="tel:515515314"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-navy-900 font-extrabold text-base shadow-xl shadow-emerald-500/25 active:scale-95 transition-all"
            >
              <Phone className="size-5" />
              <span>Zadzwoń: 515 515 314</span>
            </a>

            <div className="flex items-center justify-between text-[11px] text-white/50 px-1 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="size-3 text-emerald-400" />
                Chorzów, ul. Wolności 12
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3 text-emerald-400" />
                Pon–Pt: 8:00 – 19:00
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
