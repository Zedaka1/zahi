import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { AccessibilityWidget } from "@/components/accessibility-widget";
import { CookieConsent } from "@/components/cookie-consent";
import { LegalModals } from "@/components/legal";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />

      {/* נגישות, עוגיות ומסמכים משפטיים */}
      <WhatsAppButton />
      <AccessibilityWidget />
      <CookieConsent />
      <LegalModals />
    </>
  );
}
