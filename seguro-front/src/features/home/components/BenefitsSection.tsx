import { benefits } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

type BenefitsSectionProps = {
  whatsappHref: string;
};

export function BenefitsSection({ whatsappHref }: BenefitsSectionProps) {
  return (
    <section className="benefits-section" id="beneficios">
      <SectionHeading
        eyebrow="Por que cotar com um corretor"
        title="Escolher seguro não é só comparar preço."
      />
      <p className="section-lead">
        É entender o que está incluso, o que não está e qual opção faz mais sentido para
        proteger seu veículo, sua rotina e seu orçamento.
      </p>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <article className="benefit-card" key={benefit.title}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>

      <a className="section-cta primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
        Quero cotar meu seguro agora
      </a>
    </section>
  );
}
