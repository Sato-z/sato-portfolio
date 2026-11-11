'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/data/content'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

/* Defined outside the component so the hook receives a stable array. */
const sectionIds = navLinks.map((link) => link.id)

/** Sticky top navigation with active-section highlight and a mobile menu. */
export function Navbar() {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Add a solid background once the user scrolls past the very top. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the mobile menu with the Escape key. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open ? 'border-border bg-background/85 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo / monogram */}
        <a href="#home" aria-label={`${site.brand} — back to top`} className="font-display text-xl font-bold tracking-wider">
          {site.brand}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                  {/* Animated underline that slides between active links. */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-primary"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid size-10 place-items-center border border-border text-foreground transition-colors hover:border-cyan hover:text-cyan md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {navLinks.map((link, i) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center gap-3 border-b border-border/60 py-3 font-mono text-sm uppercase tracking-widest',
                      active === link.id ? 'text-primary' : 'text-muted-foreground',
                    )}
                  >
                    <span className="text-xs text-cyan">{String(i).padStart(2, '0')}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
