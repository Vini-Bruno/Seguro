import { atendimentoStatuses, normalizeAtendimentoStatus } from '../data/statusOptions';
import type { AtendimentoStatus } from '../data/statusOptions';

type StatusSelectProps = {
  value: AtendimentoStatus | null;
  disabled?: boolean;
  onChange: (status: AtendimentoStatus) => void;
};

export function StatusSelect({ value, disabled = false, onChange }: StatusSelectProps) {
  return (
    <select
      className="admin-status-select"
      aria-label="Status atendimento"
      value={normalizeAtendimentoStatus(value)}
      disabled={disabled}
      onClick={(event) => event.stopPropagation()}
      onChange={(event) => onChange(event.target.value as AtendimentoStatus)}
    >
      {atendimentoStatuses.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
