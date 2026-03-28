import { useState } from 'react';
import { WEEKS } from '../../data/weeks';
import { useScheduleContext } from '../../context/ScheduleContext';
import { formatDateShort } from '../../hooks/useSchedule';
import WeekCard from './WeekCard';

export default function PlanSection() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const { config, schedule, todayInfo } = useScheduleContext();

  const toggleWeek = (index: number) => {
    setActiveWeek(prev => prev === index ? null : index);
  };

  return (
    <section id="plan">
      <div className="section-label">01 — 8-Week Battle Plan</div>
      <h2 className="section-title">YOUR {config ? `${config.totalDays}-DAY` : '60-DAY'}<br />WAR PLAN</h2>
      <p className="section-desc">
        {config
          ? `${formatDateShort(config.startDate)} – ${formatDateShort(config.endDate)}. 8 focused phases. Each phase has a theme and the exact problems to crush.`
          : '2 months. 8 focused weeks. Each week has a theme, a daily schedule, and the exact problems to crush. Check them off as you go.'
        }
      </p>
      <div className="weeks-container">
        {WEEKS.map((week, i) => (
          <WeekCard
            key={i}
            week={week}
            weekIndex={i}
            isActive={activeWeek === i}
            onToggle={() => toggleWeek(i)}
            phaseSchedule={schedule?.[i] ?? null}
            isCurrentPhase={todayInfo?.currentPhaseIndex === i}
          />
        ))}
      </div>
    </section>
  );
}
