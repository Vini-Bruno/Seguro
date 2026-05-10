import { steps } from '../data/homeContent';

export function StepsSection() {
  return (
    <section className="steps-section" aria-label="Passos da cotação">
      {steps.map((step, index) => (
        <article key={step}>
          <strong>{String(index + 1).padStart(2, '0')}</strong>
          <span>{step}</span>
        </article>
      ))}
    </section>
  );
}
