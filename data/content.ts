/**
 * content.ts — single source of truth for every piece of text on the site.
 *
 * To personalise the portfolio, edit the values in this file only.
 * Components import from here and never hard-code copy themselves.
 */

/* ---------- Types ---------- */

/** Names of Lucide icons used across the site (mapped in components/portfolio/icon.tsx). */
export type IconName =
  | 'code'
  | 'type'
  | 'wind'
  | 'database'
  | 'brain'
  | 'wrench'
  | 'monitor'
  | 'headset'
  | 'sparkles'
  | 'mail'
  | 'phone'
  | 'github'
  | 'linkedin'
  | 'globe'

export type NavLink = { id: string; label: string }
export type Skill = { name: string; description: string; icon: IconName; level: string }
export type Service = { title: string; description: string; icon: IconName; points: string[] }
/**
 * A project card. Only `repo` is needed — the title, description, tags, live link
 * and a preview image are pulled from GitHub automatically. Any field you set
 * here overrides what GitHub returns.
 */
export type Project = {
  /** "repo-name" (uses site.githubUsername) or "owner/repo-name" or a full github.com URL. */
  repo?: string
  title?: string
  description?: string
  /** Local image in /public, e.g. "/images/my-project.png". Defaults to GitHub's repo preview image. */
  image?: string
  tags?: string[]
  live?: string
  /** Optional short label, e.g. "In progress". */
  status?: string
}
export type SocialLink = { label: string; href: string; icon: IconName }

/* ---------- Global site info ---------- */

export const site = {
  name: 'Selasi Samuel Dzramado',
  /** Wordmark shown at the top-left of the navbar. */
  brand: 'SATO®',
  initials: 'SD',
  role: 'IT Student. Software Developer. Technology Enthusiast.',
  /** Your GitHub username — used for project repo links and the GitHub social link. */
  githubUsername: 'Sato-z',
  specialties: 'web development, AI integration and IT support',
  metaDescription:
    'Portfolio of Selasi Samuel Dzramado — IT student, software developer and technology enthusiast.',
  email: 'samuelarmado11@gmail.com',
  /** WhatsApp number in international format, digits only (used to build the wa.me link). */
  whatsapp: '233545359185',
  whatsappDisplay: '+233 54 535 9185',
  location: 'Tema, Ghana',
}

/* ---------- Navigation ---------- */

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/* ---------- Hero ---------- */

export const hero = {
  eyebrow: 'Personal Portfolio · Est. 2026',
  /** One line under your role — edit freely. */
  line: 'I study Information Technology and build web applications, experiment with AI-powered tools, explore software solutions and occasionally bring broken networks back to life.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
  status: 'Available for internships & freelance work',
}

/* ---------- About ---------- */

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm an IT student. Most of what I know about software I've learned by building things for school, for friends and for myself.",
    "Right now I work mostly with Next.js and TypeScript, I'm experimenting with computer vision in a camera project, and I help people with everyday IT problems.",
  ],
  /** Put your photo in /public/images and update this path. */
  photo: '/images/profile.jpg',
  photoAlt: 'Portrait of Selasi Samuel Dzramado',
}

/* ---------- Expertise ---------- */

export const expertise = {
  heading: 'Expertise',
  intro: 'The tools and technologies I use to design, build and support modern software.',
  skills: [
    { name: 'Next.js', icon: 'code', level: 'Framework', description: 'App Router, server components and full-stack React applications.' },
    { name: 'TypeScript', icon: 'type', level: 'Language', description: 'Type-safe, maintainable code that scales with the project.' },
    { name: 'Tailwind CSS', icon: 'wind', level: 'Styling', description: 'Responsive, accessible interfaces built with utility-first CSS.' },
    { name: 'Databases', icon: 'database', level: 'Data', description: 'SQL schema design, queries and Postgres-backed applications.' },
    { name: 'AI Integration', icon: 'brain', level: 'AI / ML', description: 'LLM APIs, computer vision and AI-powered product features.' },
    { name: 'IT Support', icon: 'wrench', level: 'Operations', description: 'Troubleshooting, hardware, networking and user support.' },
  ] satisfies Skill[],
}

/* ---------- Services ---------- */

export const services = {
  heading: 'Services',
  intro: 'How I can help you or your organisation.',
  items: [
    {
      title: 'Web Development',
      icon: 'monitor',
      description: 'Fast, responsive websites and web apps built with modern tooling.',
      points: ['Landing pages & portfolios', 'Full-stack Next.js apps', 'Responsive, accessible UI'],
    },
    {
      title: 'IT Support',
      icon: 'headset',
      description: 'Reliable technical help that keeps people and systems productive.',
      points: ['Hardware & software setup', 'Network troubleshooting', 'User training & documentation'],
    },
    {
      title: 'AI Integration',
      icon: 'sparkles',
      description: 'Practical AI features that add real value to existing products.',
      points: ['Chatbots & assistants', 'Computer vision tools', 'Workflow automation'],
    },
  ] satisfies Service[],
}

/* ---------- Projects ---------- */

export const projects = {
  heading: 'Projects',
  intro: 'Things I have built or am building.',
  /**
   * Add a project by adding { repo: 'repo-name' }. Details are fetched from GitHub
   * (refreshed hourly). The fields below are fallbacks until the repos exist.
   */
  items: [
    {
      title: 'CameraAI',
      description: 'Computer vision in the browser: detects and labels objects in a live camera feed.',
      image: '/images/project-camera-ai.png',
      tags: ['Next.js', 'TypeScript', 'TensorFlow.js'],
      status: 'In progress',
    },
    {
      repo: 'Sato-z/hadash-school',
      title: 'Hadash School Management System',
      description: 'A school management system built with JavaScript, React and Vite.',
      tags: ['JavaScript', 'React', 'Vite'],
    },
    {
      repo: 'Sato-z/datalink-class-planner',
      title: 'Datalink Class Planner',
      description: 'A class planner built with TypeScript.',
      tags: ['TypeScript'],
    },
  ] satisfies Project[],
}

/* ---------- Contact ---------- */

export const contact = {
  heading: 'Contact',
  intro: 'Email delivery from this site is not configured yet. The form opens a draft in your email app for you to send.',
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Open Email Draft',
    success: 'Your email draft should open. It is not sent until you send it from your email app.',
    errors: {
      name: 'Please enter your name (at least 2 characters).',
      email: 'Please enter a valid email address.',
      message: 'Please write a message (at least 10 characters).',
    },
  },
  socials: [
    { label: 'GitHub', href: `https://github.com/${site.githubUsername}`, icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { label: 'Website', href: 'https://example.com/', icon: 'globe' },
  ] satisfies SocialLink[],
}

/* ---------- Footer ---------- */

export const footer = {
  note: 'Designed & built with Next.js, Tailwind CSS and Framer Motion.',
}
