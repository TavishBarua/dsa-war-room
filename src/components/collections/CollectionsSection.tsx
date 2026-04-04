import { useState } from 'react';
import { COLLECTIONS_CHEAT_SHEET, QUICK_REFERENCE } from '../../data/collectionsCheatSheet';

const collectionIcons: Record<string, string> = {
  'String': '📝',
  'ArrayList': '📦',
  'HashSet': '🎯',
  'HashMap': '🗺️',
  'Stack': '📚',
  'Queue (LinkedList)': '🚶',
  'Deque (ArrayDeque)': '↔️',
  'PriorityQueue (Heap)': '⭐',
  'Arrays & Collections': '🔢'
};

export default function CollectionsSection() {
  const [selectedCollection, setSelectedCollection] = useState(0);
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null);
  const collection = COLLECTIONS_CHEAT_SHEET[selectedCollection];

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
            <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Developer's Best Friend</span>
          </div>
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4 animate-gradient">
            📚 Collections Cheat Sheet
          </h2>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Your <span className="text-yellow-400 font-semibold">instant reference</span> for all data structures.
            <span className="block mt-2 text-slate-400">80+ methods • Time complexity • Real examples</span>
          </p>
        </div>

        {/* Quick Reference Cards - Enhanced */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">Set vs Map</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-900/70 rounded-lg p-3 border-l-4 border-green-500">
                <div className="font-mono text-green-400 font-bold mb-1">Set</div>
                <div className="text-slate-300 text-sm leading-relaxed">{QUICK_REFERENCE.setVsMap.Set}</div>
              </div>
              <div className="bg-slate-900/70 rounded-lg p-3 border-l-4 border-blue-500">
                <div className="font-mono text-blue-400 font-bold mb-1">Map</div>
                <div className="text-slate-300 text-sm leading-relaxed">{QUICK_REFERENCE.setVsMap.Map}</div>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-purple-400">Add vs Set</h3>
            </div>
            <div className="space-y-2">
              {Object.entries(QUICK_REFERENCE.addVsSet).map(([key, value]) => (
                <div key={key} className="bg-slate-900/70 rounded-lg p-2.5 hover:bg-slate-900 transition-colors">
                  <div className="font-mono text-purple-400 text-sm font-semibold">{key}</div>
                  <div className="text-slate-400 text-xs mt-1">→ {value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Collection Selector - Enhanced with Icons */}
        <div className="mb-12">
          <h3 className="text-center text-slate-400 text-sm font-semibold tracking-wider uppercase mb-6">
            Select Collection
          </h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
            {COLLECTIONS_CHEAT_SHEET.map((col, idx) => (
              <button
                key={col.name}
                onClick={() => {
                  setSelectedCollection(idx);
                  setExpandedMethod(null);
                }}
                className={`group relative px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCollection === idx
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:scale-105 hover:shadow-lg'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{collectionIcons[col.name] || '📌'}</span>
                  <span className="text-sm">{col.name}</span>
                </span>
                {selectedCollection === idx && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Collection Details - Enhanced */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl animate-fade-in">
          {/* Collection Header - Enhanced */}
          <div className="mb-8 pb-6 border-b border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl">
                {collectionIcons[collection.name] || '📌'}
              </div>
              <div>
                <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {collection.name}
                </h3>
                <p className="text-slate-400 mt-1">{collection.description}</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-600 rounded-xl p-4 font-mono text-sm shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-400 font-semibold">💡 Declaration</span>
              </div>
              <code className="text-green-400 leading-relaxed block">{collection.declaration}</code>
            </div>
          </div>

          {/* Methods - Accordion Style */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-xl">⚙️</span>
              </div>
              <h4 className="text-2xl font-bold text-yellow-400">Methods Reference</h4>
              <span className="ml-auto text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                {collection.methods.length} methods
              </span>
            </div>
            <div className="space-y-3">
              {collection.methods.map((method, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-600 hover:border-blue-500/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <button
                    onClick={() => setExpandedMethod(expandedMethod === idx ? null : idx)}
                    className="w-full p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 font-bold text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-mono text-blue-400 font-bold text-lg">
                          {method.method}
                        </div>
                        <div className="text-slate-400 text-sm mt-0.5">{method.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {method.timeComplexity && (
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-mono rounded-full border border-orange-500/30">
                          {method.timeComplexity}
                        </span>
                      )}
                      <svg
                        className={`w-5 h-5 text-slate-400 transition-transform ${
                          expandedMethod === idx ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {expandedMethod === idx && (
                    <div className="px-4 pb-4 border-t border-slate-700 pt-4 animate-fade-in bg-slate-900/30">
                      <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-3 shadow-inner">
                        <div className="text-xs text-pink-400 font-semibold mb-2 flex items-center gap-2">
                          <span>💻</span> Example
                        </div>
                        <pre className="text-sm text-green-300 whitespace-pre-wrap font-mono leading-relaxed">
                          {method.example}
                        </pre>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                          <span className="text-purple-400 font-semibold">Returns:</span>
                          <span className="text-slate-300 ml-2">{method.returns}</span>
                        </div>
                        {method.timeComplexity && (
                          <div className="flex-1 bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                            <span className="text-orange-400 font-semibold">Time:</span>
                            <span className="text-slate-300 ml-2">{method.timeComplexity}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Common Patterns - Enhanced */}
          {collection.commonPatterns && collection.commonPatterns.length > 0 && (
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-xl">💡</span>
                </div>
                <h4 className="text-2xl font-bold text-green-400">Common Patterns</h4>
              </div>
              <div className="grid gap-3">
                {collection.commonPatterns.map((pattern, idx) => (
                  <div
                    key={idx}
                    className="group bg-slate-900/50 hover:bg-slate-900/70 border border-slate-700 hover:border-green-500/50 rounded-lg p-4 transition-all duration-200 hover:scale-[1.01]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-lg mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity">
                        ▸
                      </span>
                      <code className="text-sm text-slate-200 font-mono leading-relaxed flex-1">
                        {pattern}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Check Existence Reference - Enhanced */}
        <div className="mt-12 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-cyan-900/40 border border-purple-500/40 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
              <span className="text-3xl">🔍</span>
            </div>
            <div>
              <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Quick Lookup
              </h4>
              <p className="text-slate-400 text-sm mt-1">Check if element exists - Know the difference!</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(QUICK_REFERENCE.checkExistence).map(([method, desc]) => (
              <div
                key={method}
                className="group bg-slate-900/60 hover:bg-slate-900/80 border border-slate-700 hover:border-cyan-500/50 rounded-xl p-4 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="font-mono text-cyan-400 font-bold mb-2 text-sm">{method}</div>
                <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
