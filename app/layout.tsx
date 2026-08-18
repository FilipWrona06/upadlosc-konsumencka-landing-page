// app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { VersionPicker } from "@/components/ui/Version-picker"; // <-- Import
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Upadłość Konsumencka Chorzów · Kancelaria Śląsk",
  description:
    "Kompleksowa pomoc w przeprowadzeniu upadłości konsumenckiej na Śląsku. Zatrzymanie komornika i oddłużenie od A do Z. Bezpłatna, poufna analiza.",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <VersionPicker /> {/* <-- Pływający pasek przełączania na dole */}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
