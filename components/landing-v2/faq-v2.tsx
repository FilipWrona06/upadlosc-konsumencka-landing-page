// components/landing-v2/faq-v2.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  Phone,
  Lock,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

// 8 dokładnych pytań klienta z przypisanymi tagami ułatwiającymi skanowanie
const faqs = [
  {
    category: "Majątek",
    q: "Czy stracę cały majątek?",
    a: "Nie. Celem postępowania nie jest pozbawienie Cię wszystkiego. Przedmioty codziennego użytku oraz środki niezbędne do utrzymania zwykle pozostają. Jeśli posiadasz mieszkanie, ustawa przewiduje wydzielenie z sumy jego sprzedaży kwoty na wynajem lokalu dla Ciebie i Twojej rodziny na okres od 12 do 24 miesięcy.",
  },
  {
    category: "Sąd i Procedury",
    q: "Czy muszę stawiać się w sądzie?",
    a: "W zdecydowanej większości spraw nie ma takiej konieczności. Postępowanie prowadzone jest w dużej mierze pisemnie oraz za pośrednictwem Krajowego Rejestru Zadłużonych (elektronicznie), a wszelkie formalności i pisma procesowe bierzemy na siebie.",
  },
  {
    category: "Czas trwania",
    q: "Ile trwa całe postępowanie?",
    a: "Samo ogłoszenie upadłości (czyli wstrzymanie działań komornika) następuje zwykle w ciągu kilku miesięcy od złożenia wniosku. Dalszy plan spłaty ustalany jest najczęściej na okres od 12 do 36 miesięcy i zależy ściśle od Twoich zarobków.",
  },
  {
    category: "Kwalifikacja",
    q: "Nie mam żadnego majątku, czy to przeszkoda?",
    a: "Absolutnie nie. Brak majątku nie wyklucza upadłości konsumenckiej. W praktyce sprawy osób bez majątku przebiegają najszybciej, a sąd może umorzyć zobowiązania w całości bez ustalania planu spłat.",
  },
  {
    category: "Zakres oddłużenia",
    q: "Czy upadłość obejmie wszystkie moje zobowiązania?",
    a: "Umorzeniu podlega zdecydowana większość długów: pożyczki, kredyty gotówkowe i hipoteczne, chwilówki, karty kredytowe, zaległości czynszowe czy rachunki. Wyjątkiem są wyłącznie alimenty, renty odszkodowawcze oraz grzywny sądowe.",
  },
  {
    category: "Komornik & Windykacja",
    q: "Co z wierzycielami i komornikiem?",
    a: "Z dniem ogłoszenia upadłości wszelkie postępowania egzekucyjne i licytacje zostają wstrzymane z mocy prawa. Windykacja traci prawo do kontaktu z Tobą, a kontakt z wierzycielami przejmuje wyznaczony przez sąd syndyk.",
  },
  {
    category: "Koszty & Raty",
    q: "Ile kosztuje pomoc i czy można płacić w ratach?",
    a: "Pierwsza rozmowa i analiza Twoich dokumentów są w 100% bezpłatne. Wynagrodzenie za prowadzenie sprawy ustalamy indywidualnie i wpisujemy do umowy – płatność rozkładamy na wygodne, miesięczne raty.",
  },
  {
    category: "Dyskrecja",
    q: "Czy moje dane są bezpieczne?",
    a: "Tak. Obowiązuje nas ścisła tajemnica zawodowa i najwyższe standardy ochrony danych osobowych. Twoja sprawa prowadzona jest w warunkach pełnej dyskrecji i szacunku.",
  },
];

export function FaqV2() {
  // Domyślnie otwarte pierwsze pytanie
  const [open, setOpen] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpen(open === index ? null : index);
  };

  // Dane strukturalne Schema.org dla SEO Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      {/* Skrypt FAQ Schema wstrzyknięty dla botów wyszukiwarek */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEWA STRONA: STICKY SUPPORT HUB (5 KOLUMN) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3.5 py-1.5 text-xs font-semibold text-navy">
              <MessageCircleQuestion className="size-3.5 text-gold" />
              <span>Baza Wiedzy Prawnej</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Odpowiedzi na najczęstsze pytania
            </h2>

            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Wokół upadłości konsumenckiej narosło wiele mitów. Poniżej
              wyjaśniamy, jak procedura wygląda w świetle obowiązujących
              przepisów prawa.
            </p>

            {/* KARTA BEZPOŚREDNIEGO KONTAKTU POD NAGŁÓWKIEM */}
            <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">
                    Masz inne, nietypowe pytanie?
                  </h3>
                  <p className="text-xs text-ink/60">
                    Każda sytuacja ma swoją specyfikę.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-ink/75">
                Nie musisz czytać ustaw. Zadzwoń do nas i opisz krótko swój
                przypadek – bezpłatnie i bez zobowiązań powiemy Ci, na czym
                stoisz.
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="tel:515515314"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-xs font-bold text-white transition-all hover:bg-navy-700 active:scale-98 shadow-sm"
                >
                  <Phone className="size-3.5 text-gold" />
                  <span>Zadzwoń: 515 515 314</span>
                </a>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-ink/50 pt-1">
                  <Lock className="size-3 text-gold" />
                  <span>100% poufności · Bezpłatna analiza</span>
                </div>
              </div>
            </div>
          </div>

          {/* PRAWA STRONA: PŁYNNY AKORDEON (7 KOLUMN) */}
          <div className="space-y-3.5 lg:col-span-7">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-gold/50 bg-white shadow-md shadow-gold/5 ring-1 ring-gold/20"
                      : "border-navy/10 bg-white/70 hover:bg-white hover:border-navy/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 pr-2">
                      {/* Mikro-tag tematyczny */}
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gold">
                        {faq.category}
                      </span>
                      <h3
                        className={`font-display text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? "text-navy" : "text-navy/90"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    {/* Obracająca się strzałka */}
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-gold text-navy-900 rotate-180 shadow-xs"
                          : "bg-navy/5 text-navy group-hover:bg-navy/10"
                      }`}
                    >
                      <ChevronDown className="size-4 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* PŁYNNE ROZWIJANIE PRZEZ CSS GRID (BEZ SZARPANIA) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-ink/80 border-t border-navy/5 mt-1">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
