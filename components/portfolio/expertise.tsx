import { expertise } from '@/data/content'
import { GlowCard } from './glow-card'
import { Icon } from './icon'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={expertise.heading} intro={expertise.intro} />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.skills.map((skill, i) => (
            <li key={skill.name}>
              {/* Stagger each card slightly for a cascading reveal. */}
              <Reveal delay={i * 0.06} className="h-full">
                <GlowCard accent="cyan" className="p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center border border-cyan/40 text-cyan transition-colors group-hover:border-cyan group-hover:bg-cyan/10">
                      <Icon name={skill.icon} className="size-6" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, '0')} · {skill.level}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
