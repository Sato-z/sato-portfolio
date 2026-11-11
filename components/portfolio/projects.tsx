import { projects } from '@/data/content'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={projects.kicker} title={projects.heading} intro={projects.intro} />

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project, i) => (
            <li key={`${project.title}-${i}`}>
              <Reveal delay={(i % 2) * 0.1} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
