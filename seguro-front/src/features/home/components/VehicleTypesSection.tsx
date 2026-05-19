import { vehicleTypes } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

export function VehicleTypesSection() {
  return (
    <section className="vehicle-section" id="veiculos">
      <SectionHeading
        eyebrow="Veículos atendidos"
        title="Cotamos seguro para diferentes tipos de veículos."
      />
      <p className="section-lead">
        Além de carro de passeio, também é possível avaliar opções para outros veículos,
        conforme aceitação das seguradoras e perfil de uso.
      </p>

      <div className="vehicle-grid">
        {vehicleTypes.map((vehicle) => (
          <article className="vehicle-card" key={vehicle.title}>
            <span aria-hidden="true">{vehicle.icon}</span>
            <div>
              <h3>{vehicle.title}</h3>
              <p>{vehicle.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="section-note">
        A disponibilidade das coberturas pode variar conforme veículo, uso, região e análise da seguradora.
      </p>
    </section>
  );
}
