import { useState } from 'react';
import { SDDeepDive as SDDeepDiveType } from '../../data/systemdesign/types';

interface Props {
  deepDives: SDDeepDiveType[];
}

export default function SDDeepDive({ deepDives }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="sd-layer">
      <div className="sd-layer-label">// Deep Dives</div>
      <div className="sd-deepdives">
        {deepDives.map((dd, i) => (
          <div key={i} className={`sd-deepdive${openIdx === i ? ' open' : ''}`}>
            <div className="sd-deepdive-header" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              <span className="sd-deepdive-chevron">▶</span>
              {dd.title}
            </div>
            <div className="sd-deepdive-body">
              <div className="sd-deepdive-content">
                {dd.explanation}
                {dd.svgDiagram && (
                  <div
                    className="sd-diagram"
                    style={{ marginTop: 16 }}
                    dangerouslySetInnerHTML={{ __html: dd.svgDiagram }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
