type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, light = false }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
