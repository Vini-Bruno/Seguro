import torrezanLogo from '@/assets/torrezan-logo-blue.png';

import { navLinks } from '../data/homeContent';

type SiteHeaderProps = {
  whatsappHref: string;
};

export function SiteHeader({ whatsappHref }: SiteHeaderProps) {
  return (
    <header className="site-header" aria-label="Cabeçalho">
      <a className="brand" href="#top" aria-label="Torrezan Seguros">
        <img src={torrezanLogo} alt="Torrezan Seguros" />
      </a>

      <nav className="site-nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="header-action" href={whatsappHref} target="_blank" rel="noreferrer">
        Falar com o Leo
      </a>
    </header>
  );
}
