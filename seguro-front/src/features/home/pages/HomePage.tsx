import { useMemo, useState } from 'react';

import advisorPhoto from '@/assets/torrezan-founder-advisor.jpg';
import heroPhoto from '@/assets/torrezan-founder-hero.jpg';
import torrezanEmblem from '@/assets/torrezan-emblem-3d.png';
import torrezanEmblemWhite from '@/assets/torrezan-emblem-white-only.png';
import torrezanLogo from '@/assets/torrezan-logo-blue.png';

const WHATSAPP_PHONE = import.meta.env.VITE_SELLER_WHATSAPP_PHONE?.trim() || '5517997759444';
const WHATSAPP_DISPLAY = '(17) 99775-9444';
const INSTAGRAM_URL = 'https://www.instagram.com/torrezanseguros/';

const trustSignals = [
  { value: 'Comparação', label: 'entre seguradoras parceiras' },
  { value: 'WhatsApp', label: 'orientação sem formulário longo' },
  { value: 'Pós-venda', label: 'apoio em renovação e sinistro' },
];

const quoteTypes = [
  { value: 'Auto', label: 'Seguro auto', detail: 'carro, moto ou utilitário' },
  { value: 'Residencial', label: 'Seguro residencial', detail: 'casa ou apartamento' },
  { value: 'Vida', label: 'Seguro de vida', detail: 'proteção para família' },
  { value: 'Empresarial', label: 'Seguro empresarial', detail: 'empresa, loja ou escritório' },
];

const benefits = [
  {
    title: 'Seguro explicado, sem empurra-empurra',
    description:
      'A Torrezan mostra o que muda entre preço, franquia, cobertura e assistência antes de você decidir.',
  },
  {
    title: 'Cotação alinhada ao seu perfil',
    description:
      'Você conta sua rotina, seu bem ou sua empresa, e recebe opções que fazem sentido para esse cenário.',
  },
  {
    title: 'Atendimento que continua depois',
    description:
      'Renovação, dúvidas sobre apólice e orientação em sinistro também entram na conversa com a equipe.',
  },
];

const insuranceOptions = [
  {
    title: 'Auto e moto',
    description: 'Compare cobertura para colisão, roubo, terceiros, assistência e franquia.',
  },
  {
    title: 'Residencial',
    description: 'Proteção para casa ou apartamento, com coberturas e assistências úteis no dia a dia.',
  },
  {
    title: 'Empresarial',
    description: 'Opções para patrimônio, operação, equipamentos e responsabilidade da empresa.',
  },
  {
    title: 'Vida',
    description: 'Planejamento de proteção financeira para família, sucessão e tranquilidade.',
  },
  {
    title: 'Terceiros',
    description: 'Entenda limites, danos materiais, danos corporais e quando vale reforçar a cobertura.',
  },
  {
    title: 'Renovação',
    description: 'Revisão da apólice atual para ajustar preço, cobertura e necessidade real.',
  },
];

const steps = [
  'Conte seu cenário',
  'Compare cobertura, preço e franquia',
  'Decida com orientação da Torrezan',
];

const insurers = [
  { name: 'Porto Seguro', slug: 'porto-seguro' },
  { name: 'Azul Seguros', slug: 'azul-seguros' },
  { name: 'Itaú Seguros', slug: 'itau-seguros' },
  { name: 'Mitsui Seguros', slug: 'mitsui-seguros' },
  { name: 'Allianz', slug: 'allianz' },
  { name: 'Yelum', slug: 'yelum' },
  { name: 'HDI', slug: 'hdi' },
  { name: 'Bradesco', slug: 'bradesco' },
  { name: 'Aliro', slug: 'aliro' },
  { name: 'Tókio Marine', slug: 'tokio-marine' },
  { name: 'Mapfre', slug: 'mapfre' },
  { name: 'Zurich', slug: 'zurich' },
  { name: 'Suhai', slug: 'suhai' },
  { name: 'Justos', slug: 'justos' },
  { name: 'Darwin', slug: 'darwin' },
];

