export default function AISection() {
  const topics = [
    {
      num: '01',
      icon: '🤖',
      title: 'LLM FUNDAMENTALS',
      color: 'var(--neon)',
      hoverColor: '#00ff88',
      description: 'Transformer architecture, attention mechanisms, GPT vs BERT, tokenization, context windows. Understand how large language models actually work under the hood.',
      tags: 'Transformers • Attention • Tokenization • Training'
    },
    {
      num: '02',
      icon: '📝',
      title: 'PROMPT ENGINEERING',
      color: 'var(--neon2)',
      hoverColor: '#00cfff',
      description: 'Zero-shot, few-shot, chain-of-thought prompting. System prompts, temperature, top-p. Learn to craft prompts that get consistent, high-quality outputs.',
      tags: 'CoT • Few-Shot • System Prompts • Temperature'
    },
    {
      num: '03',
      icon: '📚',
      title: 'RAG (RETRIEVAL AUGMENTED GENERATION)',
      color: '#a78bfa',
      hoverColor: '#a78bfa',
      description: 'Combine LLMs with external knowledge bases. Chunking strategies, semantic search, reranking. Build AI that answers with your data, not just training data.',
      tags: 'Document Chunking • Retrieval • Reranking • Context'
    },
    {
      num: '04',
      icon: '🗄️',
      title: 'VECTOR DATABASES',
      color: 'var(--neon4)',
      hoverColor: '#ffd600',
      description: 'Pinecone, Weaviate, Chroma, FAISS. Store and query embeddings at scale. ANN algorithms, indexing strategies, similarity metrics for semantic search.',
      tags: 'ANN • Cosine Similarity • HNSW • Indexing'
    },
    {
      num: '05',
      icon: '🔢',
      title: 'EMBEDDINGS & SEMANTIC SEARCH',
      color: 'var(--neon)',
      hoverColor: '#00ff88',
      description: 'OpenAI embeddings, sentence transformers, SBERT. Convert text to vectors, measure semantic similarity, build recommendation systems and search engines.',
      tags: 'Text2Vec • SBERT • Similarity • Clustering'
    },
    {
      num: '06',
      icon: '🤝',
      title: 'MCP (MODEL CONTEXT PROTOCOL)',
      color: 'var(--neon2)',
      hoverColor: '#00cfff',
      description: 'Anthropic\'s protocol for connecting AI models to external data sources and tools. Build integrations that extend Claude\'s capabilities with your systems.',
      tags: 'Protocol Design • Tool Use • Integration • Resources'
    },
    {
      num: '07',
      icon: '🔄',
      title: 'A2A (AGENT-TO-AGENT)',
      color: 'var(--neon3)',
      hoverColor: '#ff4d6d',
      description: 'Multi-agent systems where AI agents communicate and collaborate. Coordination protocols, message passing, collective intelligence, swarm behaviors.',
      tags: 'Multi-Agent • Communication • Coordination • Swarm'
    },
    {
      num: '08',
      icon: '⚡',
      title: 'AI AGENTS & WORKFLOWS',
      color: '#a78bfa',
      hoverColor: '#a78bfa',
      description: 'ReAct, LangChain, AutoGPT, BabyAGI. Build autonomous agents that plan, act, and learn. Tool use, memory systems, task decomposition, reflection loops.',
      tags: 'ReAct • LangChain • Tools • Memory • Planning'
    },
    {
      num: '09',
      icon: '🎯',
      title: 'FINE-TUNING & TRAINING',
      color: 'var(--neon4)',
      hoverColor: '#ffd600',
      description: 'LoRA, QLoRA, PEFT, RLHF. Adapt pre-trained models to your specific tasks. Supervised fine-tuning, instruction tuning, preference alignment.',
      tags: 'LoRA • QLoRA • RLHF • SFT • PEFT'
    },
    {
      num: '10',
      icon: '🔐',
      title: 'AI SAFETY & ALIGNMENT',
      color: 'var(--neon3)',
      hoverColor: '#ff4d6d',
      description: 'Constitutional AI, RLHF, red-teaming, jailbreak prevention. Build AI systems that are helpful, harmless, and honest. Ethics, bias, fairness.',
      tags: 'Alignment • Constitutional AI • Red Team • Ethics'
    },
    {
      num: '11',
      icon: '🔌',
      title: 'LLM APIs & DEPLOYMENT',
      color: 'var(--neon)',
      hoverColor: '#00ff88',
      description: 'OpenAI API, Anthropic API, streaming responses, rate limits, cost optimization. Production deployment, monitoring, caching, fallback strategies.',
      tags: 'API Integration • Streaming • Monitoring • Cost'
    },
    {
      num: '12',
      icon: '🎨',
      title: 'MULTIMODAL AI',
      color: 'var(--neon2)',
      hoverColor: '#00cfff',
      description: 'GPT-4V, DALL-E, Stable Diffusion, Whisper. Vision transformers, image generation, text-to-image, speech recognition. Models that understand multiple modalities.',
      tags: 'Vision • Image Gen • Speech • Cross-Modal'
    }
  ];

  return (
    <section id="ai-concepts" style={{
      background: 'linear-gradient(180deg, var(--bg) 0%, #0a0c14 100%)',
      padding: '80px 20px',
      marginTop: '40px'
    }}>
      <div className="section-label" style={{ textAlign: 'center' }}>05 — AI Knowledge Base</div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>AI MASTERY<br/>GUIDE</h2>
      <p className="section-desc" style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 60px'
      }}>
        From LLMs to RAG, from MCP to A2A — understand the AI landscape that's reshaping software engineering. Master the concepts, tools, and architectures that matter in 2026.
      </p>

      {/* AI CONCEPTS DIAGRAM */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 80px',
        padding: '40px',
        background: 'var(--bg2)',
        border: '2px solid var(--border)',
        borderRadius: '12px',
        position: 'relative'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '32px',
            letterSpacing: '3px',
            background: 'linear-gradient(135deg, var(--neon), var(--neon2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            AI ECOSYSTEM MAP
          </div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: 'var(--muted)',
            letterSpacing: '2px',
            marginTop: '8px'
          }}>
            // HOW IT ALL CONNECTS
          </div>
        </div>

        {/* SVG Diagram */}
        <svg viewBox="0 0 1000 700" style={{
          width: '100%',
          height: 'auto',
          filter: 'drop-shadow(0 0 20px rgba(0,255,136,0.1))'
        }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00ff88', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#00cfff', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00cfff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ff4d6d', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines */}
          <line x1="500" y1="80" x2="200" y2="200" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="500" y1="80" x2="500" y2="200" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="500" y1="80" x2="800" y2="200" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>

          <line x1="200" y1="240" x2="200" y2="350" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="500" y1="240" x2="350" y2="350" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="500" y1="240" x2="650" y2="350" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="800" y1="240" x2="800" y2="350" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>

          <line x1="200" y1="390" x2="300" y2="500" stroke="url(#grad3)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="350" y1="390" x2="400" y2="500" stroke="url(#grad3)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="650" y1="390" x2="600" y2="500" stroke="url(#grad3)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="800" y1="390" x2="700" y2="500" stroke="url(#grad3)" strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>

          <line x1="350" y1="540" x2="500" y2="620" stroke="#00ff88" strokeWidth="3" opacity="0.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="650" y1="540" x2="500" y2="620" stroke="#00ff88" strokeWidth="3" opacity="0.5" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </line>

          {/* Top Layer: Foundation */}
          <g filter="url(#glow)">
            <rect x="400" y="40" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad1)" strokeWidth="2"/>
            <text x="500" y="65" textAnchor="middle" fill="#00ff88" fontFamily="'Bebas Neue', sans-serif" fontSize="20">🤖 LLM CORE</text>
            <text x="500" y="90" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="10">Foundation Models</text>
          </g>

          {/* Second Layer: Key Technologies */}
          <g filter="url(#glow)">
            <rect x="100" y="200" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad1)" strokeWidth="2"/>
            <text x="200" y="225" textAnchor="middle" fill="#00cfff" fontFamily="'Bebas Neue', sans-serif" fontSize="18">📝 Prompting</text>
            <text x="200" y="245" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Zero/Few-Shot</text>
          </g>

          <g filter="url(#glow)">
            <rect x="400" y="200" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad1)" strokeWidth="2"/>
            <text x="500" y="225" textAnchor="middle" fill="#00cfff" fontFamily="'Bebas Neue', sans-serif" fontSize="18">🎯 Fine-Tuning</text>
            <text x="500" y="245" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">LoRA, QLoRA, PEFT</text>
          </g>

          <g filter="url(#glow)">
            <rect x="700" y="200" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad1)" strokeWidth="2"/>
            <text x="800" y="225" textAnchor="middle" fill="#00cfff" fontFamily="'Bebas Neue', sans-serif" fontSize="18">🔢 Embeddings</text>
            <text x="800" y="245" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Semantic Search</text>
          </g>

          {/* Third Layer: Advanced Patterns */}
          <g filter="url(#glow)">
            <rect x="100" y="350" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad2)" strokeWidth="2"/>
            <text x="200" y="375" textAnchor="middle" fill="#a78bfa" fontFamily="'Bebas Neue', sans-serif" fontSize="18">📚 RAG</text>
            <text x="200" y="395" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Retrieval Gen</text>
          </g>

          <g filter="url(#glow)">
            <rect x="250" y="350" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad2)" strokeWidth="2"/>
            <text x="350" y="375" textAnchor="middle" fill="#a78bfa" fontFamily="'Bebas Neue', sans-serif" fontSize="18">🗄️ Vector DBs</text>
            <text x="350" y="395" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Pinecone, Weaviate</text>
          </g>

          <g filter="url(#glow)">
            <rect x="550" y="350" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad2)" strokeWidth="2"/>
            <text x="650" y="375" textAnchor="middle" fill="#a78bfa" fontFamily="'Bebas Neue', sans-serif" fontSize="18">🤝 MCP</text>
            <text x="650" y="395" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Model Context</text>
          </g>

          <g filter="url(#glow)">
            <rect x="700" y="350" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad2)" strokeWidth="2"/>
            <text x="800" y="375" textAnchor="middle" fill="#a78bfa" fontFamily="'Bebas Neue', sans-serif" fontSize="18">🔐 Safety</text>
            <text x="800" y="395" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Alignment & Ethics</text>
          </g>

          {/* Fourth Layer: Application Layer */}
          <g filter="url(#glow)">
            <rect x="200" y="500" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad3)" strokeWidth="2"/>
            <text x="300" y="525" textAnchor="middle" fill="#ff4d6d" fontFamily="'Bebas Neue', sans-serif" fontSize="18">🔄 A2A</text>
            <text x="300" y="545" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Agent-to-Agent</text>
          </g>

          <g filter="url(#glow)">
            <rect x="500" y="500" width="200" height="70" rx="8" fill="var(--bg3)" stroke="url(#grad3)" strokeWidth="2"/>
            <text x="600" y="525" textAnchor="middle" fill="#ff4d6d" fontFamily="'Bebas Neue', sans-serif" fontSize="18">⚡ Agents</text>
            <text x="600" y="545" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="9">Autonomous AI</text>
          </g>

          {/* Bottom: Production */}
          <g filter="url(#glow)">
            <rect x="350" y="620" width="300" height="60" rx="8" fill="var(--bg3)" stroke="#00ff88" strokeWidth="3"/>
            <text x="500" y="645" textAnchor="middle" fill="#00ff88" fontFamily="'Bebas Neue', sans-serif" fontSize="22">🚀 PRODUCTION AI</text>
            <text x="500" y="665" textAnchor="middle" fill="var(--muted)" fontFamily="'Space Mono', monospace" fontSize="10">DEPLOYMENT & MONITORING</text>
          </g>
        </svg>

        {/* Legend */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: 'linear-gradient(90deg, #00ff88, #00cfff)',
              borderRadius: '2px'
            }}></div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>FOUNDATION</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: 'linear-gradient(90deg, #00cfff, #a78bfa)',
              borderRadius: '2px'
            }}></div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>ADVANCED</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: 'linear-gradient(90deg, #a78bfa, #ff4d6d)',
              borderRadius: '2px'
            }}></div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>APPLICATION</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: '#00ff88',
              borderRadius: '2px'
            }}></div>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>PRODUCTION</span>
          </div>
        </div>
      </div>

      {/* AI TOPICS GRID */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {topics.map((topic, index) => (
          <div
            key={index}
            className="mcard"
            data-num={topic.num}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '24px',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = topic.hoverColor;
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="mcard-icon" style={{ fontSize: '48px', marginBottom: '16px' }}>{topic.icon}</div>
            <div className="mcard-title" style={{
              color: topic.color,
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '12px',
              fontFamily: "'Space Mono', monospace"
            }}>{topic.title}</div>
            <div className="mcard-text" style={{
              color: 'var(--text)',
              lineHeight: '1.6',
              fontSize: '14px'
            }}>
              {topic.description}
              <div style={{
                marginTop: '12px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border)',
                fontSize: '12px',
                color: 'var(--muted)',
                fontFamily: "'Space Mono', monospace"
              }}>
                Topics: {topic.tags}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
