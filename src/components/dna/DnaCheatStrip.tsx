import { CheatStrip } from '../../data/types';

interface Props {
  cheat: CheatStrip;
}

export default function DnaCheatStrip({ cheat }: Props) {
  return (
    <div className="dna-cheat-strip">
      <div className="dna-cheat-item">
        <div className="dna-cheat-label">TRIGGER</div>
        <div className="dna-cheat-value">{cheat.trigger}</div>
      </div>
      <div className="dna-cheat-item">
        <div className="dna-cheat-label">FIRST LINE</div>
        <div className="dna-cheat-value">{cheat.firstLine}</div>
      </div>
      <div className="dna-cheat-item">
        <div className="dna-cheat-label">GOTCHA</div>
        <div className="dna-cheat-value">{cheat.gotcha}</div>
      </div>
      <div className="dna-cheat-item">
        <div className="dna-cheat-label">PITCH</div>
        <div className="dna-cheat-value">{cheat.pitch}</div>
      </div>
      {cheat.snippet && (
        <div className="dna-cheat-snippet">
          <div className="dna-cheat-label">WHY IT WORKS</div>
          <pre><code dangerouslySetInnerHTML={{ __html: cheat.snippet }} /></pre>
        </div>
      )}
    </div>
  );
}
