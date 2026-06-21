import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GeometricConstellation from '../components/three/GeometricConstellation'
import { useResponsive } from '../hooks/useResponsive'

const ease = [0.16, 1, 0.3, 1]

const SERVICES = [
  {
    num: '01',
    name: 'Private Residences',
    tagline: 'Where life is most itself.',
    body: 'We approach every residential commission as a sustained collaboration — a dialogue between our spatial instincts and the client\'s way of inhabiting the world. From preliminary concept through to furniture selection and art placement, we remain involved at every scale and every decision.',
    tags: ['Spatial concept & mood', 'Architecture coordination', 'FF&E specification', 'Art & object curation', 'Final installation'],
    accentBg: 'rgba(252,237,225,0.06)',
    accentLine: '#fcede1',
  },
  {
    num: '02',
    name: 'Hospitality & Hotels',
    tagline: 'Spaces guests return to.',
    body: 'Our hospitality practice is built on the belief that great hotel interiors are not about spectacle — they are about belonging. We design spaces that feel simultaneously public and intimate, brand-defining and quietly human. Every touchpoint considered from lobby to guest room.',
    tags: ['Concept & brand alignment', 'Public realm design', 'Guest room typologies', 'F&B environments', 'Brand material guide'],
    accentBg: 'rgba(24,111,100,0.09)',
    accentLine: '#186f64',
  },
  {
    num: '03',
    name: 'Cultural Institutions',
    tagline: 'Architecture that serves the work.',
    body: 'Galleries, libraries, and creative studios designed to amplify rather than compete. We believe the architecture of culture should know when to step forward and when to disappear — creating the precise conditions for each work, each reading, each moment of encounter.',
    tags: ['Gallery spatial strategy', 'Environmental lighting', 'Wayfinding systems', 'Material specifications', 'Contractor coordination'],
    accentBg: 'rgba(83,110,255,0.08)',
    accentLine: '#536eff',
  },
]

