import { SDKeyNumber } from '../../data/systemdesign/types';

interface Props {
  eli5: string;
  interviewPitch: string;
  keyNumbers: SDKeyNumber[];
}

export default function SDOverview({ eli5, interviewPitch, keyNumbers }: Props) {
  return (
    <div className="sd-layer">
      <div className="sd-layer-label">// Explain Like I'm 10</div>
      <div className="sd-eli5">{eli5}</div>
      <div className="sd-interview-pitch">{interviewPitch}</div>
      {keyNumbers.length > 0 && (
        <div className="sd-numbers-row">
          {keyNumbers.map((n, i) => (
            <div key={i} className="sd-number">
              <span className="sd-number-value">{n.value}</span>
              <span className="sd-number-label">{n.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
