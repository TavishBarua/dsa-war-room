import { useProgressContext } from '../../context/ProgressContext';

export default function ProgressBar() {
  const { doneCount, percentage } = useProgressContext();

  return (
    <div className="progress-section">
      <span className="progress-label">MISSION PROGRESS</span>
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="progress-count">{doneCount} / 150</span>
    </div>
  );
}
