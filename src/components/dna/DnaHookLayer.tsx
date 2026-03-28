interface Props {
  hook: string;
}

export default function DnaHookLayer({ hook }: Props) {
  return (
    <div className="dna-layer">
      <div className="dna-layer-label">// Explain Like I'm 10</div>
      <div className="dna-hook-text">{hook}</div>
    </div>
  );
}
