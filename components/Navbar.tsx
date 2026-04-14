'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '0 48px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(14,11,6,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.4rem',
          fontWeight: 300,
          letterSpacing: '0.08em',
          color: 'var(--gold-light)',
        }}>
          Joyce<span style={{ color: 'var(--text-muted)', fontSize: '1rem' }}> ✦ </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300 }}>KD</span>
        </span>
      </a>

      {/* Desktop Nav */}
      <ul style={{
        display: 'flex',
        gap: '40px',
        listStyle: 'none',
        alignItems: 'center',
      }} className="desktop-nav">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="mailto:dovarikalpanajoyce@gmail.com"
            className="btn-gold"
            style={{ padding: '9px 22px', fontSize: '0.68rem' }}
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--gold)',
          fontSize: '1.3rem',
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px', left: 0, right: 0,
          background: 'rgba(14,11,6,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  )
}
