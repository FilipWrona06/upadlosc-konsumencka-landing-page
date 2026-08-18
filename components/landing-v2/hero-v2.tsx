// components/landing-v2/hero-v2.tsx
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Lock,
  Sparkles,
  TrendingDown,
  ShieldCheck,
  Heart,
} from "lucide-react";

const problemTags = [
  "Egzekucja komornicza",
  "Nękanie windykacji",
  "Pętla chwilówek",
  "Długi po firmie / JDG",
  "Zaległości czynszowe",
  "Brak środków na raty",
];

const trustStats = [
  { value: "0 zł", label: "Wstępna analiza sytuacji", highlight: true },
  { value: "100%", label: "Poufność i brak oceniania" },
  { value: "Od 1. dnia", label: "Wstrzymanie egzekucji i komornika" },
  { value: "Śląsk & Online", label: "Spotkanie w biurze lub 100% zdalnie" },
];

export function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-navy pt-4 pb-20 sm:pt-6 sm:pb-32 text-white">
      {/* Oświetlenie ambientowe w tle */}
      <div className="pointer-events-none absolute -top-40 right-0 size-87.5 sm:size-137.5 rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 size-80 rounded-full bg-navy-700/50 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEWA KOLUMNA: TREŚĆ, TAGI, CTA (7 KOLUMN) */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Pill zaufania nad tytułem */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 sm:px-3.5 sm:py-1.5 backdrop-blur-md">
              <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium text-white/90">
                Kancelaria Prawa Upadłościowego · Chorzów & Śląsk
              </span>
            </div>

            {/* Główny nagłówek */}
            <h1 className="mt-4 sm:mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-5xl lg:text-[54px] sm:leading-tight lg:leading-[1.12]">
              Zatrzymaj komornika.{" "}
              <span className="text-emerald-400 block sm:inline">
                Zacznij od zera bez długów.
              </span>
            </h1>

            {/* Podtytuł */}
            <p className="mt-3 sm:mt-5 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-lg">
              Legalna, bezpieczna procedura upadłości konsumenckiej. Przejmujemy
              kontakt z wierzycielami, wstrzymujemy egzekucje i doprowadzamy do
              całkowitego umorzenia Twoich zobowiązań.
            </p>

            {/* TAGI: 2 KOLUMNY */}
            <div className="mt-5 sm:mt-7">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/50 block mb-2 sm:mb-3">
                Najczęstsze sprawy, które rozwiązujemy:
              </span>
              <div className="grid grid-cols-2 gap-2 max-w-xl">
                {problemTags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-3.5 py-2 text-[11px] sm:text-xs font-medium text-white/90 hover:border-emerald-400/40 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="size-3.5 sm:size-4 text-emerald-400 shrink-0" />
                    <span className="leading-tight truncate sm:whitespace-normal">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PRZYCISKI CTA */}
            <div className="mt-6 sm:mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-navy-900 shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Bezpłatna, poufna analiza</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="tel:515515314"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 sm:px-6 py-3.5 sm:py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
              >
                <Phone className="size-4 text-emerald-400" />
                <span>Zadzwoń: 515 515 314</span>
              </a>
            </div>

            {/* Gwarancja pod CTA */}
            <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/60">
              <span className="flex items-center gap-1">
                <Lock className="size-3.5 text-emerald-400" />
                100% poufności
              </span>
              <span className="size-1 rounded-full bg-white/30" />
              <span>Brak opłat wstępnych za ocenę szans</span>
            </div>
          </div>

          {/* PRAWA STRONA: ZDJĘCIE RODZINY (FORMAT 4/5) + KARTA POD SPODEM */}
          <div className="relative lg:col-span-5 flex justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* GÓRNA PLAKIETKA */}
              <div className="absolute -top-3.5 right-4 z-20 hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-navy-900 px-4 py-1.5 shadow-2xl">
                <ShieldCheck className="size-4 text-emerald-400" />
                <span className="text-[11px] font-extrabold tracking-wider text-emerald-300">
                  TARCZA PRAWNA: WSTRZYMANIE EGZEKUCJI
                </span>
              </div>

              {/* GŁÓWNA RAMKA KONTENERA */}
              <div className="rounded-3xl sm:rounded-[2.5rem] border border-white/15 bg-navy-900 p-2.5 sm:p-4 shadow-2xl flex flex-col gap-2.5 sm:gap-3">
                {/* 1. ZDJĘCIE RODZINY: NATURALNY PIONOWY FORMAT 4/5 */}
                <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-navy-950">
                  <img
                    src="/rodzinka.png"
                    alt="Szczęśliwa rodzina – życie bez długów po upadłości konsumenckiej"
                    className="h-full w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* 2. KARTA KORZYŚCI: LEŻY CAŁKOWICIE POD ZDJĘCIEM */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4.5 backdrop-blur-md">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex size-5 sm:size-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-400 shrink-0">
                        <Heart className="size-3 sm:size-3.5 fill-emerald-400/40" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                        Odzyskaj spokój dla swojej rodziny
                      </span>
                    </div>

                    {/* WYŚRODKOWANA PLAKIETKA */}
                    <span className="inline-flex items-center justify-center text-center self-center rounded-full bg-emerald-400/20 px-2.5 py-1 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 border border-emerald-400/40 leading-none shrink-0">
                      Nowy start
                    </span>
                  </div>

                  {/* 2 SZYBKIE WSKAŹNIKI */}
                  <div className="mt-2.5 grid grid-cols-2 gap-2 text-left">
                    <div className="rounded-xl bg-navy-950/70 p-2 sm:p-2.5 border border-white/5">
                      <span className="block text-[9px] sm:text-[10px] font-medium text-white/60 leading-none">
                        Licznik odsetek:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1 mt-1">
                        <TrendingDown className="size-3.5" />0 zł (zamrożone)
                      </span>
                    </div>

                    <div className="rounded-xl bg-navy-950/70 p-2 sm:p-2.5 border border-white/5">
                      <span className="block text-[9px] sm:text-[10px] font-medium text-white/60 leading-none">
                        Finał sprawy:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-1">
                        <Sparkles className="size-3.5 text-emerald-400" />
                        Umorzenie długu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DOLNY PASEK STATYSTYK */}
        <div className="mt-12 sm:mt-20 border-t border-white/10 pt-6 sm:pt-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {trustStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col border-l border-white/10 pl-3 sm:pl-6"
              >
                <span
                  className={`font-display text-xl sm:text-3xl font-bold tracking-tight ${
                    stat.highlight ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm text-white/70 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
