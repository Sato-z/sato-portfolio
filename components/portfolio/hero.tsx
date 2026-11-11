'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { hero, site } from '@/data/content'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center pt-16">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-6xl px-5 pb-24">
        <motion.p variants={item} className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-cyan">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
        >
          {site.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 font-display text-xl font-medium uppercase tracking-wide text-primary md:text-2xl">
          {site.role}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
          {hero.line}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {hero.primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-foreground/50"
          >
            <Mail className="size-4" aria-hidden="true" />
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-10 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="inline-flex size-2 rounded-full bg-cyan" aria-hidden="true" />
          {hero.status}
        </motion.p>
      </motion.div>
    </section>
  )
}
