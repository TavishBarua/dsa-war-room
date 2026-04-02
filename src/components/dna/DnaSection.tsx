import { useState, useMemo } from 'react';
import { ALL_DNA_PATTERNS } from '../../data/dnaAll';
import { useMemorizedContext } from '../../context/MemorizedContext';
import { useScheduleContext } from '../../context/ScheduleContext';
import { toLocalISO } from '../../hooks/useSchedule';
import DnaCard from './DnaCard';

function addDaysToISO(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return toLocalISO(d);
}

export default function DnaSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { memorizedCount, percentage } = useMemorizedContext();
  const { schedule } = useScheduleContext();

  // Build a map: dnaPatternIndex → scheduled date (first day of its phase)
  const dnaDates = useMemo(() => {
    if (!schedule) return {};
    const map: Record<number, string> = {};
    schedule.forEach(phase => {
      phase.dnaPatternIndices.forEach((dnaIdx, i) => {
        // Spread DNA patterns across first few days of the phase
        const dayOff = Math.min(i, phase.daysAllocated - 1);
        map[dnaIdx] = addDaysToISO(phase.startDate, dayOff);
      });
    });
    return map;
  }, [schedule]);

  const toggleCard = (index: number) => {
    setActiveCard(prev => prev === index ? null : index);
  };

  return (
    <section id="pattern-dna">
      <div className="section-label">// 02 — Pattern DNA</div>
      <h2 className="section-title">PATTERN<br />DNA</h2>
      <p className="section-desc">
        33 patterns. Learn once. Recognize forever. Each one explained like you're 10, built like you're a FAANG engineer.
      </p>
      <div className="dna-progress-wrap">
        <span className="dna-progress-text">{memorizedCount} / 33 MEMORIZED</span>
        <div className="dna-progress-bar">
          <div className="dna-progress-fill" style={{ width: `${percentage}%` }} />
        </div>
      </div>
      <div className="dna-cards-container">
        {ALL_DNA_PATTERNS.map((pattern, i) => (
          <DnaCard
            key={i}
            pattern={pattern}
            index={i}
            isActive={activeCard === i}
            onToggle={() => toggleCard(i)}
            scheduledDate={dnaDates[i]}
          />
        ))}
      </div>
    </section>
  );
}
