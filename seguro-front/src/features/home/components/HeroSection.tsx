import heroPhoto from '@/assets/torrezan-founder-hero.jpg';
import torrezanEmblem from '@/assets/torrezan-emblem-3d.png';

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
          <span className="eyebrow">Torrezan Seguros</span>
          <h1>Seguro sem escolher no escuro.</h1>
          <p>
            A Torrezan compara opções de seguradoras e explica preço, cobertura e franquia
            pelo WhatsApp, com atendimento consultivo do começo ao pós-venda.
          </p>

          <ul className="hero-proof-list" aria-label="Diferenciais da Torrezan">
            <li>Comparação clara entre opções</li>
            <li>Orientação antes de fechar</li>
            <li>Apoio depois da apólice</li>
          </ul>

          <div className="hero-actions">
            <a className="primary-button" href={quote.whatsappHref} target="_blank" rel="noreferrer">
              Comparar no WhatsApp
            </a>
            <a className="secondary-button" href="#seguros">
              Conhecer seguros
            </a>
          </div>
        </div>

        <div className="hero-person">
          <img src={heroPhoto} alt="Consultor da Torrezan Seguros sorrindo" />
          <div className="hero-person__badge">
            <img src={torrezanEmblem} alt="" aria-hidden="true" />
            <span>Atendimento direto com a Torrezan</span>
          </div>
        </div>

        <QuotePanel quote={quote} />
      </div>

      <TrustBar />
    </section>
  );
}
