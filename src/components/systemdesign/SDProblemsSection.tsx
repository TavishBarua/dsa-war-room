import { useState } from 'react';
import { SD_PROBLEMS } from '../../data/systemdesign/problems';
import { SDDifficulty } from '../../data/systemdesign/types';
import SDProblemCard from './SDProblemCard';

const FILTERS: ('All' | SDDifficulty)[] = ['All', 'Easy', 'Medium', 'Hard'];

export default function SDProblemsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [filter, setFilter] = useState<'All' | SDDifficulty>('All');

  const filtered = filter === 'All'
    ? SD_PROBLEMS
    : SD_PROBLEMS.filter(p => p.difficulty === filter);

  return (
    <section id="sd-problems" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-label" style={{ color: 'var(--neon2)' }}>// 02 — Problem Breakdowns</div>
      <h2 className="section-title">TOP 10<br />DESIGNS</h2>
      <p className="section-desc">
        The most asked system design questions. Each one explained like you're 10, architected like you're a staff engineer. Click to expand.
      </p>
      <div className="sd-filter-row">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`sd-filter-btn${filter === f ? ' active' : ''}`}
            onClick={() => { setFilter(f); setActiveCard(null); }}
          >
            {f} {f !== 'All' && `(${SD_PROBLEMS.filter(p => p.difficulty === f).length})`}
          </button>
        ))}
      </div>
      <div className="sd-cards-container">
        {filtered.map((problem, i) => (
          <SDProblemCard
            key={problem.id}
            problem={problem}
            isActive={activeCard === i}
            onToggle={() => setActiveCard(prev => prev === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
