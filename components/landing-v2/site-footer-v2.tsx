// components/landing-v2/site-footer-v2.tsx
import { Phone, Mail, MapPin, ArrowUpRight, Lock } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 2.35v3.1a8.6 8.6 0 0 1-4.5-1.28v6.53a6.2 6.2 0 1 1-6.2-6.2c.33 0 .66.03.98.08v3.2a3.1 3.1 0 1 0 2.12 2.94V3h3.1Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 8.5V6.8c0-.7.2-1.1 1.2-1.1H16.5V3.1C16.1 3 15.2 3 14.3 3c-2 0-3.4 1.2-3.4 3.5v2H8.5V11h2.4v8h2.9v-8h2.2l.4-2.5H14Z" />
    </svg>
  );
}

const pageLinks = [
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Cennik i Raty", href: "#cennik" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "FAQ / Pytania", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalScopes = [
  "Upadłość osób fizycznych",
  "Umorzenie długów po firmie",
  "Wstrzymanie egzekucji komorniczych",
  "Ochrona majątku i lokalu",
  "Obsługa systemu KRZ",
];

const socials = [
  {
    icon: InstagramIcon,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  { icon: TikTokIcon, href: "https://www.tiktok.com/", label: "TikTok" },
  { icon: FacebookIcon, href: "https://www.facebook.com/", label: "Facebook" },
];

export function SiteFooterV2() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 border-t border-white/10 text-white">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* GŁÓWNY GRID STOPKI */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* KOLUMNA 1: LOGO, MISJA, SOCIAL MEDIA */}
          <div className="space-y-6 lg:col-span-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex size-10 items-center justify-center rounded-xl bg-white p-1.5 border border-white/10 transition-transform group-hover:scale-105 shadow-inner">
                <img
                  src="/logo.png"
                  alt="Logo Upadłość Konsumencka"
                  className="size-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight text-white">
                  UPADŁOŚĆ
                  <span className="text-emerald-400 font-normal">.pl</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.16em] text-white/50">
                  CHORZÓW · ŚLĄSK · CAŁA POLSKA
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm leading-relaxed text-white/65 max-w-sm">
              Kompleksowa, dyskretna pomoc prawna w oddłużaniu osób fizycznych.
              Przeprowadzamy przez całe postępowanie od pierwszej analizy aż po
              prawomocny wyrok sądu.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-emerald-400/40 hover:bg-emerald-500 hover:text-navy-900 hover:scale-105"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://upadlosci-ekspert.pl/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 hover:border-emerald-400/30 hover:bg-white/10 transition-all max-w-xs"
              >
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-white p-1.5 shrink-0">
                    <img
                      src="/expert-partner.webp"
                      alt="Expert Partner"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white leading-tight">
                      Grupa Expert Partner
                    </span>
                    <span className="block text-[10px] text-white/50">
                      Ogólnopolska sieć ekspertów
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-3.5 text-white/40 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* KOLUMNA 2: NAWIGACJA */}
          <div className="lg:col-span-2 lg:pl-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-4">
              Nawigacja
            </span>
            <ul className="space-y-2.5">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs sm:text-sm text-white/70 transition-colors hover:text-emerald-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLUMNA 3: ZAKRES POMOCY */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-4">
              Zakres pomocy
            </span>
            <ul className="space-y-2.5">
              {legalScopes.map((scope, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-white/70"
                >
                  <span className="size-1 rounded-full bg-emerald-400 shrink-0" />
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLUMNA 4: DANE KONTAKTOWE I BIURO */}
          <div className="space-y-4 lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-4">
              Biuro i Kontakt
            </span>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                href="tel:515515314"
                className="flex items-center gap-3 text-white font-bold transition-colors hover:text-emerald-400 group"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-900 transition-colors">
                  <Phone className="size-4" />
                </div>
                <span>515 515 314</span>
              </a>

              <a
                href="mailto:kontakt@kancelaria.pl"
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-emerald-400 group"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-900 transition-colors">
                  <Mail className="size-4" />
                </div>
                <span>kontakt@kancelaria.pl</span>
              </a>

              <div className="flex items-start gap-3 text-white/70 pt-1">
                <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="size-4" />
                </div>
                <span className="leading-snug">
                  ul. Wolności 12
                  <br />
                  41-500 Chorzów
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/60">
              <div className="flex items-center gap-1.5 font-semibold text-white/90 mb-1">
                <Lock className="size-3 text-emerald-400" />
                Dyskrecja i tajemnica zawodowa
              </div>
              Obsługa spraw w biurze w Chorzowie oraz 100% online w całej
              Polsce.
            </div>
          </div>
        </div>

        {/* DOLNY PASEK COPYRIGHT & AUTOR */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Upadłość Konsumencka Chorzów / Śląsk.
            Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#" className="transition-colors hover:text-white">
              Polityka prywatności (RODO)
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="transition-colors hover:text-white">
              Regulamin
            </a>
            <span className="text-white/20">·</span>
            <span>
              Realizacja:{" "}
              <a
                href="https://www.instagram.com/filip_wrona/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/80 underline underline-offset-4 decoration-emerald-400/50 transition-colors hover:text-emerald-400 hover:decoration-emerald-400"
              >
                Filip Wrona
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
