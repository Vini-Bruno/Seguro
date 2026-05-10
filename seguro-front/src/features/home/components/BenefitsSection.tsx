import { benefits } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function BenefitsSection() {
  return (
    <section className="benefits-section" id="beneficios">
      <SectionHeading eyebrow="Por que cotar com a gente" title="A diferença está no jeito de comparar." />

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.title}>
            <span aria-hidden="true" />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
