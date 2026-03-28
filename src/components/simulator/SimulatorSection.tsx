import { useState, useCallback } from 'react';
import { PATTERNS } from '../../data/patterns';
import { useTimer } from '../../hooks/useTimer';

interface SimProblem {
  name: string;
  diff: string;
  category: string;
  icon: string;
}

export default function SimulatorSection() {
  const [simDiff, setSimDiff] = useState('all');
  const [simTime, setSimTime] = useState(45);
  const [currentProblem, setCurrentProblem] = useState<SimProblem | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [solved, setSolved] = useState(false);
  const timer = useTimer(simTime);

  const handleDiffChange = useCallback((diff: string) => {
    setSimDiff(diff);
  }, []);

  const handleTimeChange = useCallback((time: number) => {
    setSimTime(time);
    timer.reset(time);
  }, [timer]);

  const randomProblem = useCallback(() => {
    const allProblems: SimProblem[] = [];
    PATTERNS.forEach(p => {
      p.problems.forEach(prob => {
        allProblems.push({ ...prob, category: p.name, icon: p.icon });
      });
    });
    const filtered = simDiff === 'all' ? allProblems : allProblems.filter(p => p.diff === simDiff);
    const p = filtered[Math.floor(Math.random() * filtered.length)];
    setCurrentProblem(p);
    setShowHints(false);
    setSolved(false);
    timer.reset(simTime);
    setTimeout(() => timer.start(), 100);
  }, [simDiff, simTime, timer]);

  const markSolved = useCallback(() => {
    if (!currentProblem) return;
    setSolved(true);
    timer.stop();
  }, [currentProblem, timer]);

  const diffColor = (diff: string) =>
    diff === 'Easy' ? 'var(--easy)' : diff === 'Medium' ? 'var(--medium)' : 'var(--hard)';

  const getDiffBtnClass = (diff: string) => {
    if (simDiff !== diff) return 'filter-btn';
    if (diff === 'Hard') return 'filter-btn hard-active';
    if (diff === 'Medium') return 'filter-btn medium-active';
    return 'filter-btn active';
  };

  const getTimeBtnClass = (time: number) =>
    simTime === time ? 'filter-btn active' : 'filter-btn';

  const timerClass = `timer-display${timer.status === 'warning' ? ' warning' : timer.status === 'danger' ? ' danger' : ''}`;

  return (
    <section id="simulator">
      <div className="section-label">03 — Interview Simulator</div>
      <h2 className="section-title">INTERVIEW<br />MODE</h2>
      <p className="section-desc">
        45 minutes. Random problem. No hints unless you ask. This is how FAANG will feel. Practice it until it's boring.
      </p>

      <div className="simulator-card">
        <div className="sim-controls">
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: 2, alignSelf: 'center' }}>DIFFICULTY:</span>
          {['all', 'Easy', 'Medium', 'Hard'].map(d => (
            <button key={d} className={getDiffBtnClass(d)} onClick={() => handleDiffChange(d)}>
              {d.toUpperCase()}
            </button>
          ))}
          <span style={{ flex: 1 }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: 2, alignSelf: 'center' }}>TIME:</span>
          {[20, 45, 60].map(t => (
            <button key={t} className={getTimeBtnClass(t)} onClick={() => handleTimeChange(t)}>
              {t} MIN
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: 12, marginBottom: 24 }}>
          <div className="sim-display">
            {!currentProblem ? (
              <div style={{ textAlign: 'center', opacity: 0.3 }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 64, letterSpacing: 4 }}>READY?</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--muted)' }}>Hit "Random Problem" to begin</div>
              </div>
            ) : (
              <>
                <div className="sim-category">{currentProblem.icon} {currentProblem.category}</div>
                <div className="sim-problem-name">{currentProblem.name}</div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace", fontSize: 11,
                    color: diffColor(currentProblem.diff),
                    border: `1px solid ${diffColor(currentProblem.diff)}`,
                    padding: '4px 12px'
                  }}>
                    {currentProblem.diff.toUpperCase()}
                  </span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)' }}>
                    Think before you Google.
                  </span>
                </div>

                {showHints && (
                  <div className="sim-hints" style={{ display: 'block' }}>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--neon2)', letterSpacing: 2, marginBottom: 12 }}>HINTS (USE SPARINGLY)</div>
                    <div className="hint-item"><span className="hint-arrow">→</span> What data structure fits this problem?</div>
                    <div className="hint-item"><span className="hint-arrow">→</span> What's the brute force O(n²)? Can you reduce it?</div>
                    <div className="hint-item"><span className="hint-arrow">→</span> Draw 3 examples on paper first.</div>
                    <div className="hint-item"><span className="hint-arrow">→</span> What does the optimal substructure look like?</div>
                    <div className="hint-item"><span className="hint-arrow">→</span> Category hint: <strong style={{ color: 'var(--neon)' }}>{currentProblem.category}</strong> pattern</div>
                  </div>
                )}

                {solved && (
                  <div style={{
                    marginTop: 16, padding: 12,
                    background: 'rgba(0,255,136,0.1)',
                    border: '1px solid rgba(0,255,136,0.3)',
                    fontFamily: "'Space Mono', monospace", fontSize: 12, color: 'var(--neon)'
                  }}>
                    ✓ MARKED AS SOLVED — You're getting there. Keep going.
                  </div>
                )}
              </>
            )}
          </div>
          <div>
            <div className={timerClass}>{timer.display}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 8px' }}>
              <button className="btn btn-primary" onClick={timer.start} style={{ width: '100%', fontSize: 10, padding: 10 }}>START</button>
              <button className="btn btn-secondary" onClick={timer.stop} style={{ width: '100%', fontSize: 10, padding: 10 }}>STOP</button>
              <button className="btn" onClick={() => timer.reset(simTime)} style={{ width: '100%', fontSize: 10, padding: 10, border: '1px solid var(--border)', color: 'var(--muted)' }}>RESET</button>
            </div>
          </div>
        </div>

        <div className="sim-actions">
          <button className="btn btn-primary" onClick={randomProblem}>⚡ RANDOM PROBLEM</button>
          <button className="btn btn-secondary" onClick={() => setShowHints(!showHints)}>💡 SHOW HINTS</button>
          <button className="btn" style={{ border: '1px solid var(--border)', color: 'var(--muted)' }} onClick={markSolved}>✓ MARK SOLVED</button>
        </div>
      </div>
    </section>
  );
}
