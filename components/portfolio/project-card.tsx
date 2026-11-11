import Image from 'next/image'
import { ExternalLink, Star } from 'lucide-react'
import type { ResolvedProject } from '@/lib/github'
import { cn } from '@/lib/utils'
import { GlowCard } from './glow-card'
import { Icon } from './icon'

type ProjectCardProps = { project: ResolvedProject; featured?: boolean }

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <GlowCard className={cn('flex h-full flex-col overflow-hidden', featured && 'md:flex-row')}>
      {project.image && (
        <div
          className={cn(
            'relative aspect-[16/10] shrink-0 overflow-hidden border-b border-border bg-muted',
            featured && 'md:aspect-auto md:w-3/5 md:border-b-0 md:border-r',
          )}
        >
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            sizes={featured ? '(min-width: 768px) 680px, 100vw' : '(min-width: 768px) 560px, 100vw'}
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{project.title}</h3>
          {project.status && (
            <span className="border border-primary/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>

        {project.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-5 font-mono text-xs uppercase tracking-widest">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <Icon name="github" className="size-4" />
              GitHub
              <span className="sr-only">repository for {project.title} (opens in new tab)</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Live
              <span className="sr-only">site for {project.title} (opens in new tab)</span>
            </a>
          )}
          {typeof project.stars === 'number' && project.stars > 0 && (
            <span className="ml-auto inline-flex items-center gap-1 text-muted-foreground">
              <Star className="size-3.5" aria-hidden="true" />
              {project.stars}
              <span className="sr-only">GitHub stars</span>
            </span>
          )}
        </div>
      </div>
    </GlowCard>
  )
}
