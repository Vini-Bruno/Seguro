type PrivacySectionProps = {
  whatsappHref: string;
};

export function PrivacySection({ whatsappHref }: PrivacySectionProps) {
  return (
    <section className="privacy-section">
      <div className="privacy-icon" aria-hidden="true">LGPD</div>
      <div>
        <span className="eyebrow">Segurança dos dados</span>
        <h2>Seus dados são usados apenas para atendimento e cotação.</h2>
        <p>
          Para calcular o seguro, algumas informações podem ser necessárias, como dados do veículo,
          região de circulação e perfil do condutor. Essas informações são utilizadas para atendimento
          e simulação da cotação, conforme nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.
        </p>
        <p className="privacy-note">
          Ao iniciar a cotação, você autoriza o contato para fins de atendimento e simulação de seguro.
        </p>
      </div>
      <a className="secondary-button" href={whatsappHref} target="_blank" rel="noreferrer">
        Iniciar cotação
      </a>
    </section>
  );
}
