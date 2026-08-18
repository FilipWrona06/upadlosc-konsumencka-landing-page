// components/landing-v2/for-whom-v2.tsx
import {
  TrendingDown,
  ShieldAlert,
  HeartHandshake,
  Check,
  Scale,
  ArrowRight,
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
  return (
    <section id="dla-kogo" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Kwalifikacja do procedury
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Kiedy upadłość konsumencka jest właściwym krokiem?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            Nie musisz mieć majątku, statusu przedsiębiorcy ani znajomości
            prawa. Procedura upadłościowa została stworzona dla osób fizycznych,
            których sytuacja życiowa wymknęła się spod kontroli.
          </p>
        </div>

        {/* 3 KARTY SCENARIUSZY Z IDEALNYM WYRÓWNANIEM W PIONIE */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {scenarios.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative flex h-full flex-col justify-between rounded-3xl border border-navy/10 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-400/40"
              >
                {/* GÓRNA CZĘŚĆ KARTY */}
                <div className="flex-1">
                  {/* Numer + Ikona */}
                  <div className="flex items-center justify-between border-b border-navy/5 pb-5">
                    <span className="font-display text-2xl font-bold tracking-tight text-navy/25 group-hover:text-emerald-600 transition-colors">
                      {item.number}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Tytuł i opis */}
                  <h3 className="mt-6 font-display text-xl font-bold text-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-ink/60 min-h-9.5">
                    {item.subtitle}
                  </p>

                  {/* Wypunktowanie objawów */}
                  <ul className="mt-6 space-y-3.5">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-ink/80"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mt-0.5 border border-emerald-200/60">
                          <Check className="size-3 stroke-3" />
                        </span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DOLNA BELKA PRAWNA – TERAZ W 100% RÓWNA NA WSZYSTKICH KARTACH */}
                <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-100 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/40 transition-colors">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-navy/50 group-hover:text-emerald-700 transition-colors">
                    Skutek prawny upadłości:
                  </span>
                  <p className="mt-1.5 text-xs font-bold text-navy flex items-center gap-2">
                    <Scale className="size-4 text-emerald-600 shrink-0" />
                    <span>{item.legalEffect}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOLNA BELKA EDUKACYJNA (STATUS SĄDU) */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-emerald-500/20 bg-linear-to-r from-white via-white to-emerald-50/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shadow-xs">
              <Scale className="size-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-navy">
                Sąd bada stan faktyczny, nie ocenia moralnie
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-ink/75 max-w-2xl leading-relaxed">
                Niewypłacalność spowodowana chorobą, inflacją, utratą pracy czy
                błędną decyzją finansową jest ustawową przesłanką do ogłoszenia
                upadłości.
              </p>
            </div>
          </div>

          <a
            href="#kontakt"
            className="group shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-navy px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-navy-700 hover:shadow-lg active:scale-95"
          >
            <span>Skonsultuj swoją sytuację</span>
            <ArrowRight className="size-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
