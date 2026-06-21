/* ServicesSection — Letter tinted gallery panels on Paper White
   Three service cards: Peach Wall · Mint Wall · Lavender Wall
   Albra 28px card subheads · Neufile/Inter body · zero shadow
   Framer Motion: stagger whileInView entrance + whileHover lift */
import { motion } from 'framer-motion'

const SERVICES = [
  {
    wall: 'var(--color-peach-wall)',    /* #fcede1 */
    number: '01',
    name: 'Private Residences',
    description: 'Complete design services for primary homes, secondary residences, and pied-à-terre — from concept and spatial planning through to final installation and art curation.',
    scope: 'Architecture · Interiors · Art Curation',
    icon: '◈',
  },
  {
    wall: 'var(--color-mint-wall)',     /* #eefcef */
    number: '02',
    name: 'Hospitality & Hotels',
    description: 'We design spaces where guests arrive as visitors and leave as devotees. Our hospitality practice balances brand identity with timeless material elegance and operational precision.',
    scope: 'Concept · FF&E · Guest Experience',
    icon: '◇',
  },
  {
    wall: 'var(--color-lavender-wall)', /* #e6def0 */
    number: '03',
    name: 'Cultural Institutions',
    description: 'Galleries, museums, and creative studios designed to amplify the work they contain. We believe the architecture should serve the art — invisible when it needs to be, magnificent when it counts.',
    scope: 'Galleries · Libraries · Studios',
    icon: '◉',
  },
]

const ease = [0.16, 1, 0.3, 1]

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ y: 64, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.85, delay: index * 0.12, ease }}
      whileHover={{ y: -6, transition: { duration: 0.28, ease: 'easeOut' } }}
      style={{
        background: service.wall,
        borderRadius: 'var(--r-none)',   /* Letter: sharp 0px cards */
        padding: 40,
        display: 'flex', flexDirection: 'column',
        gap: 20, minHeight: 440,
      }}
    >
      {/* Top row: number + icon */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12, color: 'rgba(0,0,0,0.3)',
          letterSpacing: '0.06em',
        }}>
          {service.number}
        </span>
        <span style={{
          fontFamily: 'var(--font-albra)',
          fontSize: 24, color: 'rgba(0,0,0,0.2)',
        }}>
          {service.icon}
        </span>
      </div>

      {/* Service name — Albra 28px (Letter subheading scale) */}
      <h3 style={{
        fontFamily: 'var(--font-albra)',
        fontWeight: 400, fontSize: 28,
        lineHeight: 1.15, letterSpacing: '0.01em',
        color: 'var(--color-vault-ink)',
        margin: 0,
      }}>
        {service.name}
      </h3>

      {/* Body — Neufile/Inter 16px */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 400, fontSize: 16,
        lineHeight: 1.6, color: 'rgba(25,27,31,0.75)',
        margin: 0, flex: 1,
      }}>
        {service.description}
      </p>

      {/* Scope line — Letter ghost text link style */}
      <div style={{
        borderTop: '1px solid rgba(0,0,0,0.10)',
        paddingTop: 20, marginTop: 'auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13, color: 'rgba(0,0,0,0.42)',
          margin: 0, letterSpacing: '0.01em',
        }}>
          {service.scope}
        </p>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16, color: 'rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease',
        }}>
          →
        </span>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" style={{
      background: 'var(--color-paper-white)',
      padding: '128px 80px 140px',
    }}>
      <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 48, marginBottom: 72, alignItems: 'end',
        }}>
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            style={{
              fontFamily: 'var(--font-albra)',
              fontWeight: 400, fontSize: 'clamp(36px, 4.5vw, 56px)',
              lineHeight: 1.1, letterSpacing: '0.015em',
              color: 'var(--color-obsidian)', margin: 0,
            }}
          >
            What we do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400, fontSize: 16, lineHeight: 1.6,
              color: 'var(--color-brushed-steel)',
              maxWidth: 340, marginLeft: 'auto',
            }}
          >
            Three areas of practice, one coherent design philosophy — precision, material intelligence, and the conviction that beauty is never incidental.
          </motion.p>
        </div>

        {/* Service card grid — Letter tinted walls, gap-0 flush */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          border: '1px solid var(--color-hairline)',
          outline: '1px solid var(--color-hairline)',
        }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
