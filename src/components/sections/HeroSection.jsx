/* HeroSection — Sequel void black stage
   Left: Bradford 128px display headline (Cormorant Garamond fallback)
   Right: React Three Fiber chrome icosahedron with edge vignette
   Framer Motion stagger entrance · scroll indicator */
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import ChromePolyhedron from '../three/ChromePolyhedron'

const ease = [0.16, 1, 0.3, 1]

function fadeUp(delay = 0, y = 56) {
  return {
    initial: { y, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.1, delay, ease },
  }
}

export default function HeroSection() {
  return (
    <section id="home" style={{
      background: 'var(--color-void-black)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'stretch',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* ── Left: typography column ── */}
      <div style={{
        flex: '0 0 50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 48px 80px 80px',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Eyebrow */}
        <motion.p {...fadeUp(0.15, 20)} style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400, fontSize: 12,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          marginBottom: 40,
        }}>
          Est. 2012 &nbsp;·&nbsp; London &amp; New York &nbsp;·&nbsp; Interior Design
        </motion.p>

        {/* Bradford display headline — Sequel signature */}
        <motion.h1 {...fadeUp(0.3, 64)} style={{
          fontFamily: 'var(--font-bradford)',
          fontWeight: 500,
          fontSize: 'clamp(64px, 8.5vw, 128px)',
          lineHeight: 1.0,
          letterSpacing: '-0.045em',
          color: 'var(--color-chalk)',
          margin: 0,
        }}>
          Noir<br />&amp;<br />Form.
        </motion.h1>

        {/* Albra-style serif subhead — Letter system */}
        <motion.p {...fadeUp(0.5, 32)} style={{
          fontFamily: 'var(--font-albra)',
          fontWeight: 400, fontSize: 22,
          lineHeight: 1.35, letterSpacing: '0.020em',
          color: 'rgba(255,255,255,0.52)',
          marginTop: 32, maxWidth: 400,
        }}>
          Spaces that articulate the intersection of material culture and lived experience.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65, 24)} style={{
          marginTop: 52, display: 'flex', gap: 20, alignItems: 'center',
        }}>
          {/* Ghost pill — Custo primary CTA pattern */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', color: 'var(--color-chalk)',
              border: '1px solid rgba(255,255,255,0.45)',
              borderRadius: 'var(--r-pill)',
              padding: '15px 36px',
              fontFamily: 'var(--font-body)',
              fontWeight: 400, fontSize: 15,
              cursor: 'pointer',
              transition: 'background 0.28s ease, color 0.28s ease, border-color 0.28s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = '#000000'
              e.currentTarget.style.borderColor = 'transparent'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
            }}
          >
            Explore our work
          </motion.button>

          <a href="#studio" style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400, fontSize: 14,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.02em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
          >
            Our studio ↓
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{
            position: 'absolute', bottom: 48, left: 80,
            display: 'flex', alignItems: 'center', gap: 14,
          }}
        >
          <motion.div
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            style={{ width: 36, height: 1, background: 'rgba(255,255,255,0.25)', transformOrigin: 'left' }}
          />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 11,
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Scroll
          </span>
        </motion.div>
      </div>

      {/* ── Right: React Three Fiber canvas ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.05, ease }}
        style={{
          flex: '0 0 50%',
          position: 'relative',
          height: '100vh',
        }}
      >
        <Suspense fallback={null}>
          <ChromePolyhedron />
        </Suspense>

        {/* Edge vignette — bleeds canvas into void black */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 85% 95% at 60% 50%, transparent 35%, #000000 100%),
            linear-gradient(to left, transparent 70%, #000000 100%)
          `,
        }} />
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 160, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent, #000000)',
        zIndex: 3,
      }} />
    </section>
  )
}
