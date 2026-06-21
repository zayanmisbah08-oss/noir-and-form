import { Link } from 'react-router-dom'
import { useResponsive } from '../hooks/useResponsive'

const LINKS = [
  { label: 'Work',     to: '/work' },
  { label: 'Studio',  to: '/studio' },
  { label: 'Services',to: '/services' },
  { label: 'Journal', to: '/journal' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/' },
]

export default function Footer() {
  const { isMobile, isTablet } = useResponsive()
  const hPad = isMobile ? '20px' : isTablet ? '36px' : '80px'

  return (
    <footer style={{
      background: 'var(--color-void-black)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: isMobile ? `28px ${hPad} 32px` : `32px ${hPad}`,
    }}>
      <div style={{
        maxWidth: 'var(--page-max-width)', margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: isMobile ? 20 : 16,
      }}>
        <Link to="/" style={{
          fontFamily: 'var(--font-bradford)',
          fontWeight: 500, fontSize: 18,
          color: '#ffffff', letterSpacing: '0.04em',
          textDecoration: 'none',
        }}>
          Noir &amp; Form
        </Link>

        <div style={{ display: 'flex', gap: isMobile ? 16 : 28, flexWrap: 'wrap' }}>
          {LINKS.map(link => (
            <Link
              key={link.label}
              to={link.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: isMobile ? 12 : 13, color: 'rgba(255,255,255,0.32)',
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
