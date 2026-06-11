import { supabase } from '@/lib/supabase';

import type { AtendimentoStatus } from '../data/statusOptions';
import type { Quote, QuoteId } from '../types';

function getSupabaseClient() {
  if (!supabase) {
    throw new Error('Configure VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY para carregar o painel.');
  }

  return supabase;
}

export async function listQuotes(): Promise<Quote[]> {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('quotes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as Quote[];
}

export async function updateQuoteStatus(quoteId: QuoteId, status: AtendimentoStatus): Promise<void> {
  const client = getSupabaseClient();
  const { error } = await client
    .from('quotes')
    .update({ status_atendimento: status })
    .eq('id', quoteId);

  if (error) {
    throw new Error(error.message);
  }
}
