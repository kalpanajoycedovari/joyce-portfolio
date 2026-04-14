'use client'
export default function About() {
  return (
    <section id="about" style={{ padding: '120px 8vw', position: 'relative', zIndex: 1 }}>
      <div className="section-divider" style={{ marginBottom: '80px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="about-grid">
        {/* Left — text */}
        <div>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', fontFamily: "'Jost', sans-serif" }}>
            01 — About
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.15, marginBottom: '32px' }}>
            Building at the<br /><span className="gold-text">intersection of art</span><br />and intelligence.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'I\'m Joyce — an AI/ML engineer and MSc student at Northumbria University\'s London Campus. I build systems that are both technically rigorous and genuinely useful.',
              'My work spans the full stack of applied AI: from fine-tuning speech models and building multi-agent pipelines, to deploying full-stack applications and crafting data-driven interfaces.',
              'Outside of engineering, I explore aesthetics in design, write, journal, and film content that captures moments worth keeping. I believe the best technology is invisible — it simply works, beautifully.',
            ].map((para, i) => (
              <p key={i} style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.8, fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://github.com/kalpanajoycedovari" target="_blank" rel="noreferrer" className="btn-gold">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/kalpanajoycedovari" target="_blank" rel="noreferrer" className="btn-gold">LinkedIn ↗</a>
            <a href="mailto:dovarikalpanajoyce@gmail.com" className="btn-gold btn-gold-filled">Email Me</a>
          </div>
        </div>

        {/* Right — decorative card */}
        <div style={{ position: 'relative' }}>
          {/* Floating card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            padding: '40px',
            position: 'relative',
          }}>
            {/* Corner ornaments */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map(corner => (
              <div key={corner} style={{
                position: 'absolute',
                top: corner.startsWith('top') ? '0' : 'auto',
                bottom: corner.startsWith('bottom') ? '0' : 'auto',
                left: corner.endsWith('left') ? '0' : 'auto',
                right: corner.endsWith('right') ? '0' : 'auto',
                width: '16px',
                height: '16px',
                borderTop: corner.startsWith('top') ? '1px solid var(--gold)' : 'none',
                borderBottom: corner.startsWith('bottom') ? '1px solid var(--gold)' : 'none',
                borderLeft: corner.endsWith('left') ? '1px solid var(--gold)' : 'none',
                borderRight: corner.endsWith('right') ? '1px solid var(--gold)' : 'none',
                opacity: 0.6,
              }} />
            ))}

            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', color: 'var(--gold)', opacity: 0.2, marginBottom: '16px', lineHeight: 1 }}>"</div>
            <blockquote style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.35rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--cream)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}>
              I turn data into decisions and ideas into deployed applications.
            </blockquote>

            <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--gold), transparent)', opacity: 0.3, marginBottom: '24px' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                { label: 'Status', value: 'Open to Work' },
                { label: 'Location', value: 'London, UK' },
                { label: 'Degree', value: 'MSc AI' },
                { label: 'Email', value: 'dovarikalpanajoyce@gmail.com' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gold-light)', fontFamily: "'Jost', sans-serif", wordBreak: 'break-word' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shadow card behind */}
          <div style={{
            position: 'absolute',
            top: '12px', left: '12px',
            right: '-12px', bottom: '-12px',
            border: '1px solid rgba(201,168,76,0.1)',
            zIndex: -1,
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
