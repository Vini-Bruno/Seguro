import type { PropsWithChildren, ReactNode } from 'react';

type SectionCardProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  description: string;
  footer?: ReactNode;
}>;

export function SectionCard({
  eyebrow,
  title,
  description,
  footer,
  children,
}: SectionCardProps) {
  return (
    <section className="section-card">
      {eyebrow ? <span className="section-card__eyebrow">{eyebrow}</span> : null}
      <div className="section-card__header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section-card__content">{children}</div>
      {footer ? <div className="section-card__footer">{footer}</div> : null}
    </section>
  );
}
