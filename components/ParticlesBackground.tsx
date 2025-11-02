'use client'

import { useTheme } from '@/components/ThemeProvider'
import { useParticles } from '@/hooks/useParticles'

export default function ParticlesBackground() {
  const { theme } = useTheme()
  const containerRef = useParticles(theme)

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />
}
