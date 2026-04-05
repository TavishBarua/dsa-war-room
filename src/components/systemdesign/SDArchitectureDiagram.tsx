import { SDHighLevelDesign } from '../../data/systemdesign/types';

interface Props {
  highLevel: SDHighLevelDesign;
}

export default function SDArchitectureDiagram({ highLevel }: Props) {
  return (
    <div className="sd-layer">
      <div className="sd-layer-label">// High-Level Architecture</div>
      <div
        className="sd-diagram"
        dangerouslySetInnerHTML={{ __html: highLevel.svgDiagram }}
      />
      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>
        {highLevel.dataFlow}
      </p>
      <div className="sd-components-list">
        {highLevel.components.map((c, i) => (
          <div key={i} className="sd-component">
            <span className="sd-component-name">{c.name}</span>
            <span className="sd-component-desc">{c.description}</span>
            <span className="sd-component-tech">{c.techChoices}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
