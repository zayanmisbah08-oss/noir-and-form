import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RoomDiorama from '../components/three/RoomDiorama'
import { useResponsive } from '../hooks/useResponsive'

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
  const { isMobile, isTablet, isNarrow } = useResponsive()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: 'easeOut' }}
      style={{ borderTop: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', willChange: 'opacity, transform' }}
    >
      {/* Metadata row */}
      {isNarrow ? (
        /* Mobile / tablet: stacked layout */
        <div style={{ padding: '20px 0 16px' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--font-vivid)', fontSize: 12, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.02em' }}>
              {project.id}
            </span>
            <span style={{ fontFamily: 'var(--font-vivid)', fontSize: 12, color: 'rgba(255,255,255,0.36)' }}>
              {project.category}
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-vivid)', fontWeight: 400,
              fontSize: isMobile ? 22 : 26, lineHeight: 1.2,
              letterSpacing: '-0.01em', color: '#f5f5f0', margin: '0 0 6px',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(245,245,240,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#f5f5f0' }}
          >
            {project.title}
          </h3>
          <span style={{ fontFamily: 'var(--font-vivid)', fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
            {project.location} · {project.year}
          </span>
        </div>
      ) : (
        /* Desktop: single row */
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
      )}

      {/* Photo */}
      <div style={{ height: isMobile ? 220 : isTablet ? 280 : 340, overflow: 'hidden', position: 'relative', marginBottom: 0 }}>
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
  const { isMobile, isTablet, isNarrow, isDesktop, pad, navH } = useResponsive()

  const hPad = isMobile ? '24px' : isTablet ? '40px' : '80px'

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        background: '#495764', minHeight: '100vh',
        display: 'flex',
        flexDirection: isNarrow ? 'column' : 'row',
        alignItems: isNarrow ? 'flex-start' : 'stretch',
        position: 'relative', paddingTop: navH, overflow: 'hidden',
      }}>
        <div style={{
          flex: isDesktop ? '0 0 55%' : '1',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? `48px 24px 64px` : isTablet ? `56px 40px 72px` : '80px 48px 80px 80px',
          position: 'relative', zIndex: 2,
        }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-vivid)', fontSize: 13, letterSpacing: '0.01em', textTransform: 'uppercase', color: 'rgba(255,253,249,0.35)', marginBottom: 28 }}
          >
            PORTFOLIO · 2018–2024
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: 96, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.22, ease }}
              style={{ fontFamily: 'var(--font-vivid)', fontWeight: 400, fontSize: 'clamp(52px, 12vw, 105px)', lineHeight: 1.0, letterSpacing: '-0.02em', color: '#fffdf9', margin: '0 0 36px' }}
            >
              OUR<br /><strong style={{ fontWeight: 700 }}>WORK.</strong>
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.5, ease }}
            style={{ fontFamily: 'var(--font-vivid)', fontSize: isMobile ? 16 : 18, lineHeight: 1.55, color: 'rgba(255,253,249,0.65)', maxWidth: 440 }}
          >
            Six years of commissions across private residences, hospitality, and cultural institutions — each treated as its own discipline.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.7 }} style={{ marginTop: 36 }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'inline-block', background: 'transparent', color: '#fffdf9',
                  border: '1px solid #fffdf9', borderRadius: 0,
                  padding: isMobile ? '11px 20px' : '12px 24px',
                  fontFamily: 'var(--font-vivid)', fontSize: 13, letterSpacing: '0.01em', textTransform: 'uppercase',
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

        {/* Right: RoomDiorama — all screens, stacked on mobile */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.1 }}
          style={{
            flex: isDesktop ? '0 0 45%' : 'none',
            width: isNarrow ? '100%' : undefined,
            position: 'relative',
            height: isMobile ? '280px' : isTablet ? '360px' : '100vh',
          }}
        >
          <Suspense fallback={null}><RoomDiorama /></Suspense>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: isNarrow
              ? 'linear-gradient(to bottom, #495764 0%, transparent 30%), linear-gradient(to top, #191b1f 0%, transparent 25%)'
              : 'linear-gradient(to left, transparent 38%, #495764 100%)',
          }} />
        </motion.div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 160, background: 'linear-gradient(to bottom, transparent, #191b1f)', zIndex: 3, pointerEvents: 'none' }} />
      </section>

      {/* ── MANIFESTO ── */}
      <section style={{ background: '#191b1f', padding: `${isMobile ? '56px' : '80px'} ${hPad} ${isMobile ? '48px' : '72px'}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: 'easeOut' }}
            style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(22px, 4vw, 50px)', lineHeight: 1.15, letterSpacing: '0.01em', color: '#f5f5f0', maxWidth: 900 }}
          >
            Six projects across residential, hospitality, and cultural — 2018 to 2024.
          </motion.p>
        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <section style={{ background: '#191b1f', padding: `0 ${hPad} ${isMobile ? '80px' : '128px'}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {PROJECTS.map((proj, i) => (
            <ProjectEntry key={proj.id} project={proj} index={i} />
          ))}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 40,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
            gap: 24,
          }}>
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
