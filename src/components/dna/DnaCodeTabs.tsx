import { useState, useCallback } from 'react';

interface Props {
  code: { java: string; python: string; csharp: string };
  index: number;
  accent: string;
}

const TABS: { key: 'java' | 'python' | 'csharp'; label: string }[] = [
  { key: 'java', label: 'Java' },
  { key: 'python', label: 'Python' },
  { key: 'csharp', label: 'C#' },
];

export default function DnaCodeTabs({ code, index, accent }: Props) {
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'csharp'>('java');

  const handleCopy = useCallback(() => {
    const text = code[activeTab].replace(/<[^>]*>/g, '');
    navigator.clipboard.writeText(text);
  }, [code, activeTab]);

  return (
    <div className="dna-layer" style={{ padding: 0 }}>
      <div className="dna-code-tabs" style={{ '--accent': accent } as React.CSSProperties}>
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`dna-tab${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
        <button className="dna-copy-btn" onClick={handleCopy}>
          COPY
        </button>
      </div>
      {TABS.map(tab => (
        <div
          key={tab.key}
          className={`dna-code-panel${activeTab === tab.key ? ' active' : ''}`}
          id={`dna-code-${index}-${tab.key}`}
        >
          <pre className="dna-code">
            <code dangerouslySetInnerHTML={{ __html: code[tab.key] }} />
          </pre>
        </div>
      ))}
    </div>
  );
}
