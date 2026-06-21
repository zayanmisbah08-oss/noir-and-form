import { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleField from '../components/three/ParticleField'

const ease = [0.16, 1, 0.3, 1]

const OFFICES = [
  { city: 'London',   addr: '14 Bruton Street\nMayfair, W1J 6LX',          phone: '+44 20 7000 0000' },
  { city: 'New York', addr: '11 West 53rd Street\nMidtown, NY 10019',       phone: '+1 212 000 0000' },
  { city: 'Paris',    addr: '8 Rue du Faubourg\nSaint-Honoré, 75008',       phone: '+33 1 00 00 00 00' },
]

export default function Contact() {
  const [email,   setEmail]   = useState('')
  const [message, setMessage] = useState('')
  const [focused, setFocused] = useState(null)
  const [sent,    setSent]    = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSent(true)
  }

  const inputStyle = (field) => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '17px 24px',
    border: `1px solid ${focused === field ? 'rgba(255,255,255,0.52)' : 'rgba(255,255,255,0.16)'}`,
    borderRadius: 8,
    background: 'rgba(255,255,255,0.04)',
    color: '#ffffff',
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    outline: 'none',
    transition: 'border-color 0.25s ease',
  })

  return (
    <div style={{ background: '#000000' }}>

      {/* ── FULL VIEWPORT (particles + headline + form) ── */}
      <section style={{
        background: '#000000',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        paddingTop: 72, overflow: 'hidden',
      }}>
        {/* Particle field — full-bleed background canvas */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Suspense fallback={null}><ParticleField /></Suspense>
        </div>

        {/* Radial fade to make particles recede at center */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,0,0,0.7) 0%, transparent 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 880, padding: '0 80px', width: '100%' }}>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 40 }}
          >
            Begin a conversation
          </motion.p>

          <motion.h1
            initial={{ y: 64, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.28, ease }}
            style={{
              fontFamily: 'var(--font-bradford)', fontWeight: 500,
              fontSize: 'clamp(52px, 8vw, 124px)', lineHeight: 0.96,
              letterSpacing: '-0.045em', color: '#ffffff',
              margin: '0 0 64px',
            }}
          >
            Let's build<br />something<br />remarkable.
          </motion.h1>

          {!sent ? (
            <motion.form
              initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.88, delay: 0.52 }}
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 520, margin: '0 auto' }}
            >
              <input
                type="email" value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="your@email.com"
                required
                style={inputStyle('email')}
              />
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                onFocus={() => setFocused('msg')}
                onBlur={() => setFocused(null)}
                placeholder="Tell us about your project — scale, timeline, location..."
                rows={5}
                style={{ ...inputStyle('msg'), resize: 'vertical' }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                style={{
                  background: '#ffffff', color: '#000000',
                  border: '1px solid transparent', borderRadius: '9999px',
                  padding: '17px 44px', fontFamily: 'var(--font-body)',
                  fontSize: 15, cursor: 'pointer', marginTop: 8,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.42)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff'
                  e.currentTarget.style.color = '#000000'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                Send inquiry
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              style={{
                padding: '28px 44px', background: 'rgba(255,255,255,0.06)',
                borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)',
                maxWidth: 520, margin: '0 auto',
              }}
            >
              <p style={{ fontFamily: 'var(--font-albra)', fontSize: 24, color: '#ffffff', lineHeight: 1.3, margin: 0 }}>
                Thank you. We'll be in touch within 48 hours.
              </p>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.82 }}
            style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.25)', marginTop: 28 }}
          >
            Or email directly at{' '}
            <a
              href="mailto:hello@noirandform.com"
              style={{ color: 'rgba(255,255,255,0.52)', textDecoration: 'underline', textUnderlineOffset: 3, transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.52)' }}
            >
              hello@noirandform.com
            </a>
          </motion.p>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, transparent, #0a0a0c)', zIndex: 2, pointerEvents: 'none' }} />
      </section>

      {/* ── OFFICE LOCATIONS ── */}
      <section style={{ background: '#0a0a0c', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '72px 80px 80px' }}>
        <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 48 }}>
            Our offices
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 18 }}>
                  {o.city}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.52)', margin: '0 0 14px', whiteSpace: 'pre-line' }}>
                  {o.addr}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.32)', margin: 0 }}>
                  {o.phone}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
