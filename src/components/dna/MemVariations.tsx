import { Variation } from '../../data/types';

interface Props {
  variations: Variation[];
}

export default function MemVariations({ variations }: Props) {
  return (
    <div className="mem-v2-variations">
      {variations.map((v, i) => (
        <div key={i} className="mem-v2-var-card">
          <div className="mem-v2-var-name">{v.name}</div>
          <div className="mem-v2-var-desc">{v.desc}</div>
          <div className="mem-v2-var-problem">{v.problem}</div>
        </div>
      ))}
    </div>
  );
}
