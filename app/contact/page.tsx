import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export const metadata = { title: 'Contact — Joyce Dovari' }

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="page-hero">
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>Get in Touch</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
          Let's <span className="gold-text">Connect</span>
        </h1>
      </div>
      <Contact />
    </main>
  )
}
