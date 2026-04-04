import { useState } from 'react';
import { COLLECTIONS_CHEAT_SHEET, QUICK_REFERENCE } from '../../data/collectionsCheatSheet';

export default function CollectionsSection() {
  const [selectedCollection, setSelectedCollection] = useState(0);
  const collection = COLLECTIONS_CHEAT_SHEET[selectedCollection];

  return (
    <section id="collections" className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            📚 Collections Cheat Sheet
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Quick reference for all data structures used in the 150 problems. Never forget a method again!
          </p>
        </div>

        {/* Quick Reference Cards */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">🎯</span> Set vs Map
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-green-400 font-mono">Set:</span>
                <span className="text-slate-300 ml-2">{QUICK_REFERENCE.setVsMap.Set}</span>
              </div>
              <div>
                <span className="text-blue-400 font-mono">Map:</span>
                <span className="text-slate-300 ml-2">{QUICK_REFERENCE.setVsMap.Map}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
            <h3 className="text-yellow-400 font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">⚡</span> Add vs Set
            </h3>
            <div className="space-y-2 text-sm">
              {Object.entries(QUICK_REFERENCE.addVsSet).map(([key, value]) => (
                <div key={key}>
                  <span className="text-purple-400 font-mono">{key}</span>
                  <span className="text-slate-300 ml-2">→ {value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collection Selector */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {COLLECTIONS_CHEAT_SHEET.map((col, idx) => (
            <button
              key={col.name}
              onClick={() => setSelectedCollection(idx)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCollection === idx
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        {/* Collection Details */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 shadow-2xl">
          {/* Collection Header */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">{collection.name}</h3>
            <p className="text-slate-400 mb-3">{collection.description}</p>
            <div className="bg-slate-900/80 border border-slate-600 rounded-lg p-3 font-mono text-sm">
              <span className="text-pink-400">// Declaration</span>
              <br />
              <span className="text-green-400">{collection.declaration}</span>
            </div>
          </div>

          {/* Methods Table */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
              <span>⚙️</span> Methods
            </h4>
            <div className="space-y-3">
              {collection.methods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="font-mono text-blue-400 font-semibold mb-1">
                        {method.method}
                      </div>
                      <div className="text-slate-300 text-sm mb-2">{method.description}</div>
                      <div className="bg-slate-950 border border-slate-700 rounded p-2 mb-2">
                        <pre className="text-xs text-green-300 whitespace-pre-wrap font-mono">
                          {method.example}
                        </pre>
                      </div>
                      <div className="flex gap-4 text-xs">
                        <span className="text-slate-400">
                          <span className="text-purple-400">Returns:</span> {method.returns}
                        </span>
                        {method.timeComplexity && (
                          <span className="text-slate-400">
                            <span className="text-orange-400">Time:</span> {method.timeComplexity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Patterns */}
          {collection.commonPatterns && collection.commonPatterns.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <span>💡</span> Common Patterns
              </h4>
              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                <ul className="space-y-2">
                  {collection.commonPatterns.map((pattern, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">▸</span>
                      <span className="font-mono">{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Check Existence Reference */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/50 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <span>🔍</span> Quick Lookup: Check if Element Exists
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(QUICK_REFERENCE.checkExistence).map(([method, desc]) => (
              <div key={method} className="bg-slate-900/50 rounded-lg p-3">
                <div className="font-mono text-sm text-cyan-400 mb-1">{method}</div>
                <div className="text-xs text-slate-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
