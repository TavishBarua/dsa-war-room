import { FlowchartData } from '../data/types';

export function hexToRgb(hex: string): string {
  hex = hex.replace('#', '');
  return [parseInt(hex.substr(0,2),16), parseInt(hex.substr(2,2),16), parseInt(hex.substr(4,2),16)].join(',');
}

export function renderFlowchart(fc: FlowchartData, accent: string, patternIdx: number): string {
  const W = 580, H = 260;
  const mid = accent.replace('#','') + '_' + patternIdx;
  let svg = `<svg viewBox="0 0 ${W} ${H}" style="max-height:260px;width:100%">`;
  svg += `<defs><marker id="arr-${mid}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${accent}"/></marker>`;
  svg += `<marker id="arr-g-${mid}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#00ff88"/></marker>`;
  svg += `<marker id="arr-r-${mid}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ff4d6d"/></marker></defs>`;
  svg += `<rect width="${W}" height="${H}" fill="#0e1018" rx="8"/>`;

  const nodeMap: Record<string, FlowchartData['nodes'][number]> = {};
  fc.nodes.forEach(n => { nodeMap[n.id] = n; });

  // Edges
  fc.edges.forEach(e => {
    const from = nodeMap[e.from], to = nodeMap[e.to];
    if (!from || !to) return;
    const isYes = e.label === 'YES' || e.label === 'Y';
    const isNo = e.label === 'NO' || e.label === 'N';
    const edgeColor = isYes ? '#00ff88' : isNo ? '#ff4d6d' : accent;
    const markerId = isYes ? `arr-g-${mid}` : isNo ? `arr-r-${mid}` : `arr-${mid}`;
    const fy = from.type === 'decision' ? from.y + 20 : from.y + 15;
    const ty = to.type === 'decision' ? to.y - 20 : to.y - 15;
    const dx = Math.abs(to.x - from.x);
    if (dx > 10) {
      svg += `<path d="M${from.x},${fy} C${from.x},${fy+20} ${to.x},${ty-20} ${to.x},${ty}" stroke="${edgeColor}" stroke-width="1.5" fill="none" marker-end="url(#${markerId})"/>`;
    } else {
      svg += `<line x1="${from.x}" y1="${fy}" x2="${to.x}" y2="${ty}" stroke="${edgeColor}" stroke-width="1.5" marker-end="url(#${markerId})"/>`;
    }
    if (e.label) {
      const mx = (from.x + to.x) / 2 + (dx > 10 ? 8 : 10);
      const my = (fy + ty) / 2;
      svg += `<text x="${mx}" y="${my}" fill="${edgeColor}" font-size="9" font-family="Space Mono, monospace" font-weight="bold">${e.label}</text>`;
    }
  });

  // Nodes
  fc.nodes.forEach(n => {
    const rgb = hexToRgb(accent);
    if (n.type === 'decision') {
      svg += `<g transform="translate(${n.x},${n.y})"><polygon points="0,-20 60,0 0,20 -60,0" fill="rgba(255,215,0,0.08)" stroke="#ffd600" stroke-width="1.5"/><text x="0" y="4" fill="#ffd600" text-anchor="middle" font-size="9" font-family="Space Mono, monospace">${n.label}</text></g>`;
    } else {
      const rw = Math.max(n.label.length * 7.5 + 16, 80);
      const rh = 28;
      const isEnd = n.type === 'end';
      const isStart = n.type === 'start';
      const fill = isEnd ? 'rgba(0,255,136,0.12)' : isStart ? 'rgba('+rgb+',0.15)' : '#1a1d2e';
      const stroke = isEnd ? '#00ff88' : isStart ? accent : '#4a5268';
      const sw = isEnd ? 2 : 1.5;
      const rx = (isStart || isEnd) ? 14 : 4;
      const textFill = isEnd ? '#00ff88' : isStart ? accent : '#e8eaf0';
      svg += `<rect x="${n.x - rw/2}" y="${n.y - rh/2}" width="${rw}" height="${rh}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" rx="${rx}"/>`;
      svg += `<text x="${n.x}" y="${n.y + 4}" fill="${textFill}" text-anchor="middle" font-size="10" font-family="Space Mono, monospace">${n.label}</text>`;
    }
  });

  svg += '</svg>';
  return svg;
}
