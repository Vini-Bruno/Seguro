import torrezanEmblem from '@/assets/torrezan-emblem-3d.png';

type FinalCtaProps = {
  whatsappHref: string;
};

export function FinalCta({ whatsappHref }: FinalCtaProps) {
  return (
    <section className="final-cta">
      <div>
        <span className="eyebrow">Atendimento direto</span>
        <h2>Quer comparar seguro com alguém olhando os detalhes junto com você?</h2>
      </div>
      <img className="final-cta__mark" src={torrezanEmblem} alt="" aria-hidden="true" />
      <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
        Falar com o Leo
      </a>
    </section>
  );
}
