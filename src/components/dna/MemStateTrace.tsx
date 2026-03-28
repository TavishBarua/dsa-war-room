import { StateSnapshot } from '../../data/types';

interface Props {
  snapshots: StateSnapshot[];
}

export default function MemStateTrace({ snapshots }: Props) {
  return (
    <div className="mem-v2-states">
      {snapshots.map((s, i) => (
        <div key={i} className="mem-v2-state">
          <span className="mem-v2-state-label">{s.label}</span>
          <span className="mem-v2-state-art">{s.art}</span>
          <span className="mem-v2-state-note">{s.annotation}</span>
        </div>
      ))}
    </div>
  );
}
