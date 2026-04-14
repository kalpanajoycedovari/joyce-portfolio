import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Contact from '@/components/Contact'

export const metadata = { title: 'About — Joyce Dovari' }

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Who I Am</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
          About <span className="gold-text">Joyce</span>
        </h1>
      </div>
      <About />
      <Contact />
    </main>
  )
}
