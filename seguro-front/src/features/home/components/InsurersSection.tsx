import { insurers } from '../data/homeContent';

export function InsurersSection() {
  return (
    <section className="insurers-section" id="seguradoras">
      <div className="insurers-header">
        <span className="eyebrow eyebrow--light">Seguradoras parceiras</span>
        <h2>Compare opções de seguradoras antes de decidir.</h2>
        <p>
          A equipe avalia alternativas conforme perfil, veículo, região e coberturas desejadas,
          sempre de acordo com a aceitação de cada seguradora.
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
