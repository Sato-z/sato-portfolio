import { Reveal } from './reveal'

type SectionHeadingProps = {
  /** Small monospace label above the title, e.g. "01 // PROFILE". */
  kicker: string
  title: string
  intro?: string
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({ kicker, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs tracking-[0.3em] text-cyan">{kicker}</p>
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {/* Thin architectural rule with an amber end-cap. */}
      <div className="mt-5 flex items-center gap-2" aria-hidden="true">
        <span className="h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        <span className="size-1.5 bg-primary" />
      </div>
      {intro && <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">{intro}</p>}
    </Reveal>
  )
}
