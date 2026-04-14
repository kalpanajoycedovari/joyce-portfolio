import Navbar from '@/components/Navbar'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'

export const metadata = { title: 'Stack — Joyce Dovari' }

export default function StackPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Capabilities</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
          Technical <span className="gold-text">Stack</span>
        </h1>
        <p style={{ maxWidth: '500px', marginTop: '16px', color: 'var(--text-muted)', fontSize: '0.95rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
          Tools I reach for, languages I think in, frameworks I ship with.
        </p>
      </div>
      <Stack />
      <Contact />
    </main>
  )
}
