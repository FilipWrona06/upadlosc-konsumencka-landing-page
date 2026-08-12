import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Process } from "@/components/landing/process"
import { Pricing } from "@/components/landing/pricing"
import { ForWhom } from "@/components/landing/for-whom"
import { WhyUs } from "@/components/landing/WhyUs"
import { Faq } from "@/components/landing/faq"
import { Contact } from "@/components/landing/contact"
import { SiteFooter } from "@/components/landing/site-footer"
import { VariantPicker } from "@/components/ui/variant-picker"

export default function PageV6() {
  return (
    <main className="theme-v6 bg-cream min-h-screen text-ink">
      <SiteHeader />
      <Hero />
      <ForWhom />
      <Process />
      <Pricing />
      <WhyUs />
      <Faq />
      <Contact />
      <SiteFooter />
      <VariantPicker />
    </main>
  )
}