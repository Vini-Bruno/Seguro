import {
  AdvisorSection,
  BenefitsSection,
  CoverageSection,
  FaqSection,
  FinalCta,
  FloatingWhatsapp,
  HeroSection,
  InsurersSection,
  PrivacySection,
  ProofSection,
  SiteFooter,
  SiteHeader,
  StepsSection,
  TrustSection,
  VehicleTypesSection,
} from '../components';
import { useHashScroll, useQuoteForm } from '../hooks';

export function HomePage() {
  const quote = useQuoteForm();

  useHashScroll();

  return (
    <main className="site-shell">
      <SiteHeader whatsappHref={quote.whatsappHref} />
      <HeroSection quote={quote} />
      <VehicleTypesSection />
      <BenefitsSection whatsappHref={quote.whatsappHref} />
      <StepsSection />
      <AdvisorSection whatsappHref={quote.whatsappHref} />
      <CoverageSection whatsappHref={quote.whatsappHref} />
      <InsurersSection />
      <TrustSection />
      <ProofSection />
      <FaqSection />
      <PrivacySection whatsappHref={quote.whatsappHref} />
      <FinalCta whatsappHref={quote.whatsappHref} />
      <SiteFooter whatsappHref={quote.whatsappHref} />
      <FloatingWhatsapp whatsappHref={quote.whatsappHref} />
    </main>
  );
}
