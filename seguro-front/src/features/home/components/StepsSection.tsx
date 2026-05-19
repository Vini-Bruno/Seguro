import { steps } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function StepsSection() {
  return (
    <section className="steps-block" id="como-funciona">
      <div>
        <SectionHeading
          eyebrow="Como funciona"
          title="Cotar seu seguro pelo WhatsApp é simples."
        />
        <p className="section-lead">
          Você responde algumas perguntas pelo WhatsApp e recebe orientação para escolher com
          mais segurança.
        </p>

        <div className="steps-section" aria-label="Passos da cotação">
          {steps.map((step, index) => (
            <article key={step}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{step}</span>
            </article>
          ))}
        </div>
      </div>

      <aside className="process-preview" aria-label="Exemplo de fluxo de cotação guiada">
        <div className="process-preview__header">
          <span>Fluxo guiado</span>
          <strong>Menos formulário. Mais conversa.</strong>
        </div>

        <div className="process-thread">
          <div className="process-line">
            <span>01</span>
            <p>Qual veículo você quer proteger?</p>
          </div>

          <div className="process-answer">
            <span>Selecionado</span>
            <strong>Carro - passeio ou SUV</strong>
          </div>

          <div className="process-line">
            <span>02</span>
            <p>Vamos entender uso, região e condutores antes de falar em preço.</p>
          </div>

          <div className="process-checks" aria-label="Pontos explicados pelo corretor">
            <span>Coberturas</span>
            <span>Franquia</span>
            <span>Assistência</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
