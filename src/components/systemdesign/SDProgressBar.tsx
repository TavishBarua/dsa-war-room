import { useSDProgressContext } from '../../context/SDProgressContext';

export default function SDProgressBar() {
  const { studiedCount, percentage } = useSDProgressContext();

  return (
    <section style={{ padding: '20px 24px 0', maxWidth: 1200, margin: '0 auto' }}>
      <div className="sd-progress-wrap">
        <span className="sd-progress-text">{studiedCount} / 10 STUDIED</span>
        <div className="sd-progress-bar">
          <div className="sd-progress-fill" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </section>
  );
}
