'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour12: false }))
      setDate(now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/London' }))
    }
    tick()
    const iv = setInterval(tick, 1000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 8vw',
      zIndex: 1,
    }}>
      {/* Top status bar */}
      <div style={{
        position: 'absolute',
        top: '100px',
        right: '8vw',
        textAlign: 'right',
        opacity: visible ? 0.7 : 0,
        transition: 'opacity 1.2s ease 0.5s',
      }}>
        <div style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}>London, UK</div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.1rem',
          color: 'var(--gold)',
          letterSpacing: '0.05em',
        }}>{time}</div>
        <div style={{
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          marginTop: '2px',
        }}>{date}</div>
      </div>

      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute',
        left: '6vw',
        top: '15%',
        bottom: '15%',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      {/* Main content */}
      <div style={{ maxWidth: '900px' }}>
        {/* Pre-title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '28px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.2s',
        }}>
          <div style={{
            width: '8px', height: '8px',
            background: 'var(--gold)',
            borderRadius: '50%',
            boxShadow: '0 0 12px var(--gold)',
            animation: 'pulseGold 2s ease infinite',
          }} />
          <span style={{
            fontSize: '0.68rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
          }}>Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          marginBottom: '8px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s ease 0.3s',
        }}>
          <span style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: 'var(--cream)', display: 'block' }}>
            Kalpana
          </span>
          <span style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            display: 'block',
          }} className="gold-text">
            Joyce Dovari
          </span>
        </h1>

        {/* Subtitle divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '28px',
          marginTop: '20px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.5s',
        }}>
          <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
          <span style={{
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}>AI · ML · Data</span>
          <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
        </div>

        {/* Description */}
        <p style={{
          maxWidth: '540px',
          fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '48px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease 0.6s',
        }}>
          MSc Artificial Intelligence · Northumbria University, London.
          Building intelligent systems that bridge research and reality —
          from edge AI to deployed applications.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.9s ease 0.8s',
        }}>
          <a href="#projects" className="btn-gold btn-gold-filled">
            View Work
            <span>→</span>
          </a>
          <a href="#contact" className="btn-gold">
            Get in Touch
          </a>
          <a
            href="https://github.com/kalpanajoycedovari"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: visible ? 0.5 : 0,
        transition: 'opacity 1.2s ease 1.2s',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </div>
    </section>
  )
}
