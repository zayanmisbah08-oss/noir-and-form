/* ContactSection — vault ink #191b1f
   Bradford 110px display "Let's build something remarkable."
   Custo-style email input · ghost pill CTA
   Framer Motion: dramatic whileInView entrance */
import { useState } from 'react'
import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

export default function ContactSection() {
  const [email, setEmail] = useState('')
  const [focused, setFocused] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <section id="contact" style={{
      background: 'var(--color-vault-ink)',
      padding: '160px 80px 140px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background subtle texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 80%, rgba(255,255,255,0.015) 0%, transparent 60%)
        `,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
            marginBottom: 36,
          }}
        >
          Begin a conversation
        </motion.p>

        {/* Bradford display — the dramatic centrepiece */}
        <motion.h2
          initial={{ y: 56, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease }}
          style={{
            fontFamily: 'var(--font-bradford)',
            fontWeight: 500,
            fontSize: 'clamp(56px, 8vw, 110px)',
            lineHeight: 1.0, letterSpacing: '-0.04em',
            color: 'var(--color-chalk)',
            margin: '0 auto 72px',
          }}
        >
          Let's build<br />something<br />remarkable.
        </motion.h2>

        {/* Email capture — Custo input + ghost pill */}
        {!sent ? (
          <motion.form
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.3 }}
            onSubmit={handleSubmit}
            style={{
              display: 'flex', gap: 12,
              maxWidth: 480, margin: '0 auto 24px',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1, padding: '16px 24px',
                border: `1px solid ${focused ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)'}`,
                borderRadius: 'var(--r-md)',
                background: 'rgba(255,255,255,0.05)',
                color: '#ffffff',
                fontFamily: 'var(--font-body)',
                fontSize: 15, outline: 'none',
                transition: 'border-color 0.25s ease',
              }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'transparent', color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.45)',
                borderRadius: 'var(--r-pill)',
                padding: '16px 28px',
                fontFamily: 'var(--font-body)',
                fontWeight: 400, fontSize: 14,
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ffffff'
                e.currentTarget.style.color = '#191b1f'
                e.currentTarget.style.borderColor = 'transparent'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
              }}
            >
              Send inquiry
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              maxWidth: 480, margin: '0 auto 24px',
              padding: '20px 32px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--r-md)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-albra)',
              fontSize: 20, color: '#ffffff', lineHeight: 1.3,
            }}>
              Thank you. We'll be in touch within 48 hours.
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13, color: 'rgba(255,255,255,0.28)',
            marginTop: 16,
          }}
        >
          Or email us directly at{' '}
          <a
            href="mailto:hello@noirandform.com"
            style={{
              color: 'rgba(255,255,255,0.55)',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#ffffff' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
          >
            hello@noirandform.com
          </a>
        </motion.p>
      </div>
    </section>
  )
}
