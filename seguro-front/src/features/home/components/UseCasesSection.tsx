import { useCases } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function UseCasesSection() {
  return (
    <section className="use-cases-section">
      <SectionHeading
        eyebrow="Na prática"
        title="Situações em que a Torrezan entra para organizar a decisão."
      />

      <div className="use-cases-grid">
        {useCases.map((item) => (
          <article className="use-case-card" key={item.title}>
            <span>{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <footer>
              <strong>O foco</strong>
              <span>Clareza antes de fechar</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
