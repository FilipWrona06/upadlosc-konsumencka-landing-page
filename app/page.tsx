import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { HowIHelp } from "@/components/landing/how-i-help"
import { WhatIs } from "@/components/landing/what-is"
import { Services } from "@/components/landing/services"
import { Process } from "@/components/landing/process"
import { Pricing } from "@/components/landing/pricing"
import { ForWhom } from "@/components/landing/for-whom"
import { WhyUs } from "@/components/landing/WhyUs"
import { Faq } from "@/components/landing/faq"
import { Contact } from "@/components/landing/contact"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Page() {
  return (
    <main className="bg-cream">
      <SiteHeader />
      <Hero />
      <ForWhom />
      <Process />
      <Pricing />
      <WhyUs />
      <Faq />
      <HowIHelp />
      <WhatIs />
      <Services />
      <Contact />
      <SiteFooter />
    </main>
  )
}
