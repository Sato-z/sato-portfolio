import { cn } from '@/lib/utils'

type Accent = 'amber' | 'magenta' | 'cyan'

/* Hover styles per accent: border tint + matching outer glow. */
const accentStyles: Record<Accent, string> = {
  amber: 'hover:border-primary/70 hover:shadow-[0_0_28px_-6px_var(--primary)]',
  magenta: 'hover:border-accent/70 hover:shadow-[0_0_28px_-6px_var(--accent)]',
  cyan: 'hover:border-cyan/70 hover:shadow-[0_0_28px_-6px_var(--cyan)]',
}

type GlowCardProps = React.HTMLAttributes<HTMLDivElement> & { accent?: Accent }

/**
 * Sharp-cornered card with a 1px border that lifts and glows on hover.
 * Corner ticks mimic blueprint registration marks.
 */
export function GlowCard({ accent = 'cyan', className, children, ...props }: GlowCardProps) {
  return (
    <div
      className={cn(
        'group relative h-full border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1',
        accentStyles[accent],
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="pointer-events-none absolute -left-px -top-px size-3 border-l border-t border-foreground/40" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-px -right-px size-3 border-b border-r border-foreground/40" />
      {children}
    </div>
  )
}
