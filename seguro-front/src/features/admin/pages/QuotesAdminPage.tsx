import { quoteFilterOptions, type QuoteFilter } from '../data/statusOptions';
import { QuotesTable } from '../components/QuotesTable';
import { QuoteDetailsModal } from '../components/QuoteDetailsModal';
import { useQuotesDashboard } from '../hooks/useQuotesDashboard';

export function QuotesAdminPage() {
  const {
    quotes,
    filteredQuotes,
    filter,
    setFilter,
    isLoading,
    errorMessage,
    updatingQuoteId,
    selectedQuote,
    openQuoteDetails,
    closeQuoteDetails,
    refreshQuotes,
    changeQuoteStatus,
  } = useQuotesDashboard();

  const newQuotesCount = quotes.filter((quote) => quote.status_atendimento === 'nova_cotacao' || !quote.status_atendimento).length;

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div>
          <span>Painel do Léo</span>
          <h1>Cotações recebidas</h1>
          <p>Controle simples do pipeline comercial gerado pelo site, WhatsApp e chatbot.</p>
        </div>

        <div className="admin-summary">
          <div>
            <strong>{quotes.length}</strong>
            <span>Total</span>
          </div>
          <div>
            <strong>{newQuotesCount}</strong>
            <span>Novas</span>
          </div>
          <div>
            <strong>{filteredQuotes.length}</strong>
            <span>No filtro</span>
          </div>
        </div>
      </header>

      <section className="admin-panel" aria-label="Lista de cotações">
        <div className="admin-toolbar">
          <label className="admin-filter">
            <span>Status atendimento</span>
            <select value={filter} onChange={(event) => setFilter(event.target.value as QuoteFilter)}>
              {quoteFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <button className="admin-button" type="button" disabled={isLoading} onClick={() => void refreshQuotes()}>
            Atualizar
          </button>
        </div>

        {errorMessage ? <div className="admin-alert">{errorMessage}</div> : null}

        <QuotesTable
          quotes={filteredQuotes}
          isLoading={isLoading}
          updatingQuoteId={updatingQuoteId}
          onOpenDetails={openQuoteDetails}
          onStatusChange={(quoteId, status) => void changeQuoteStatus(quoteId, status)}
        />
      </section>

      <QuoteDetailsModal quote={selectedQuote} onClose={closeQuoteDetails} />
    </main>
  );
}
