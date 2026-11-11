import { ArrowUp } from 'lucide-react'
import { contact, footer, navLinks, site } from '@/data/content'
import { Icon } from './icon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border">
      {/* Glowing magenta rule along the top edge. */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold uppercase tracking-wider">{site.brand}</p>
          <p className="mt-1 text-sm text-muted-foreground">{footer.note}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {contact.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} (opens in new tab)`}
              className="text-muted-foreground transition-colors hover:text-cyan"
            >
              <Icon name={s.icon} className="size-5" />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid size-9 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <p className="border-t border-border py-5 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        © {year} {site.brand}. All rights reserved.
      </p>
    </footer>
  )
}
