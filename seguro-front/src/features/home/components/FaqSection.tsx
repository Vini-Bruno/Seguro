import { faqItems } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function FaqSection() {
  return (
    <section className="faq-section" id="duvidas">
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Perguntas comuns sobre a cotação de seguro auto."
      />

      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
