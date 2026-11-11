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
export type Stat = { value: string; label: string }
export type Skill = { name: string; description: string; icon: IconName; level: string }
export type Service = { title: string; description: string; icon: IconName; points: string[] }
export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
  /** Marks a placeholder card so it can be styled / replaced later. */
  placeholder?: boolean
}
export type SocialLink = { label: string; href: string; icon: IconName }

/* ---------- Global site info ---------- */

export const site = {
  name: '[YOUR NAME]',
  initials: 'YN',
  role: 'IT Student & Aspiring Software Developer',
  specialties: 'web development, AI integration and IT support',
  metaDescription:
    'Portfolio of [YOUR NAME] — an IT student and aspiring software developer specialising in web development, AI integration and IT support.',
  email: 'you@example.com',
  /** WhatsApp number in international format, digits only (used to build the wa.me link). */
  whatsapp: '27000000000',
  whatsappDisplay: '+27 00 000 0000',
  location: 'South Africa',
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
  eyebrow: 'SYS://PORTFOLIO v1.0 — ONLINE',
  greeting: "Hi, I'm",
  /** Phrases cycled by the typewriter effect. */
  taglines: [
    'I build fast, modern web apps.',
    'I wire AI into real products.',
    'I keep systems running smoothly.',
  ],
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
  status: 'Available for internships & freelance work',
}

/* ---------- About ---------- */

export const about = {
  heading: 'About Me',
  kicker: '01 // PROFILE',
  paragraphs: [
    "I'm an IT student with a passion for building software that solves real problems. I enjoy the whole journey — from sketching an idea to shipping a polished, responsive interface.",
    'My focus is modern web development with Next.js and TypeScript, integrating AI features into everyday tools, and providing dependable IT support. I learn fast, document well and love working in teams.',
  ],
  photoAlt: 'Placeholder portrait — replace with your own photo',
  photo: '/images/portrait-placeholder.png',
  stats: [
    { value: '10+', label: 'Projects Built' },
    { value: '3', label: 'Years Learning' },
    { value: '100%', label: 'Commitment' },
  ] satisfies Stat[],
}

/* ---------- Expertise ---------- */

export const expertise = {
  heading: 'Expertise',
  kicker: '02 // STACK',
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
  kicker: '03 // OFFER',
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
  kicker: '04 // WORK',
  intro: 'A selection of things I have designed and built.',
  items: [
    {
      title: 'CameraAI',
      description: 'A browser-based computer vision app that detects and labels objects in a live camera feed in real time.',
      image: '/images/project-camera-ai.png',
      tags: ['Next.js', 'TypeScript', 'TensorFlow.js'],
      github: 'https://github.com/',
      live: 'https://example.com/',
    },
    {
      title: '[PROJECT NAME]',
      description: 'An IT helpdesk dashboard for logging, assigning and tracking support tickets. Replace with your own project.',
      image: '/images/project-helpdesk.png',
      tags: ['React', 'Postgres', 'Tailwind'],
      github: 'https://github.com/',
      placeholder: true,
    },
    {
      title: '[PROJECT NAME]',
      description: 'A modern e-commerce storefront with product filtering and a cart. Replace with your own project.',
      image: '/images/project-store.png',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      github: 'https://github.com/',
      live: 'https://example.com/',
      placeholder: true,
    },
    {
      title: '[PROJECT NAME]',
      description: 'An AI chat assistant that answers questions about course material. Replace with your own project.',
      image: '/images/project-chatbot.png',
      tags: ['AI SDK', 'TypeScript', 'LLM'],
      github: 'https://github.com/',
      placeholder: true,
    },
  ] satisfies Project[],
}

/* ---------- Contact ---------- */

export const contact = {
  heading: 'Contact',
  kicker: '05 // CONNECT',
  intro: "Have a project, opportunity or question? Send a message and I'll get back to you.",
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Send Message',
    success: 'Thanks! Your email app should open with the message ready to send.',
    errors: {
      name: 'Please enter your name (at least 2 characters).',
      email: 'Please enter a valid email address.',
      message: 'Please write a message (at least 10 characters).',
    },
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { label: 'Website', href: 'https://example.com/', icon: 'globe' },
  ] satisfies SocialLink[],
}

/* ---------- Footer ---------- */

export const footer = {
  note: 'Designed & built with Next.js, Tailwind CSS and Framer Motion.',
}
