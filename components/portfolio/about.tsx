import Image from 'next/image'
import { about } from '@/data/content'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={about.heading} />

        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
          <Reveal className="mx-auto w-full max-w-xs">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
              <Image src={about.photo} alt={about.photoAlt} fill sizes="(min-width: 768px) 320px, 80vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="max-w-2xl">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="mb-5 text-lg leading-relaxed text-muted-foreground text-pretty">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
