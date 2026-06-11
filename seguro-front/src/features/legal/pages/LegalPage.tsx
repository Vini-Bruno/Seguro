import { siteConfig } from '@/config/site';

type LegalSection = {
  title: string;
  content: string[];
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main className="legal-shell">
      <article className="legal-page">
        <a className="legal-back-link" href="/">
          Voltar para o site
        </a>

        <header className="legal-header">
          <span>Torrezan Seguros</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>Última atualização: 11 de junho de 2026</small>
        </header>

        <div className="legal-content">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section>
            <h2>Contato</h2>
            <p>
              Em caso de dúvidas sobre esta página, entre em contato pelo e-mail {siteConfig.contact.email}
              {' '}ou pelo WhatsApp {siteConfig.contact.whatsappDisplay}.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
