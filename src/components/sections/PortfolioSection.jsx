/* PortfolioSection — Sequel cinematic editorial cards
   Background: vault ink #191b1f (Letter system)
   Cards: 10px radius, scrim gradient, glassmorphism badge
   Framer Motion whileInView stagger + whileHover card lift (8px) */
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: '01',
    title: 'Maison Lumière',
    category: 'Private Residence',
    location: 'Paris, FR',
    year: '2024',
    bg: 'linear-gradient(145deg, #1a1c20 0%, #2c2f35 50%, #1e2128 100%)',
    accent: '#c0b89a',
  },
  {
    id: '02',
    title: 'The Onyx Hotel',
    category: 'Hospitality',
    location: 'Tokyo, JP',
    year: '2024',
    bg: 'linear-gradient(145deg, #161820 0%, #252830 50%, #1a1c24 100%)',
    accent: '#a8b4c0',
  },
  {
    id: '03',
    title: 'Gallery Noir',
    category: 'Cultural Space',
    location: 'London, UK',
    year: '2023',
    bg: 'linear-gradient(145deg, #181a1c 0%, #282a2e 50%, #1c1e22 100%)',
    accent: '#b0a8c0',
  },
]

const ease = [0.16, 1, 0.3, 1]

function ProjectCard({ project, index, style = {} }) {
  return (
    <motion.article
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.12, ease }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        borderRadius: 'var(--r-card)',
        overflow: 'hidden',
        cursor: 'pointer',
        /* Sequel card shadow */
        boxShadow: 'rgba(0,0,0,0.45) 0 12px 36px, rgba(255,255,255,0.07) 0 1px 0 inset',
        background: project.bg,
        ...style,
      }}
    >
      {/* Scrim — bottom-up gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 80%)',
        zIndex: 1,
      }} />

      {/* Subtle texture on the dark surface */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `radial-gradient(ellipse at 70% 30%, ${project.accent}18 0%, transparent 60%)`,
      }} />

      {/* Category badge — Sequel glassmorphism */}
      <div style={{
        position: 'absolute', top: 20, left: 20, zIndex: 2,
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderRadius: 'var(--r-pill)',
        padding: '5px 13px',
        border: '1px solid rgba(255,255,255,0.11)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500, fontSize: 10,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.85)',
      }}>
        {project.category}
      </div>

      <span style={{
        position: 'absolute', top: 20, right: 20, zIndex: 2,
        fontFamily: 'var(--font-body)',
        fontSize: 12, color: 'rgba(255,255,255,0.35)',
      }}>
        {project.year}
      </span>

      {/* Card text */}
      <div style={{
        position: 'absolute', bottom: 28, left: 28, right: 28, zIndex: 2,
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11, color: 'rgba(255,255,255,0.42)',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          {project.id} &nbsp;—&nbsp; {project.location}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-bradford)',
          fontWeight: 500, fontSize: 30,
          lineHeight: 1.1, letterSpacing: '-0.025em',
          color: '#ffffff', margin: 0,
        }}>
          {project.title}
        </h3>
      </div>
    </motion.article>
  )
}

export default function PortfolioSection() {
  return (
    <section id="work" style={{
      background: 'var(--color-vault-ink)',
      padding: '120px 80px 140px',
    }}>
      {/* Section header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', marginBottom: 72,
        maxWidth: 'var(--page-max-width)', margin: '0 auto 72px',
      }}>
        <motion.h2
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          style={{
            fontFamily: 'var(--font-bradford)',
            fontWeight: 500, fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 1.0, letterSpacing: '-0.035em',
            color: 'var(--color-chalk)', margin: 0,
          }}
        >
          Selected<br />Work
        </motion.h2>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="#"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14, color: 'rgba(255,255,255,0.4)',
            textDecoration: 'underline', textUnderlineOffset: 4,
            letterSpacing: '0.01em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
        >
          View all projects →
        </motion.a>
      </div>

      {/* Masonry-style card grid */}
      <div style={{
        maxWidth: 'var(--page-max-width)', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto',
        gap: 24,
      }}>
        {/* Large left card — tall portrait */}
        <div style={{ gridRow: '1 / 3' }}>
          <ProjectCard
            project={PROJECTS[0]}
            index={0}
            style={{ height: '100%', minHeight: 600 }}
          />
        </div>

        {/* Two stacked right cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ProjectCard
            project={PROJECTS[1]}
            index={1}
            style={{ aspectRatio: '16/9' }}
          />
          <ProjectCard
            project={PROJECTS[2]}
            index={2}
            style={{ aspectRatio: '4/3' }}
          />
        </div>
      </div>
    </section>
  )
}
