import { insurers } from '../data/homeContent';

export function InsurersSection() {
  return (
    <section className="insurers-section" id="seguradoras">
      <div className="insurers-header">
        <span className="eyebrow eyebrow--light">Seguradoras parceiras</span>
        <h2>Trabalhamos com as principais seguradoras do Brasil.</h2>
        <p>
          A equipe compara alternativas de mercado para encontrar uma proposta coerente com
          o seu perfil, não apenas a opção mais barata da lista.
        </p>
      </div>

      <div className="insurers-carousel" aria-label="Seguradoras parceiras">
        <div className="insurers-track">
          {[...insurers, ...insurers].map((insurer, index) => (
            <div
              className={`insurer-card${insurer.shape ? ` insurer-card--${insurer.shape}` : ''}`}
              key={`${insurer.slug}-${index}`}
              aria-label={index < insurers.length ? insurer.name : undefined}
              aria-hidden={index >= insurers.length ? true : undefined}
            >
              <img src={insurer.logo} alt={index < insurers.length ? insurer.name : ''} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
