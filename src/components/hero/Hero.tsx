import { useProgressContext } from '../../context/ProgressContext';
import { useCountdown } from '../../hooks/useCountdown';

export default function Hero() {
  const { doneCount } = useProgressContext();
  const daysRemaining = useCountdown();

  return (
    <>
      <div className="hero" style={{ paddingTop: 80 }}>
        <div className="tag">// senior_engineer.dsa_mode = activated</div>
        <h1>CRACK THE<br />CODE</h1>
        <p className="hero-sub">
          You already know <span>how systems work</span>. Now it's time to remind the algorithm how <span>you work</span>. 60 days. 150 problems. One raise.
        </p>
        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">{daysRemaining}</span>
            <span className="stat-label">Days Left</span>
          </div>
          <div className="stat">
            <span className="stat-num">150</span>
            <span className="stat-label">Problems</span>
          </div>
          <div className="stat">
            <span className="stat-num">2.5</span>
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
