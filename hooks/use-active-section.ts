'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * Uses IntersectionObserver with a thin band near the top-middle of the
 * viewport: whichever section crosses that band becomes "active".
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return active
}
