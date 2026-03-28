import { AnnotatedCodeLine } from '../../data/types';

interface Props {
  lines: AnnotatedCodeLine[];
}

export default function MemCodeWalk({ lines }: Props) {
  return (
    <div className="mem-v2-code-walk">
      {lines.map((line, i) => (
        <div
          key={i}
          className="mem-v2-code-line"
          style={{ '--line-color': line.color || 'transparent' } as React.CSSProperties}
        >
          <span className="mem-v2-line-num">{i + 1}</span>
          {line.stepId && <span className="mem-v2-step-badge">{line.stepId}</span>}
          <span className="mem-v2-line-code">{line.line}</span>
          {line.note && <span className="mem-v2-line-note">{line.note}</span>}
        </div>
      ))}
    </div>
  );
}
