import Image from 'next/image'
import { about, site } from '@/data/content'
import { GlowCard } from './glow-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={about.kicker} title={about.heading} />

        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Photo in a retro "monitor" frame with offset glow layers. */}
          <Reveal className="mx-auto w-full max-w-sm">
            <figure className="relative">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-accent/60" />
              <div className="relative border border-primary/70 bg-card p-2 shadow-[0_0_40px_-10px_var(--primary)]">
                {/* Fake window title bar */}
                <div className="mb-2 flex items-center justify-between border-b border-border px-1 pb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>profile.img</span>
                  <span className="flex gap-1" aria-hidden="true">
                    <span className="size-2 bg-primary" />
                    <span className="size-2 bg-accent" />
                    <span className="size-2 bg-cyan" />
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src={about.photo} alt={about.photoAlt} fill sizes="(min-width: 768px) 384px, 90vw" className="object-cover" />
                  <div aria-hidden="true" className="crt-scanlines absolute inset-0" />
                </div>
                <figcaption className="mt-2 px-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                  {site.name} · {site.location}
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-5 text-lg leading-relaxed text-muted-foreground text-pretty">{p}</p>
              </Reveal>
            ))}

            {/* Stats */}
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {about.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                  <GlowCard accent={(['amber', 'magenta', 'cyan'] as const)[i % 3]} className="p-4 text-center md:p-6">
                    <dd className="font-display text-3xl font-bold text-foreground md:text-4xl">{stat.value}</dd>
                    <dt className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
                      {stat.label}
                    </dt>
                  </GlowCard>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
