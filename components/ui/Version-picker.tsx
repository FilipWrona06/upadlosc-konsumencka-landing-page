// components/ui/version-picker.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function VersionPicker() {
  const pathname = usePathname();
  const isV2 = pathname === "/v2";

  return (
    <div className="fixed bottom-4 right-4 z-50 drop-shadow-2xl">
      <nav
        aria-label="Wybór wersji strony"
        className="flex items-center gap-1 p-1 bg-navy-950/95 backdrop-blur-xl border border-white/20 rounded-full text-[11px] font-semibold shadow-2xl"
      >
        <Link
          href="/"
          className={`px-3 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
            !isV2
              ? "bg-emerald-500 text-navy-900 font-bold shadow-md"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${!isV2 ? "bg-navy-900" : "bg-emerald-400"}`}
          />
          V1 (Stara)
        </Link>

        <Link
          href="/v2"
          className={`px-3 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
            isV2
              ? "bg-emerald-500 text-navy-900 font-bold shadow-md"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${isV2 ? "bg-navy-900 animate-pulse" : "bg-emerald-400"}`}
          />
          V2 (Nowa)
        </Link>
      </nav>
    </div>
  );
}
