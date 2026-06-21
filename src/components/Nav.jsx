import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const LINKS = [
  { label: 'Work',     to: '/work' },
  { label: 'Studio',   to: '/studio' },
  { label: 'Services', to: '/services' },
  { label: 'Journal',  to: '/journal' },
  { label: 'Contact',  to: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setScrolled(false)
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100, padding: '0 56px',
      }}
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? 'rgba(8,8,10,0.9)' : 'rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottomColor: scrolled ? 'rgba(255,255,255,0.06)' : 'transparent',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
          borderBottom: '1px solid transparent',
        }}
      >
        <Link to="/" style={{
          fontFamily: 'var(--font-bradford)',
          fontWeight: 500, fontSize: 20,
          color: '#ffffff', letterSpacing: '0.04em',
          textDecoration: 'none',
        }}>
          N&amp;F
        </Link>

        <div style={{ display: 'flex', gap: 40 }}>
          {LINKS.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400, fontSize: 14,
                  color: active ? '#ffffff' : 'rgba(255,255,255,0.48)',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s ease',
                  borderBottom: active ? '1px solid rgba(255,255,255,0.38)' : '1px solid transparent',
                  paddingBottom: 2,
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.48)' }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'transparent', color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.38)',
              borderRadius: '9999px',
              padding: '10px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 400, fontSize: 13,
              cursor: 'pointer', letterSpacing: '0.01em',
              transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.borderColor = 'transparent'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'
            }}
          >
            Book a Consultation
          </motion.div>
        </Link>
      </motion.nav>
    </motion.header>
  )
}
