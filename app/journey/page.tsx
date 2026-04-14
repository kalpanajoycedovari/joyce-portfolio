import Navbar from '@/components/Navbar'
import Journey from '@/components/Journey'
import Contact from '@/components/Contact'

export const metadata = { title: 'Journey — Joyce Dovari' }

export default function JourneyPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Background</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
          My <span className="gold-text">Journey</span>
        </h1>
        <p style={{ maxWidth: '500px', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
          Every institution, every grade, every lesson — the academic path that shaped who I am.
        </p>
      </div>
      <Journey />
      <Contact />
    </main>
  )
}
