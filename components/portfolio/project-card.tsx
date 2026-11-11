import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import type { Project } from '@/data/content'
import { GlowCard } from './glow-card'
import { Icon } from './icon'

/** A single project: screenshot, description, tech tags and links. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlowCard accent="magenta" className="flex flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {project.placeholder && (
          <span className="absolute left-3 top-3 border border-primary/60 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
            Placeholder
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{project.title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="border border-cyan/30 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-5 border-t border-border pt-5 font-mono text-xs uppercase tracking-widest">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon name="github" className="size-4" />
              Code
              <span className="sr-only">for {project.title} (opens in new tab)</span>
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
              Live Demo
              <span className="sr-only">of {project.title} (opens in new tab)</span>
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  )
}
