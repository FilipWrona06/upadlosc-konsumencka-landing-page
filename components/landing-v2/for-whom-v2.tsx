// components/landing-v2/for-whom-v2.tsx
"use client";

import { useState } from "react";
import {
  TrendingDown,
  ShieldAlert,
  HeartHandshake,
  Check,
  Scale,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const scenarios = [
  {
    number: "01",
    title: "Pętla zadłużenia i brak płynności",
    subtitle: "Gdy dług rośnie szybciej, niż jesteś w stanie go spłacać",
    icon: TrendingDown,
    points: [
      "Spłacasz jedną pożyczkę kolejną (rolowanie długu)",
      "Wysokość zadłużenia rośnie mimo regularnych wpłat",
      "Miesięczne raty przewyższają Twoje realne dochody",
    ],
    legalEffect: "Zatrzymanie naliczania odsetek i zamrożenie długu",
  },
  {
    number: "02",
    title: "Działania komornika i windykacji",
    subtitle: "Gdy presja psychiczna i telefony stają się nie do zniesienia",
    icon: ShieldAlert,
    points: [
      "Otrzymujesz pisma z sądu, od wierzycieli lub komornika",
      "Masz dość uciążliwych telefonów z firm windykacyjnych",
      "Komornik zajął lub grozi zajęciem Twojego wynagrodzenia",
    ],
    legalEffect: "Prawne wstrzymanie egzekucji i zakaz kontaktu windykacji",
  },
  {
    number: "03",
    title: "Lęk o przyszłość i bezradność",
    subtitle: "Gdy nie wiesz, od czego zacząć i boisz się o bliskich",
    icon: HeartHandshake,
    points: [
      "Boisz się o mieszkanie i bezpieczeństwo finansowe rodziny",
      "Czujesz bezradność i paraliż przed procedurami prawnymi",
      "Nie wiesz, jak skompletować dokumenty i napisać wniosek",
    ],
    legalEffect: "Ustawowa ochrona mieszkaniowa i całkowity reset zobowiązań",
  },
];

export function ForWhomV2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="dla-kogo"
      className="scroll-mt-20 bg-cream py-10 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Kwalifikacja do procedury
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
            Kiedy upadłość konsumencka jest właściwym krokiem?
          </h2>
          <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
            Nie musisz mieć majątku, statusu przedsiębiorcy ani znajomości
            prawa. Procedura upadłościowa została stworzona dla osób fizycznych,
            których sytuacja życiowa wymknęła się spod kontroli.
          </p>
        </div>

        {/* WSKAŹNIK PRZESUWANIA (TYLKO NA MOBILE) */}
        <div className="mt-6 flex items-center justify-between lg:hidden px-1 text-xs text-ink/60 font-medium">
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <span>Przesuń scenariusze</span>
            <ChevronRight className="size-3.5 animate-pulse" />
          </span>
          <div className="flex gap-1.5">
            {scenarios.map((_, idx) => (
              <span
                key={idx}
                className={`size-2 rounded-full transition-all ${
                  activeIndex === idx ? "w-5 bg-emerald-500" : "bg-navy/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* KARTY: NA MOBILE HORYZONTALNY SWIPE (SNAP CAROUSEL), NA DESKTOPIE GRID 3 KOLUMN */}
        <div
          onScroll={(e) => {
            const el = e.currentTarget;
            const index = Math.round(el.scrollLeft / (el.clientWidth * 0.85));
            setActiveIndex(Math.min(index, scenarios.length - 1));
          }}
          className="mt-3 sm:mt-8 lg:mt-14 -mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-4 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8 items-stretch"
        >
          {scenarios.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="min-w-[85vw] sm:min-w-85 lg:min-w-0 snap-center group relative flex h-full flex-col justify-between rounded-3xl border border-navy/10 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-400/40"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between border-b border-navy/5 pb-4 sm:pb-5">
                    <span className="font-display text-2xl font-bold tracking-tight text-navy/25 group-hover:text-emerald-600 transition-colors">
                      {item.number}
                    </span>
                    <div className="flex size-10 sm:size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold text-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-ink/60 min-h-8.5 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <ul className="mt-5 space-y-2.5 sm:space-y-3.5">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/80"
                      >
                        <span className="flex size-4.5 sm:size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5 border border-emerald-200/60">
                          <Check className="size-2.5 sm:size-3 stroke-3" />
                        </span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 rounded-2xl bg-slate-50 p-3.5 sm:p-4 border border-slate-100 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/40 transition-colors">
                  <span className="block text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-navy/50 group-hover:text-emerald-700 transition-colors">
                    Skutek prawny upadłości:
                  </span>
                  <p className="mt-1 text-xs font-bold text-navy flex items-center gap-1.5 sm:gap-2">
                    <Scale className="size-3.5 sm:size-4 text-emerald-600 shrink-0" />
                    <span>{item.legalEffect}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOLNA BELKA EDUKACYJNA */}
        <div className="mt-8 sm:mt-12 overflow-hidden rounded-3xl border border-emerald-500/20 bg-linear-to-r from-white via-white to-emerald-50/40 p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="hidden sm:flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              <Scale className="size-6 sm:size-7" />
            </div>
            <div>
              <h4 className="text-sm sm:text-lg font-bold text-navy">
                Sąd bada stan faktyczny, nie ocenia moralnie
              </h4>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-ink/75 max-w-2xl leading-relaxed">
                Niewypłacalność spowodowana chorobą, inflacją czy utratą pracy
                jest ustawową przesłanką do ogłoszenia upadłości.
              </p>
            </div>
          </div>

          <a
            href="#kontakt"
            className="w-full md:w-auto group shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-navy-700 active:scale-95"
          >
            <span>Skonsultuj swoją sytuację</span>
            <ArrowRight className="size-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
