import torrezanLogo from '@/assets/torrezan-stelluti-logo-transparent.png';

type FinalCtaProps = {
  whatsappHref: string;
};

export function FinalCta({ whatsappHref }: FinalCtaProps) {
  return (
    <section className="final-cta">
      <div>
        <span className="eyebrow">Cotação gratuita</span>
        <h2>Quer saber quanto ficaria o seguro do seu veículo?</h2>
        <p>
          Clique no botão, responda algumas perguntas rápidas e receba uma cotação personalizada
          com orientação de um corretor.
        </p>
      </div>
      <img className="final-cta__mark" src={torrezanLogo} alt="" aria-hidden="true" />
      <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
        Cotar grátis pelo WhatsApp
      </a>
    </section>
  );
}
