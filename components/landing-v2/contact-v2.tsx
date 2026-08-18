// components/landing-v2/contact-v2.tsx
"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const quickTopics = [
  "Zajęcie komornicze",
  "Pętla pożyczek / chwilówek",
  "Długi po działalności",
  "Nękanie windykacyjne",
  "Chcę tylko bezpłatnej porady",
];

export function ContactV2() {
  const [selectedTopic, setSelectedTopic] =
    useState<string>("Zajęcie komornicze");
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="kontakt"
      className="relative scroll-mt-20 overflow-hidden bg-navy py-20 lg:py-28 text-white"
    >
      {/* Oświetlenie ambientowe w tle */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 size-150 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
            <Lock className="size-3.5 text-emerald-400" />
            <span className="text-xs font-semibold text-white/90">
              Dyskretna i bezpłatna konsultacja
            </span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Zrób pierwszy krok do wolności od długów
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Nie musisz dzisiaj podejmować żadnych wiążących decyzji. Po prostu
            porozmawiajmy i sprawdźmy, jak prawo może Cię ochronić.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          {/* LEWA KOLUMNA: DANE, BIURO, GODZINY (5 KOLUMN) */}
          <div className="space-y-6 lg:col-span-5">
            {/* KARTA BEZPOŚREDNIEGO KONTAKTU */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8 backdrop-blur-xl shadow-xl">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 block mb-4">
                Bezpośredni kontakt
              </span>

              <div className="space-y-4">
                <a
                  href="tel:515515314"
                  className="flex items-center gap-4 group rounded-2xl bg-white/5 p-3.5 border border-white/5 hover:border-emerald-400/40 hover:bg-white/10 transition-all"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-500 text-navy-900 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold tracking-wider uppercase text-white/50">
                      Infolinia prawna
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl text-white">
                      515 515 314
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:kontakt@kancelaria.pl"
                  className="flex items-center gap-4 group rounded-2xl bg-white/5 p-3.5 border border-white/5 hover:border-emerald-400/40 hover:bg-white/10 transition-all"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy transition-colors">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold tracking-wider uppercase text-white/50">
                      Poufny e-mail
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-white">
                      kontakt@kancelaria.pl
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold tracking-wider uppercase text-white/50">
                      Biuro Kancelarii
                    </span>
                    <span className="font-medium text-sm sm:text-base text-white/90">
                      ul. Wolności 12, 41-500 Chorzów
                    </span>
                  </div>
                </div>
              </div>

              {/* Godziny i status otwarcia */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="flex items-center gap-1.5 font-semibold text-white/90">
                    <Clock className="size-3.5 text-emerald-400" />
                    Godziny przyjęć:
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-400/30">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Pon–Pt: 8:00 – 19:00
                  </span>
                </div>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Spotkania stacjonarne po wcześniejszym umówieniu telefonicznym
                  lub obsługa w 100% zdalna (online).
                </p>
              </div>
            </div>

            {/* GWARANCJA POUFNOŚCI POD KARTĄ */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-3.5">
              <ShieldCheck className="size-6 text-emerald-400 shrink-0" />
              <p className="text-xs text-white/80 leading-relaxed">
                <strong>Tajemnica prawna:</strong> Twoje dane nie trafią do
                żadnych zewnętrznych baz. Rozmawiasz bezpośrednio z prawnikiem.
              </p>
            </div>
          </div>

          {/* PRAWA KOLUMNA: FORMULARZ (7 KOLUMN) */}
          <div className="rounded-3xl bg-white p-7 sm:p-10 text-ink shadow-2xl lg:col-span-7">
            {sent ? (
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">
                  Wiadomość została wysłana
                </h3>
                <p className="text-sm text-ink/75 max-w-md mx-auto leading-relaxed">
                  Dziękujemy. Przeanalizujemy Twoje zgłoszenie i skontaktujemy
                  się z Tobą telefonicznie lub mailowo jeszcze dzisiaj.
                </p>
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-navy bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                    <Lock className="size-3.5 text-emerald-600" />
                    Twoje zgłoszenie jest chronione tajemnicą
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy">
                    Formularz bezpłatnej analizy
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink/65">
                    Wypełnij krótki formularz – odpowiadamy tego samego dnia
                    roboczego.
                  </p>
                </div>

                {/* 1. SZYBKI WYBÓR TEMATU (POPRAWIONY KONTRAST) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy/70 mb-2">
                    Czego dotyczy Twoja sytuacja?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          type="button"
                          key={topic}
                          onClick={() => setSelectedTopic(topic)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all select-none ${
                            isSelected
                              ? "bg-navy text-emerald-400 font-bold shadow-sm ring-2 ring-emerald-400/40"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. IMIĘ I NAZWISKO */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Imię i nazwisko <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Np. Jan Kowalski"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                  />
                </div>

                {/* 3. POLA: TELEFON + ADRES E-MAIL */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Numer telefonu <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="515 515 314"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-navy">
                      Adres e-mail <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jan@kowalski.pl"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                    />
                  </div>
                </div>

                {/* 4. OPCJONALNA WIADOMOŚĆ */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-navy">
                    Krótki opis sytuacji{" "}
                    <span className="text-slate-400 font-normal">
                      (opcjonalnie)
                    </span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Np. w jakich godzinach dzwonić, szacunkowa kwota zadłużenia..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10 resize-none"
                  />
                </div>

                {/* 5. ZGODA RODO */}
                <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 size-4 rounded border-slate-300 text-navy accent-navy focus:ring-navy"
                  />
                  <span>
                    Zgadzam się na poufny kontakt telefoniczny lub e-mailowy w
                    sprawie upadłości konsumenckiej.
                  </span>
                </label>

                {/* PRZYCISK SUBMIT */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-navy px-8 py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:bg-navy-800 hover:scale-[1.01] active:scale-98"
                >
                  <Sparkles className="size-4 text-emerald-400" />
                  <span>Wyślij i umów bezpłatną konsultację</span>
                  <ArrowRight className="size-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <Lock className="size-3 text-emerald-600" />
                  <span>
                    Konsultacja jest w 100% bezpłatna i nie zobowiązuje do
                    współpracy
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
