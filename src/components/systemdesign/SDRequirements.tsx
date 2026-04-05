import { SDRequirements as SDReqType } from '../../data/systemdesign/types';

interface Props {
  requirements: SDReqType;
}

export default function SDRequirements({ requirements }: Props) {
  return (
    <div className="sd-layer">
      <div className="sd-layer-label">// Requirements</div>
      <div className="sd-requirements-grid">
        <div className="sd-req-column functional">
          <h4>Functional</h4>
          <ul className="sd-req-list">
            {requirements.functional.map((r, i) => (
              <li key={i} className="sd-req-item">{r}</li>
            ))}
          </ul>
        </div>
        <div className="sd-req-column non-functional">
          <h4>Non-Functional</h4>
          <ul className="sd-req-list">
            {requirements.nonFunctional.map((r, i) => (
              <li key={i} className="sd-req-item">{r}</li>
            ))}
          </ul>
        </div>
      </div>
      {requirements.outOfScope.length > 0 && (
        <div className="sd-out-of-scope">
          <h4>Out of Scope</h4>
          <ul className="sd-req-list">
            {requirements.outOfScope.map((r, i) => (
              <li key={i} className="sd-req-item">{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
