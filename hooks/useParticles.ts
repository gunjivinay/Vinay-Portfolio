import { useEffect, useRef } from 'react'

export function useParticles(theme: 'light' | 'dark') {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Simple particle animation using CSS
    const particles: HTMLDivElement[] = []
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute rounded-full'
      particle.style.width = `${Math.random() * 4 + 2}px`
      particle.style.height = particle.style.width
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.backgroundColor = theme === 'dark' 
        ? 'rgba(59, 130, 246, 0.3)' 
        : 'rgba(14, 165, 233, 0.2)'
      particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`
      particle.style.animationDelay = `${Math.random() * 5}s`
      containerRef.current.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [theme])

  return containerRef
}
