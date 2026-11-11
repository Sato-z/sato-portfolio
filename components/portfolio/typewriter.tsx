'use client'

import { useEffect, useState } from 'react'

type TypewriterProps = {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  /** How long a fully-typed phrase stays on screen (ms). */
  pause?: number
}

/**
 * Types out each phrase, pauses, deletes it, then moves to the next.
 * The full phrase list is exposed to screen readers so they don't hear
 * the text one character at a time.
 */
export function Typewriter({ phrases, typingSpeed = 55, deletingSpeed = 30, pause = 1800 }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[index]

    // Finished typing -> wait, then begin deleting.
    if (!deleting && text === phrase) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    // Finished deleting -> advance to the next phrase.
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
      return
    }

    const t = setTimeout(
      () => setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1)),
      deleting ? deletingSpeed : typingSpeed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pause])

  return (
    <span>
      <span className="sr-only">{phrases.join(' ')}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.15em] bg-primary" />
      </span>
    </span>
  )
}
