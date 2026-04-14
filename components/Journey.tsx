'use client'

const education = [
  {
    degree: 'MSc in Artificial Intelligence',
    institution: 'Northumbria University',
    location: 'London Campus',
    period: '2025 — Present',
    grade: 'In Progress',
    icon: '◈',
    desc: 'Deepening expertise in machine learning, deep learning, NLP, and intelligent systems design. Dissertation in progress.',
    current: true,
  },
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Parul University',
    location: 'AI Specialisation',
    period: '2020 — 2024',
    grade: '7.71 CGPA',
    icon: '◇',
    desc: 'Four-year degree with AI specialisation. Built foundations in algorithms, data structures, machine learning, and software engineering — with hands-on NLP and computer vision work.',
    current: false,
  },
  {
    degree: 'Sr Secondary (Class XII)',
    institution: 'Narayana Education Institute',
    location: 'Science Stream',
    period: '2018 — 2020',
    grade: '9.34 CGPA',
    icon: '◎',
    desc: 'Exceptional performance in mathematics and science, building a strong base for engineering and AI.',
    current: false,
  },
  {
    degree: 'Hr Secondary (Class X)',
    institution: 'VS St. Johns Hr. Sec School',
    location: 'Foundation',
    period: '2012 — 2018',
    grade: '440 / 500',
    icon: '○',
    desc: 'Foundational schooling with consistent academic results and an early love of learning.',
    current: false,
  },
]

const experience = [
  {
    title: 'Data Analyst Intern',
    company: 'Levitica Technologies',
    location: 'Hyderabad, India',
    period: '2023',
    desc: 'Analysed datasets and built dashboards using Python and data visualisation tools, delivering actionable insights for business decisions.',
    icon: '▸',
  },
]

export default function Journey() {
  return (
    <section id="journey" style={{ padding: '120px 8vw', position: 'relative', zIndex: 1 }}>
      <div className="section-divider" style={{ marginBottom: '80px' }} />

      {/* Section header */}
      <div style={{ marginBottom: '70px' }}>
        <p style={{
          fontSize: '0.65rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '12px',
          fontFamily: "'Jost', sans-serif",
        }}>02 — My Journey</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          color: 'var(--cream)',
        }}>
          Education &{' '}
          <span className="gold-text">Experience</span>
        </h2>
      </div>

      {/* Education Timeline */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="journey-grid">
        <div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.1rem',
            color: 'var(--gold)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 400,
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span>Academic Path</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)', opacity: 0.3 }} />
          </h3>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '14px',
              top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, var(--gold), rgba(201,168,76,0.1))',
              opacity: 0.25,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {education.map((edu, i) => (
                <div key={i} style={{ display: 'flex', gap: '28px', paddingLeft: '8px' }}>
                  {/* Icon */}
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: `1px solid ${edu.current ? 'var(--gold)' : 'rgba(201,168,76,0.2)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    background: edu.current ? 'rgba(201,168,76,0.1)' : 'transparent',
                    color: edu.current ? 'var(--gold)' : 'var(--text-muted)',
                    fontSize: '0.7rem',
                    boxShadow: edu.current ? '0 0 16px rgba(201,168,76,0.2)' : 'none',
                  }}>
                    {edu.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{
                        fontSize: '0.65rem',
                        color: 'var(--gold)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                      }}>{edu.period}</span>
                      <span style={{
                        fontSize: '0.65rem',
                        color: edu.current ? 'var(--gold)' : 'var(--text-muted)',
                        padding: '2px 8px',
                        border: '1px solid rgba(201,168,76,0.2)',
                        letterSpacing: '0.1em',
                      }}>{edu.grade}</span>
                    </div>
                    <h4 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      color: 'var(--text-main)',
                      marginBottom: '2px',
                      lineHeight: 1.3,
                    }}>{edu.degree}</h4>
                    <p style={{
                      fontSize: '0.78rem',
                      color: 'var(--gold)',
                      marginBottom: '6px',
                      opacity: 0.8,
                    }}>{edu.institution} · {edu.location}</p>
                    <p style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}>{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — experience + stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.1rem',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 400,
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}>
              <span>Experience</span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)', opacity: 0.3 }} />
            </h3>

            {experience.map((exp, i) => (
              <div key={i} className="luxury-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{exp.period}</span>
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{exp.location}</span>
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', color: 'var(--cream)', marginBottom: '4px' }}>{exp.title}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--gold)', marginBottom: '10px', opacity: 0.8 }}>{exp.company}</p>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{exp.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {[
              { n: '15+', label: 'Projects Built' },
              { n: '6+', label: 'Deployed Apps' },
              { n: '297', label: 'Contributions / yr' },
              { n: '2026', label: 'Grad. Expected' },
            ].map((stat, i) => (
              <div key={i} className="luxury-card" style={{ padding: '20px', textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.2rem',
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: '6px',
                }} className="gold-text">{stat.n}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
