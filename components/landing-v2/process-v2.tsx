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
    text: "Dzwonisz lub wypełniasz formularz. Bezpłatnie sprawdzam wysokość zobowiązań i oceniam szanse na sukces.",
    icon: PhoneCall,
    roleLawyer: "Analiza prawna i ocena szans",
    roleClient: "Krótka, dyskretna rozmowa",
    isMilestone: false,
  },
  {
    number: "02",
    badge: "Krok 2 · Przygotowanie",
    title: "Zebranie dokumentów i wniosek",
    text: "Pomagam w skompletowaniu dokumentów i sporządzam kompletny wniosek do sądu.",
    icon: FileText,
    roleLawyer: "Sporządzenie wniosku i uzasadnienia",
    roleClient: "Przekazanie umów i pism",
    isMilestone: false,
  },
  {
    number: "03",
    badge: "🌟 PUNKT ZWROTNY · OCHRONA",
    title: "Ogłoszenie upadłości przez Sąd",
    text: "Sąd ogłasza upadłość. Egzekucje komornicze zostają wstrzymane, a odsetki przestają rosnąć.",
    icon: Gavel,
    roleLawyer: "Nadzór nad postanowieniem",
    roleClient: "Koniec windykacji i komornika",
    isMilestone: true,
  },
  {
    number: "04",
    badge: "Krok 4 · Porządkowanie",
    title: "Realizacja planu spłaty",
    text: "Realizujesz symboliczny plan spłaty dopasowany do Twoich zarobków, po czym reszta długu jest umarzana.",
    icon: CheckCircle2,
    roleLawyer: "Wsparcie w kontaktach z syndykiem",
    roleClient: "Spłata rat według planu",
    isMilestone: false,
  },
  {
    number: "05",
    badge: "Krok 5 · Nowy start",
    title: "Czysta karta finansowa",
    text: "Odzyskujesz wolność finansową, spokój ducha oraz czysty BIK bez zaległości.",
    icon: Sparkles,
    roleLawyer: "Prawomocne umorzenie długów",
    roleClient: "Życie bez długów",
    isMilestone: false,
  },
];

export function ProcessV2() {
  return (
    <section
      id="jak-to-dziala"
      className="scroll-mt-20 bg-cream py-10 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-500/20">
            Przejrzysta ścieżka prawna
          </div>
          <h2 className="mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
            Prosty proces do życia bez długów
          </h2>
          <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink/75">
            Prowadzimy Twoją sprawę od A do Z, dbając o każdy formalny szczegół.
          </p>
        </div>

        {/* LISTA KROKÓW (ZWARTE KARTY NA TELEFONIE) */}
        <div className="mt-8 sm:mt-16 space-y-3.5 sm:space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative flex flex-col sm:flex-row items-start gap-3.5 sm:gap-7 rounded-2xl sm:rounded-3xl p-4 sm:p-8 transition-all duration-300 ${
                  step.isMilestone
                    ? "border-2 border-emerald-500 bg-linear-to-br from-white via-white to-emerald-50/50 shadow-md sm:shadow-xl ring-2 sm:ring-4 ring-emerald-500/10"
                    : "border border-navy/10 bg-white shadow-xs"
                }`}
              >
                {/* WĘZEŁ IKONY */}
                <div className="flex sm:flex-col items-center justify-between w-full sm:w-auto shrink-0">
                  <div
                    className={`flex size-10 sm:size-16 items-center justify-center rounded-xl sm:rounded-2xl ${
                      step.isMilestone
                        ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    }`}
                  >
                    <Icon className="size-5 sm:size-7" />
                  </div>

                  <span
                    className={`sm:hidden inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase ${
                      step.isMilestone
                        ? "bg-emerald-500/20 text-emerald-800"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* TREŚĆ */}
                <div className="flex-1 w-full">
                  <div className="hidden sm:flex flex-wrap items-center justify-between gap-2 border-b border-navy/5 pb-3">
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

                  <h3 className="mt-1 sm:mt-3 font-display text-base sm:text-2xl font-bold text-navy leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-base leading-relaxed text-ink/75">
                    {step.text}
                  </p>

                  {/* MINI TAGI RÓL NA TELEFONIE */}
                  <div className="mt-3 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 pt-2.5 sm:pt-4 border-t border-navy/5 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-2 rounded-lg sm:rounded-xl bg-emerald-50/60 border border-emerald-100/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-navy">
                      <ShieldCheck className="size-3.5 sm:size-4 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Kancelaria:</strong> {step.roleLawyer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-200/60 px-2.5 py-1.5 sm:px-3 sm:py-2 text-navy">
                      <UserCheck className="size-3.5 sm:size-4 text-slate-600 shrink-0" />
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

        {/* DOLNY BANER */}
        <div className="mt-8 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-navy p-5 sm:p-9 text-white shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-xl font-bold text-white">
              Zrób pierwszy krok bez zobowiązań
            </h4>
            <p className="text-xs sm:text-sm text-white/70 mt-0.5">
              Wstępna analiza jest w 100% darmowa.
            </p>
          </div>

          <a
            href="#kontakt"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-navy-900 shadow-md transition-all active:scale-95"
          >
            <span>Rozpocznij od darmowej analizy</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
