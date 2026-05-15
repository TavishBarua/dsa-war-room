import { AI_LEARNING_PATH } from '../../data/ai/aiCourse';

export default function AIRoadmap() {
  const phases = AI_LEARNING_PATH;

  return (
    <section style={{
      padding: '80px 20px',
      background: 'var(--bg)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="section-label" style={{ textAlign: 'center' }}>// LEARNING PATH</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>YOUR AI<br/>ROADMAP</h2>
        <p className="section-desc" style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 60px'
        }}>
          A structured 24-30 week journey from AI fundamentals to advanced engineering. Each phase builds on the previous, taking you from beginner to production-ready AI engineer.
        </p>

        {/* Roadmap Visualization */}
        <div style={{
          position: 'relative',
          padding: '40px 0'
        }}>
          {/* Vertical connecting line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '4px',
            background: 'linear-gradient(180deg, var(--neon) 0%, var(--neon2) 33%, #a78bfa 66%, var(--neon3) 100%)',
            transform: 'translateX(-50%)',
            opacity: '0.3'
          }}></div>

          {phases.map((phase, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: index < phases.length - 1 ? '80px' : '0',
              position: 'relative'
            }}>
              {/* Phase number circle */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--bg2)',
                border: `4px solid ${
                  index === 0 ? 'var(--neon)' :
                  index === 1 ? 'var(--neon2)' :
                  index === 2 ? '#a78bfa' :
                  'var(--neon3)'
                }`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '32px',
                color: 'var(--text)',
                zIndex: 2,
                boxShadow: `0 0 30px ${
                  index === 0 ? 'rgba(0,255,136,0.3)' :
                  index === 1 ? 'rgba(0,207,255,0.3)' :
                  index === 2 ? 'rgba(167,139,250,0.3)' :
                  'rgba(255,77,109,0.3)'
                }`
              }}>
                {index + 1}
              </div>

              {/* Phase content card */}
              <div style={{
                width: index % 2 === 0 ? '45%' : 'calc(45% - 0px)',
                marginLeft: index % 2 === 0 ? '0' : 'auto',
                marginRight: index % 2 === 0 ? 'auto' : '0',
                [index % 2 === 0 ? 'marginRight' : 'marginLeft']: '150px',
                background: 'var(--bg2)',
                border: '2px solid var(--border)',
                borderRadius: '12px',
                padding: '32px',
                position: 'relative',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor =
                  index === 0 ? 'var(--neon)' :
                  index === 1 ? 'var(--neon2)' :
                  index === 2 ? '#a78bfa' :
                  'var(--neon3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {/* Arrow pointing to circle */}
                <div style={{
                  position: 'absolute',
                  [index % 2 === 0 ? 'right' : 'left']: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '0',
                  height: '0',
                  borderTop: '15px solid transparent',
                  borderBottom: '15px solid transparent',
                  [index % 2 === 0 ? 'borderLeft' : 'borderRight']: '20px solid var(--border)'
                }}></div>

                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--muted)',
                  letterSpacing: '2px',
                  marginBottom: '12px'
                }}>
                  {phase.duration.toUpperCase()}
                </div>

                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '32px',
                  letterSpacing: '2px',
                  color:
                    index === 0 ? 'var(--neon)' :
                    index === 1 ? 'var(--neon2)' :
                    index === 2 ? '#a78bfa' :
                    'var(--neon3)',
                  marginBottom: '16px'
                }}>
                  {phase.phase}
                </h3>

                <p style={{
                  color: 'var(--text)',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '15px'
                }}>
                  <strong>Goal:</strong> {phase.goal}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {phase.modules.map((moduleId, idx) => (
                    <div key={idx} style={{
                      background: 'var(--bg3)',
                      border: '1px solid var(--border)',
                      borderRadius: '6px',
                      padding: '8px 16px',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '11px',
                      color: 'var(--text)',
                      letterSpacing: '1px'
                    }}>
                      {moduleId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </div>
                  ))}
                </div>

                {/* Module count badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--bg3)',
                  border: '1px solid var(--border)',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px',
                  color: 'var(--muted)'
                }}>
                  {phase.modules.length} MODULES
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{
          marginTop: '80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '80px auto 0'
        }}>
          <div style={{
            background: 'var(--bg2)',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              fontFamily: "'Bebas Neue', sans-serif",
              color: 'var(--neon)',
              marginBottom: '8px'
            }}>24-30</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: 'var(--muted)',
              letterSpacing: '2px'
            }}>WEEKS TOTAL</div>
          </div>

          <div style={{
            background: 'var(--bg2)',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              fontFamily: "'Bebas Neue', sans-serif",
              color: 'var(--neon2)',
              marginBottom: '8px'
            }}>12+</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: 'var(--muted)',
              letterSpacing: '2px'
            }}>CORE MODULES</div>
          </div>

          <div style={{
            background: 'var(--bg2)',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              fontFamily: "'Bebas Neue', sans-serif",
              color: '#a78bfa',
              marginBottom: '8px'
            }}>50+</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: 'var(--muted)',
              letterSpacing: '2px'
            }}>LESSONS</div>
          </div>

          <div style={{
            background: 'var(--bg2)',
            border: '2px solid var(--border)',
            borderRadius: '12px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              fontFamily: "'Bebas Neue', sans-serif",
              color: 'var(--neon3)',
              marginBottom: '8px'
            }}>20+</div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: 'var(--muted)',
              letterSpacing: '2px'
            }}>PROJECTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
