import { Briefcase, Scale, RefreshCw, Gavel, MessageSquare, Laptop, FileText, ListChecks, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Upadłość konsumencka",
    text: "Kompleksowe prowadzenie sprawy od A do Z, od analizy po umorzenie zobowiązań.",
  },
  {
    icon: RefreshCw,
    title: "Restrukturyzacja zobowiązań",
    text: "Uporządkowanie spłat i układ z wierzycielami, gdy upadłość nie jest najlepszą drogą.",
  },
  {
    icon: Gavel,
    title: "Postępowanie upadłościowe",
    text: "Zarządzanie dokumentacją, edukacja i wsparcie merytoryczne na każdym etapie postępowania w komunikacji z sądem i syndykiem.",
  },
  {
    icon: MessageSquare,
    title: "Bezpłatna konsultacja",
    text: "Konsultacje w zakresie upadłości konsumenckiej, bez opłat.",
  },
  {
    icon: Laptop,
    title: "Obsługa online",
    text: "Profesjonalna, w pełni zdalna obsługa dla klientów z całej Polski.",
  },
  {
    icon: FileText,
    title: "Dokumentacja i analiza",
    text: "Przygotowanie dokumentów prawnych oraz rzetelna analiza Twojej sytuacji finansowej.",
  },
]

const tags = [
  "Planowanie budżetu po upadłości",
  "Edukacja w zakresie praw i obowiązków",
  "Upadłość konsumencka od A do Z",
  "Wiedza w postępowaniu upadłościowym",
]

const offerItems = [
  "Analiza możliwości ogłoszenia upadłości",
  "Przygotowanie wniosku",
  "Wsparcie merytoryczne w postępowaniu przed sądem",
  "Pomoc podczas współpracy z syndykiem",
  "Plan spłaty wierzycieli",
  "Umorzenie zobowiązań",
]

export function Services() {
  return (
    <section id="uslugi" className="scroll-mt-24 bg-cream pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          <Briefcase className="size-4 text-gold" />
          Usługi
        </p>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
          Upadłość konsumencka, kompleksowo
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/60">
          Zajmuję się sprawami upadłości i restrukturyzacji od pierwszej rozmowy po nowy rozdział. Pomagam także w pełni
          online, klientom z całej Polski.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <s.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-10 rounded-3xl bg-navy p-8 text-white lg:grid-cols-2 lg:p-12">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              <ListChecks className="size-4" />
              Oferta
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-balance sm:text-3xl">
              Co robię w ramach prowadzenia sprawy
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Biorę na siebie cały proces, Ty masz spokój i pełną informację na każdym etapie.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((t) => (
                <span key={t} className="rounded-lg border border-white/15 px-4 py-2 text-xs font-medium text-white/85">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-5 self-center sm:grid-cols-2">
            {offerItems.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-white/90">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
