import advisorPhoto from '@/assets/torrezan-founder-advisor.jpg';

import { advisoryItems } from '../data/homeContent';

type AdvisorSectionProps = {
  whatsappHref: string;
};

export function AdvisorSection({ whatsappHref }: AdvisorSectionProps) {
  return (
    <section className="advisor-section">
      <div className="advisor-media">
        <img src={advisorPhoto} alt="Atendimento consultivo da Torrezan Seguros" />
      </div>

      <div className="advisor-copy">
        <span className="eyebrow">Decisão com orientação</span>
        <h2>Não é só cotar seguro. É entender qual seguro realmente protege você.</h2>
        <p>
          Escolher apenas pelo menor preço pode deixar coberturas importantes de fora. Com a
          orientação de um corretor, você compara opções e evita contratar algo sem saber exatamente
          o que está incluso.
        </p>

        <div className="advisory-list" aria-label="Como a Torrezan ajuda">
          {advisoryItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <strong className="advisor-highlight">
          O melhor seguro não é apenas o mais barato. É o que protege você quando realmente precisa.
        </strong>

        <a className="section-cta primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
          Falar com um corretor pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
