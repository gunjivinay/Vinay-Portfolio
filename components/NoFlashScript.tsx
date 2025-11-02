'use client'

import { useEffect } from 'react'

export default function NoFlashScript() {
  useEffect(() => {
    // Mark as loaded immediately after initial render to allow animations
    // Use setTimeout to ensure this runs as early as possible
    const timer = setTimeout(() => {
      document.documentElement.setAttribute('data-loaded', 'true')
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  return null
}

