import { site, type Project } from '@/data/content'

export type ResolvedProject = {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  live?: string
  status?: string
  stars?: number
}

type GitHubRepo = {
  name: string
  description: string | null
  homepage: string | null
  html_url: string
  language: string | null
  topics?: string[]
  stargazers_count: number
}

/** Accepts "repo-name" (uses site.githubUsername) or "owner/repo-name". */
function toFullName(repo: string) {
  const trimmed = repo.trim().replace(/^https?:\/\/github\.com\//, '').replace(/\/$/, '')
  return trimmed.includes('/') ? trimmed : `${site.githubUsername}/${trimmed}`
}

function prettify(name: string) {
  return name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

async function fetchRepo(fullName: string): Promise<GitHubRepo | null> {
  try {
    const headers: HeadersInit = { Accept: 'application/vnd.github+json' }
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    const res = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers,
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return (await res.json()) as GitHubRepo
  } catch {
    return null
  }
}

/**
 * Merges a project entry from content.ts with live data from its GitHub repo.
 * Anything you write in content.ts wins; GitHub fills in whatever you leave out.
 */
export async function resolveProject(project: Project): Promise<ResolvedProject> {
  const fullName = project.repo ? toFullName(project.repo) : undefined
  const repo = fullName ? await fetchRepo(fullName) : null

  const tags =
    project.tags ??
    (repo ? [repo.language, ...(repo.topics ?? [])].filter((t): t is string => Boolean(t)).slice(0, 4) : [])

  return {
    title: project.title ?? (repo ? prettify(repo.name) : fullName ? prettify(fullName.split('/')[1]) : 'Untitled project'),
    description: project.description ?? repo?.description ?? 'No description yet.',
    image: project.image ?? (fullName ? `https://opengraph.githubassets.com/1/${fullName}` : '/images/project-helpdesk.png'),
    tags,
    githubUrl: fullName ? (repo?.html_url ?? `https://github.com/${fullName}`) : undefined,
    live: project.live ?? (repo?.homepage || undefined),
    status: project.status,
    stars: repo?.stargazers_count,
  }
}
