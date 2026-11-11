import { Check } from 'lucide-react'
import { services } from '@/data/content'
import { GlowCard } from './glow-card'
import { Icon } from './icon'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

/* Each service card gets its own accent colour, in palette order. */
const accents = ['amber', 'magenta', 'cyan'] as const
const iconColors = ['text-primary border-primary/40', 'text-accent border-accent/40', 'text-cyan border-cyan/40']

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={services.heading} intro={services.intro} />

        <ul className="grid gap-5 md:grid-cols-3">
          {services.items.map((service, i) => (
            <li key={service.title}>
              <Reveal delay={i * 0.1} className="h-full">
                <GlowCard accent={accents[i % 3]} className="flex flex-col p-8">
                  <span className={`grid size-14 place-items-center border ${iconColors[i % 3]}`}>
                    <Icon name={service.icon} className="size-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-2 border-t border-border pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 font-mono text-sm text-foreground/90">
                        <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
