import type { QuoteFormViewModel } from '../hooks';
import { QuotePanel } from './QuotePanel';
import { TrustBar } from './TrustBar';

type HeroSectionProps = {
  quote: QuoteFormViewModel;
};

export function HeroSection({ quote }: HeroSectionProps) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">Cotação gratuita pelo WhatsApp</span>
          <h1>Seguro auto sob medida, com cotação gratuita pelo WhatsApp</h1>
          <p>
            Compare opções para seu veículo e conte com a orientação de um corretor para
            entender coberturas, franquia, assistência 24h e o que realmente protege você.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={quote.whatsappHref} target="_blank" rel="noreferrer">
              Cotar grátis pelo WhatsApp
            </a>
            <a className="secondary-button" href="#coberturas">
              Entender coberturas
            </a>
          </div>

          <span className="hero-microcopy">
            Atendimento gratuito • Sem compromisso • Orientação com corretor de seguros
          </span>

          <ul className="hero-proof-list" aria-label="Diferenciais da Torrezan">
            <li>Cotação personalizada</li>
            <li>Compare seguradoras</li>
            <li>Suporte antes e depois da contratação</li>
          </ul>
        </div>

        <QuotePanel quote={quote} />
      </div>

      <TrustBar />
    </section>
  );
}
