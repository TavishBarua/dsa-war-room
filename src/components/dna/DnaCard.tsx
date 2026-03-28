import { DnaPattern } from '../../data/types';
import { useMemorizedContext } from '../../context/MemorizedContext';
import DnaHookLayer from './DnaHookLayer';
import DnaSvgVisual from './DnaSvgVisual';
import DnaComplexity from './DnaComplexity';
import DnaCodeTabs from './DnaCodeTabs';
import DnaMemoryHack from './DnaMemoryHack';
import DnaCheatStrip from './DnaCheatStrip';

interface Props {
  pattern: DnaPattern;
  index: number;
  isActive: boolean;
  onToggle: () => void;
}

export default function DnaCard({ pattern, index, isActive, onToggle }: Props) {
  const { memorized, toggleMemorized } = useMemorizedContext();
  const isMemorized = !!memorized[String(index)];

  return (
    <div
      className={`dna-card${isActive ? ' active' : ''}`}
      style={{ '--accent': pattern.accent } as React.CSSProperties}
    >
      <div className="dna-card-header" onClick={onToggle}>
        <div className="dna-accent-bar" />
        <div className="dna-icon">{pattern.icon}</div>
        <div className="dna-header-info">
          <div className="dna-card-name">{pattern.name}</div>
          <div className="dna-card-tagline">{pattern.tagline}</div>
        </div>
        <button
          className={`dna-memorize-btn${isMemorized ? ' memorized' : ''}`}
          onClick={(e) => { e.stopPropagation(); toggleMemorized(index); }}
        >
          {isMemorized ? '✓ MEMORIZED' : '☐ MEMORIZE'}
        </button>
        <span className="dna-chevron">▶</span>
      </div>
      <div className="dna-card-body">
        <DnaHookLayer hook={pattern.hook} />
        <DnaSvgVisual svgMarkup={pattern.svg} />
        <DnaComplexity steps={pattern.complexity} meterWidth={pattern.meterWidth} accent={pattern.accent} />
        <DnaCodeTabs code={pattern.code} index={index} accent={pattern.accent} />
        <DnaMemoryHack memoryHack={pattern.memoryHack} accent={pattern.accent} index={index} />
        <DnaCheatStrip cheat={pattern.cheat} />
      </div>
    </div>
  );
}
