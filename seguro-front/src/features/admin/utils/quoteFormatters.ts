import { getAtendimentoStatusLabel } from '../data/statusOptions';
import type { Quote } from '../types';

const phoneFields = [
  'telefone',
  'telefone_cliente',
  'whatsapp',
  'whatsapp_cliente',
  'celular',
  'phone',
  'phone_number',
  'numero_whatsapp',
  'numero_cliente',
  'wa_id',
  'message_from',
  'from',
] as const;

export function formatEmpty(value: unknown): string {
  if (value === null || value === undefined) {
    return '-';
  }

  if (typeof value === 'string') {
    return value.trim() || '-';
  }

  return String(value);
}

export function formatBoolean(value: unknown): string {
  if (value === true || value === 1) {
    return 'Sim';
  }

  if (value === false || value === 0) {
    return 'Não';
  }

  if (typeof value === 'string') {
    const normalizedValue = value.trim().toLowerCase();

    if (['sim', 'true', 'yes', '1'].includes(normalizedValue)) {
      return 'Sim';
    }

    if (['nao', 'não', 'false', 'no', '0'].includes(normalizedValue)) {
      return 'Não';
    }
  }

  return '-';
}

export function formatDate(value: unknown): string {
  if (!value || typeof value !== 'string') {
    return '-';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '-';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

export function getQuoteFullName(quote: Quote): string {
  const fullName = [quote.nome, quote.sobrenome]
    .map((part) => (typeof part === 'string' ? part.trim() : ''))
    .filter(Boolean)
    .join(' ');

  return fullName || '-';
}

export function getQuotePhone(quote: Quote): string {
  for (const field of phoneFields) {
    const value = quote[field];

    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }

    if (typeof value === 'number') {
      return String(value);
    }
  }

  return '-';
}

export function getQuoteStatusLabel(quote: Quote): string {
  return getAtendimentoStatusLabel(quote.status_atendimento);
}
