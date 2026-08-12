import { BookOpen, Users, Gavel, Wallet, Clock, ArrowDown } from "lucide-react"

const cards = [
  {
    icon: Users,
    title: "Dla kogo",
    text: "Dla osób fizycznych nieprowadzących działalności, które utraciły zdolność do spłaty zobowiązań.",
  },
  {
    icon: Gavel,
    title: "Podstawa prawna",
    text: "Postępowanie reguluje Prawo upadłościowe; wnioski składa się elektronicznie przez system KRZ.",
  },
  {
    icon: Wallet,
    title: "Efekt",
    text: "Umorzenie zobowiązań i plan spłaty dopasowany do realnych możliwości, czasem bez rat.",
  },
  {
    icon: Clock,
    title: "Czas",
    text: "Ogłoszenie upadłości zwykle w kilka miesięcy; plan spłaty najczęściej 12–36 miesięcy.",
  },
]

export function WhatIs() {
  return (
    <section className="bg-cream pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              <BookOpen className="size-4 text-gold" />
              Czym jest upadłość konsumencka
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
              Drugi oddech dla Twoich finansów
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                Upadłość konsumencka to postępowanie sądowe dla osób fizycznych, które bez własnej winy popadły w
                niewypłacalność i nie są w stanie regulować swoich zobowiązań. To rozwiązanie przewidziane przez prawo,
                nie ostateczność, lecz uporządkowana droga do nowego rozdziału.
              </p>
              <p>
                W jego wyniku sąd może umorzyć całość lub część zobowiązań, a wcześniej wstrzymuje działania komorników i
                wierzycieli. Ogłosić ją może praktycznie każdy, kto popadł w trwałe trudności ze spłatą, niezależnie od
                wysokości zobowiązań.
              </p>
              <p>
                Moją rolą jest przeprowadzić Cię przez ten proces spokojnie i bezpiecznie, tłumacząc każdy krok prostym
                językiem.
              </p>
            </div>
            <a
              href="#przebieg"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
            >
              Zobacz, jak przebiega
              <ArrowDown className="size-4" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`rounded-2xl border border-black/5 bg-white p-7 shadow-sm ${
                  i % 2 === 1 ? "sm:mt-10" : ""
                }`}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <card.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
