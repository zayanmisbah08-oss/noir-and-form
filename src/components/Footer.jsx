import { Link } from 'react-router-dom'

const LINKS = [
  { label: 'Work',     to: '/work' },
  { label: 'Studio',  to: '/studio' },
  { label: 'Services',to: '/services' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-void-black)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '32px 80px',
    }}>
      <div style={{
        maxWidth: 'var(--page-max-width)', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-bradford)',
          fontWeight: 500, fontSize: 18,
          color: '#ffffff', letterSpacing: '0.04em',
          textDecoration: 'none',
        }}>
          Noir &amp; Form
        </Link>

        <div style={{ display: 'flex', gap: 28 }}>
          {LINKS.map(link => (
            <Link
              key={link.label}
              to={link.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13, color: 'rgba(255,255,255,0.32)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.32)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 12, color: 'rgba(255,255,255,0.22)', margin: 0,
        }}>
          © {new Date().getFullYear()} Noir &amp; Form Ltd.
        </p>
      </div>
    </footer>
  )
}
