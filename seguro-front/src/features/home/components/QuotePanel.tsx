import advisorPhoto from '@/assets/torrezan-founder-advisor.jpg';

import { quoteTypes } from '../data/homeContent';
import type { QuoteFormViewModel } from '../hooks';

type QuotePanelProps = {
  quote: QuoteFormViewModel;
};

export function QuotePanel({ quote }: QuotePanelProps) {
  return (
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
              value={quote.clientName}
              onChange={(event) => quote.setClientName(event.target.value)}
            />
          </label>

          <label>
            WhatsApp
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={quote.phone}
              onChange={(event) => quote.setPhone(event.target.value)}
            />
          </label>
        </div>

        <label>
          Quero cotar
          <select value={quote.quoteType} onChange={(event) => quote.setQuoteType(event.target.value)}>
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
          <strong>{quote.selectedQuoteType.label}</strong>
        </div>
        <div>
          <span>Contato</span>
          <strong>{quote.contactStatus}</strong>
        </div>
      </div>

      <div className="message-preview">
        <span>Mensagem que será aberta</span>
        <p>{quote.messagePreviewText}</p>
      </div>

      <a className="quote-button" href={quote.whatsappHref} target="_blank" rel="noreferrer">
        Chamar o Leo no WhatsApp
      </a>

      <p className="quote-note">
        Cotação sem compromisso. O atendimento continua com a equipe pelo WhatsApp.
      </p>
    </section>
  );
}
