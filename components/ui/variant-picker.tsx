// components/variant-picker.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const variants = [
  { id: "v1", label: "V1: Stal & Złoto", path: "/" },
  { id: "v2", label: "V2: Kawa & Taupe", path: "/v2" },
  { id: "v3", label: "V3: Empatia", path: "/v3" },
  { id: "v4", label: "V4: Chłodny Błękit", path: "/v4" },
  { id: "v5", label: "V5: Głęboka Noc (Dark)", path: "/v5" },
  { id: "v6", label: "V6: Nocny Szmaragd (Dark)", path: "/v6" },
  { id: "v7", label: "V7: Granat & Biel", path: "/v7" },
  { id: "v8", label: "V8: Grafit & Miedź", path: "/v8" },
  { id: "v9", label: "V9: Nowy Start", path: "/v9" },
  { id: "v10", label: "V10: Energia & Pomoc", path: "/v10" },
  { id: "v11", label: "V11: Butelkowa Zieleń", path: "/v11" },
  { id: "v12", label: "V12: Ciemny Szary", path: "/v12" },
  { id: "v13", label: "V13: Granat, Beż & Złoto", path: "/v13" },
];

export function VariantPicker() {
  const pathname = usePathname();

  const getCurrent = () => {
    if (pathname === "/") return "v1";
    const found = variants.find((v) => v.path === pathname);
    return found ? found.id : "v1";
  };

  const current = getCurrent();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 max-w-[95vw] -translate-x-1/2 overflow-x-auto rounded-full border border-black/10 bg-white/95 p-1.5 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-1 text-xs font-semibold whitespace-nowrap">
        <span className="hidden px-2 py-1 text-black/50 lg:inline">
          Paleta:
        </span>
        {variants.map((v) => (
          <Link
            key={v.id}
            href={v.path}
            className={`rounded-full px-3 py-1.5 transition-all ${
              current === v.id
                ? "bg-navy text-gold shadow-md font-bold"
                : "text-ink/70 hover:bg-black/5 hover:text-ink"
            }`}
          >
            {v.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
