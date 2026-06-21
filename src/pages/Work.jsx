/* Work page — Vivid+Co hero (#495764) → dark vault-ink content
   Shorter manifesto copy · smooth fade-in scroll animations · RoomDiorama ambient loop */
import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RoomDiorama from '../components/three/RoomDiorama'

const ease = [0.25, 0, 0.3, 1]

const PROJECTS = [
  {
    id: '01', title: 'Maison Lumière', category: 'Private Residence',
    location: 'Paris, FR', year: '2024',
    img: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=1400&q=85&auto=format',
  },
  {
    id: '02', title: 'The Onyx Hotel', category: 'Hospitality',
    location: 'Tokyo, JP', year: '2024',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=85&auto=format',
  },
  {
    id: '03', title: 'Gallery Noir', category: 'Cultural Space',
    location: 'London, UK', year: '2023',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=85&auto=format',
  },
  {
    id: '04', title: 'Villa Serenità', category: 'Private Residence',
    location: 'Amalfi, IT', year: '2023',
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&q=85&auto=format',
  },
  {
    id: '05', title: 'Haus Morgen', category: 'Private Residence',
    location: 'Berlin, DE', year: '2022',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=85&auto=format',
  },
  {
    id: '06', title: 'The Black Pearl', category: 'Yacht Interior',
    location: 'Monaco', year: '2022',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=85&auto=format',
  },
]

function ProjectEntry({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: 'easeOut' }}
      style={{ borderTop: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', willChange: 'opacity, transform' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 40, padding: '28px 0 24px' }}>
        <span style={{ fontFamily: 'var(--font-vivid)', fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.02em', flexShrink: 0, width: 32 }}>
          {project.id}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-vivid)', fontWeight: 400,
            fontSize: 'clamp(22px, 2.8vw, 32px)', lineHeight: 1.2,
            letterSpacing: '-0.01em', color: '#f5f5f0', flex: 1, margin: 0,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'rgba(245,245,240,0.6)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#f5f5f0' }}
        >
          {project.title}
        </h3>
        <span style={{ fontFamily: 'var(--font-vivid)', fontSize: 14, color: 'rgba(255,255,255,0.36)', flexShrink: 0 }}>
          {project.category}
        </span>
        <span style={{ fontFamily: 'var(--font-vivid)', fontSize: 14, color: 'rgba(255,255,255,0.22)', flexShrink: 0 }}>
          {project.location} · {project.year}
        </span>
      </div>

      {/* Photo — fade+scale reveal instead of height animation for performance */}
      <div style={{ height: 340, overflow: 'hidden', position: 'relative', marginBottom: 0 }}>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: index * 0.03 + 0.15, ease: 'easeOut' }}
          style={{
            width: '100%', height: '100%', willChange: 'opacity, transform',
            backgroundImage: `url(${project.img})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            filter: 'grayscale(0.2) brightness(0.65)',
          }}
        />
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <div>
      {/* ── HERO (Vivid+Co slate veil — keeps bluish tone) ── */}
      <section style={{
        background: '#495764', minHeight: '100vh',
        display: 'flex', alignItems: 'stretch',
        position: 'relative', paddingTop: 72, overflow: 'hidden',
      }}>
        <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 48px 80px 80px', position: 'relative', zIndex: 2 }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-vivid)', fontSize: 14, letterSpacing: '0.01em', textTransform: 'uppercase', color: 'rgba(255,253,249,0.35)', marginBottom: 32 }}
          >
            PORTFOLIO · 2018–2024
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.22, ease }}
              style={{ fontFamily: 'var(--font-vivid)', fontWeight: 400, fontSize: 'clamp(64px, 9vw, 105px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: '#fffdf9', margin: '0 0 40px' }}
            >
              OUR<br /><strong style={{ fontWeight: 700 }}>WORK.</strong>
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.5, ease }}
            style={{ fontFamily: 'var(--font-vivid)', fontSize: 18, lineHeight: 1.55, color: 'rgba(255,253,249,0.65)', maxWidth: 440 }}
          >
            Six years of commissions across private residences, hospitality, and cultural institutions — each treated as its own discipline.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }} style={{ marginTop: 44 }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'inline-block', background: 'transparent', color: '#fffdf9',
                  border: '1px solid #fffdf9', borderRadius: 0, padding: '12px 24px',
                  fontFamily: 'var(--font-vivid)', fontSize: 14, letterSpacing: '0.01em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,253,249,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#fffdf9' }}
              >
                ENQUIRE ABOUT A PROJECT
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Right: RoomDiorama ambient loop */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.1 }}
          style={{ flex: '0 0 45%', position: 'relative', height: '100vh' }}
        >
          <Suspense fallback={null}><RoomDiorama /></Suspense>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to left, transparent 38%, #495764 100%)' }} />
        </motion.div>

        {/* Gradient bridge to dark section below */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to bottom, transparent, #191b1f)', zIndex: 3, pointerEvents: 'none' }} />
      </section>

      {/* ── MANIFESTO (dark — vault ink) ── */}
      <section style={{ background: '#191b1f', padding: '80px 80px 72px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: 'easeOut' }}
            style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 50px)', lineHeight: 1.15, letterSpacing: '0.01em', color: '#f5f5f0', maxWidth: 900 }}
          >
            Six projects across residential, hospitality, and cultural — 2018 to 2024.
          </motion.p>
        </div>
      </section>

      {/* ── PROJECT LIST (dark, smooth fade-in animations) ── */}
      <section style={{ background: '#191b1f', padding: '0 80px 128px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {PROJECTS.map((proj, i) => (
            <ProjectEntry key={proj.id} project={proj} index={i} />
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {PROJECTS.length} Projects · 2018–2024
            </p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: 'transparent', color: '#f5f5f0',
                  border: '1px solid rgba(255,255,255,0.22)', borderRadius: 0, padding: '12px 24px',
                  fontFamily: 'var(--font-body)', fontSize: 13, textTransform: 'uppercase',
                  letterSpacing: '0.1em', cursor: 'pointer', transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
              >
                START A PROJECT
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
