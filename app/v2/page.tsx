// app/page.tsx
import { SiteHeaderV2 } from "@/components/landing-v2/site-header-v2";
import { HeroV2 } from "@/components/landing-v2/hero-v2";
import { ForWhomV2 } from "@/components/landing-v2/for-whom-v2";
import { ProcessV2 } from "@/components/landing-v2/process-v2";
import { PricingV2 } from "@/components/landing-v2/pricing-v2";
import { WhyUsV2 } from "@/components/landing-v2/WhyUs-v2";
import { FaqV2 } from "@/components/landing-v2/faq-v2";
import { ContactV2 } from "@/components/landing-v2/contact-v2";
import { SiteFooterV2 } from "@/components/landing-v2/site-footer-v2";

export default function Page() {
  return (
    <main className="bg-cream min-h-screen text-ink">
      <SiteHeaderV2 />
      <HeroV2 />
      <ForWhomV2 />
      <ProcessV2 />
      <PricingV2 />
      <WhyUsV2 />
      <FaqV2 />
      <ContactV2 />
      <SiteFooterV2 />
    </main>
  );
}
