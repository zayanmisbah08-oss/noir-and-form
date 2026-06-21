/* AboutSection — Custo gunmetal canvas (#9ea29f)
   Two-column: caption label left · heading + body right
   Albra/DM Serif Display headings · Custo stat row
   Framer Motion: split-entrance (left ← → right) */
import { useRef } from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { value: '12', suffix: '', label: 'years of practice' },
  { value: '200', suffix: '+', label: 'projects completed' },
  { value: '3', suffix: '', label: 'continents' },
  { value: '48', suffix: '', label: 'awards received' },
]

const ease = [0.16, 1, 0.3, 1]

export default function AboutSection() {
  return (
    <section id="studio" style={{
      background: 'var(--color-canvas-gunmetal)',
      padding: '128px 80px 100px',
    }}>
      <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto' }}>

        {/* Two-column text block — Custo layout pattern */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: 48, marginBottom: 96,
          alignItems: 'start',
        }}>
          {/* Caption label — Custo left column */}
          <motion.div
            initial={{ x: -28, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400, fontSize: 15, lineHeight: 1.55,
              color: 'rgba(255,255,255,0.65)',
              paddingTop: 6,
            }}>
              We create environments that articulate the intersection of material culture and lived experience.
            </p>
            <div style={{
              width: 32, height: 1,
              background: 'rgba(255,255,255,0.3)',
              marginTop: 32,
            }} />
          </motion.div>

          {/* Heading + body — Letter/Albra pattern */}
          <motion.div
            initial={{ x: 28, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            <h2 style={{
              fontFamily: 'var(--font-albra)',
              fontWeight: 400,
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              lineHeight: 1.1, letterSpacing: '0.015em',
              color: '#ffffff', margin: '0 0 28px',
            }}>
              Spaces that remember<br />who you are.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400, fontSize: 19, lineHeight: 1.65,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: 540,
            }}>
              Noir &amp; Form was founded in London in 2012. We work with private clients, developers, and cultural institutions to design interiors that are precise, meaningful, and quietly extraordinary. Our practice spans residential, hospitality, and cultural commissions across three continents.
            </p>

            <motion.button
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{
                marginTop: 36,
                background: 'transparent', color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.45)',
                borderRadius: 'var(--r-pill)',
                padding: '14px 32px',
                fontFamily: 'var(--font-body)',
                fontWeight: 400, fontSize: 14,
                cursor: 'pointer',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.color = '#4b514d'
                e.currentTarget.style.borderColor = 'transparent'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
              }}
            >
              Read our story →
            </motion.button>
          </motion.div>
        </div>

        {/* Stats row — Custo style, white on gunmetal */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.18)',
          paddingTop: 48,
        }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.09, ease }}
              style={{
                paddingRight: 32,
                borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                paddingLeft: i > 0 ? 32 : 0,
              }}
            >
              <p style={{
                fontFamily: 'var(--font-albra)',
                fontWeight: 400, fontSize: 52,
                lineHeight: 1.0, color: '#ffffff', margin: '0 0 8px',
              }}>
                {stat.value}
                <span style={{ fontSize: 28, opacity: 0.6 }}>{stat.suffix}</span>
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400, fontSize: 14,
                color: 'rgba(255,255,255,0.48)',
                margin: 0,
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
