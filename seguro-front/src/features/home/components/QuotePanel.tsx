import { quoteTypes } from '../data/homeContent';
import type { QuoteFormViewModel } from '../hooks';

type QuotePanelProps = {
  quote: QuoteFormViewModel;
};

export function QuotePanel({ quote }: QuotePanelProps) {
  return (
    <section className="quote-panel" id="cotacao" aria-label="Cotação pelo WhatsApp">
      <div className="quote-panel__header">
        <span>Conversa pronta</span>
        <strong>Cotação pelo WhatsApp</strong>
      </div>

      <div className="quote-chat">
        <div className="quote-bubble quote-bubble--advisor">
          Oi! Eu te ajudo a comparar opções sem você decidir no escuro. Vamos começar pelo veículo?
        </div>

        <div className="quote-flow-card">
          <label>
            <span>Qual veículo você quer cotar?</span>
            <select value={quote.quoteType} onChange={(event) => quote.setQuoteType(event.target.value)}>
              {quoteTypes.map((type) => (
                <option value={type.value} key={type.value}>
                  {type.label} - {type.detail}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Seu WhatsApp</span>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={quote.phone}
              onChange={(event) => quote.setPhone(event.target.value)}
            />
          </label>

          <div className="quote-flow-checks" aria-label="Diferenciais da cotação">
            <span>Sem compromisso</span>
          </div>
        </div>

        <div className="quote-bubble quote-bubble--client">
          {quote.messagePreviewText}
        </div>
      </div>

      <a className="quote-button" href={quote.whatsappHref} target="_blank" rel="noreferrer">
        Iniciar conversa no WhatsApp
      </a>

      <p className="quote-note">
        Gratuito, sem compromisso e com orientação para entender as coberturas antes de contratar.
      </p>
    </section>
  );
}
