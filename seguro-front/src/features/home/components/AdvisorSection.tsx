import advisorPhoto from '@/assets/torrezan-founder-advisor.jpg';

import { advisoryItems } from '../data/homeContent';

export function AdvisorSection() {
  return (
    <section className="advisor-section">
      <div className="advisor-media">
        <img src={advisorPhoto} alt="Atendimento consultivo da Torrezan Seguros" />
      </div>

      <div className="advisor-copy">
        <span className="eyebrow">Atendimento consultivo</span>
        <h2>Você entende o seguro antes de contratar.</h2>
        <p>
          O papel da Torrezan é traduzir a proposta: o que está coberto, onde a franquia pesa,
          quais assistências ajudam na rotina e quais pontos merecem atenção antes da decisão.
        </p>

        <div className="advisory-list" aria-label="Como a Torrezan ajuda">
          {advisoryItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
