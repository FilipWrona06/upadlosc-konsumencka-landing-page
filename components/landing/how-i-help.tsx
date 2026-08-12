import { ShieldCheck, Scale, HandCoins, FileEdit, HeartHandshake, Sunrise, Sparkles } from "lucide-react"

const cards = [
  {
    icon: ShieldCheck,
    title: "Koniec z windykacją",
    text: "Z dniem ogłoszenia upadłości postępowania egzekucyjne zostają wstrzymane, a wierzyciele tracą prawo do bezpośredniej windykacji, kontakt przejmuje syndyk. To realna ulga w codziennym życiu.",
  },
  {
    icon: Scale,
    title: "Umorzenie zobowiązań",
    text: "Po zakończeniu postępowania sąd może umorzyć pozostałe zobowiązania, których nie byłeś w stanie spłacić, także te wobec banków, firm pożyczkowych, zaległości czynszowych i innych kontrahentów.",
  },
  {
    icon: HandCoins,
    title: "Plan spłaty na miarę",
    text: "Sąd ustala plan spłaty dopasowany do Twoich realnych możliwości, najczęściej w wysokości kilkuset złotych na 12 do 36 miesięcy.",
  },
  {
    icon: FileEdit,
    title: "Prowadzę od A do Z",
    text: "Przygotowuję wniosek, kompletuję dokumenty i pomagam w korespondencji z sądem oraz syndykiem. Bez konieczności wizyt w sądzie.",
  },
  {
    icon: HeartHandshake,
    title: "Spokój i dyskrecja",
    text: "Sprawę prowadzę w pełnej poufności. Odzyskujesz spokój, czas i przestrzeń, by zacząć budować swoją sytuację finansową od nowa.",
  },
  {
    icon: Sunrise,
    title: "Nowy rozdział",
    text: "Po zakończeniu postępowania możesz ponownie zawierać umowy, oszczędzać, a z czasem znów korzystać z usług finansowych, bez ciężaru przeszłości.",
  },
]

export function HowIHelp() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
          <Sparkles className="size-4 text-gold" />
          Jak pomagam
        </p>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
          Realna ulga, nie kolejne obietnice
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/60">
          Upadłość konsumencka to legalna droga do nowego startu. Pokazuję, co konkretnie zmienia w Twojej codzienności,
          i biorę na siebie formalności.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <card.icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
