'use client'
export default function Contact() {
  return (
    <>
      <section id="contact" style={{ padding: '120px 8vw 80px', position: 'relative', zIndex: 1 }}>
        <div className="section-divider" style={{ marginBottom: '80px' }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', fontFamily: "'Jost', sans-serif" }}>
            05 — Let's Connect
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1, marginBottom: '24px' }}>
            Ready to build<br />
            <span className="gold-text">something great?</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '480px', margin: '0 auto 48px', fontFamily: "'Jost', sans-serif', fontWeight: 300" }}>
            I'm actively looking for AI/ML engineering and data science roles in London.
            If you're building something meaningful, I'd love to hear about it.
          </p>

          {/* Big email link */}
          <a href="mailto:dovarikalpanajoyce@gmail.com"
            style={{
              display: 'block',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'var(--gold)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              padding: '20px 0',
              borderTop: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              marginBottom: '40px',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
          >
            dovarikalpanajoyce@gmail.com ↗
          </a>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/kalpanajoycedovari" target="_blank" rel="noreferrer" className="btn-gold">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/kalpanajoycedovari" target="_blank" rel="noreferrer" className="btn-gold">
              LinkedIn ↗
            </a>
            <a href="https://my-portfolio-taupe-kappa-13.vercel.app/" target="_blank" rel="noreferrer" className="btn-gold">
              Previous Portfolio ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '32px 8vw',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', color: 'var(--gold-light)', opacity: 0.7 }}>
          Joyce ✦ KD
        </span>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          © 2025 Kalpana Joyce Dovari · London
        </span>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          Built with Next.js · Three.js · ☕
        </span>
      </footer>
    </>
  )
}
