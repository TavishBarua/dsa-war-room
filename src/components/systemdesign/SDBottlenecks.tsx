import { SDBottleneck } from '../../data/systemdesign/types';

interface Props {
  bottlenecks: SDBottleneck[];
}

export default function SDBottlenecks({ bottlenecks }: Props) {
  return (
    <div className="sd-layer">
      <div className="sd-layer-label">// Bottlenecks & Solutions</div>
      <div className="sd-bottlenecks">
        {bottlenecks.map((b, i) => (
          <div key={i} className="sd-bottleneck">
            <div className="sd-bottleneck-problem">{b.problem}</div>
            <div className="sd-bottleneck-solution">{b.solution}</div>
            <span className="sd-bottleneck-pattern">{b.pattern}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
