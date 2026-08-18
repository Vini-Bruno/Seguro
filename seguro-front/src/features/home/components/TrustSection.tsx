import advisorPhoto from '@/assets/torrezan-founder-hero.jpg';

import { trustCards } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-copy">
        <SectionHeading
          eyebrow="Confiança"
          title="Atendimento seguro, transparente e com orientação profissional."
        />
        <p>
          Você fala diretamente com a Torrezan e recebe explicações claras antes de decidir. Informações
          como registro SUSEP, seguradoras parceiras e documentos da proposta podem ser conferidos durante
          o atendimento.
        </p>
        <div className="trust-meta" aria-label="Pontos de confiança">
          <span>Cotação gratuita</span>
          <span>Orientação pelo WhatsApp</span>
          <span>Suporte antes e depois da emissão</span>
        </div>
      </div>

      <div className="trust-layout">
        <div className="trust-photo">
          <img src={advisorPhoto} alt="Consultor da Torrezan Stelluti Seguros" loading="lazy" />
        </div>

        <div className="trust-card-grid">
          {trustCards.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
