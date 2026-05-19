import torrezanEmblemWhite from '@/assets/torrezan-emblem-white-only.png';
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
          <div className="footer-brand-mark" aria-label="Torrezan Seguros">
            <img src={torrezanEmblemWhite} alt="" aria-hidden="true" />
            <span>
              <strong>Torrezan</strong>
              <em>Seguros</em>
            </span>
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
        <span>© {new Date().getFullYear()} Torrezan Seguros. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
