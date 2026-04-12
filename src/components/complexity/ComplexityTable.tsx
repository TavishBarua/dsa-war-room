import { DNA_EXTRA } from '../../data/dnaExtra';

export default function ComplexityTable() {
  return (
    <section id="complexity-table" style={{ padding: '80px 20px', background: '#0a0c14' }}>
      <div className="section-label">COMPLEXITY CHEAT SHEET</div>
      <h2 className="section-title">TIME & SPACE<br />COMPLEXITIES</h2>
      <p className="section-desc">
        Quick reference for all pattern complexities. Use this to compare approaches and choose the optimal solution.
      </p>

      <div style={{ maxWidth: '1200px', margin: '60px auto 0', overflowX: 'auto' }}>
        <table className="complexity-table">
          <thead>
            <tr>
              <th style={{ width: '40%' }}>Pattern</th>
              <th style={{ width: '30%' }}>Time Complexity</th>
              <th style={{ width: '30%' }}>Space Complexity</th>
            </tr>
          </thead>
          <tbody>
            {DNA_EXTRA.map((pattern, idx) => {
              if (!pattern.complexity || pattern.complexity.length === 0) return null;

              // Find the best (green) complexity
              const bestComplexity = pattern.complexity.find(c => c.badge === 'green') || pattern.complexity[pattern.complexity.length - 1];
              const worstComplexity = pattern.complexity.find(c => c.badge === 'red' || c.badge === 'yellow');

              return (
                <tr key={idx}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '24px' }}>{pattern.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: '#e8eaf0' }}>{pattern.name}</div>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                          {pattern.tagline}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className={`complexity-badge complexity-${bestComplexity.badge}`}>
                          {bestComplexity.big}
                        </span>
                        <span style={{ fontSize: '13px', color: '#9ca3af' }}>
                          {bestComplexity.label}
                        </span>
                      </div>
                      {worstComplexity && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
                          <span className={`complexity-badge complexity-${worstComplexity.badge}`}>
                            {worstComplexity.big}
                          </span>
                          <span style={{ fontSize: '11px', color: '#6b7280' }}>
                            {worstComplexity.label}
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '13px', color: '#9ca3af' }}>
                      {bestComplexity.desc || 'See pattern details'}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style>{`
        .complexity-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #0e1018;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .complexity-table thead {
          background: linear-gradient(135deg, #1a1d2e 0%, #14161f 100%);
        }

        .complexity-table th {
          padding: 20px 24px;
          text-align: left;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #a78bfa;
          border-bottom: 2px solid #1e2230;
        }

        .complexity-table tbody tr {
          transition: all 0.2s ease;
          border-bottom: 1px solid #1a1d2e;
        }

        .complexity-table tbody tr:hover {
          background: rgba(167, 139, 250, 0.05);
          transform: translateX(4px);
        }

        .complexity-table tbody tr:last-child {
          border-bottom: none;
        }

        .complexity-table td {
          padding: 20px 24px;
          color: #e8eaf0;
          font-size: 14px;
        }

        .complexity-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 13px;
          font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
          min-width: 80px;
          text-align: center;
        }

        .complexity-green {
          background: rgba(0, 255, 136, 0.15);
          color: #00ff88;
          border: 1px solid rgba(0, 255, 136, 0.3);
        }

        .complexity-yellow {
          background: rgba(255, 214, 0, 0.15);
          color: #ffd600;
          border: 1px solid rgba(255, 214, 0, 0.3);
        }

        .complexity-red {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 768px) {
          .complexity-table th,
          .complexity-table td {
            padding: 12px 16px;
            font-size: 12px;
          }

          .complexity-badge {
            font-size: 11px;
            padding: 3px 8px;
            min-width: 60px;
          }
        }
      `}</style>
    </section>
  );
}
