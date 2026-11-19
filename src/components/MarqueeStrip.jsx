export function MarqueeStrip({
  items = [],
  tone = 'riot',
  reverse = false,
  speed = 'normal',
}) {
  const bg =
    tone === 'acid'
      ? 'bg-acid text-dark'
      : tone === 'chaos'
        ? 'bg-chaos text-dark'
        : tone === 'cream'
          ? 'bg-cream text-dark'
          : tone === 'rebel'
            ? 'bg-rebel text-cream'
            : 'bg-riot text-cream'

  const duration =
    speed === 'fast' ? '16s' : speed === 'slow' ? '36s' : '24s'

  const line = [...items, ...items]

  return (
    <div
      className={`relative overflow-hidden border-y-4 border-dark py-5 slash-bg shadow-[0_8px_0_rgba(0,0,0,0.35)] ${bg}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-8 whitespace-nowrap ${
          reverse ? 'marquee-track-reverse' : 'marquee-track'
        }`}
        style={{ animationDuration: duration }}
      >
        {line.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="font-impact text-2xl tracking-wide sm:text-3xl md:text-4xl"
          >
            {text}
            <span className="mx-5 inline-block text-current opacity-40">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
