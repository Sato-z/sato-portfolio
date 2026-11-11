import { projects } from '@/data/content'
import { resolveProject } from '@/lib/github'
import { cn } from '@/lib/utils'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export async function Projects() {
  const items = await Promise.all(projects.items.map(resolveProject))

  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={projects.heading} intro={projects.intro} />

        <ul className="grid gap-6 md:grid-cols-2">
          {items.map((project, i) => (
            <li key={`${project.title}-${i}`} className={cn(i === 0 && 'md:col-span-2')}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <ProjectCard project={project} featured={i === 0} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
