'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export const allProjects = [
  {
    title: 'ScamCheck Agent',
    subtitle: 'Edge AI Fraud Detection',
    desc: 'Intelligent scam detection running on Cloudflare\'s edge. Paste a URL — it runs page analysis, Reddit scan, and Llama 3.1 AI verdict in parallel via WebSockets.',
    tags: ['Cloudflare Workers', 'Llama 3.1', 'WebSockets', 'Durable Objects'],
    github: 'https://github.com/kalpanajoycedovari',
    live: '#',
    featured: true,
    year: '2025',
    emoji: '🛡️',
  },
  {
    title: "Solite's Corner",
    subtitle: 'Invite-only Social Platform',
    desc: 'A cozy invite-only social space built with vanilla JS and Firebase. Full auth, real-time posts, notifications, messages, mood filters, and profile management.',
    tags: ['Firebase', 'JavaScript', 'GitHub Pages', 'Firestore'],
    github: 'https://github.com/kalpanajoycedovari/My-Website',
    live: 'https://kalpanajoycedovari.github.io/My-Website/',
    featured: true,
    year: '2024',
    emoji: '🌿',
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
    emoji: '📄',
  },
  {
    title: 'CaptionCook',
    subtitle: 'Multi-Agent Caption Generator',
    desc: 'LangGraph multi-agent pipeline using Ollama/gemma3:4b and Streamlit. Three specialised agents collaborate to create platform-optimised social captions.',
    tags: ['LangGraph', 'Ollama', 'Streamlit', 'Multi-Agent'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2025',
    emoji: '✍️',
  },
  {
    title: 'ScamScan',
    subtitle: 'Reddit Scam Intelligence',
    desc: 'Scrapes 6,000+ Reddit posts, detects scam signals using NLP, and scores trust on a 0–100 scale. SQLite-backed with a Streamlit dashboard.',
    tags: ['Python', 'TextBlob', 'Streamlit', 'SQLite'],
    github: 'https://github.com/kalpanajoycedovari/scamscan',
    featured: false,
    year: '2024',
    emoji: '🔍',
  },
  {
    title: 'JoBo OCR Journal',
    subtitle: 'Handwriting to Digital',
    desc: 'Uses OpenCV and Tesseract OCR to pull text from photos of physical journals — turning handwriting into searchable, beautifully formatted digital entries.',
    tags: ['OpenCV', 'Tesseract', 'Python', 'Streamlit'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2024',
    emoji: '📖',
  },
  {
    title: 'Speech Recognition Pipeline',
    subtitle: 'Wav2Vec2 Fine-tuning',
    desc: 'Lightweight fine-tuned Wav2Vec 2.0 pipeline with PyTorch. Clean, accurate speech-to-text built for real-world audio with noise resilience.',
    tags: ['Wav2Vec', 'PyTorch', 'HuggingFace', 'NLP'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2024',
    emoji: '🎙️',
  },
  {
    title: 'UK Job Market Dashboard',
    subtitle: 'Tableau Analytics',
    desc: '1.6 million-row dataset visualised across interactive Tableau dashboards — revealing salary trends, demand patterns, and skill gaps in the UK tech job market.',
    tags: ['Tableau', 'Python', 'Pandas', 'Data Viz'],
    github: 'https://github.com/kalpanajoycedovari',
    featured: false,
    year: '2024',
    emoji: '📊',
  },
]

function ProjectCard({ project, index, showAll = false }: { project: typeof allProjects[0], index: number, showAll?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'var(--border)'}`,
        padding: '36px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: hovered ? 'translateY(-12px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 32px 80px rgba(139,105,20,0.15), 0 8px 24px rgba(139,105,20,0.1)'
          : '0 4px 24px rgba(139,105,20,0.06)',
        animation: `cardFloat ${4 + index * 0.3}s ease-in-out infinite`,
        animationDelay: `${index * 0.5}s`,
      }}
    >
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Corner decoration */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: 0, height: 0,
        borderStyle: 'solid',
        borderWidth: '0 40px 40px 0',
        borderColor: `transparent rgba(201,168,76,${hovered ? '0.15' : '0.06'}) transparent transparent`,
        transition: 'all 0.4s ease',
      }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '-50%', right: '-50%',
        width: '200px', height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <span style={{ fontSize: '2rem' }}>{project.emoji}</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--gold-dark)', textTransform: 'uppercase', opacity: 0.7 }}>{project.year}</span>
          {project.featured && (
            <span style={{ fontSize: '0.55rem', padding: '2px 8px', border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.08)', color: 'var(--gold-dark)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Featured</span>
          )}
        </div>
      </div>

      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '4px', lineHeight: 1.2 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.72rem', color: 'var(--gold-dark)', marginBottom: '14px', letterSpacing: '0.08em', opacity: 0.9 }}>{project.subtitle}</p>
      <p style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>{project.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
        {project.tags.map(tag => (
          <span key={tag} className="gold-tag">{tag}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <a href={project.github} target="_blank" rel="noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-dark)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >GitHub ↗</a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', textDecoration: 'none', opacity: 0.9 }}
          >Live Demo ↗</a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects({ limit }: { limit?: number }) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="projects" style={{ padding: '120px 8vw', position: 'relative', zIndex: 1, background: 'var(--bg)' }}>
      <div className="section-divider" style={{ marginBottom: '80px' }} />

      <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>
            Portfolio
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
            Selected <span className="gold-text">Projects</span>
          </h2>
        </div>
        {limit && (
          <Link href="/projects" className="btn-gold">View All Projects →</Link>
        )}
      </motion.div>

      {/* Single column stacked cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '800px', margin: '0 auto' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
