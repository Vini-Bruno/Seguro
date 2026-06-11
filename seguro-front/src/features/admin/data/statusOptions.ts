export const atendimentoStatuses = [
  { value: 'nova_cotacao', label: 'Nova cotação' },
  { value: 'em_atendimento', label: 'Em atendimento' },
  { value: 'fechado', label: 'Fechado' },
  { value: 'perdido', label: 'Perdido' },
] as const;

export type AtendimentoStatus = (typeof atendimentoStatuses)[number]['value'];
export type QuoteFilter = 'todos' | AtendimentoStatus;

export const quoteFilterOptions = [
  { value: 'todos', label: 'Todos' },
  ...atendimentoStatuses,
] as const satisfies ReadonlyArray<{ value: QuoteFilter; label: string }>;

const atendimentoStatusValues = atendimentoStatuses.map((status) => status.value);

export function isAtendimentoStatus(value: unknown): value is AtendimentoStatus {
  return typeof value === 'string' && atendimentoStatusValues.includes(value as AtendimentoStatus);
}

export function normalizeAtendimentoStatus(value: unknown): AtendimentoStatus {
  return isAtendimentoStatus(value) ? value : 'nova_cotacao';
}

export function getAtendimentoStatusLabel(value: unknown): string {
  const status = normalizeAtendimentoStatus(value);

  return atendimentoStatuses.find((option) => option.value === status)?.label ?? 'Nova cotação';
}
