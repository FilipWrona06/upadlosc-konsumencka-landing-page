// components/landing-v2/pricing-v2.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  FileCheck,
  Percent,
  Sparkles,
} from "lucide-react";

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTimestamp: number | null = null;
          const duration = 1400;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            );
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count.toLocaleString("pl-PL")}</span>;
}

const features = [
  "Bezpłatna konsultacja i analiza sytuacji prawnej",
  "Kompleksowe prowadzenie sprawy od A do Z",
  "Stała dostępność i bezpośredni kontakt z prawnikiem",
  "Administracyjna obsługa postępowań przed sądem i syndykiem",
  "Wygodna płatność w elastycznych ratach",
];

const transparencyPillars = [
  {
    icon: Sparkles,
    value: "0 zł",
    label: "Wstępna analiza",
    desc: "Bezpłatna weryfikacja dokumentów i ocena szans",
  },
  {
    icon: FileCheck,
    value: "30 zł",
    label: "Opłata sądowa",
    desc: "Ustawowy, jednorazowy koszt złożenia wniosku",
  },
  {
    icon: Percent,
    value: "0%",
    label: "Prowizji od długu",
    desc: "Brak procentów od kwoty, którą umorzy sąd",
  },
];

export function PricingV2() {
  return (
    <section id="cennik" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Przejrzyste warunki
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Jasna cena. Zero ukrytych kosztów.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            Nie musisz dysponować całą kwotą na start. Płatność dzielimy na
            indywidualnie dopasowane raty, a pierwsza konsultacja jest zawsze w
            100% darmowa.
          </p>
        </div>

        {/* GŁÓWNA KARTA SPLIT */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-xl">
          <div className="grid lg:grid-cols-12">
            {/* LEWA KOLUMNA: GŁĘBOKI GRANAT OD GÓRY DO DOŁU */}
            <div className="flex flex-col justify-between bg-linear-to-b from-navy to-navy-900 p-8 sm:p-10 text-white lg:col-span-5">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-400 border border-emerald-400/30">
                  <CalendarCheck className="size-3.5" />
                  Gwarancja Stałej Ceny
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-wider text-white/50">
                  Kompleksowa obsługa prawna
                </p>

                <div className="mt-3 flex items-baseline gap-1.5 font-display">
                  <span className="text-2xl font-light text-emerald-400">
                    od
                  </span>
                  <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                    <AnimatedCounter target={2900} />
                  </span>
                  <span className="text-2xl font-semibold text-emerald-400">
                    zł
                  </span>
                </div>

                {/* MODUŁ RATALNY */}
                <div className="mt-5 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-xs">
                  <p className="text-xs font-bold text-emerald-400 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                    Wygodne raty dopasowane do Ciebie
                  </p>
                  <p className="mt-1.5 text-[11px] text-white/70 leading-relaxed">
                    Płatność dzielimy na dogodne transze miesięczne, ustalone
                    przed podpisaniem umowy.
                  </p>
                </div>
              </div>

              {/* DÓŁ LEWEJ KOLUMNY (TERAZ W 100% CZYTELNY) */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-xs text-white/80 leading-relaxed">
                <ShieldCheck className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  Pisemna gwarancja niezmienności ceny. Żadnych niespodziewanych
                  faktur w trakcie postępowania.
                </p>
              </div>
            </div>

            {/* PRAWA KOLUMNA: 5 PUNKTÓW OBSŁUGI + CTA */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-7 bg-white">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-navy/50 block mb-5">
                  Co zawiera obsługa sprawy:
                </span>

                <ul className="space-y-4">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5 border border-emerald-200/60">
                        <CheckCircle2 className="size-4 stroke-[2.5]" />
                      </span>
                      <span className="text-sm sm:text-base font-bold text-navy leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PRZYCISK CTA */}
              <div className="mt-10 pt-6 border-t border-navy/5">
                <a
                  href="#kontakt"
                  className="group flex items-center justify-center gap-2.5 rounded-full bg-navy px-8 py-4 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-navy-800 hover:shadow-xl active:scale-98"
                >
                  <span>Umów bezpłatną konsultację i wycenę</span>
                  <ArrowRight className="size-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-center text-xs text-ink/60">
                  Konsultacja telefoniczna lub w biurze nie zobowiązuje Cię do
                  podpisania umowy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 FILARY PRZEJRZYSTOŚCI */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {transparencyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-xs transition-all hover:border-emerald-400/40 hover:shadow-sm"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-lg font-bold text-navy">
                      {pillar.value}
                    </span>
                    <span className="text-xs font-bold text-navy/70">
                      – {pillar.label}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-ink/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
