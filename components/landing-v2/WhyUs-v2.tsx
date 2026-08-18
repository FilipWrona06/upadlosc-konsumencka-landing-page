// components/landing-v2/why-us-v2.tsx
"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Network,
  ArrowUpRight,
  Lock,
  BadgePercent,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export function WhyUsV2() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section
      id="dlaczego-my"
      className="scroll-mt-20 bg-cream py-10 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Standardy i Bezpieczeństwo
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
            Dlaczego warto nam zaufać?
          </h2>
          <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
            Łączymy empatię na Śląsku z procedurami ogólnopolskiej sieci
            ekspertów upadłościowych.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 lg:grid-cols-12 items-stretch">
          {/* 1. GŁÓWNA KARTA GWARANCJI (ZAWSZE PEŁNA SZEROKOŚĆ) */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy to-navy-900 p-6 sm:p-10 text-white shadow-xl lg:col-span-7 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-extrabold text-emerald-400 border border-emerald-400/30">
                  <ShieldCheck className="size-3.5" />
                  100% Bezpieczeństwa Finansowego
                </span>
                <BadgePercent className="size-7 text-emerald-400/30" />
              </div>

              <h3 className="mt-4 sm:mt-6 font-display text-xl sm:text-3xl font-bold text-white leading-tight">
                Pisemna gwarancja ogłoszenia upadłości
              </h3>

              <p className="mt-2 sm:mt-3 text-xs sm:text-base leading-relaxed text-white/80">
                Jeśli sąd z naszej winy nie ogłosi upadłości –{" "}
                <strong>zwracamy wszystkie poniesione koszty</strong> związane z
                umową.
              </p>
            </div>

            <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Zero ryzyka finansowego</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Gwarancja wpisana wprost do umowy</span>
              </div>
            </div>
          </div>

          {/* 2. KARTA EXPERT PARTNER */}
          <div className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8 shadow-xs hover:border-emerald-400/40 transition-all flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Network className="size-5" />
                </span>

                <a
                  href="https://upadlosci-ekspert.pl/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group flex items-center gap-1.5 rounded-xl bg-slate-50 px-2.5 py-1 border border-slate-200/80 hover:border-emerald-400/40 transition-all"
                >
                  <img
                    src="/expert-partner.webp"
                    alt="Expert Partner"
                    className="h-5 w-auto object-contain"
                  />
                  <ArrowUpRight className="size-3 text-slate-400 group-hover:text-emerald-600" />
                </a>
              </div>

              <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl font-bold text-navy">
                Część Grupy Expert Partner
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/75">
                Działamy w ramach ogólnopolskiej sieci specjalistów. Korzystasz
                ze sprawdzonych procedur i setek wygranych spraw w całym kraju.
              </p>
            </div>

            <div className="mt-4 sm:mt-6 rounded-2xl bg-emerald-50/70 p-3 text-xs font-bold text-emerald-900 border border-emerald-100 flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Sprawdzone procedury ogólnopolskie
            </div>
          </div>

          {/* 3. KARTA: SZYBKOŚĆ */}
          <div className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8 shadow-xs hover:border-emerald-400/40 transition-all lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Zap className="size-5" />
              </div>

              <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl font-bold text-navy">
                Działanie od 1. dnia podpisania umowy
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/75">
                Nie odkładamy spraw na półkę. Natychmiast przystępujemy do
                porządkowania dokumentacji i sporządzania wniosku.
              </p>
            </div>

            <ul className="mt-4 space-y-2 border-t border-navy/5 pt-3 text-xs font-medium text-navy">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                <span>Stały kontakt telefoniczny i mailowy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                <span>Bieżący monitoring postępów w sądzie</span>
              </li>
            </ul>
          </div>

          {/* 4. KARTA: EMPATIA I POUFNOŚĆ */}
          <div className="rounded-3xl border border-navy/10 bg-white p-6 sm:p-8 shadow-xs hover:border-emerald-400/40 transition-all lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <HeartHandshake className="size-5" />
              </div>

              <h3 className="mt-4 sm:mt-6 font-display text-lg sm:text-xl font-bold text-navy">
                100% dyskrecji i ludzkie podejście
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/75">
                Rozmawiamy bez oceniania i bez skomplikowanego żargonu. Twoja
                sprawa prowadzona jest w pełnej poufności.
              </p>
            </div>

            <ul className="mt-4 space-y-2 border-t border-navy/5 pt-3 text-xs font-medium text-navy">
              <li className="flex items-center gap-2">
                <Lock className="size-3.5 text-emerald-600 shrink-0" />
                <span>Ścisła tajemnica zawodowa i ochrona RODO</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                <span>Rozmowy w bezpiecznej atmosferze</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
