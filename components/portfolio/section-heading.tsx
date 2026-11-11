import { Reveal } from './reveal'

type SectionHeadingProps = {
  title: string
  intro?: string
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl">{title}</h2>
      <span className="mt-4 block h-px w-16 bg-primary" aria-hidden="true" />
      {intro && <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">{intro}</p>}
    </Reveal>
  )
}
