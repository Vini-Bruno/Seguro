import type { KeyboardEvent } from 'react';

import { normalizeAtendimentoStatus } from '../data/statusOptions';
import type { AtendimentoStatus } from '../data/statusOptions';
import type { Quote, QuoteId } from '../types';
import {
  formatDate,
  formatEmpty,
  getQuoteFullName,
  getQuotePhone,
  getQuoteStatusLabel,
} from '../utils/quoteFormatters';
import { StatusSelect } from './StatusSelect';

type QuotesTableProps = {
  quotes: Quote[];
  isLoading: boolean;
  updatingQuoteId: QuoteId | null;
  onOpenDetails: (quoteId: QuoteId) => void;
  onStatusChange: (quoteId: QuoteId, status: AtendimentoStatus) => void;
};

export function QuotesTable({
  quotes,
  isLoading,
  updatingQuoteId,
  onOpenDetails,
  onStatusChange,
}: QuotesTableProps) {
  if (isLoading) {
    return <div className="admin-empty">Carregando cotações...</div>;
  }

  if (quotes.length === 0) {
    return <div className="admin-empty">Nenhuma cotação encontrada para esse filtro.</div>;
  }

  function handleRowKeyDown(event: KeyboardEvent<HTMLTableRowElement>, quoteId: QuoteId) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpenDetails(quoteId);
    }
  }

  return (
    <div className="admin-table-wrap">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Placa</th>
            <th>Tipo Veículo</th>
            <th>Origem</th>
            <th>Campanha</th>
            <th>Status Atendimento</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr
              key={String(quote.id)}
              tabIndex={0}
              role="button"
              onClick={() => onOpenDetails(quote.id)}
              onKeyDown={(event) => handleRowKeyDown(event, quote.id)}
            >
              <td>
                <strong>{getQuoteFullName(quote)}</strong>
              </td>
              <td>{getQuotePhone(quote)}</td>
              <td>{formatEmpty(quote.placa)}</td>
              <td>{formatEmpty(quote.tipo_veiculo)}</td>
              <td>{formatEmpty(quote.origem)}</td>
              <td>{formatEmpty(quote.campanha)}</td>
              <td>
                <div className="admin-status-cell">
                  <span className={`admin-status-dot admin-status-dot--${normalizeAtendimentoStatus(quote.status_atendimento)}`} />
                  <StatusSelect
                    value={quote.status_atendimento}
                    disabled={updatingQuoteId === quote.id}
                    onChange={(status) => onStatusChange(quote.id, status)}
                  />
                  <span className="admin-status-label">{getQuoteStatusLabel(quote)}</span>
                </div>
              </td>
              <td>{formatDate(quote.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
