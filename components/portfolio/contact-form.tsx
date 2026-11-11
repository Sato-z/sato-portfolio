'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { contact, site } from '@/data/content'
import { cn } from '@/lib/utils'

type Fields = { name: string; email: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Pure validation function — easy to read and to unit test. */
function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = contact.form.errors.name
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = contact.form.errors.email
  if (values.message.trim().length < 10) errors.message = contact.form.errors.message
  return errors
}

/**
 * Contact form with client-side validation.
 * On a valid submit it opens the visitor's email app with the message
 * pre-filled (no backend required). Swap the submit handler for an API
 * route or email service if you want messages delivered directly.
 */
export function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const { form } = contact

  const update = (field: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    // Clear a field's error as soon as the user edits it.
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
    setSent(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field for keyboard / screen-reader users.
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
    setValues({ name: '', email: '', message: '' })
  }

  /* Shared input styling; switches to magenta when the field has an error. */
  const fieldClass = (hasError: boolean) =>
    cn(
      'w-full border bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all',
      hasError ? 'border-accent focus:border-accent' : 'border-border focus:border-cyan',
    )

  return (
    <form noValidate onSubmit={handleSubmit} className="border border-border bg-card/80 p-6 backdrop-blur-sm md:p-8">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-cyan">{'// new_message.txt'}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label={form.nameLabel} error={errors.name}>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={fieldClass(!!errors.name)}
          />
        </Field>
        <Field id="contact-email" label={form.emailLabel} error={errors.email}>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={fieldClass(!!errors.email)}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="contact-message" label={form.messageLabel} error={errors.message}>
          <textarea
            id="contact-message"
            rows={6}
            value={values.message}
            onChange={update('message')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={cn(fieldClass(!!errors.message), 'resize-y')}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-shadow sm:w-auto"
      >
        {form.submit}
        <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>

      {/* Live region announces success to screen readers. */}
      <p role="status" className="mt-4 min-h-5 font-mono text-sm text-cyan">
        {sent ? form.success : ''}
      </p>
    </form>
  )
}

/** Label + control + error message wrapper. */
function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  )
}
