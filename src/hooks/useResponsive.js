import { useState, useEffect } from 'react'

export function useResponsive() {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280
  )

  useEffect(() => {
    const handle = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handle, { passive: true })
    handle()
    return () => window.removeEventListener('resize', handle)
  }, [])

  const isMobile  = width < 640
  const isTablet  = width >= 640 && width < 1024
  const isDesktop = width >= 1024
  const isNarrow  = width < 1024

  return {
    isMobile,
    isTablet,
    isDesktop,
    isNarrow,
    width,
    pad:  isMobile ? '24px' : isTablet ? '40px' : '80px',
    navH: isNarrow ? 60 : 72,
  }
}
