'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
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
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '0 8vw', zIndex: 1,
      background: 'linear-gradient(135deg, #FDF8EE 0%, #F5ECD8 50%, #FDF8EE 100%)',
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Time widget */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
        style={{ position: 'absolute', top: '100px', right: '8vw', textAlign: 'right' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px', fontFamily: "'Jost', sans-serif" }}>London, UK</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: 'var(--gold-dark)', letterSpacing: '0.05em' }}>{time}</div>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginTop: '2px' }}>{date}</div>
      </motion.div>

      {/* Vertical line */}
      <div style={{ position: 'absolute', left: '6vw', top: '15%', bottom: '15%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4), transparent)' }} />

      <div style={{ maxWidth: '900px' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <div style={{ width: '8px', height: '8px', background: 'var(--gold)', borderRadius: '50%', animation: 'pulseGold 2s ease infinite' }} />
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '8px' }}>
          <span style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: 'var(--ink)', display: 'block' }}>Kalpana</span>
          <span style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', display: 'block' }} className="gold-text">Joyce Dovari</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px', marginTop: '20px' }}>
          <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>AI · ML · Data</span>
          <div style={{ flex: 1, maxWidth: '60px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }}
          style={{ maxWidth: '540px', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, color: 'var(--ink-light)', lineHeight: 1.7, marginBottom: '48px' }}>
          MSc Artificial Intelligence · Northumbria University, London.
          Building intelligent systems that bridge research and reality —
          from edge AI to deployed applications.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/projects" className="btn-gold btn-gold-filled">View Work →</Link>
          <Link href="/contact" className="btn-gold">Get in Touch</Link>
          <a href="https://github.com/kalpanajoycedovari" target="_blank" rel="noreferrer" className="btn-gold">GitHub ↗</a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'float 3s ease-in-out infinite' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
      </motion.div>
    </section>
  )
}
