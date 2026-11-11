/** Faint, static line grid behind the page. */
export function BackgroundFx() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.025)_1px,transparent_1px)] bg-[size:64px_64px]"
    />
  )
}
