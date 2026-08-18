// components/landing-v2/process-v2.tsx
import {
  PhoneCall,
  FileText,
  Gavel,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    badge: "Krok 1 · Bezpłatny start",
    title: "Kontakt i bezpłatna analiza sytuacji",
    text: "Dzwonisz lub wypełniasz formularz. Bezpłatnie i bez zobowiązań sprawdzam wysokość Twoich zobowiązań oraz oceniam szanse na sukces.",
    icon: PhoneCall,
    roleLawyer: "Analiza prawna i ocena szans",
    roleClient: "Krótka, dyskretna rozmowa",
    isMilestone: false,
  },
  {
    number: "02",
    badge: "Krok 2 · Przygotowanie",
    title: "Zebranie dokumentów i przygotowanie wniosku",
    text: "Pomagam w skompletowaniu wszystkich niezbędnych pism i sporządzam profesjonalny, kompletny wniosek do sądu.",
    icon: FileText,
    roleLawyer: "Sporządzenie wniosku i uzasadnienia",
    roleClient: "Przekazanie posiadanych umów i pism",
    isMilestone: false,
  },
  {
    number: "03",
    badge: "🌟 PUNKT ZWROTNY · OCHRONA PRAWNA",
    title: "Ogłoszenie upadłości przez Sąd",
    text: "Sąd ogłasza upadłość. Od tego momentu egzekucje komornicze zostają wstrzymane, odsetki przestają rosnąć, a Ty zyskujesz pełną ochronę prawną.",
    icon: Gavel,
    roleLawyer: "Nadzór nad postanowieniem sądu",
    roleClient: "Natychmiastowa ulga i spokój od windykacji",
    isMilestone: true,
  },
  {
    number: "04",
    badge: "Krok 4 · Porządkowanie",
    title: "Realizacja ustalonego planu spłaty",
    text: "Realizujesz ustalony plan spłaty dopasowany ściśle do Twoich możliwości zarobkowych, po czym pozostała część długów zostaje całkowicie umorzona.",
    icon: CheckCircle2,
    roleLawyer: "Wsparcie w kontaktach z syndykiem",
    roleClient: "Spłata symbolicznych rat według planu",
    isMilestone: false,
  },
  {
    number: "05",
    badge: "Krok 5 · Cel osiągnięty",
    title: "Nowy start finansowy i czysta karta",
    text: "Odzyskujesz wolność finansową, spokój ducha oraz czystą kartę do budowania bezpiecznej przyszłości bez żadnych zaległości.",
    icon: Sparkles,
    roleLawyer: "Prawomocne umorzenie długów",
    roleClient: "Życie bez długów i czysty BIK",
    isMilestone: false,
  },
];

export function ProcessV2() {
  return (
    <section
      id="jak-to-dziala"
      className="scroll-mt-20 bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Przejrzysta ścieżka prawna
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Prosty proces do życia bez długów
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
            Nie musisz znać procedur sądowych. Prowadzimy Twoją sprawę od A do
            Z, dbając o każdy formalny szczegół.
          </p>
        </div>

        {/* LISTA KROKÓW (CZYSTY, SPOJNY UKŁAD BEZ BRZYDKIEJ PRZERWANEJ KRESKI) */}
        <div className="mt-16 space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative flex flex-col sm:flex-row items-start gap-5 sm:gap-7 rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  step.isMilestone
                    ? "border-2 border-emerald-500 bg-linear-to-br from-white via-white to-emerald-50/50 shadow-xl shadow-emerald-500/10 ring-4 ring-emerald-500/10"
                    : "border border-navy/10 bg-white shadow-sm hover:border-emerald-400/40 hover:shadow-md"
                }`}
              >
                {/* WĘZEŁ IKONY KROKU */}
                <div className="shrink-0">
                  <div
                    className={`flex size-14 sm:size-16 items-center justify-center rounded-2xl transition-transform ${
                      step.isMilestone
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    }`}
                  >
                    <Icon className="size-6 sm:size-7" />
                  </div>
                </div>

                {/* ZAWARTOŚĆ KROKU */}
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy/5 pb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-extrabold tracking-wider uppercase ${
                        step.isMilestone
                          ? "bg-emerald-500/20 text-emerald-800 border border-emerald-500/30"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {step.badge}
                    </span>
                    <span className="text-xs font-bold text-navy/40 uppercase tracking-wider">
                      Etap {step.number}/05
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-navy leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink/75">
                    {step.text}
                  </p>

                  {/* PODZIAŁ RÓL (KANCELARIA VS KLIENT) */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-navy/5 text-xs">
                    <div className="flex items-center gap-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100/80 px-3 py-2 text-navy">
                      <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Kancelaria:</strong> {step.roleLawyer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 border border-slate-200/60 px-3 py-2 text-navy">
                      <UserCheck className="size-4 text-slate-600 shrink-0" />
                      <span>
                        <strong>Twój udział:</strong> {step.roleClient}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOLNY BANER CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-navy p-7 sm:p-9 text-white shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Zrób pierwszy krok bez żadnych zobowiązań
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-md leading-relaxed">
              Wstępna analiza jest w 100% darmowa. Po rozmowie sam zdecydujesz,
              czy chcesz złożyć wniosek.
            </p>
          </div>

          <a
            href="#kontakt"
            className="shrink-0 group inline-flex items-center gap-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 px-7 py-4 text-sm font-bold text-navy-900 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Rozpocznij od darmowej analizy</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
