'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { hero, site } from '@/data/content'
import { Typewriter } from './typewriter'

/* Parent/child variants create a staggered entrance on page load. */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Synthwave horizon: perspective grid floor fading into the distance. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] [perspective:400px]">
        <div className="absolute inset-0 origin-bottom [transform:rotateX(60deg)] bg-[linear-gradient(to_right,rgb(255_46_136/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_46_136/0.35)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_20px_var(--accent)]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 pb-32"
      >
        <motion.p variants={item} className="mb-6 font-mono text-xs tracking-[0.3em] text-cyan">
          {hero.eyebrow}
        </motion.p>

        <motion.p variants={item} className="font-mono text-lg text-muted-foreground">
          {hero.greeting}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-2 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
        >
          {site.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 font-display text-xl font-medium uppercase tracking-wide text-primary md:text-2xl">
          {site.role}
        </motion.p>

        {/* Terminal-style typewriter tagline. */}
        <motion.p variants={item} className="mt-6 min-h-[1.75em] font-mono text-base text-foreground md:text-lg">
          <span className="mr-2 text-accent">{'>'}</span>
          <Typewriter phrases={hero.taglines} />
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-shadow hover:shadow-[0_0_28px_-4px_var(--primary)]"
          >
            {hero.primaryCta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center gap-2 border border-cyan/60 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-cyan transition-all hover:border-cyan hover:shadow-[0_0_28px_-6px_var(--cyan)]"
          >
            <Mail className="size-4" aria-hidden="true" />
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-10 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-cyan" />
          </span>
          {hero.status}
        </motion.p>
      </motion.div>
    </section>
  )
}
