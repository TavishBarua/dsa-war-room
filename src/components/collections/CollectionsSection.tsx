import { useState } from 'react';
import { COLLECTIONS_CHEAT_SHEET, QUICK_REFERENCE } from '../../data/collectionsCheatSheet';

const collectionIcons: Record<string, string> = {
  'String': '📝', 'ArrayList': '📦', 'HashSet': '🎯', 'HashMap': '🗺️',
  'Stack': '📚', 'Queue (LinkedList)': '🚶', 'Deque (ArrayDeque)': '↔️',
  'PriorityQueue (Heap)': '⭐', 'Arrays & Collections': '🔢'
};

export default function CollectionsSection() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const col = COLLECTIONS_CHEAT_SHEET[selected];

  return (
    <section id="collections">
      <div className="section-label">06 — Collections Reference</div>
      <h2 className="section-title">JAVA COLLECTIONS<br />CHEAT SHEET</h2>
      <p className="section-desc">
        Your instant reference for all Java data structures used in the 150 problems.
        70+ methods with syntax, examples, and time complexity.
      </p>

      {/* Quick Reference Cards */}
      <div className="coll-quick-grid">
        <div className="coll-quick-card">
          <div className="coll-quick-label">🎯 HashSet vs HashMap</div>
          {Object.entries(QUICK_REFERENCE.setVsMap).map(([key, value]) => (
            <div className="coll-quick-row" key={key}>
              <div className="coll-quick-key">{key}</div>
              <div className="coll-quick-val">{value}</div>
            </div>
          ))}
        </div>

        <div className="coll-quick-card">
          <div className="coll-quick-label">⚡ add() vs put()</div>
          {Object.entries(QUICK_REFERENCE.addVsSet).map(([key, value]) => (
            <div className="coll-quick-row" key={key}>
              <div className="coll-quick-key">{key}</div>
              <div className="coll-quick-val">→ {value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Collection Filter Buttons */}
      <div className="coll-filters">
        {COLLECTIONS_CHEAT_SHEET.map((c, idx) => (
          <button
            key={c.name}
            className={`filter-btn${selected === idx ? ' active' : ''}`}
            onClick={() => { setSelected(idx); setExpanded(null); }}
          >
            {collectionIcons[c.name] || '📌'} {c.name}
          </button>
        ))}
      </div>

      {/* Collection Detail Panel */}
      <div className="coll-detail">
        {/* Header */}
        <div className="coll-detail-header">
          <div className="coll-detail-icon">{collectionIcons[col.name] || '📌'}</div>
          <div>
            <div className="coll-detail-name">{col.name}</div>
            <div className="coll-detail-desc">{col.description}</div>
          </div>
        </div>

        {/* Declaration */}
        <div className="coll-declaration">
          <div className="coll-declaration-label">Declaration</div>
          {col.declaration}
        </div>

        {/* Methods Header */}
        <div className="coll-methods-header">
          <div className="coll-methods-title">Methods</div>
          <div className="coll-methods-count">{col.methods.length} methods</div>
        </div>

        {/* Method Rows */}
        {col.methods.map((method, idx) => (
          <div className="coll-method" key={idx}>
            <button
              className="coll-method-row"
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <div className="coll-method-num">{String(idx + 1).padStart(2, '0')}</div>
              <div className="coll-method-name">{method.method}</div>
              <div className="coll-method-desc">{method.description}</div>
              {method.timeComplexity && (
                <div className="coll-method-badge">{method.timeComplexity}</div>
              )}
              <svg className={`coll-method-chevron${expanded === idx ? ' open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`coll-method-body${expanded === idx ? ' open' : ''}`}>
              <div className="coll-method-content">
                <div className="coll-method-example">
                  <div className="coll-method-example-label">Example</div>
                  <pre>{method.example}</pre>
                </div>
                <div className="coll-method-meta">
                  <div className="coll-method-meta-item">
                    <div className="coll-method-meta-label">Returns</div>
                    <div className="coll-method-meta-val">{method.returns}</div>
                  </div>
                  {method.timeComplexity && (
                    <div className="coll-method-meta-item">
                      <div className="coll-method-meta-label">Time</div>
                      <div className="coll-method-meta-val">{method.timeComplexity}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Common Patterns */}
        {col.commonPatterns && col.commonPatterns.length > 0 && (
          <div className="coll-patterns">
            <div className="coll-patterns-title">Common Patterns</div>
            {col.commonPatterns.map((pattern, idx) => (
              <div className="coll-pattern-item" key={idx}>{pattern}</div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Lookup */}
      <div className="coll-lookup">
        <div className="section-label">Quick Lookup — Check if Element Exists</div>
        <div className="coll-lookup-grid">
          {Object.entries(QUICK_REFERENCE.checkExistence).map(([method, desc]) => (
            <div className="coll-lookup-card" key={method}>
              <div className="coll-lookup-method">{method}</div>
              <div className="coll-lookup-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
