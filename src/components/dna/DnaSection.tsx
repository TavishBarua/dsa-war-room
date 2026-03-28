import { useState } from 'react';
import { ALL_DNA_PATTERNS } from '../../data/dnaAll';
import { useMemorizedContext } from '../../context/MemorizedContext';
import DnaCard from './DnaCard';

export default function DnaSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { memorizedCount, percentage } = useMemorizedContext();

  const toggleCard = (index: number) => {
    setActiveCard(prev => prev === index ? null : index);
  };

  return (
    <section id="pattern-dna">
      <div className="section-label">// 02 — Pattern DNA</div>
      <h2 className="section-title">PATTERN<br />DNA</h2>
      <p className="section-desc">
        18 patterns. Learn once. Recognize forever. Each one explained like you're 10, built like you're a FAANG engineer.
      </p>
      <div className="dna-progress-wrap">
        <span className="dna-progress-text">{memorizedCount} / 18 MEMORIZED</span>
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
          />
        ))}
      </div>
    </section>
  );
}
