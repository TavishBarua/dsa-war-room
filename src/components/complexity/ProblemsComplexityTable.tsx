import { useState } from 'react';
import { PROBLEM_COMPLEXITIES } from '../../data/problemComplexities';

export default function ProblemsComplexityTable() {
  const [filterPattern, setFilterPattern] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique patterns
  const patterns = ['All', ...Array.from(new Set(PROBLEM_COMPLEXITIES.map(p => p.pattern)))];

  // Filter problems
  const filteredProblems = PROBLEM_COMPLEXITIES.filter(problem => {
    const matchesPattern = filterPattern === 'All' || problem.pattern === filterPattern;
    const matchesSearch = problem.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          problem.number.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPattern && matchesSearch;
  });

  // Get difficulty color
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return '#00ff88';
      case 'Medium': return '#ffd600';
      case 'Hard': return '#ef4444';
      default: return '#9ca3af';
    }
  };

  return (
    <section id="problems-complexity" style={{ padding: '80px 20px', background: '#0a0c14' }}>
      <div className="section-label">ALL 150 PROBLEMS</div>
      <h2 className="section-title">COMPLEXITY<br />REFERENCE</h2>
      <p className="section-desc">
        Complete time & space complexity breakdown for all 150 NeetCode problems.
        Use this as your interview preparation cheat sheet.
      </p>

      {/* Filters */}
      <div style={{ maxWidth: '1400px', margin: '40px auto', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {/* Search */}
        <input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: '1 1 300px',
            padding: '12px 16px',
            background: '#0e1018',
            border: '1px solid #1e2230',
            borderRadius: '8px',
            color: '#e8eaf0',
            fontSize: '14px',
            outline: 'none',
          }}
        />

        {/* Pattern filter */}
        <select
          value={filterPattern}
          onChange={(e) => setFilterPattern(e.target.value)}
          style={{
            padding: '12px 16px',
            background: '#0e1018',
            border: '1px solid #1e2230',
            borderRadius: '8px',
            color: '#e8eaf0',
            fontSize: '14px',
            cursor: 'pointer',
            minWidth: '200px',
          }}
        >
          {patterns.map(pattern => (
            <option key={pattern} value={pattern}>{pattern}</option>
          ))}
        </select>

        <div style={{
          padding: '12px 16px',
          background: 'rgba(167, 139, 250, 0.1)',
          borderRadius: '8px',
          color: '#a78bfa',
          fontSize: '14px',
          fontWeight: 600
        }}>
          {filteredProblems.length} problems
        </div>
      </div>

      {/* Table */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', overflowX: 'auto' }}>
        <table className="problems-complexity-table">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>#</th>
              <th style={{ width: '25%' }}>Problem</th>
              <th style={{ width: '15%' }}>Pattern</th>
              <th style={{ width: '10%' }}>Diff</th>
              <th style={{ width: '15%' }}>Time (Optimal)</th>
              <th style={{ width: '12%' }}>Time (Naive)</th>
              <th style={{ width: '10%' }}>Space</th>
              <th style={{ width: '8%' }}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map((problem, idx) => (
              <tr key={idx}>
                <td style={{ color: '#6b7280', fontFamily: 'monospace', fontSize: '12px' }}>
                  {problem.number}
                </td>
                <td style={{ fontWeight: 600 }}>
                  {problem.name}
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af' }}>
                  {problem.pattern}
                </td>
                <td>
                  <span
                    className="diff-badge"
                    style={{
                      color: getDifficultyColor(problem.difficulty),
                      borderColor: getDifficultyColor(problem.difficulty) + '40'
                    }}
                  >
                    {problem.difficulty}
                  </span>
                </td>
                <td>
                  <code className="complexity-code" style={{ color: '#00ff88' }}>
                    {problem.timeOptimal}
                  </code>
                </td>
                <td>
                  {problem.timeNaive && (
                    <code className="complexity-code" style={{ color: '#ef4444', opacity: 0.7 }}>
                      {problem.timeNaive}
                    </code>
                  )}
                </td>
                <td>
                  <code className="complexity-code" style={{ color: '#a78bfa' }}>
                    {problem.spaceOptimal}
                  </code>
                </td>
                <td>
                  {problem.notes && (
                    <div
                      style={{
                        fontSize: '11px',
                        color: '#6b7280',
                        cursor: 'help',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '100px'
                      }}
                      title={problem.notes}
                    >
                      {problem.notes}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .problems-complexity-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          background: #0e1018;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .problems-complexity-table thead {
          background: linear-gradient(135deg, #1a1d2e 0%, #14161f 100%);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .problems-complexity-table th {
          padding: 16px 12px;
          text-align: left;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #a78bfa;
          border-bottom: 2px solid #1e2230;
        }

        .problems-complexity-table tbody tr {
          transition: all 0.15s ease;
          border-bottom: 1px solid #1a1d2e;
        }

        .problems-complexity-table tbody tr:hover {
          background: rgba(167, 139, 250, 0.05);
          transform: translateX(2px);
        }

        .problems-complexity-table tbody tr:last-child {
          border-bottom: none;
        }

        .problems-complexity-table td {
          padding: 14px 12px;
          color: #e8eaf0;
          font-size: 13px;
        }

        .complexity-code {
          display: inline-block;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.03);
        }

        .diff-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          border: 1px solid;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .problems-complexity-table th,
          .problems-complexity-table td {
            padding: 10px 8px;
            font-size: 11px;
          }

          .complexity-code {
            font-size: 10px;
            padding: 2px 6px;
          }
        }
      `}</style>
    </section>
  );
}
