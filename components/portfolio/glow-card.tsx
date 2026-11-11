import { cn } from '@/lib/utils'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Kept for compatibility with existing callers; cards no longer change colour per accent. */
  accent?: 'amber' | 'magenta' | 'cyan'
}

/** Plain bordered card with a subtle border change on hover. */
export function GlowCard({ accent: _accent, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('group relative h-full border border-border bg-card transition-colors hover:border-foreground/25', className)}
      {...props}
    >
      {children}
    </div>
  )
}
