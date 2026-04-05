import { SD_PATTERNS } from '../../data/systemdesign/patterns';
import SDPatternCard from './SDPatternCard';

export default function SDPatternsSection() {
  return (
    <section id="sd-patterns" style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-label" style={{ color: 'var(--neon2)' }}>// 01 — Core Patterns</div>
      <h2 className="section-title">THE 7<br />PATTERNS</h2>
      <p className="section-desc">
        Every system design answer uses some combination of these 7 patterns. Master them and you can design anything.
      </p>
      <div className="sd-patterns-grid">
        {SD_PATTERNS.map((p, i) => (
          <SDPatternCard key={i} pattern={p} />
        ))}
      </div>
    </section>
  );
}
