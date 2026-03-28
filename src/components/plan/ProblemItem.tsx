import { useState } from 'react';

interface Props {
  name: string;
  diff: string;
  isDone: boolean;
  onToggle: () => void;
  accentColor: string;
  url: string;
  diagram?: string;
  description?: { desc: string; examples: string };
}

export default function ProblemItem({ name, diff, isDone, onToggle, accentColor, url, diagram, description }: Props) {
  const [expanded, setExpanded] = useState(false);
  const hasExtra = !!(diagram || description);

  return (
    <div className={`problem-item-wrap${isDone ? ' done' : ''}`}>
      <div
        className="problem-item"
        style={{ '--wcolor': accentColor } as React.CSSProperties}
        onClick={onToggle}
      >
        <div className="p-check">{isDone ? '✓' : ''}</div>
        <a className="p-name" href={url} target="_blank" rel="noopener noreferrer"
           onClick={(e) => e.stopPropagation()}>
          {name}
        </a>
        {hasExtra && (
          <button className="p-expand-btn" title="Show problem details"
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}>
            {expanded ? '▾' : '▸'}
          </button>
        )}
        <span className={`p-diff ${diff}`}>{diff}</span>
      </div>
      {expanded && (
        <div className="p-details" style={{ '--wcolor': accentColor } as React.CSSProperties}>
          {description && (
            <div className="p-desc-section">
              <div className="p-desc-text">{description.desc}</div>
              <pre className="p-desc-example">{description.examples}</pre>
            </div>
          )}
          {diagram && (
            <div className="p-diagram" dangerouslySetInnerHTML={{ __html: diagram }} />
          )}
        </div>
      )}
    </div>
  );
}
