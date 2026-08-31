import { clientProofs, proofItems } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function ProofSection() {
  return (
    <section className="proof-section" id="clientes">
      <div className="proof-section__intro">
        <SectionHeading
          eyebrow="Clientes e parcerias"
          title="Relacionamentos reais ajudam você a contratar com mais segurança."
        />
        <p>
          Registros de clientes atendidos e parcerias profissionais, com orientação para escolher coberturas
          e contratar com clareza.
        </p>
      </div>

      <div className="proof-gallery" aria-label="Clientes atendidos e parcerias profissionais">
        {clientProofs.map((item) => (
          <article className="proof-story" key={item.title}>
            <div className="proof-story__photo">
              <img src={item.image} alt={item.alt} loading="lazy" style={{ objectPosition: item.imagePosition }} />
            </div>
            <div className="proof-story__copy">
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

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
