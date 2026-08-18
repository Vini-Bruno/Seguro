import torrezanLogo from '@/assets/torrezan-stelluti-logo-transparent.png';
import { siteConfig } from '@/config/site';

import { navLinks } from '../data/homeContent';

type SiteFooterProps = {
  whatsappHref: string;
};

export function SiteFooter({ whatsappHref }: SiteFooterProps) {
  return (
    <footer className="site-footer" id="rodape">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="footer-brand-mark" aria-label="Torrezan Stelluti Seguros">
            <img src={torrezanLogo} alt="Torrezan Stelluti Seguros" />
          </div>
          <p>Cotação e orientação para escolher seguro auto com mais clareza.</p>
        </div>

        <nav className="site-footer__links" aria-label="Links rápidos">
          <strong>Links rápidos</strong>
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="/termos-de-uso">Termos de Uso</a>
        </nav>

        <div className="site-footer__contact">
          <strong>Contato</strong>
          <a href={whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp {siteConfig.contact.whatsappDisplay}
          </a>
          <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer">
            Instagram @torrezanseguros
          </a>
          <span>{siteConfig.contact.email}</span>
          <span>Atendimento consultivo para cotação, renovação e sinistro</span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} Torrezan Stelluti Seguros. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
