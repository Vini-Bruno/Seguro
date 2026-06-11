import {
  BriefcaseBusiness,
  Car,
  Caravan,
  CarFront,
  Motorbike,
  Truck,
  Van,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { vehicleTypes } from '../data/homeContent';
import { SectionHeading } from './SectionHeading';

type VehicleIconProps = {
  name: string;
};

const vehicleIcons: Record<string, LucideIcon> = {
  car: CarFront,
  motorcycle: Motorbike,
  suv: Car,
  pickup: Caravan,
  van: Van,
  utility: Wrench,
  truck: Truck,
  business: BriefcaseBusiness,
};

function VehicleIcon({ name }: VehicleIconProps) {
  const Icon = vehicleIcons[name] ?? CarFront;

  return <Icon aria-hidden="true" focusable="false" strokeWidth={1.8} />;
}

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
            <span className="vehicle-card__icon" aria-hidden="true">
              <VehicleIcon name={vehicle.icon} />
            </span>
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
