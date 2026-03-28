import { FlowchartData } from '../../data/types';
import { renderFlowchart } from '../../utils/flowchartRenderer';

interface Props {
  flowchart: FlowchartData;
  accent: string;
  index: number;
}

export default function MemFlowchart({ flowchart, accent, index }: Props) {
  const svgHtml = renderFlowchart(flowchart, accent, index);

  return (
    <div className="mem-v2-flowchart" dangerouslySetInnerHTML={{ __html: svgHtml }} />
  );
}
