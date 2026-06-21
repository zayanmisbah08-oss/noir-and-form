import { Suspense, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingBooks from '../components/three/FloatingBooks'
import { useResponsive } from '../hooks/useResponsive'

const ease = [0.25, 0, 0.3, 1]

const ARTICLES = [
  {
    id: '01', category: 'MATERIAL CULTURE',
    title: 'The Return of Patinated Brass in Contemporary Residential Design',
    excerpt: 'After decades of chrome and stainless steel dominance, patinated brass — once dismissed as nostalgic — has re-emerged as the material of choice for designers seeking surfaces that carry the trace of time.',
    date: 'APRIL 2025', readTime: '8 MIN READ',
  },
  {
    id: '02', category: 'PHILOSOPHY',
    title: 'Against the Concept Kitchen: Why Cooking Spaces Should Feel Like Rooms',
    excerpt: 'The "concept kitchen" — that gleaming, appliance-free slab of Calacatta marble — has become a prestige symbol emptied of function. We make the case for kitchens that are, above all, rooms.',
    date: 'MARCH 2025', readTime: '12 MIN READ',
  },
  {
    id: '03', category: 'PROCESS',
    title: 'How We Source: A Material Methodology for the Long View',
    excerpt: 'Material sourcing is not procurement. It is a design act — one that happens before any line is drawn. Here we document the approach that underpins every commission we take.',
    date: 'JANUARY 2025', readTime: '10 MIN READ',
  },
  {
    id: '04', category: 'SPATIAL THEORY',
    title: 'On the Threshold: The Overlooked Architecture of Doors',
    excerpt: 'The door is the smallest room in a house. A transition, a pause, a framing device — and entirely too often, an afterthought. We examine why threshold design is among the most consequential decisions in a residential project.',
    date: 'NOVEMBER 2024', readTime: '9 MIN READ',
  },
  {
    id: '05', category: 'FIELD NOTES',
    title: 'Tokyo: What Wabi-Sabi Means When You Actually Go',
    excerpt: 'After three weeks in Japan studying cha-shitsu architecture and contemporary Kyoto craft, we returned with a set of convictions — and a few corrections to the received wisdom about wabi-sabi in Western design discourse.',
    date: 'SEPTEMBER 2024', readTime: '14 MIN READ',
  },
]

const CATEGORIES = ['ALL', 'MATERIAL CULTURE', 'PHILOSOPHY', 'PROCESS', 'SPATIAL THEORY', 'FIELD NOTES']

function ArticleEntry({ article, index }) {
  const { isMobile, isTablet, isNarrow } = useResponsive()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
      style={{ borderTop: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', willChange: 'opacity, transform' }}
    >
      {isNarrow ? (
        /* Mobile / tablet layout */
        <div style={{ padding: isMobile ? '24px 0 20px' : '30px 0 24px' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(255,255,255,0.22)' }}>
              {article.id}
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {article.category}
            </span>
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-albra)', fontWeight: 400,
              fontSize: isMobile ? 18 : 22, lineHeight: 1.22,
              letterSpacing: '0.01em', color: '#f5f5f0',
              margin: '0 0 10px', transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(245,245,240,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#f5f5f0' }}
          >
            {article.title}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: '#9fabad', margin: '0 0 12px' }}>
            {article.excerpt}
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', margin: 0 }}>
              {article.date}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', margin: 0 }}>
              {article.readTime}
            </p>
          </div>
        </div>
      ) : (
        /* Desktop layout */
        <div style={{ display: 'grid', gridTemplateColumns: '36px 1fr auto', gap: '0 48px', padding: '38px 0' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.22)', paddingTop: 5 }}>
            {article.id}
          </span>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.32)', margin: '0 0 14px' }}>
              {article.category}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-albra)', fontWeight: 400,
                fontSize: 'clamp(18px, 2.2vw, 26px)', lineHeight: 1.2,
                letterSpacing: '0.01em', color: '#f5f5f0',
                margin: '0 0 14px', maxWidth: 680,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(245,245,240,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#f5f5f0' }}
            >
              {article.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: '#9fabad', maxWidth: 620, margin: 0 }}>
              {article.excerpt}
            </p>
          </div>
          <div style={{ textAlign: 'right', paddingTop: 5, flexShrink: 0, minWidth: 100 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.22)', textTransform: 'uppercase', margin: '0 0 8px' }}>
              {article.date}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', margin: 0 }}>
              {article.readTime}
            </p>
          </div>
        </div>
      )}
    </motion.article>
  )
}

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const { isMobile, isTablet, isNarrow, isDesktop, navH } = useResponsive()
  const hPad = isMobile ? '24px' : isTablet ? '40px' : '80px'

  const filteredArticles = activeCategory === 'ALL'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

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
          flex: isDesktop ? '0 0 50%' : '1',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? `48px 24px 64px` : isTablet ? `56px 40px 72px` : '80px 48px 80px 80px',
          position: 'relative', zIndex: 2,
        }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 32 }}
          >
            Thinking in public
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: 88, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.22, ease }}
              style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(52px, 13vw, 104px)', lineHeight: 1.02, letterSpacing: '0.012em', color: '#f5f5f0', margin: '0 0 28px' }}
            >
              The Journal.
            </motion.h1>
          </div>

          <motion.p
            initial={{ y: 32, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, delay: 0.5, ease }}
            style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 15 : 18, lineHeight: 1.65, color: '#9fabad', maxWidth: 420 }}
          >
            Essays and observations on material culture, spatial theory, and the practice of considered design. Published when we have something to say.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.72 }} style={{ marginTop: 36 }}>
            <button
              style={{
                background: 'transparent', color: '#f5f5f0',
                border: '1px solid rgba(255,255,255,0.28)', borderRadius: 2,
                padding: '12px 24px', fontFamily: 'var(--font-body)', fontSize: 13,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' }}
            >
              SUBSCRIBE TO NEW ESSAYS
            </button>
          </motion.div>
        </div>

        {/* Right: FloatingBooks — desktop only */}
        {isDesktop && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.08 }}
            style={{ flex: '0 0 50%', position: 'relative', height: '100vh' }}
          >
            <Suspense fallback={null}><FloatingBooks /></Suspense>
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to left, transparent 38%, #191b1f 100%)' }} />
          </motion.div>
        )}

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, transparent, #191b1f)', zIndex: 3, pointerEvents: 'none' }} />
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section style={{ background: '#191b1f', padding: `${isMobile ? '28px' : '40px'} ${hPad} 0` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: 'transparent',
                  color: activeCategory === cat ? '#f5f5f0' : 'rgba(255,255,255,0.32)',
                  border: `1px solid ${activeCategory === cat ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.12)'}`,
                  borderRadius: 2,
                  padding: isMobile ? '7px 12px' : '8px 16px',
                  fontFamily: 'var(--font-body)', fontSize: isMobile ? 10 : 11, fontWeight: 400,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all 0.18s ease',
                }}
                onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.color = '#f5f5f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)' } }}
                onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.color = 'rgba(255,255,255,0.32)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' } }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section style={{ background: '#191b1f', padding: `16px ${hPad} ${isMobile ? '40px' : '48px'}` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filteredArticles.map((article, i) => (
                <ArticleEntry key={article.id} article={article} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 40,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
            gap: 20,
          }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {filteredArticles.length} {filteredArticles.length === 1 ? 'essay' : 'essays'} · Vol. I
            </p>
            <button
              style={{
                background: 'transparent', color: 'rgba(255,255,255,0.45)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 2,
                padding: '12px 24px', fontFamily: 'var(--font-body)', fontSize: 13,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                cursor: 'pointer', transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#f5f5f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >
              LOAD MORE
            </button>
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <section style={{ background: '#111316', padding: `${isMobile ? '64px' : '96px'} ${hPad}` }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isNarrow ? '1fr' : '1fr 1fr',
          gap: isNarrow ? 40 : 80,
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.85, ease }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', margin: '0 0 20px' }}>
              The Letter
            </p>
            <h2 style={{ fontFamily: 'var(--font-albra)', fontWeight: 400, fontSize: 'clamp(26px, 4vw, 48px)', lineHeight: 1.1, letterSpacing: '0.015em', color: '#f5f5f0', margin: '0 0 16px' }}>
              Occasional essays.<br /><em>No frequency promised.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: isMobile ? 14 : 16, lineHeight: 1.65, color: '#9fabad', margin: 0 }}>
              We publish when we have something to say. Subscribers receive each new essay directly. No editorial calendar — just writing when the work demands it.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.15, ease }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="email" placeholder="Your email address"
                style={{
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 2,
                  padding: '14px 20px', fontFamily: 'var(--font-body)', fontSize: 15, color: '#f5f5f0',
                  outline: 'none', width: '100%', transition: 'border-color 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.45)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)' }}
              />
              <button
                style={{
                  background: 'transparent', color: '#f5f5f0',
                  border: '1px solid rgba(255,255,255,0.35)', borderRadius: 2,
                  padding: '14px 28px', fontFamily: 'var(--font-body)', fontSize: 13,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: 'pointer', width: '100%', transition: 'all 0.18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.color = '#ffffff' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#f5f5f0' }}
              >
                SUBSCRIBE
              </button>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.25)', margin: '4px 0 0', letterSpacing: '0.05em' }}>
                No frequency promised. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
