import { useState, useMemo } from 'react';
import { getTodayStr } from '../../hooks/useSchedule';

interface Props {
  name: string;
  diff: string;
  isDone: boolean;
  onToggle: () => void;
  accentColor: string;
  url: string;
  diagram?: string;
  description?: { desc: string; examples: string };
  scheduledDate?: string;
}

function formatShort(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function ProblemItem({ name, diff, isDone, onToggle, accentColor, url, diagram, description, scheduledDate }: Props) {
  const [expanded, setExpanded] = useState(false);
  const hasExtra = !!(diagram || description);

  const dateBadgeClass = useMemo(() => {
    if (!scheduledDate) return '';
    const today = getTodayStr();
    if (scheduledDate === today) return 'date-badge today';
    if (scheduledDate < today && !isDone) return 'date-badge overdue';
    return 'date-badge';
  }, [scheduledDate, isDone]);

  return (
    <div className={`problem-item-wrap${isDone ? ' done' : ''}`}>
      <div
        className="problem-item"
        style={{ '--wcolor': accentColor } as React.CSSProperties}
        onClick={onToggle}
      >
        <div className="p-check">{isDone ? '✓' : ''}</div>
        {scheduledDate && (
          <span className={dateBadgeClass}>{formatShort(scheduledDate)}</span>
        )}
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