const useCases = [
  {
    title: 'Renovação do seguro auto',
    description:
      'Revisão da apólice atual, comparação de franquia e checagem de coberturas que ainda fazem sentido.',
    tag: 'Auto',
  },
  {
    title: 'Primeiro seguro residencial',
    description:
      'Explicação simples sobre danos elétricos, roubo, vendaval e assistências para casa ou apartamento.',
    tag: 'Residencial',
  },
  {
    title: 'Empresa protegida sem excesso',
    description:
      'Cotação para proteger patrimônio e operação sem contratar coberturas que não combinam com o negócio.',
    tag: 'Empresarial',
  },
];

const advisoryItems = [
  'Entendimento do que você precisa proteger',
  'Comparação entre seguradoras parceiras',
  'Explicação de cobertura, franquia e assistência',
  'Apoio em renovação, dúvidas e sinistro',
];

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

export function HomePage() {
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [quoteType, setQuoteType] = useState(quoteTypes[0].value);

  const normalizedPhone = onlyDigits(phone);
  const selectedQuoteType = quoteTypes.find((type) => type.value === quoteType) ?? quoteTypes[0];
  const contactStatus = normalizedPhone.length >= 10 ? 'WhatsApp informado' : 'WhatsApp opcional';
  const messagePreviewText = `Olá, Leo. Vim pelo site da Torrezan e quero comparar opções de ${selectedQuoteType.label.toLowerCase()} para entender cobertura, franquia e preço antes de fechar.`;

  const whatsappHref = useMemo(() => {
    const message = [
      messagePreviewText,
      `Nome: ${clientName.trim() || 'Não informado'}`,
      `Meu WhatsApp: ${phone || 'Não informado'}`,
      `Interesse: ${selectedQuoteType.label}`,
    ].join('\n');

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  }, [clientName, messagePreviewText, phone, selectedQuoteType.label]);

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Cabeçalho">
        <a className="brand" href="#top" aria-label="Torrezan Seguros">
          <img src={torrezanLogo} alt="Torrezan Seguros" />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#beneficios">Vantagens</a>
          <a href="#seguros">Seguros</a>
          <a href="#seguradoras">Seguradoras</a>
          <a href="#cotacao">Cotação</a>
        </nav>

        <a className="header-action" href={whatsappHref} target="_blank" rel="noreferrer">
          Falar com o Leo
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Torrezan Seguros</span>
            <h1>Seguro sem escolher no escuro.</h1>
            <p>
              A Torrezan compara opções de seguradoras e explica preço, cobertura e franquia
              pelo WhatsApp, com atendimento consultivo do começo ao pós-venda.
            </p>

            <ul className="hero-proof-list" aria-label="Diferenciais da Torrezan">
              <li>Comparação clara entre opções</li>
              <li>Orientação antes de fechar</li>
              <li>Apoio depois da apólice</li>
            </ul>

            <div className="hero-actions">
              <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
                Comparar no WhatsApp
              </a>
              <a className="secondary-button" href="#seguros">
                Conhecer seguros
              </a>
            </div>
          </div>

          <div className="hero-person">
            <img src={heroPhoto} alt="Consultor da Torrezan Seguros sorrindo" />
            <div className="hero-person__badge">
              <img src={torrezanEmblem} alt="" aria-hidden="true" />
              <span>Atendimento direto com a Torrezan</span>
            </div>
          </div>

          <section className="quote-panel" id="cotacao" aria-label="Cotação pelo WhatsApp">
            <div className="quote-panel__header">
              <span>Cotação rápida</span>
              <strong>Mensagem pronta para comparar opções</strong>
            </div>

            <div className="lead-card">
              <img src={advisorPhoto} alt="" aria-hidden="true" />
              <div>
                <span>Atendimento humano</span>
                <strong>Você fala com a equipe, não com um formulário</strong>
              </div>
            </div>

            <div className="quote-fields">
              <div className="quote-field-grid">
                <label>
                  Nome
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={clientName}
                    onChange={(event) => setClientName(event.target.value)}
                  />
                </label>

                <label>
                  WhatsApp
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </label>
              </div>

              <label>
                Quero cotar
                <select value={quoteType} onChange={(event) => setQuoteType(event.target.value)}>
                  {quoteTypes.map((type) => (
                    <option value={type.value} key={type.value}>
                      {type.label} - {type.detail}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="quote-summary" aria-label="Resumo da chamada">
              <div>
                <span>Interesse</span>
                <strong>{selectedQuoteType.label}</strong>
              </div>
              <div>
                <span>Contato</span>
                <strong>{contactStatus}</strong>
              </div>
            </div>

            <div className="message-preview">
              <span>Mensagem que será aberta</span>
              <p>{messagePreviewText}</p>
            </div>

            <a className="quote-button" href={whatsappHref} target="_blank" rel="noreferrer">
              Chamar o Leo no WhatsApp
            </a>

            <p className="quote-note">
              Cotação sem compromisso. O atendimento continua com a equipe pelo WhatsApp.
            </p>
          </section>
        </div>

        <div className="trust-bar" aria-label="Destaques">
          {trustSignals.map((signal) => (
            <div key={signal.label}>
              <strong>{signal.value}</strong>
              <span>{signal.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="benefits-section" id="beneficios">
        <div className="section-heading">
          <span className="eyebrow">Por que cotar com a gente</span>
          <h2>A diferença está no jeito de comparar.</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="advisor-section">
        <div className="advisor-media">
          <img src={advisorPhoto} alt="Atendimento consultivo da Torrezan Seguros" />
        </div>

        <div className="advisor-copy">
          <span className="eyebrow">Atendimento consultivo</span>
          <h2>Você entende o seguro antes de contratar.</h2>
          <p>
            O papel da Torrezan é traduzir a proposta: o que está coberto, onde a franquia pesa,
            quais assistências ajudam na rotina e quais pontos merecem atenção antes da decisão.
          </p>

          <div className="advisory-list" aria-label="Como a Torrezan ajuda">
            {advisoryItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-section" id="seguros">
        <div className="coverage-copy">
          <span className="eyebrow">Tipos de seguro</span>
          <h2>Proteção para rotina, patrimônio e planos.</h2>
          <p>
            Cada tipo de seguro pede uma conversa diferente. A Torrezan ajuda a comparar
            alternativas sem transformar tudo em uma proposta igual para todo mundo.
          </p>
        </div>

        <div className="coverage-list">
          {insuranceOptions.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="insurers-section" id="seguradoras">
        <div className="insurers-header">
          <span className="eyebrow eyebrow--light">Seguradoras parceiras</span>
          <h2>Trabalhamos com as principais seguradoras do Brasil.</h2>
          <p>
            A equipe compara alternativas de mercado para encontrar uma proposta coerente com
            o seu perfil, não apenas a opção mais barata da lista.
          </p>
        </div>

        <div className="insurers-carousel" aria-label="Seguradoras parceiras">
          <div className="insurers-track">
            {[...insurers, ...insurers].map((insurer, index) => (
              <div className="insurer-card" key={`${insurer.slug}-${index}`}>
                <span>{insurer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section" aria-label="Passos da cotação">
        {steps.map((step, index) => (
          <article key={step}>
            <strong>{String(index + 1).padStart(2, '0')}</strong>
            <span>{step}</span>
          </article>
        ))}
      </section>

      <section className="use-cases-section">
        <div className="section-heading">
          <span className="eyebrow">Na prática</span>
          <h2>Situações em que a Torrezan entra para organizar a decisão.</h2>
        </div>

        <div className="use-cases-grid">
          {useCases.map((item) => (
            <article className="use-case-card" key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <footer>
                <strong>O foco</strong>
                <span>Clareza antes de fechar</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

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
            <p>Comparação e orientação para escolher seguro com mais clareza.</p>
          </div>

          <nav className="site-footer__links" aria-label="Links rápidos">
            <strong>Links rápidos</strong>
            <a href="#beneficios">Vantagens</a>
            <a href="#seguros">Seguros</a>
            <a href="#seguradoras">Seguradoras</a>
            <a href="#cotacao">Cotação</a>
          </nav>

          <div className="site-footer__contact">
            <strong>Contato</strong>
            <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp {WHATSAPP_DISPLAY}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram @torrezanseguros</a>
            <span>contato@torrezanseguros.com.br</span>
            <span>Atendimento consultivo para cotação e renovação</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Torrezan Seguros. Todos os direitos reservados.</span>
        </div>
      </footer>
    </main>
  );
}
