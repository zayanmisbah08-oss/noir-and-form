import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useResponsive } from '../hooks/useResponsive'

const LINKS = [
  { label: 'Work',     to: '/work' },
  { label: 'Studio',   to: '/studio' },
  { label: 'Services', to: '/services' },
  { label: 'Journal',  to: '/journal' },
  { label: 'Contact',  to: '/contact' },
]

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const location = useLocation()
  const { isMobile, isTablet, isNarrow, navH } = useResponsive()

  const hPad = isMobile ? '0 20px' : isTablet ? '0 36px' : '0 56px'

  useEffect(() => {
    setScrolled(false)
    setMobileOpen(false)
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100, padding: hPad,
        }}
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled || mobileOpen ? 'rgba(8,8,10,0.95)' : 'rgba(0,0,0,0)',
            backdropFilter:  scrolled || mobileOpen ? 'blur(14px)' : 'none',
            borderBottomColor: scrolled && !mobileOpen ? 'rgba(255,255,255,0.06)' : 'transparent',
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            height: navH,
            borderBottom: '1px solid transparent',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{
            fontFamily: 'var(--font-bradford)',
            fontWeight: 500, fontSize: 20,
            color: '#ffffff', letterSpacing: '0.04em',
            textDecoration: 'none', position: 'relative', zIndex: 101,
          }}>
            N&amp;F
          </Link>

          {/* Desktop nav links */}
          {!isNarrow && (
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
          )}

          {/* Desktop CTA */}
          {!isNarrow && (
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
          )}

          {/* Hamburger button — mobile/tablet only */}
          {isNarrow && (
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none', border: 'none',
                cursor: 'pointer', padding: '8px 0 8px 12px',
                display: 'flex', flexDirection: 'column',
                gap: 5, alignItems: 'flex-end',
                position: 'relative', zIndex: 101,
              }}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6.5 }  : { rotate: 0, y: 0 }}
                transition={{ duration: 0.26 }}
                style={{ display: 'block', width: 22, height: 1.5, background: '#ffffff', borderRadius: 1 }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
                style={{ display: 'block', width: 15, height: 1.5, background: '#ffffff', borderRadius: 1 }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.26 }}
                style={{ display: 'block', width: 22, height: 1.5, background: '#ffffff', borderRadius: 1 }}
              />
            </button>
          )}
        </motion.nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && isNarrow && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              padding: '80px 32px 48px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', marginBottom: 48 }}>
              {LINKS.map((link, i) => {
                const active = location.pathname === link.to
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-bradford)',
                        fontWeight: 500,
                        fontSize: 'clamp(36px, 10vw, 54px)',
                        color: active ? '#ffffff' : 'rgba(255,255,255,0.3)',
                        textDecoration: 'none',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.25,
                        textAlign: 'center',
                        transition: 'color 0.18s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
                      onMouseLeave={e => { e.currentTarget.style.color = active ? '#ffffff' : 'rgba(255,255,255,0.3)' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
            >
              <Link to="/contact" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'transparent', color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.35)',
                  borderRadius: '9999px', padding: '13px 40px',
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  letterSpacing: '0.01em', cursor: 'pointer',
                }}>
                  Book a Consultation
                </div>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
