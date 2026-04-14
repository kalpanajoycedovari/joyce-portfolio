'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Journey', href: '/journey' },
  { label: 'Projects', href: '/projects' },
  { label: 'Stack', href: '/stack' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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
      padding: '0 8vw',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(253,248,238,0.92)' : 'rgba(253,248,238,0.7)',
      backdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
      transition: 'all 0.4s ease',
      boxShadow: scrolled ? '0 4px 24px rgba(139,105,20,0.08)' : 'none',
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.4rem',
          fontWeight: 300,
          letterSpacing: '0.08em',
          color: 'var(--gold-dark)',
        }}>
          Joyce<span style={{ color: 'var(--gold)', fontSize: '1rem' }}> ✦ </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300 }}>KD</span>
        </span>
      </Link>

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map(link => (
          <li key={link.href}>
            <Link href={link.href} style={{
              color: pathname === link.href ? 'var(--gold-dark)' : 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              fontFamily: "'Jost', sans-serif",
              fontWeight: pathname === link.href ? 500 : 400,
              borderBottom: pathname === link.href ? '1px solid var(--gold)' : '1px solid transparent',
              paddingBottom: '2px',
            }}>
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a href="mailto:dovarikalpanajoyce@gmail.com" className="btn-gold" style={{ padding: '9px 22px', fontSize: '0.68rem' }}>
            Hire Me
          </a>
        </li>
      </ul>

      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none',
        cursor: 'pointer', color: 'var(--gold-dark)', fontSize: '1.3rem',
      }} className="mobile-menu-btn">
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0,
          background: 'rgba(253,248,238,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', padding: '24px 8vw',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              color: 'var(--text-main)', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
