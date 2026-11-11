import { MapPin, MessageCircle } from 'lucide-react'
import { contact, site } from '@/data/content'
import { ContactForm } from './contact-form'
import { GlowCard } from './glow-card'
import { Icon } from './icon'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function Contact() {
  /* Direct contact channels, built from the site info in content.ts. */
  const channels = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: <Icon name="mail" className="size-5" /> },
    {
      label: 'WhatsApp',
      value: site.whatsappDisplay,
      href: `https://wa.me/${site.whatsapp}`,
      icon: <MessageCircle className="size-5" aria-hidden="true" />,
    },
    { label: 'Location', value: site.location, icon: <MapPin className="size-5" aria-hidden="true" /> },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title={contact.heading} intro={contact.intro} />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Left: direct channels + socials */}
          <Reveal className="flex flex-col gap-4">
            {channels.map((c) => {
              const inner = (
                <GlowCard accent="cyan" className="flex items-center gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center border border-cyan/40 text-cyan">{c.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</span>
                    <span className="block truncate text-foreground">{c.value}</span>
                  </span>
                </GlowCard>
              )
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              )
            })}

            <ul className="mt-2 flex gap-3" aria-label="Social links">
              {contact.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in new tab)`}
                    className="grid size-11 place-items-center border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    <Icon name={s.icon} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: the validated form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
