import { trustSignals } from '../data/homeContent';

export function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Destaques">
      {trustSignals.map((signal) => (
        <div key={signal.label}>
          <strong>{signal.value}</strong>
          <span>{signal.label}</span>
        </div>
      ))}
    </div>
  );
}
