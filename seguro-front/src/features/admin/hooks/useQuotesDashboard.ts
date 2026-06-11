import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  normalizeAtendimentoStatus,
  type AtendimentoStatus,
  type QuoteFilter,
} from '../data/statusOptions';
import { listQuotes, updateQuoteStatus } from '../services/quotesService';
import type { Quote, QuoteId } from '../types';

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : 'Não foi possível carregar as cotações.';
}

export function useQuotesDashboard() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filter, setFilter] = useState<QuoteFilter>('todos');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [updatingQuoteId, setUpdatingQuoteId] = useState<QuoteId | null>(null);
  const [selectedQuoteId, setSelectedQuoteId] = useState<QuoteId | null>(null);

  const loadQuotes = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const loadedQuotes = await listQuotes();
      setQuotes(loadedQuotes);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadQuotes();
  }, [loadQuotes]);

  const filteredQuotes = useMemo(() => {
    if (filter === 'todos') {
      return quotes;
    }

    return quotes.filter((quote) => normalizeAtendimentoStatus(quote.status_atendimento) === filter);
  }, [filter, quotes]);

  const selectedQuote = useMemo(
    () => quotes.find((quote) => quote.id === selectedQuoteId) ?? null,
    [quotes, selectedQuoteId],
  );

  const changeQuoteStatus = useCallback(
    async (quoteId: QuoteId, nextStatus: AtendimentoStatus) => {
      const previousQuotes = quotes;

      setUpdatingQuoteId(quoteId);
      setErrorMessage(null);
      setQuotes((currentQuotes) =>
        currentQuotes.map((quote) =>
          quote.id === quoteId ? { ...quote, status_atendimento: nextStatus } : quote,
        ),
      );

      try {
        await updateQuoteStatus(quoteId, nextStatus);
      } catch (error) {
        setQuotes(previousQuotes);
        setErrorMessage(getErrorMessage(error));
      } finally {
        setUpdatingQuoteId(null);
      }
    },
    [quotes],
  );

  return {
    quotes,
    filteredQuotes,
    filter,
    setFilter,
    isLoading,
    errorMessage,
    updatingQuoteId,
    selectedQuote,
    openQuoteDetails: setSelectedQuoteId,
    closeQuoteDetails: () => setSelectedQuoteId(null),
    refreshQuotes: loadQuotes,
    changeQuoteStatus,
  };
}
