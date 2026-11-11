'use client'

import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Seconds to wait before animating — used to stagger items in a grid. */
  delay?: number
}

/**
 * Fades and slides its children up the first time they scroll into view.
 * Respects the user's "reduce motion" OS setting.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
