// components/landing-v2/why-us-v2.tsx
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  Network,
  ArrowUpRight,
  Lock,
  BadgePercent,
  CheckCircle2,
} from "lucide-react";

export function WhyUsV2() {
  return (
    <section id="dlaczego-my" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Standardy i Bezpieczeństwo
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Dlaczego warto nam zaufać?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            Łączymy empatię i indywidualną opiekę na Śląsku z siłą oraz
            procedurami ogólnopolskiej sieci ekspertów upadłościowych.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-12 items-stretch">
          {/* 1. GŁÓWNA KARTA BENTO: PISEMNA GWARANCJA SUKCESU (7 KOLUMN) */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-navy to-navy-900 p-8 sm:p-10 text-white shadow-xl lg:col-span-7 flex flex-col justify-between border border-white/10">
            {/* Oświetlenie w tle */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 size-60 rounded-full bg-emerald-500/10 blur-3xl" />

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3.5 py-1 text-xs font-extrabold text-emerald-400 border border-emerald-400/30">
                  <ShieldCheck className="size-4" />
                  100% Bezpieczeństwa Finansowego
                </span>
                <BadgePercent className="size-8 text-emerald-400/30" />
              </div>

              <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Pisemna gwarancja ogłoszenia upadłości
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 max-w-xl">
                Jesteśmy pewni naszej wiedzy i procedur. Jeśli po rzetelnej
                analizie przyjmiemy Twoją sprawę, a sąd z naszej winy nie ogłosi
                upadłości –{" "}
                <strong>zwracamy wszystkie poniesione koszty</strong> związane z
                umową.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Zero ryzyka finansowego</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white/90">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                <span>Gwarancja wpisana wprost do umowy</span>
              </div>
            </div>
          </div>

          {/* 2. KARTA EXPERT PARTNER: SIŁA SIECI (5 KOLUMN) */}
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm hover:border-emerald-400/40 hover:shadow-md transition-all flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Network className="size-5" />
                </span>

                {/* Logo Partnera */}
                <a
                  href="https://upadlosci-ekspert.pl/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group flex items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-1.5 border border-slate-200/80 hover:border-emerald-400/40 hover:bg-white transition-all shadow-2xs"
                >
                  <img
                    src="/expert-partner.webp"
                    alt="Expert Partner"
                    className="h-6 w-auto object-contain"
                  />
                  <ArrowUpRight className="size-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </a>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-navy">
                Część Grupy Expert Partner
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                Działamy w ramach ogólnopolskiej sieci specjalistów. Korzystasz
                z wypracowanych standardów procesowych, stałego dostępu do
                najnowszego orzecznictwa i setek wygranych spraw w całej Polsce.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-emerald-50/70 p-3.5 text-xs font-bold text-emerald-900 border border-emerald-100 flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Sprawdzone procedury i standardy ogólnopolskie
            </div>
          </div>

          {/* 3. KARTA: SZYBKOŚĆ I DZIAŁANIE OD 1. DNIA (6 KOLUMN) */}
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm hover:border-emerald-400/40 hover:shadow-md transition-all lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Zap className="size-5" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-navy">
                Działanie od 1. dnia podpisania umowy
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                Nie odkładamy spraw na półkę. Natychmiast przystępujemy do
                porządkowania dokumentacji, sporządzania wniosku i przygotowania
                Cię do ochrony przed wierzycielami.
              </p>
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-navy/5 pt-4 text-xs font-medium text-navy">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>
                  Stały kontakt telefoniczny i mailowy na każdym etapie
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Bieżący monitoring postępów w sądzie i u syndyka</span>
              </li>
            </ul>
          </div>

          {/* 4. KARTA: EMPATIA, POUFNOŚĆ I DYSKRECJA (6 KOLUMN) */}
          <div className="rounded-3xl border border-navy/10 bg-white p-8 shadow-sm hover:border-emerald-400/40 hover:shadow-md transition-all lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <HeartHandshake className="size-5" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-navy">
                100% dyskrecji i ludzkie podejście
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                Wiemy, jak ogromnym ciężarem psychicznym jest zadłużenie.
                Rozmawiamy bez oceniania i bez skomplikowanego żargonu
                prawniczego. Twoja sprawa prowadzona jest w warunkach pełnej
                poufności.
              </p>
            </div>

            <ul className="mt-6 space-y-2.5 border-t border-navy/5 pt-4 text-xs font-medium text-navy">
              <li className="flex items-center gap-2.5">
                <Lock className="size-4 text-emerald-600 shrink-0" />
                <span>Ścisła tajemnica zawodowa i pełna ochrona RODO</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>
                  Rozmowy w bezpiecznej atmosferze, bez żargonu i wstydu
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
