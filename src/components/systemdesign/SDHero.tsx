import { useSDProgressContext } from '../../context/SDProgressContext';

export default function SDHero() {
  const { studiedCount } = useSDProgressContext();

  return (
    <>
      <div className="sd-hero">
        <div className="tag" style={{ borderColor: 'rgba(0,207,255,0.3)', color: 'var(--neon2)' }}>
          // system_architect.mode = activated
        </div>
        <h1>DESIGN THE<br />SYSTEM</h1>
        <p className="hero-sub">
          You already know <span style={{ color: 'var(--neon2)' }}>how to code</span>. Now prove you can design systems that serve <span style={{ color: 'var(--neon2)' }}>millions</span>. 10 problems. ELI5. Interview-ready.
        </p>
        <div className="stats-row">
          <div className="stat">
            <span className="stat-num" style={{ color: 'var(--neon2)' }}>10</span>
            <span className="stat-label">Problems</span>
          </div>
          <div className="stat">
            <span className="stat-num" style={{ color: 'var(--neon2)' }}>7</span>
            <span className="stat-label">Patterns</span>
          </div>
          <div className="stat">
            <span className="stat-num" style={{ color: 'var(--neon2)' }}>{studiedCount}</span>
            <span className="stat-label">Studied</span>
          </div>
        </div>
        <div className="cta-row">
          <a href="#sd-problems" className="btn btn-primary" style={{ background: 'var(--neon2)' }}>Start Designing</a>
          <a href="#sd-patterns" className="btn btn-secondary" style={{ color: 'var(--neon2)', borderColor: 'var(--neon2)' }}>Learn Patterns First</a>
        </div>
      </div>
      <div className="sd-ticker">
        <span className="sd-ticker-inner">
          ★ URL SHORTENER ★ DROPBOX ★ TICKETMASTER ★ NEWS FEED ★ WHATSAPP ★ RATE LIMITER ★ INSTAGRAM ★ UBER ★ YOUTUBE ★ GOOGLE DOCS ★ CACHING ★ SHARDING ★ LOAD BALANCING ★ WEBSOCKETS ★ CDN ★ MICROSERVICES ★ THINK BIG ★
        </span>
      </div>
    </>
  );
}
