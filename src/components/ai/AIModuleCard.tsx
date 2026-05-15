import { useState } from 'react';
import { AIModule } from '../../data/ai/aiCourse';
import AILessonCard from './AILessonCard';

interface AIModuleCardProps {
  module: AIModule;
}

export default function AIModuleCard({ module }: AIModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'lessons' | 'projects' | 'resources'>('lessons');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Foundation': return 'var(--neon)';
      case 'Intermediate': return 'var(--neon2)';
      case 'Advanced': return '#a78bfa';
      case 'Expert': return 'var(--neon3)';
      default: return 'var(--text)';
    }
  };

  return (
    <div style={{
      background: 'var(--card)',
      border: '2px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s'
    }}>
      {/* Card Header */}
      <div
        style={{
          padding: '32px',
          cursor: 'pointer',
          position: 'relative'
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseOver={(e) => {
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.style.borderColor = module.hoverColor;
            parent.style.transform = 'translateY(-4px)';
          }
        }}
        onMouseOut={(e) => {
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.style.borderColor = 'var(--border)';
            parent.style.transform = 'translateY(0)';
          }
        }}
      >
        {/* Module number badge */}
        <div style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'var(--bg3)',
          border: `2px solid ${module.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '24px',
          color: module.color
        }}>
          {module.num}
        </div>

        {/* Icon and title */}
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>{module.icon}</div>

        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '20px',
          fontWeight: '600',
          color: module.color,
          marginBottom: '12px',
          paddingRight: '70px'
        }}>
          {module.title}
        </div>

        {/* Level badge */}
        <div style={{
          display: 'inline-block',
          background: 'var(--bg3)',
          border: `1px solid ${getLevelColor(module.level)}`,
          borderRadius: '6px',
          padding: '4px 12px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          color: getLevelColor(module.level),
          letterSpacing: '1px',
          marginBottom: '16px'
        }}>
          {module.level.toUpperCase()}
        </div>

        <p style={{
          color: 'var(--text)',
          lineHeight: '1.6',
          fontSize: '14px',
          marginBottom: '20px'
        }}>
          {module.description}
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '24px',
              color: module.color
            }}>{module.totalLessons}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>LESSONS</div>
          </div>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '24px',
              color: module.color
            }}>{module.estimatedHours}h</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>TOTAL TIME</div>
          </div>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '24px',
              color: module.color
            }}>{module.projects.length}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: 'var(--muted)'
            }}>PROJECTS</div>
          </div>
        </div>

        {/* Topics tags */}
        <div style={{
          padding: '16px',
          background: 'var(--bg3)',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: 'var(--muted)',
            marginBottom: '8px'
          }}>TOPICS COVERED:</div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            color: 'var(--text)'
          }}>
            {module.tags}
          </div>
        </div>

        {/* Expand indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          color: module.color,
          letterSpacing: '2px'
        }}>
          {isExpanded ? '▲ COLLAPSE' : '▼ VIEW DETAILED CURRICULUM'}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div style={{
          borderTop: '2px solid var(--border)',
          background: 'var(--bg3)'
        }}>
          {/* Prerequisites */}
          <div style={{ padding: '32px', borderBottom: '1px solid var(--border)' }}>
            <h4 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '20px',
              color: 'var(--text)',
              marginBottom: '16px',
              letterSpacing: '2px'
            }}>📋 PREREQUISITES</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px'
            }}>
              {module.prerequisites.map((prereq, idx) => (
                <li key={idx} style={{
                  color: 'var(--text)',
                  fontSize: '14px',
                  padding: '8px 12px',
                  background: 'var(--bg2)',
                  borderRadius: '6px',
                  border: '1px solid var(--border)'
                }}>
                  ✓ {prereq}
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Objectives */}
          <div style={{ padding: '32px', borderBottom: '1px solid var(--border)' }}>
            <h4 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '20px',
              color: 'var(--text)',
              marginBottom: '16px',
              letterSpacing: '2px'
            }}>🎯 LEARNING OBJECTIVES</h4>
            <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
              {module.learningObjectives.map((obj, idx) => (
                <li key={idx} style={{
                  color: 'var(--text)',
                  fontSize: '14px',
                  marginBottom: '12px',
                  paddingLeft: '24px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: module.color
                  }}>→</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Tabs */}
          <div style={{ padding: '32px' }}>
            <div style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '24px',
              borderBottom: '2px solid var(--border)',
              paddingBottom: '16px'
            }}>
              <button
                onClick={() => setActiveTab('lessons')}
                style={{
                  background: activeTab === 'lessons' ? module.color : 'transparent',
                  color: activeTab === 'lessons' ? 'var(--bg)' : 'var(--text)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  letterSpacing: '1px'
                }}
              >
                📚 LESSONS ({module.lessons.length})
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                style={{
                  background: activeTab === 'projects' ? module.color : 'transparent',
                  color: activeTab === 'projects' ? 'var(--bg)' : 'var(--text)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  letterSpacing: '1px'
                }}
              >
                💻 PROJECTS ({module.projects.length})
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                style={{
                  background: activeTab === 'resources' ? module.color : 'transparent',
                  color: activeTab === 'resources' ? 'var(--bg)' : 'var(--text)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  letterSpacing: '1px'
                }}
              >
                📖 RESOURCES
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'lessons' && (
              <div style={{ display: 'grid', gap: '12px' }}>
                {module.lessons.map((lesson, idx) => (
                  <AILessonCard
                    key={idx}
                    lesson={lesson}
                    color={module.color}
                    index={idx}
                  />
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div style={{ display: 'grid', gap: '20px' }}>
                {module.projects.map((project, idx) => (
                  <div key={idx} style={{
                    background: 'var(--bg2)',
                    border: '2px solid var(--border)',
                    borderRadius: '8px',
                    padding: '24px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = module.color;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'start',
                      marginBottom: '16px'
                    }}>
                      <h5 style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '20px',
                        color: module.color,
                        margin: 0,
                        letterSpacing: '1px'
                      }}>
                        {project.title}
                      </h5>
                      <span style={{
                        fontSize: '11px',
                        padding: '4px 12px',
                        borderRadius: '6px',
                        background:
                          project.difficulty === 'Beginner' ? 'rgba(0,255,136,0.1)' :
                          project.difficulty === 'Intermediate' ? 'rgba(255,214,0,0.1)' :
                          'rgba(255,77,109,0.1)',
                        color:
                          project.difficulty === 'Beginner' ? 'var(--neon)' :
                          project.difficulty === 'Intermediate' ? 'var(--neon4)' :
                          'var(--neon3)',
                        fontFamily: "'Space Mono', monospace",
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        marginLeft: '16px'
                      }}>
                        {project.difficulty.toUpperCase()}
                      </span>
                    </div>
                    <p style={{
                      color: 'var(--text)',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}>
                      {project.description}
                    </p>
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{
                        fontSize: '11px',
                        color: 'var(--muted)',
                        marginBottom: '8px',
                        fontFamily: "'Space Mono', monospace"
                      }}>
                        SKILLS REQUIRED:
                      </div>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px'
                      }}>
                        {project.skills.map((skill, sidx) => (
                          <span key={sidx} style={{
                            fontSize: '11px',
                            color: 'var(--text)',
                            background: 'var(--bg3)',
                            padding: '4px 12px',
                            borderRadius: '4px',
                            border: '1px solid var(--border)',
                            fontFamily: "'Space Mono', monospace"
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: module.color,
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      ⏱️ Estimated: {project.estimatedTime}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'resources' && (
              <div style={{ display: 'grid', gap: '24px' }}>
                {/* Papers */}
                <div>
                  <h5 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '18px',
                    color: module.color,
                    marginBottom: '12px',
                    letterSpacing: '1px'
                  }}>
                    📄 RESEARCH PAPERS
                  </h5>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0
                  }}>
                    {module.resources.papers.map((paper, idx) => (
                      <li key={idx} style={{
                        color: 'var(--text)',
                        fontSize: '14px',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: module.color
                        }}>•</span>
                        {paper}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tutorials */}
                <div>
                  <h5 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '18px',
                    color: module.color,
                    marginBottom: '12px',
                    letterSpacing: '1px'
                  }}>
                    🎓 TUTORIALS & COURSES
                  </h5>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0
                  }}>
                    {module.resources.tutorials.map((tutorial, idx) => (
                      <li key={idx} style={{
                        color: 'var(--text)',
                        fontSize: '14px',
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: module.color
                        }}>•</span>
                        {tutorial}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h5 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '18px',
                    color: module.color,
                    marginBottom: '12px',
                    letterSpacing: '1px'
                  }}>
                    🛠️ TOOLS & LIBRARIES
                  </h5>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    {module.resources.tools.map((tool, idx) => (
                      <span key={idx} style={{
                        fontSize: '12px',
                        color: 'var(--text)',
                        background: 'var(--bg2)',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: '1px solid var(--border)',
                        fontFamily: "'Space Mono', monospace"
                      }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
