import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export const metadata = { title: 'Projects — Joyce Dovari' }

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Portfolio</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
          All <span className="gold-text">Projects</span>
        </h1>
        <p style={{ maxWidth: '500px', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
          Every project is a problem solved, a system built, and a lesson learned.
        </p>
      </div>
      <Projects />
      <Contact />
    </main>
  )
}
