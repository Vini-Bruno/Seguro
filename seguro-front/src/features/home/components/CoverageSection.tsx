import { insuranceOptions } from '../data/homeContent';

export function CoverageSection() {
  return (
    <section className="coverage-section" id="seguros">
      <div className="coverage-copy">
        <span className="eyebrow">Tipos de seguro</span>
        <h2>Proteção para rotina, patrimônio e planos.</h2>
        <p>
          Cada tipo de seguro pede uma conversa diferente. A Torrezan ajuda a comparar
          alternativas sem transformar tudo em uma proposta igual para todo mundo.
        </p>
      </div>

      <div className="coverage-list">
        {insuranceOptions.map((item) => (
          <article key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
