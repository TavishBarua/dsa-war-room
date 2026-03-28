import { useScheduleContext } from '../../context/ScheduleContext';
import { useProgressContext } from '../../context/ProgressContext';
import { WEEKS } from '../../data/weeks';

export default function ScheduleBar() {
  const { config, schedule, todayInfo } = useScheduleContext();
  const { done } = useProgressContext();

  if (!config || !schedule || !todayInfo) return null;

  const totalDays = config.totalDays;
  const todayPct = Math.min(100, Math.max(0, (todayInfo.dayOffset / (totalDays - 1)) * 100));

  // Count expected vs completed problems up to today
  let expectedCount = 0;
  let completedOfExpected = 0;
  schedule.forEach((phase) => {
    phase.problemDays.forEach((dayOff, pi) => {
      const absDay = phase.startDay + dayOff;
      if (absDay <= todayInfo.dayOffset) {
        expectedCount++;
        const key = `w${phase.weekIndex}_${pi}`;
        if (done[key]) completedOfExpected++;
      }
    });
  });

  const diff = completedOfExpected - expectedCount;
  let statusText: string;
  let statusClass: string;
  if (todayInfo.isBeforeStart) {
    statusText = 'Starts soon';
    statusClass = 'on-track';
  } else if (todayInfo.isPastEnd) {
    statusText = 'Schedule ended';
    statusClass = 'behind';
  } else if (diff >= 0) {
    statusText = diff === 0 ? 'On track' : `${diff} problems ahead`;
    statusClass = diff === 0 ? 'on-track' : 'ahead';
  } else {
    statusText = `${Math.abs(diff)} problems behind`;
    statusClass = 'behind';
  }

  return (
    <div className="schedule-bar-wrap">
      <div className="schedule-bar">
        {schedule.map((phase, i) => (
          <div
            key={i}
            className="schedule-bar-segment"
            style={{
              width: `${(phase.daysAllocated / totalDays) * 100}%`,
              background: WEEKS[i].color,
              opacity: todayInfo.dayOffset >= phase.startDay ? 0.8 : 0.3,
            }}
            title={`W${i + 1}: ${WEEKS[i].title}`}
          />
        ))}
        {!todayInfo.isBeforeStart && !todayInfo.isPastEnd && (
          <div className="schedule-bar-today" style={{ left: `${todayPct}%` }} />
        )}
      </div>
      <div className={`schedule-status ${statusClass}`}>{statusText}</div>
    </div>
  );
}
