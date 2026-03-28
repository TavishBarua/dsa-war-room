import { useMemo } from 'react';
import { useProgressContext } from '../../context/ProgressContext';
import { useScheduleContext } from '../../context/ScheduleContext';
import { useCountdown } from '../../hooks/useCountdown';
import { getTodayStr } from '../../hooks/useSchedule';
import ScheduleToggle from '../ui/ScheduleToggle';

export default function Hero() {
  const { doneCount } = useProgressContext();
  const defaultDaysRemaining = useCountdown();
  const { config } = useScheduleContext();

  const { daysLeft, perDay } = useMemo(() => {
    if (!config) return { daysLeft: defaultDaysRemaining, perDay: '2.5' };
    const today = getTodayStr();
    const end = new Date(config.endDate + 'T00:00:00');
    const now = new Date(today + 'T00:00:00');
    const remaining = Math.max(0, Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
    const avg = (151 / config.totalDays).toFixed(1);
    return { daysLeft: remaining, perDay: avg };
  }, [config, defaultDaysRemaining]);

  return (
    <>
      <div className="hero" style={{ paddingTop: 80 }}>
        <div className="tag">// senior_engineer.dsa_mode = activated</div>
        <h1>CRACK THE<br />CODE</h1>
        <p className="hero-sub">
          You already know <span>how systems work</span>. Now it's time to remind the algorithm how <span>you work</span>. {config ? config.totalDays : 60} days. 150 problems. One raise.
        </p>
        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">{daysLeft}</span>
            <span className="stat-label">Days Left</span>
          </div>
          <div className="stat">
            <span className="stat-num">150</span>
            <span className="stat-label">Problems</span>
          </div>
          <div className="stat">
            <span className="stat-num">{perDay}</span>
            <span className="stat-label">Per Day</span>
          </div>
          <div className="stat">
            <span className="stat-num">{doneCount}</span>
            <span className="stat-label">Crushed</span>
          </div>
        </div>
        <div className="cta-row">
          <a href="#plan" className="btn btn-primary">Start the War</a>
          <a href="#patterns" className="btn btn-secondary">Learn Patterns First</a>
          <ScheduleToggle />
        </div>
      </div>

      <div className="ticker">
        <span className="ticker-inner">
          ★ ARRAYS ★ TWO POINTERS ★ SLIDING WINDOW ★ STACK ★ BINARY SEARCH ★ LINKED LIST ★ TREES ★ HEAP ★ BACKTRACKING ★ TRIES ★ GRAPHS ★ DYNAMIC PROGRAMMING ★ GREEDY ★ BIT MANIPULATION ★ MATH ★ INTERVALS ★ FAANG OR BUST ★ SENIOR ENGINEER MODE ★ NO MORE LAZINESS ★
        </span>
      </div>
    </>
  );
}
