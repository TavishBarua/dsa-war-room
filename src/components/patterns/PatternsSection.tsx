import { PATTERNS } from '../../data/patterns';
import PatternCard from './PatternCard';

export default function PatternsSection() {
  return (
    <section id="patterns">
      <div className="section-label">02 — Pattern Intuition</div>
      <h2 className="section-title">THE CHEAT<br />CODES</h2>
      <p className="section-desc">
        Forget memorizing solutions. Learn the TRIGGER — the moment your brain should scream
        "I know which pattern this is." These are the 18 weapons in your arsenal.
      </p>
      <div className="patterns-grid">
        {PATTERNS.map((p, i) => (
          <PatternCard key={i} pattern={p} />
        ))}
      </div>
    </section>
  );
}
