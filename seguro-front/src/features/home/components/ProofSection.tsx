import { proofItems } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function ProofSection() {
  return (
    <section className="proof-section">
      <SectionHeading eyebrow="Antes de contratar" title="Você entende o que está levando." />

      <div className="proof-grid">
        {proofItems.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