const handleTiltMove = (e) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10
  const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -7
  el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.012)`
  el.style.transition = 'transform 0.1s ease'
}
const handleTiltLeave = (e) => {
  const el = e.currentTarget
  el.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)'
  el.style.transition = 'transform 0.55s ease'
}

export default function Services() {
  const { isMobile, isTablet, isNarrow, isDesktop, navH } = useResponsive()
  const hPad = isMobile ? '24px' : isTablet ? '40px' : '80px'

  return (
    <div style={{ background: '#191b1f' }}>

      {/* ── HERO ── */}
      <section style={{
        background: '#000000', minHeight: '100vh',
        display: 'flex',
        flexDirection: isNarrow ? 'column' : 'row',
        alignItems: isNarrow ? 'flex-start' : 'stretch',
        position: 'relative', paddingTop: navH, overflow: 'hidden',
      }}>
        <div style={{
          flex: isDesktop ? '0 0 50%' : '1',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? `48px 24px 64px` : isTablet ? `56px 40px 72px` : '80px 48px 80px 80px',
          position: 'relative', zIndex: 2,
        }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 24 }}
          >
            What we do
          </motion.p>

          <motion.h1
            initial={{ y: 56, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.25, ease }}
            style={{ fontFamily: 'var(--font-bradford)', fontWeight: 500, fontSize: 'clamp(44px, 11vw, 104px)', lineHeight: 1.0, letterSpacing: '-0.04em', color: '#ffffff', margin: '0 0 28px' }}
          >
            Three areas<br />of practice.
          </motion.h1>

          <motion.p
            initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.45, ease }}
            style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 17, lineHeight: 1.67, color: 'rgba(255,255,255,0.48)', maxWidth: 430 }}
          >
            Residential. Hospitality. Cultural. One coherent approach — precision, material intelligence, and the conviction that beauty is never incidental.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            style={{ marginTop: 36, display: 'flex', gap: isMobile ? 20 : 32, flexWrap: 'wrap' }}
          >
            {['01 Residential', '02 Hospitality', '03 Cultural'].map((s, i) => (
              <a
                key={s}
                href={`#svc-${i}`}
                style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
              >
                {s}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: GeometricConstellation — all screens, stacked on mobile */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          style={{
            flex: isDesktop ? '0 0 50%' : 'none',
            width: isNarrow ? '100%' : undefined,
            position: 'relative',
            height: isMobile ? '280px' : isTablet ? '360px' : '100vh',
          }}
        >
          <Suspense fallback={null}><GeometricConstellation /></Suspense>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: isNarrow
              ? 'linear-gradient(to bottom, #000000 0%, transparent 30%), linear-gradient(to top, #191b1f 0%, transparent 25%)'
              : `
                radial-gradient(ellipse 92% 92% at 58% 50%, transparent 22%, #000000 100%),
                linear-gradient(to left, transparent 58%, #000000 100%)
              `,
          }} />
        </motion.div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 130, background: 'linear-gradient(to bottom, transparent, #191b1f)', zIndex: 3, pointerEvents: 'none' }} />
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {SERVICES.map((svc, i) => (
        <section
          key={svc.num}
          id={`svc-${i}`}
          style={{
            background: '#191b1f',
            padding: i === 0
              ? `${isMobile ? '56px' : '80px'} ${hPad} ${isMobile ? '64px' : '96px'}`
              : `0 ${hPad} ${isMobile ? '64px' : '96px'}`,
          }}
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            {i > 0 && (
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', marginBottom: isMobile ? 48 : 80 }} />
            )}

            {/* Section label + headline */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr',
              gap: isNarrow ? 20 : 64,
              marginBottom: isMobile ? 32 : 48,
              alignItems: 'end',
            }}>
              <motion.div
                initial={{ opacity: 0, y: 44, rotateX: 12 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.88, ease }}
                style={{ perspective: '1000px' }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 16 }}>
                  {svc.num}
                </p>
                <h2 style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(26px, 4vw, 52px)', lineHeight: 1.08, letterSpacing: '0.015em', color: '#f5f5f0', margin: '0 0 12px' }}>
                  {svc.name}
                </h2>
                <p style={{ fontFamily: 'var(--font-albra)', fontStyle: 'italic', fontSize: isMobile ? 16 : 19, color: 'rgba(245,245,240,0.44)', margin: 0, letterSpacing: '0.01em' }}>
                  {svc.tagline}
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.78, delay: 0.1, ease: 'easeOut' }}
                style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 14 : 16, lineHeight: 1.75, color: '#9fabad', margin: 0 }}
              >
                {svc.body}
              </motion.p>
            </div>

            {/* Deliverables + CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 48, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.88, delay: 0.18, ease }}
              style={{ perspective: '1000px' }}
            >
              <div
                style={{
                  background: svc.accentBg,
                  borderLeft: `2px solid ${svc.accentLine}`,
                  borderRadius: 4,
                  padding: isMobile ? '28px 20px' : isTablet ? '32px 36px' : '36px 44px',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? 20 : 40,
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  willChange: 'transform',
                }}
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {svc.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-body)', fontSize: isMobile ? 12 : 13,
                      color: 'rgba(255,255,255,0.48)',
                      padding: isMobile ? '6px 11px' : '7px 14px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 2,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
                  <div
                    style={{
                      color: '#f5f5f0', background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.28)',
                      borderRadius: 2, padding: '12px 24px',
                      fontFamily: 'var(--font-body)', fontSize: 14,
                      cursor: 'pointer', transition: 'all 0.22s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#ffffff' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = '#f5f5f0' }}
                  >
                    Enquire →
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── CTA CLOSER ── */}
      <section style={{ background: '#000000', padding: `${isMobile ? '80px' : '112px'} ${hPad}`, textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <motion.h2
            initial={{ y: 44, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease }}
            style={{ fontFamily: 'var(--font-bradford)', fontWeight: 500, fontSize: 'clamp(40px, 8vw, 84px)', lineHeight: 1.02, letterSpacing: '-0.04em', color: '#ffffff', margin: `0 0 ${isMobile ? '28px' : '40px'}` }}
          >
            Ready to begin?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', margin: `0 0 ${isMobile ? '32px' : '44px'}` }}
          >
            Every collaboration starts with a conversation. Tell us about your project and we'll respond within 48 hours.
          </motion.p>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <div
              style={{
                display: 'inline-block', color: '#000000', background: '#ffffff',
                border: '1px solid transparent', borderRadius: '9999px',
                padding: isMobile ? '15px 40px' : '18px 52px',
                fontFamily: 'var(--font-body)', fontSize: 15, cursor: 'pointer', transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.48)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#000000'; e.currentTarget.style.borderColor = 'transparent' }}
            >
              Start a conversation
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
