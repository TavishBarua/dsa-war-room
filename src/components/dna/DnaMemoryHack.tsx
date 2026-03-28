import { useState } from 'react';
import { MemoryHack } from '../../data/types';
import MemFlowchart from './MemFlowchart';
import MemCodeWalk from './MemCodeWalk';
import MemStateTrace from './MemStateTrace';
import MemVariations from './MemVariations';

interface Props {
  memoryHack: MemoryHack;
  accent: string;
  index: number;
}

const MEM_TABS = [
  { key: 'flowchart', label: 'Flowchart' },
  { key: 'codewalk', label: 'Code Walk' },
  { key: 'states', label: 'State Trace' },
  { key: 'variations', label: 'Variations' },
] as const;

type MemTabKey = typeof MEM_TABS[number]['key'];

export default function DnaMemoryHack({ memoryHack, accent, index }: Props) {
  const [activeTab, setActiveTab] = useState<MemTabKey>('flowchart');

  return (
    <div className="dna-layer">
      <div className="dna-layer-label">// Memory Hack</div>

      {/* V1 - Mnemonic */}
      <div className="dna-memory-hack" style={{ '--accent': accent } as React.CSSProperties}>
        <div className="dna-memory-hack-header">
          <span className="dna-memory-hack-badge">MEMORY HACK</span>
          <span className="dna-memory-hack-title">{memoryHack.title}</span>
        </div>
        <div
          className="dna-memory-mnemonic"
          dangerouslySetInnerHTML={{ __html: memoryHack.mnemonic }}
        />
        <div className="dna-memory-steps">
          {memoryHack.steps.map((step, i) => (
            <div key={i} className="dna-memory-step">
              <span className="step-num">{i + 1}.</span> {step}
            </div>
          ))}
        </div>
        <div className="dna-memory-why">{memoryHack.why}</div>
      </div>

      {/* V2 - Visual Recipe */}
      <div className="mem-v2" style={{ '--accent': accent } as React.CSSProperties}>
        <div className="mem-v2-sentence">{memoryHack.oneSentence}</div>
        <div className="mem-v2-tabs">
          {MEM_TABS.map(tab => (
            <button
              key={tab.key}
              className={`mem-v2-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={`mem-v2-panel${activeTab === 'flowchart' ? ' active' : ''}`}>
          <MemFlowchart flowchart={memoryHack.flowchart} accent={accent} index={index} />
        </div>
        <div className={`mem-v2-panel${activeTab === 'codewalk' ? ' active' : ''}`}>
          <MemCodeWalk lines={memoryHack.annotatedCode} />
        </div>
        <div className={`mem-v2-panel${activeTab === 'states' ? ' active' : ''}`}>
          <MemStateTrace snapshots={memoryHack.stateSnapshots} />
        </div>
        <div className={`mem-v2-panel${activeTab === 'variations' ? ' active' : ''}`}>
          <MemVariations variations={memoryHack.variations} />
        </div>
      </div>
    </div>
  );
}
