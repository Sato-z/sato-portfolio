/**
 * Fixed, decorative background layers:
 *  1. Blueprint grid lines
 *  2. Soft amber / magenta / cyan glows
 *  3. CRT scanline overlay (sits above content, but ignores pointer events)
 */
export function BackgroundFx() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[40%] h-[360px] w-[360px] rounded-full bg-cyan/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[360px] w-[360px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div aria-hidden="true" className="crt-scanlines pointer-events-none fixed inset-0 z-[60]" />
    </>
  )
}
