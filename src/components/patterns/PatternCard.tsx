import { PatternCard as PatternCardType } from '../../data/types';

interface Props {
  pattern: PatternCardType;
}

export default function PatternCard({ pattern: p }: Props) {
  return (
    <div className="pattern-card" style={{ '--accent': p.accent } as React.CSSProperties}>
      <div className="pattern-icon">{p.icon}</div>
      <div className="pattern-name">{p.name}</div>
      <div className="pattern-tagline">{p.tagline}</div>
      <div className="pattern-intuition">{p.intuition}</div>
      <div className="pattern-trigger">
        <strong>WHEN TO USE:</strong>
        {p.trigger}
      </div>
      <div className="pattern-count">{p.count} PROBLEMS IN NEETCODE 150</div>
    </div>
  );
}
