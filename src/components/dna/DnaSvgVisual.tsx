interface Props {
  svgMarkup: string;
}

export default function DnaSvgVisual({ svgMarkup }: Props) {
  return (
    <div className="dna-layer">
      <div className="dna-layer-label">// Visual Animation</div>
      <div className="dna-visual" dangerouslySetInnerHTML={{ __html: svgMarkup }} />
    </div>
  );
}
