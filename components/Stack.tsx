'use client'
import { useState } from 'react'

const categories = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'Go', 'Zig', 'SQL', 'Ruby'],
  },
  {
    label: 'AI / ML',
    icon: '◈',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Keras', 'OpenCV', 'Wav2Vec', 'HuggingFace', 'LangChain', 'spaCy'],
  },
  {
    label: 'AI Agents',
    icon: '⚡',
    skills: ['LangGraph', 'n8n', 'Flowise', 'Ollama', 'Claude API', 'FastAPI', 'Streamlit'],
  },
  {
    label: 'Frontend',
    icon: '◇',
    skills: ['React', 'Next.js', 'Three.js', 'TypeScript', 'CSS', 'Bootstrap', 'HTML5'],
  },
  {
    label: 'Backend & DB',
    icon: '⬡',
    skills: ['Flask', 'Express.js', 'Firebase', 'MongoDB', 'MySQL', 'SQLite', 'Firestore'],
  },
  {
    label: 'Data & Analytics',
    icon: '◎',
    skills: ['Pandas', 'NumPy', 'Plotly', 'TextBlob', 'Tableau', 'Power BI', 'Web Scraping'],
  },
  {
    label: 'Tools',
    icon: '⚙',
    skills: ['Docker', 'Git', 'Vercel', 'GitHub Pages', 'Jupyter', 'VS Code', 'Cloudflare Workers'],
  },
]

export default function Stack() {
  const [active, setActive] = useState(0)

  return (
    <section id="stack" style={{ padding: '120px 8vw', position: 'relative', zIndex: 1 }}>
      <div className="section-divider" style={{ marginBottom: '80px' }} />

      <div style={{ marginBottom: '60px' }}>
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>
          04 — Capabilities
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1 }}>
          Technical <span className="gold-text">Stack</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px' }} className="stack-grid">
        {/* Category nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {categories.map((cat, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '14px 18px',
                background: active === i ? 'rgba(201,168,76,0.08)' : 'transparent',
                border: `1px solid ${active === i ? 'rgba(201,168,76,0.35)' : 'transparent'}`,
                borderLeft: `2px solid ${active === i ? 'var(--gold)' : 'transparent'}`,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.25s ease',
                fontFamily: "'Jost', sans-serif",
              }}>
              <span style={{ color: active === i ? 'var(--gold)' : 'var(--text-muted)', fontSize: '0.85rem', width: '18px', textAlign: 'center' }}>
                {cat.icon}
              </span>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: active === i ? 'var(--gold-light)' : 'var(--text-muted)' }}>
                {cat.label}
              </span>
              <span style={{ marginLeft: 'auto', fontSize: '0.6rem', color: 'var(--text-muted)', opacity: 0.6 }}>
                {cat.skills.length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills display */}
        <div>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              color: 'var(--cream)',
              fontWeight: 400,
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}>
              <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>{categories[active].icon}</span>
              {categories[active].label}
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {categories[active].skills.map((skill, i) => (
              <SkillPill key={skill} skill={skill} delay={i * 40} />
            ))}
          </div>

          {/* Decorative element */}
          <div style={{ marginTop: '60px', padding: '24px', background: 'rgba(201,168,76,0.03)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '1rem' }}>
              Always learning — currently deepening systems programming in Go & Zig
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function SkillPill({ skill, delay }: { skill: string; delay: number }) {
  const [h, setH] = useState(false)
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: '10px 20px',
        border: `1px solid ${h ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.18)'}`,
        background: h ? 'rgba(201,168,76,0.08)' : 'transparent',
        color: h ? 'var(--gold-light)' : 'var(--text-main)',
        fontSize: '0.82rem',
        letterSpacing: '0.06em',
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        cursor: 'default',
        transition: 'all 0.25s ease',
        transform: h ? 'translateY(-2px)' : 'none',
        boxShadow: h ? '0 8px 24px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      {skill}
    </div>
  )
}
