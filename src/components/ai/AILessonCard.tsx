import { useState } from 'react';

interface AILessonCardProps {
  lesson: {
    id: string;
    title: string;
    duration: string;
    concepts: string[];
    details?: {
      overview: string;
      keyPoints: string[];
      example?: string;
      codeSnippet?: string;
      resources?: string[];
    };
  };
  color: string;
  index: number;
}

export default function AILessonCard({ lesson, color, index }: AILessonCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{
      background: 'var(--bg2)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'all 0.3s'
    }}
    onMouseOver={(e) => {
      if (!isExpanded) {
        e.currentTarget.style.borderColor = color;
      }
    }}
    onMouseOut={(e) => {
      if (!isExpanded) {
        e.currentTarget.style.borderColor = 'var(--border)';
      }
    }}
    >
      {/* Lesson Header - Always Visible */}
      <div
        style={{
          padding: '20px',
          cursor: 'pointer',
          background: isExpanded ? 'var(--bg3)' : 'transparent'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          marginBottom: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flex: 1
          }}>
            {/* Lesson number badge */}
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: isExpanded ? color : 'var(--bg3)',
              border: `2px solid ${color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              fontWeight: '600',
              color: isExpanded ? 'var(--bg)' : color,
              flexShrink: 0
            }}>
              {index + 1}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text)',
                marginBottom: '4px'
              }}>
                {lesson.title}
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px',
                color: color,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>⏱️ {lesson.duration}</span>
                <span style={{ color: 'var(--muted)' }}>•</span>
                <span>{lesson.concepts.length} concepts</span>
              </div>
            </div>
          </div>

          {/* Expand/Collapse indicator */}
          <div style={{
            color: color,
            fontSize: '16px',
            transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
            marginLeft: '12px'
          }}>
            ▶
          </div>
        </div>

        {/* Concepts chips - Always visible */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginLeft: '44px'
        }}>
          {lesson.concepts.map((concept, cidx) => (
            <span key={cidx} style={{
              fontSize: '11px',
              color: 'var(--muted)',
              background: 'var(--bg3)',
              padding: '4px 8px',
              borderRadius: '4px',
              fontFamily: "'Space Mono', monospace",
              border: isExpanded ? `1px solid ${color}` : '1px solid transparent'
            }}>
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && lesson.details && (
        <div style={{
          padding: '0 20px 20px 20px',
          borderTop: `1px solid ${color}`,
          animation: 'fadeIn 0.3s ease-in'
        }}>
          {/* Overview */}
          {lesson.details.overview && (
            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
              <h5 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '16px',
                color: color,
                marginBottom: '12px',
                letterSpacing: '1px'
              }}>
                📖 OVERVIEW
              </h5>
              <p style={{
                color: 'var(--text)',
                fontSize: '14px',
                lineHeight: '1.7',
                marginLeft: '0'
              }}>
                {lesson.details.overview}
              </p>
            </div>
          )}

          {/* Key Points */}
          {lesson.details.keyPoints && lesson.details.keyPoints.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '16px',
                color: color,
                marginBottom: '12px',
                letterSpacing: '1px'
              }}>
                🎯 KEY POINTS
              </h5>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {lesson.details.keyPoints.map((point, idx) => (
                  <li key={idx} style={{
                    color: 'var(--text)',
                    fontSize: '14px',
                    marginBottom: '10px',
                    paddingLeft: '20px',
                    position: 'relative',
                    lineHeight: '1.6'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: color,
                      fontWeight: '600'
                    }}>→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Example */}
          {lesson.details.example && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '16px',
                color: color,
                marginBottom: '12px',
                letterSpacing: '1px'
              }}>
                💡 EXAMPLE
              </h5>
              <div style={{
                background: 'var(--bg)',
                border: `1px solid ${color}`,
                borderRadius: '6px',
                padding: '16px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px',
                color: 'var(--text)',
                lineHeight: '1.6'
              }}>
                {lesson.details.example}
              </div>
            </div>
          )}

          {/* Code Snippet */}
          {lesson.details.codeSnippet && (
            <div style={{ marginBottom: '20px' }}>
              <h5 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '16px',
                color: color,
                marginBottom: '12px',
                letterSpacing: '1px'
              }}>
                💻 CODE EXAMPLE
              </h5>
              <div style={{
                background: '#0d1117',
                border: `1px solid ${color}`,
                borderRadius: '6px',
                padding: '16px',
                overflow: 'auto'
              }}>
                <pre style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  color: '#e6edf3',
                  margin: 0,
                  whiteSpace: 'pre-wrap'
                }}>
                  <code>{lesson.details.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Resources */}
          {lesson.details.resources && lesson.details.resources.length > 0 && (
            <div>
              <h5 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '16px',
                color: color,
                marginBottom: '12px',
                letterSpacing: '1px'
              }}>
                📚 LEARN MORE
              </h5>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {lesson.details.resources.map((resource, idx) => (
                  <span key={idx} style={{
                    fontSize: '11px',
                    color: 'var(--text)',
                    background: 'var(--bg)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: `1px solid ${color}`,
                    fontFamily: "'Space Mono', monospace"
                  }}>
                    {resource}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* No details placeholder */}
      {isExpanded && !lesson.details && (
        <div style={{
          padding: '20px',
          borderTop: `1px solid ${color}`,
          textAlign: 'center',
          color: 'var(--muted)',
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px'
        }}>
          📝 Detailed content for this lesson coming soon! Use the concepts above as study topics.
        </div>
      )}
    </div>
  );
}
