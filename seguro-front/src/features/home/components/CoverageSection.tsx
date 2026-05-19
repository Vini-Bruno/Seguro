import { coverageItems } from '../data/homeContent';

type CoverageSectionProps = {
  whatsappHref: string;
};

export function CoverageSection({ whatsappHref }: CoverageSectionProps) {
  return (
    <section className="coverage-section" id="coberturas">
      <div className="coverage-copy">
        <span className="eyebrow">Principais coberturas</span>
        <h2>Entenda o que pode entrar no seu seguro auto.</h2>
        <p>
          As coberturas variam conforme seguradora, veículo e plano contratado. Durante a cotação,
          explicamos o que cada uma significa na prática.
        </p>
        <a className="section-cta primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
          Quero entender minhas coberturas
        </a>
      </div>

      <div className="coverage-list">
        {coverageItems.map((item) => (
          <article key={item.title}>
            <span className="coverage-icon" aria-hidden="true">{item.icon}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
