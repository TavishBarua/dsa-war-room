import { SDPattern } from '../../data/systemdesign/types';

interface Props {
  pattern: SDPattern;
}

export default function SDPatternCard({ pattern }: Props) {
  return (
    <div
      className="sd-pattern-card"
      style={{ '--accent': pattern.accent } as React.CSSProperties}
    >
      <div className="sd-pattern-icon">{pattern.icon}</div>
      <div className="sd-pattern-name">{pattern.name}</div>
      <div className="sd-pattern-tagline">{pattern.tagline}</div>
      <div className="sd-pattern-when">When to use:</div>
      <div className="sd-pattern-triggers">
        {pattern.whenToUse.map((trigger, i) => (
          <span key={i} className="sd-pattern-trigger">{trigger}</span>
        ))}
      </div>
    </div>
  );
}
