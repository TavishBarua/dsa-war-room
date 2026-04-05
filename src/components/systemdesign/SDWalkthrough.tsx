import { useState } from 'react';
import { SDWalkthroughStep } from '../../data/systemdesign/types';

interface Props {
  walkthrough: SDWalkthroughStep[];
  baseSvg: string;
}

export default function SDWalkthrough({ walkthrough, baseSvg }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);

  const revealNext = () => {
    if (currentStep < walkthrough.length) {
      setRevealedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  };

  const reset = () => {
    setRevealedSteps([]);
    setCurrentStep(0);
  };

  // Build composite SVG: base diagram + step overlays for revealed steps
  const buildCompositeSvg = (): string => {
    const closingTag = '</svg>';
    const base = baseSvg.replace(closingTag, '');
    const overlays = revealedSteps.map(idx => {
      const step = walkthrough[idx];
      return step.svgHighlight || '';
    }).join('\n');
    return base + '\n' + overlays + '\n' + closingTag;
  };

  return (
    <div className="sd-layer">
      <div className="sd-layer-label">// Step-by-Step Walkthrough</div>
      <div className="sd-walkthrough">
        <div className="sd-walk-diagram">
          <div dangerouslySetInnerHTML={{ __html: buildCompositeSvg() }} />
        </div>
        <div className="sd-steps-panel">
          {walkthrough.map((step, i) => (
            <div
              key={i}
              className={`sd-step${revealedSteps.includes(i) ? ' revealed' : ''}${i === currentStep ? ' current' : ''}`}
            >
              <div className="sd-step-header">
                <span className="sd-step-num">{step.stepNumber}</span>
                <span className="sd-step-title">{step.title}</span>
              </div>
              {revealedSteps.includes(i) && (
                <div className="sd-step-desc">{step.description}</div>
              )}
            </div>
          ))}
          <div className="sd-step-controls">
            <button
              className="btn btn-primary"
              style={{ background: 'var(--neon2)' }}
              onClick={revealNext}
              disabled={currentStep >= walkthrough.length}
            >
              {currentStep >= walkthrough.length ? 'COMPLETE' : 'NEXT STEP'}
            </button>
            <button className="btn btn-secondary" onClick={reset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
