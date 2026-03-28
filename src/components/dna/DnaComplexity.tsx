import { ComplexityStep } from '../../data/types';

interface Props {
  steps: ComplexityStep[];
  meterWidth?: string;
  accent: string;
}

export default function DnaComplexity({ steps, meterWidth, accent }: Props) {
  return (
    <div className="dna-layer">
      <div className="dna-layer-label">// Complexity Ladder</div>
      <div className="dna-complexity">
        {steps.map((s, i) => (
          <div key={i} className="dna-complexity-row">
            <span className={`dna-badge dna-badge-${s.badge}`}>{s.big}</span>
            <span className="dna-complexity-label">{s.label}</span>
            <span className="dna-complexity-desc">{s.desc}</span>
          </div>
        ))}
        <div className="dna-meter">
          <div
            className="dna-meter-fill"
            style={{
              width: meterWidth || '60%',
              background: `linear-gradient(90deg, ${accent}, ${accent}88)`
            }}
          />
        </div>
      </div>
    </div>
  );
}
