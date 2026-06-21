import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ChromePolyhedron from '../components/three/ChromePolyhedron'

const ease = [0.16, 1, 0.3, 1]

function fadeUp(delay = 0, y = 56) {
  return {
    initial: { y, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.1, delay, ease },
  }
}

const PREVIEWS = [
  {
    title: 'Maison Lumière',
    loc: 'Paris · 2024',
    img: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=700&q=80&auto=format',
  },
  {
    title: 'The Onyx Hotel',
    loc: 'Tokyo · 2024',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80&auto=format',
  },
  {
    title: 'Gallery Noir',
    loc: 'London · 2023',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80&auto=format',
  },
]

const EXPLORE = [
  { to: '/work',     label: 'Our Work',    sub: 'Selected portfolio across three continents.',         bg: '#0e1012' },
  { to: '/studio',   label: 'The Studio',  sub: 'Twelve years of people, practice, and philosophy.',  bg: '#0c0e10' },
  { to: '/services', label: 'Services',    sub: 'Residences, hospitality, cultural institutions.',     bg: '#10100e' },
  { to: '/contact',  label: 'Begin',       sub: 'Start a conversation about your next commission.',    bg: '#0a0c0e' },
]

export default function Home() {
  return (
    <div style={{ background: '#000000' }}>

      {/* ── HERO (Sequel void black) ── */}
      <section style={{
        background: '#000000', minHeight: '100vh',
        display: 'flex', alignItems: 'stretch',
        position: 'relative', overflow: 'hidden', paddingTop: 72,
      }}>
        <div style={{
          flex: '0 0 50%', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '80px 48px 80px 80px',
          position: 'relative', zIndex: 2,
        }}>
          <motion.p {...fadeUp(0.15, 20)} style={{
            fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 12,
            color: 'rgba(255,255,255,0.32)', letterSpacing: '0.18em',
            textTransform: 'uppercase', marginBottom: 40,
          }}>
            Est. 2012 &nbsp;·&nbsp; London &amp; New York &nbsp;·&nbsp; Interior Design
          </motion.p>

          <motion.h1 {...fadeUp(0.28, 72)} style={{
            fontFamily: 'var(--font-bradford)', fontWeight: 500,
            fontSize: 'clamp(72px, 9vw, 136px)', lineHeight: 0.95,
            letterSpacing: '-0.045em', color: '#ffffff', margin: 0,
          }}>
            Noir<br />&amp;<br />Form.
          </motion.h1>

          <motion.p {...fadeUp(0.5, 32)} style={{
            fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 22,
            lineHeight: 1.35, letterSpacing: '0.018em',
            color: 'rgba(255,255,255,0.5)', marginTop: 36, maxWidth: 420,
          }}>
            Spaces that articulate the intersection of material culture and lived experience.
          </motion.p>

          <motion.div {...fadeUp(0.65, 24)} style={{ marginTop: 52, display: 'flex', gap: 24, alignItems: 'center' }}>
            <Link to="/work" style={{ textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: 'transparent', color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.42)',
                  borderRadius: '9999px', padding: '15px 38px',
                  fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15,
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
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.42)'
                }}
              >
                Explore our work
              </motion.div>
            </Link>

            <Link
              to="/studio"
              style={{
                fontFamily: 'var(--font-body)', fontSize: 14,
                color: 'rgba(255,255,255,0.32)', letterSpacing: '0.02em',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.32)' }}
            >
              Our studio →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 1 }}
            style={{ position: 'absolute', bottom: 48, left: 80, display: 'flex', alignItems: 'center', gap: 14 }}
          >
            <motion.div
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              style={{ width: 36, height: 1, background: 'rgba(255,255,255,0.22)', transformOrigin: 'left' }}
            />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Scroll
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.05, ease }}
          style={{ flex: '0 0 50%', position: 'relative', height: '100vh' }}
        >
          <Suspense fallback={null}><ChromePolyhedron /></Suspense>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse 85% 95% at 60% 50%, transparent 32%, #000000 100%),
              linear-gradient(to left, transparent 68%, #000000 100%)
            `,
          }} />
        </motion.div>

        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 180, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #000000)', zIndex: 3,
        }} />
      </section>

      {/* ── PROJECT PREVIEW STRIP ── */}
      <section style={{ background: '#000000', padding: '96px 80px 56px' }}>
        <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}
            >
              Selected projects
            </motion.p>
            <Link to="/work" style={{
              fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.35)',
              textDecoration: 'underline', textUnderlineOffset: 4, transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
            >
              View all work →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {PREVIEWS.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease }}
                whileHover={{ y: -8, transition: { duration: 0.28 } }}
                style={{ cursor: 'pointer' }}
              >
                <div style={{
                  aspectRatio: '3/2', borderRadius: 6, overflow: 'hidden',
                  backgroundImage: `url(${proj.img})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  marginBottom: 14,
                  filter: 'grayscale(0.15) brightness(0.88)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                <p style={{ fontFamily: 'var(--font-bradford)', fontSize: 17, color: '#ffffff', margin: '0 0 5px', letterSpacing: '-0.015em' }}>{proj.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.32)', margin: 0 }}>{proj.loc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO STRIP ── */}
      <section style={{ background: '#000000', padding: '72px 80px 80px', borderTop: '1px solid rgba(255,255,255,0.055)' }}>
        <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto', display: 'flex', gap: 0, overflow: 'hidden' }}>
          {['Precision.', 'Form.', 'Silence.', 'Light.'].map((word, i) => (
            <motion.p
              key={word}
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: i * 0.07, ease }}
              style={{
                flex: 1,
                fontFamily: 'var(--font-bradford)', fontWeight: 500,
                fontSize: 'clamp(26px, 3.8vw, 58px)', lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: i % 2 === 0 ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.2)',
                margin: 0, padding: '0 16px 0 0',
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>
      </section>

      {/* ── EXPLORE GRID ── */}
      <section style={{ background: '#000000', padding: '40px 80px 128px', borderTop: '1px solid rgba(255,255,255,0.055)' }}>
        <div style={{
          maxWidth: 'var(--page-max-width)', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
        }}>
          {EXPLORE.map((item, i) => (
            <Link key={item.to} to={item.to} style={{ textDecoration: 'none' }}>
              <motion.div
                initial={{ y: 36, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.72, delay: i * 0.09, ease }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: item.bg,
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 8, padding: '40px 44px',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s ease, background 0.25s ease',
                  display: 'flex', flexDirection: 'column', gap: 14, minHeight: 160,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.035)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.background = item.bg
                }}
              >
                <p style={{ fontFamily: 'var(--font-bradford)', fontSize: 30, color: '#ffffff', margin: 0, letterSpacing: '-0.025em', lineHeight: 1.0 }}>{item.label}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.38)', margin: 0, lineHeight: 1.55 }}>{item.sub}</p>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.25)', marginTop: 'auto' }}>→</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
