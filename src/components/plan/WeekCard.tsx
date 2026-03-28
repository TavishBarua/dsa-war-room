import { Week, PhaseSchedule } from '../../data/types';
import { useProgressContext } from '../../context/ProgressContext';
import { PROBLEM_DIAGRAMS } from '../../data/diagrams';
import { ALL_PROBLEM_DESCRIPTIONS } from '../../data/problemDescriptionsAll';
import { formatDateShort, toLocalISO } from '../../hooks/useSchedule';
import ProblemItem from './ProblemItem';

function addDaysToISO(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return toLocalISO(d);
}

interface Props {
  week: Week;
  weekIndex: number;
  isActive: boolean;
  onToggle: () => void;
  phaseSchedule: PhaseSchedule | null;
  isCurrentPhase: boolean;
}

export default function WeekCard({ week, weekIndex, isActive, onToggle, phaseSchedule, isCurrentPhase }: Props) {
  const { done, toggleProblem } = useProgressContext();

  const perDayDisplay = phaseSchedule
    ? `${Math.ceil(week.problems / phaseSchedule.daysAllocated)}/day`
    : week.perDay;

  return (
    <div className={`week-card${isActive ? ' active' : ''}${isCurrentPhase ? ' current-phase' : ''}`} style={{ '--wcolor': week.color } as React.CSSProperties}>
      <div className="week-header" onClick={onToggle}>
        <div className="week-num">{week.num}</div>
        <div className="week-meta">
          <div className="week-title">
            {week.title}
            {isCurrentPhase && <span className="current-phase-badge">TODAY</span>}
          </div>
          <div className="week-tags">
            {week.topics.map((t, i) => (
              <span key={i} className="wtag">{t}</span>
            ))}
          </div>
          {phaseSchedule && (
            <div className="phase-date-range">
              {formatDateShort(phaseSchedule.startDate)} – {formatDateShort(phaseSchedule.endDate)} ({phaseSchedule.daysAllocated}d)
            </div>
          )}
        </div>
        <div className="week-right">
          <div className="week-problems">{week.problems}</div>
          <div className="week-per-day">{perDayDisplay}</div>
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
              const scheduledDate = phaseSchedule
                ? addDaysToISO(phaseSchedule.startDate, phaseSchedule.problemDays[pi])
                : undefined;
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
                  scheduledDate={scheduledDate}
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
