import { Week } from '../../data/types';
import { useProgressContext } from '../../context/ProgressContext';
import { PROBLEM_DIAGRAMS } from '../../data/diagrams';
import { ALL_PROBLEM_DESCRIPTIONS } from '../../data/problemDescriptionsAll';
import ProblemItem from './ProblemItem';

interface Props {
  week: Week;
  weekIndex: number;
  isActive: boolean;
  onToggle: () => void;
}

export default function WeekCard({ week, weekIndex, isActive, onToggle }: Props) {
  const { done, toggleProblem } = useProgressContext();

  return (
    <div className={`week-card${isActive ? ' active' : ''}`} style={{ '--wcolor': week.color } as React.CSSProperties}>
      <div className="week-header" onClick={onToggle}>
        <div className="week-num">{week.num}</div>
        <div className="week-meta">
          <div className="week-title">{week.title}</div>
          <div className="week-tags">
            {week.topics.map((t, i) => (
              <span key={i} className="wtag">{t}</span>
            ))}
          </div>
        </div>
        <div className="week-right">
          <div className="week-problems">{week.problems}</div>
          <div className="week-per-day">{week.perDay}</div>
        </div>
      </div>
      <div className="week-body">
        <div className="week-body-inner">
          <div className="week-schedule">
            {week.schedule.map((day, di) => (
              <div key={di} className={`day-block${day.rest ? ' day-rest' : ''}`}>
                <div className="day-label">{day.day}</div>
                <div className="day-task">{day.task}</div>
              </div>
            ))}
          </div>
          <div className="problem-list">
            {week.problems_list.map((prob, pi) => {
              const key = `w${weekIndex}_${pi}`;
              return (
                <ProblemItem
                  key={key}
                  name={prob.name}
                  diff={prob.diff}
                  isDone={!!done[key]}
                  onToggle={() => toggleProblem(key)}
                  accentColor={week.color}
                  url={prob.url}
                  diagram={prob.diagram || PROBLEM_DIAGRAMS[prob.name]}
                  description={ALL_PROBLEM_DESCRIPTIONS[prob.name]}
                />
              );
            })}
          </div>
          <div className="week-tip" dangerouslySetInnerHTML={{ __html: week.tip }} />
        </div>
      </div>
    </div>
  );
}
