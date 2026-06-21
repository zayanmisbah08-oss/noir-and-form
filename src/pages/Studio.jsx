import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DraftingDesk from '../components/three/DraftingDesk'
import { useResponsive } from '../hooks/useResponsive'

const ease = [0.16, 1, 0.3, 1]

const CARDS = [
  {
    tag: '01 / Philosophy',
    title: 'Designed from inside out.',
    body: 'We believe the best interiors are those that disappear — not through minimalism for its own sake, but through an absolute alignment between space, material, and the person who inhabits them. We design from the inside out: beginning with how a space will be used, felt, and remembered.',
    label: 'APPROACH',
  },
  {
    tag: '02 / Process',
    title: 'Every project listens first.',
    body: "Every project begins with a period of deep listening. We visit the site, study the light, understand the client's rituals. From this foundation we develop a material concept — a coherent set of decisions about texture, tone, weight, and light — that guides every subsequent choice.",
    label: 'METHOD',
  },
  {
    tag: '03 / Values',
    title: 'Small. Permanent. Deliberate.',
    body: 'We work with a small number of clients at a time. This is not a constraint — it is a commitment. Our best work emerges from sustained attention, repeated site visits, and the kind of trust that only develops over time. We are not a production studio. We are a design practice.',
    label: 'CONVICTION',
  },
]

const TEAM = [
  {
    name: 'Margaux Delacroix',
    role: 'Founding Principal',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80&auto=format',
    bio: 'Former head of residential at Zaha Hadid Architects. Founded Noir & Form in 2012 with a conviction that luxury is precision, not excess.',
  },
  {
    name: 'James Whitmore',
    role: 'Design Director',
    img: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80&auto=format',
    bio: "Material strategist and spatial thinker. Responsible for the practice's material library — one of the most extensive in Europe.",
  },
  {
    name: 'Yuki Tanaka',
    role: 'Material Specialist',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format',
    bio: 'A decade at Kengo Kuma & Associates. Leads our cultural institution practice and all Asia-Pacific commissions.',
  },
]

const STATS = [
  { val: '12',   lab: 'Years of practice' },
  { val: '200+', lab: 'Projects completed' },
  { val: '3',    lab: 'Continents' },
  { val: '48',   lab: 'Awards received' },
]

