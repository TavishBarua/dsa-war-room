import { SDProblem } from '../../data/systemdesign/types';
import { useSDProgressContext } from '../../context/SDProgressContext';
import SDOverview from './SDOverview';
import SDRequirements from './SDRequirements';
import SDArchitectureDiagram from './SDArchitectureDiagram';
import SDWalkthrough from './SDWalkthrough';
import SDDeepDive from './SDDeepDive';
import SDBottlenecks from './SDBottlenecks';

interface Props {
  problem: SDProblem;
  isActive: boolean;
  onToggle: () => void;
}

export default function SDProblemCard({ problem, isActive, onToggle }: Props) {
  const { studied, toggleStudied } = useSDProgressContext();
  const isStudied = !!studied[problem.id];

  return (
    <div
      className={`sd-card${isActive ? ' active' : ''}`}
      style={{ '--accent': problem.accent } as React.CSSProperties}
    >
      <div className="sd-card-header" onClick={onToggle}>
        <div className="sd-accent-bar" />
        <div className="sd-icon">{problem.icon}</div>
        <div className="sd-header-info">
          <div className="sd-card-name">
            {problem.name}
            <span className={`sd-diff ${problem.difficulty}`}>{problem.difficulty}</span>
          </div>
          <div className="sd-card-tagline">
            {problem.tags.join(' · ')}
          </div>
        </div>
        <button
          className={`sd-studied-btn${isStudied ? ' studied' : ''}`}
          onClick={(e) => { e.stopPropagation(); toggleStudied(problem.id); }}
        >
          {isStudied ? '✓ STUDIED' : '☐ STUDY'}
        </button>
        <span className="sd-chevron">▶</span>
      </div>
      <div className="sd-card-body">
        <SDOverview
          eli5={problem.eli5}
          interviewPitch={problem.interviewPitch}
          keyNumbers={problem.keyNumbers}
        />
        <SDRequirements requirements={problem.requirements} />
        <SDArchitectureDiagram highLevel={problem.highLevel} />
        <SDWalkthrough
          walkthrough={problem.walkthrough}
          baseSvg={problem.highLevel.svgDiagram}
        />
        <SDDeepDive deepDives={problem.deepDives} />
        <SDBottlenecks bottlenecks={problem.bottlenecks} />
      </div>
    </div>
  );
}
