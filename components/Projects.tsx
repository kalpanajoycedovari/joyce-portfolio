'use client'
import { useState } from 'react'

const projects = [
  {
    title: 'ScamCheck Agent',
    subtitle: 'Edge AI Fraud Detection',
    desc: 'Intelligent scam detection running on Cloudflare\'s edge. Paste a URL — it runs page analysis, Reddit scan, and Llama 3.1 AI verdict in parallel via WebSockets.',
    tags: ['Cloudflare Workers', 'Llama 3.1', 'WebSockets', 'Durable Objects'],
    github: 'https://github.com/kalpanajoycedovari',
    live: '#',
    featured: true,
    year: '2025',
  },
  {
    title: 'Solite\'s Corner',
    subtitle: 'Invite-only Social Platform',
    desc: 'A cozy invite-only social space built with vanilla JS and Firebase. Full auth, real-time posts, notifications, messages, mood filters, and profile management.',
    tags: ['Firebase', 'JavaScript', 'GitHub Pages', 'Firestore'],
    github: 'https://github.com/kalpanajoycedovari/My-Website',
    live: 'https://kalpanajoycedovari.github.io/My-Website/',
    featured: true,
    year: '2024',
  },
  {
    title: 'AI Resume Screener',
    subtitle: 'NLP-Powered Recruitment Tool',
    desc: 'FastAPI app that reads your resume like a recruiter using Claude API and pdfplumber — giving actionable feedback and skills gap analysis.',
    tags: ['FastAPI', 'Claude API', 'pdfplumber', 'Python'],
    github: 'https://github.com/kalpanajoycedovari',
    live: 'https://ai-resume-screener-x5c1.onrender.com',
    featured: true,
    year: '2024',
  },
  {
    title: 'CaptionCook',
    subtitle: 'Multi-Agent Caption Generator',
    desc: 'LangGraph multi-agent pipeline using Ollama/gemma3:4b and Streamlit. Three specialised agents collaborate to create platform-optimised social captions.',
    tags: ['LangGraph', 'Ollama', 'Streamlit', 'Multi-Agent'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2025',
  },
  {
    title: 'ScamScan',
    subtitle: 'Reddit Scam Intelligence',
    desc: 'Scrapes 6,000+ Reddit posts, detects scam signals using NLP, and scores trust on a 0–100 scale. SQLite-backed with a Streamlit dashboard.',
    tags: ['Python', 'TextBlob', 'Streamlit', 'SQLite'],
    github: 'https://github.com/kalpanajoycedovari/scamscan',
    featured: false,
    year: '2024',
  },
  {
    title: 'JoBo OCR Journal',
    subtitle: 'Handwriting to Digital',
    desc: 'Uses OpenCV and Tesseract OCR to pull text from photos of physical journals — turning handwriting into searchable, beautifully formatted digital entries.',
    tags: ['OpenCV', 'Tesseract', 'Python', 'Streamlit'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2024',
  },
  {
    title: 'Speech Recognition Pipeline',
    subtitle: 'Wav2Vec2 Fine-tuning',
    desc: 'Lightweight fine-tuned Wav2Vec 2.0 pipeline with PyTorch. Clean, accurate speech-to-text built for real-world audio with noise resilience.',
    tags: ['Wav2Vec', 'PyTorch', 'HuggingFace', 'NLP'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2024',
  },
  {
    title: 'UK Job Market Dashboard',
    subtitle: 'Tableau Analytics',
    desc: '1.6 million-row dataset visualised across interactive Tableau dashboards — revealing salary trends, demand patterns, and skill gaps in the UK tech job market.',
    tags: ['Tableau', 'Python', 'Pandas', 'Data Viz'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2024',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const shown = filter === 'featured' ? projects.filter(p => p.featured) : projects

  return (
    <section id="projects" style={{ padding: '120px 8vw', position: 'relative', zIndex: 1 }}>
      <div className="section-divider" style={{ marginBottom: '80px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <p style={{
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '12px',
            fontFamily: "'Jost', sans-serif",
          }}>03 — Portfolio</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--cream)',
          }}>
            Selected{' '}
            <span className="gold-text">Projects</span>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['all', 'featured'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{
                padding: '8px 20px',
                background: filter === f ? 'rgba(201,168,76,0.12)' : 'transparent',
                border: `1px solid ${filter === f ? 'var(--gold)' : 'rgba(201,168,76,0.2)'}`,
                color: filter === f ? 'var(--gold)' : 'var(--text-muted)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'capitalize',
                cursor: 'pointer',
                fontFamily: "'Jost', sans-serif",
                transition: 'all 0.3s ease',
              }}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Featured row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }} className="projects-grid">
        {shown.slice(0, 3).map((p, i) => (
          <ProjectCard key={i} project={p} large />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="projects-grid-sm">
        {shown.slice(3).map((p, i) => (
          <ProjectCard key={i} project={p} large={false} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
          .projects-grid-sm { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid-sm { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project, large }: { project: typeof projects[0], large: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="luxury-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: large ? '28px' : '22px' }}
    >
      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          opacity: 0.7,
        }}>{project.year}</span>
        {project.featured && (
          <span style={{
            fontSize: '0.55rem',
            padding: '2px 8px',
            border: '1px solid rgba(201,168,76,0.3)',
            color: 'var(--gold)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>Featured</span>
        )}
      </div>

      {/* Decorative top corner */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '50px', height: '50px',
        overflow: 'hidden',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        <div style={{
          position: 'absolute',
          top: '-1px', right: '-1px',
          width: 0, height: 0,
          borderStyle: 'solid',
          borderWidth: '0 50px 50px 0',
          borderColor: `transparent rgba(201,168,76,0.15) transparent transparent`,
        }} />
      </div>

      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: large ? '1.35rem' : '1.1rem',
        fontWeight: 500,
        color: 'var(--cream)',
        marginBottom: '4px',
        lineHeight: 1.2,
      }}>{project.title}</h3>
      <p style={{
        fontSize: '0.7rem',
        color: 'var(--gold)',
        marginBottom: '12px',
        letterSpacing: '0.08em',
        opacity: 0.8,
      }}>{project.subtitle}</p>
      <p style={{
        fontSize: '0.83rem',
        color: 'var(--text-muted)',
        lineHeight: 1.65,
        marginBottom: '18px',
      }}>{project.desc}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.tags.map(tag => (
          <span key={tag} className="gold-tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <a href={project.github} target="_blank" rel="noreferrer"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >GitHub ↗</a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              textDecoration: 'none',
              opacity: 0.8,
            }}
          >Live Demo ↗</a>
        )}
      </div>
    </div>
  )
}