function CardCarousel() {
  const { isMobile, isTablet, isNarrow, isDesktop } = useResponsive()
  const items = [...CARDS, ...CARDS]
  const hPad  = isMobile ? '24px' : isTablet ? '40px' : '80px'

  return (
    <section style={{ background: '#191b1f', padding: `${isMobile ? '48px' : '72px'} 0 ${isMobile ? '64px' : '96px'}`, overflow: 'hidden' }}>
      <div style={{ padding: `0 ${hPad} ${isMobile ? '32px' : '48px'}` }}>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', margin: 0 }}
        >
          How we work
        </motion.p>
      </div>

      <motion.div
        animate={{ x: ['0vw', '-300vw'] }}
        transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
        style={{ display: 'flex', width: '600vw', willChange: 'transform' }}
      >
        {items.map((card, i) => (
          <div
            key={i}
            style={{ width: '100vw', padding: `0 ${hPad}`, boxSizing: 'border-box', flexShrink: 0 }}
          >
            <div style={{
              background: '#0d0f11',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 6,
              padding: isMobile ? '36px 28px 40px' : isTablet ? '48px 48px 56px' : '64px 72px 72px',
              display: 'grid',
              gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr',
              gap: isNarrow ? 28 : 72,
              alignItems: 'center',
              minHeight: isNarrow ? 'auto' : 340,
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: `0 0 ${isMobile ? '18px' : '28px'}` }}>
                  {card.tag}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-albra)', fontWeight: 400,
                  fontSize: isMobile ? 'clamp(24px, 7vw, 36px)' : 'clamp(28px, 4.2vw, 54px)',
                  lineHeight: 1.07, letterSpacing: '0.01em', color: '#f5f5f0', margin: 0,
                }}>
                  {card.title}
                </h3>
              </div>

              <div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: 18 }}>
                  {card.label}
                </span>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: isMobile ? 14 : 16, lineHeight: 1.78,
                  color: '#9fabad', margin: `0 0 ${isMobile ? '20px' : '32px'}`,
                }}>
                  {card.body}
                </p>
                <div style={{ width: 32, height: 1.5, background: 'rgba(255,255,255,0.28)' }} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default function Studio() {
  const { isMobile, isTablet, isNarrow, isDesktop, navH } = useResponsive()
  const hPad = isMobile ? '24px' : isTablet ? '40px' : '80px'

  return (
    <div style={{ background: '#191b1f' }}>

      {/* ── HERO ── */}
      <section style={{
        background: '#191b1f', minHeight: '100vh',
        display: 'flex',
        flexDirection: isNarrow ? 'column' : 'row',
        alignItems: isNarrow ? 'flex-start' : 'stretch',
        position: 'relative', paddingTop: navH, overflow: 'hidden',
      }}>
        <div style={{
          flex: isDesktop ? '0 0 52%' : '1',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? `48px 24px 64px` : isTablet ? `56px 40px 72px` : '80px 48px 80px 80px',
          position: 'relative', zIndex: 2,
        }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 36 }}
          >
            Studio · London & New York
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: 88, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.22, ease }}
              style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(44px, 10vw, 102px)', lineHeight: 1.03, letterSpacing: '0.012em', color: '#f5f5f0', margin: 0 }}
            >
              A practice of{' '}
              <motion.em
                initial={{ color: '#f5f5f0' }} animate={{ color: '#536eff' }}
                transition={{ duration: 0.55, delay: 1.05 }}
                style={{ fontStyle: 'italic' }}
              >
                quiet
              </motion.em>
              {' '}distinction.
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.5, ease }}
            style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 16 : 18, lineHeight: 1.65, color: '#9fabad', maxWidth: 460, marginTop: 32 }}
          >
            Founded in London in 2012, Noir & Form is a design practice specialising in environments of sustained material intelligence and spatial clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap' }}
          >
            <Link to="/work" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  display: 'inline-block', background: 'transparent', color: '#f5f5f0',
                  border: '1px solid rgba(255,255,255,0.22)', borderRadius: 2,
                  padding: '13px 28px', fontFamily: 'var(--font-body)', fontSize: 13,
                  letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                  transition: 'border-color 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
              >
                See Our Projects
              </div>
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: 'none', alignSelf: 'center',
                fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.32)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.32)' }}
            >
              Get in touch →
            </Link>
          </motion.div>
        </div>

        {/* Right: DraftingDesk — desktop only */}
        {isDesktop && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.1 }}
            style={{ flex: '0 0 48%', position: 'relative', height: '100vh' }}
          >
            <Suspense fallback={null}><DraftingDesk /></Suspense>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: `
                radial-gradient(ellipse 90% 90% at 60% 50%, transparent 20%, #191b1f 100%),
                linear-gradient(to left, transparent 48%, #191b1f 100%)
              `,
            }} />
          </motion.div>
        )}

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, #191b1f)', zIndex: 3, pointerEvents: 'none' }} />
      </section>

      {/* ── CARD CAROUSEL ── */}
      <CardCarousel />

      {/* ── TEAM ── */}
      <section style={{ background: '#111316', padding: `${isMobile ? '64px' : '88px'} ${hPad} ${isMobile ? '72px' : '96px'}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end',
            marginBottom: isMobile ? 48 : 72,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            paddingBottom: isMobile ? 36 : 48,
            gap: 24,
          }}>
            <motion.div
              initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.85, ease }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 20 }}>
                The people
              </p>
              <h2 style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(30px, 5vw, 68px)', lineHeight: 1.06, letterSpacing: '0.012em', color: '#f5f5f0', margin: 0 }}>
                A small,<br />permanent team.
              </h2>
            </motion.div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#9fabad', maxWidth: 290, lineHeight: 1.65, textAlign: isMobile ? 'left' : 'right' }}>
              No contractors, no rotating studios. The same people from first sketch to final installation.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? 48 : 40,
          }}>
            {TEAM.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.82, delay: i * 0.1, ease }}
              >
                <div style={{
                  aspectRatio: isMobile ? '4/3' : '3/4',
                  overflow: 'hidden', borderRadius: 2, marginBottom: 20,
                  backgroundImage: `url(${person.img})`,
                  backgroundSize: 'cover', backgroundPosition: 'center center',
                  filter: 'grayscale(0.15) brightness(0.78)',
                }} />
                <p style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 21, lineHeight: 1.12, letterSpacing: '0.01em', color: '#f5f5f0', margin: '0 0 6px' }}>
                  {person.name}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: '0 0 14px' }}>
                  {person.role}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: '#9fabad', margin: 0 }}>
                  {person.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#191b1f', padding: `${isMobile ? '56px' : '80px'} ${hPad}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: isMobile ? 40 : 56,
            gap: isMobile ? '40px 20px' : 0,
          }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.lab}
                initial={{ y: 32, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.75, delay: i * 0.09, ease }}
                style={{
                  borderRight: !isMobile && i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingLeft: !isMobile && i > 0 ? 40 : 0, paddingRight: !isMobile ? 40 : 0,
                }}
              >
                <p style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: isMobile ? 52 : 68, lineHeight: 1.0, letterSpacing: '0.01em', color: '#f5f5f0', margin: `0 0 ${isMobile ? '10px' : '14px'}` }}>
                  {s.val}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', margin: 0 }}>
                  {s.lab}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS QUOTE ── */}
      <section style={{ background: '#191b1f', padding: `0 ${hPad} ${isMobile ? '64px' : '96px'}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, ease }}
            style={{
              background: '#0e1012', borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.07)',
              padding: isMobile ? '48px 28px' : isTablet ? '56px 52px' : '72px 88px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(20px, 3.5vw, 46px)', lineHeight: 1.1, letterSpacing: '0.015em', color: '#f5f5f0', margin: '0 auto 24px', maxWidth: 760, fontStyle: 'italic' }}>
              "The greatest luxury is the absence of{' '}
              <em style={{ color: '#536eff', fontStyle: 'normal' }}>noise</em>."
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
              — Wallpaper*, Issue 218
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
