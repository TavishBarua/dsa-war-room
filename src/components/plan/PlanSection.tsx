import { useState } from 'react';
import { WEEKS } from '../../data/weeks';
import WeekCard from './WeekCard';

export default function PlanSection() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const toggleWeek = (index: number) => {
    setActiveWeek(prev => prev === index ? null : index);
  };

  return (
    <section id="plan">
      <div className="section-label">01 — 8-Week Battle Plan</div>
      <h2 className="section-title">YOUR 60-DAY<br />WAR PLAN</h2>
      <p className="section-desc">
        2 months. 8 focused weeks. Each week has a theme, a daily schedule, and the exact problems to crush. Check them off as you go.
      </p>
      <div className="weeks-container">
        {WEEKS.map((week, i) => (
          <WeekCard
            key={i}
            week={week}
            weekIndex={i}
            isActive={activeWeek === i}
            onToggle={() => toggleWeek(i)}
          />
        ))}
      </div>
    </section>
  );
}
