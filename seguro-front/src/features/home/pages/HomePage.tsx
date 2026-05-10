import {
  AdvisorSection,
  BenefitsSection,
  CoverageSection,
  FinalCta,
  HeroSection,
  InsurersSection,
  SiteFooter,
  SiteHeader,
  StepsSection,
  UseCasesSection,
} from '../components';
import { useHashScroll, useQuoteForm } from '../hooks';

export function HomePage() {
  const quote = useQuoteForm();

  useHashScroll();

  return (
    <main className="site-shell">
      <SiteHeader whatsappHref={quote.whatsappHref} />
      <HeroSection quote={quote} />
      <BenefitsSection />
      <AdvisorSection />
      <CoverageSection />
      <InsurersSection />
      <StepsSection />
      <UseCasesSection />
      <FinalCta whatsappHref={quote.whatsappHref} />
      <SiteFooter whatsappHref={quote.whatsappHref} />
    </main>
  );
}
