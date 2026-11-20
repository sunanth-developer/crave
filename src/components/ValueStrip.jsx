const values = [
  { title: 'Bold flavours', line: 'That hit different' },
  { title: 'Premium quality', line: 'Indulgence you can feel' },
  { title: 'Limited drops', line: 'New chaos, always' },
  { title: 'Unfiltered vibes', line: 'More than just candy' },
  { title: 'The Crave Club', line: 'For the real ones' },
]

export function ValueStrip() {
  return (
    <section
      className="relative z-30 overflow-x-clip border-y-4 border-dark bg-dark text-cream"
      aria-label="CRAVE values"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,0,110,0.35), transparent 40%), radial-gradient(circle at 80% 50%, rgba(0,221,235,0.25), transparent 42%)',
          }}
        />
      </div>
      <ul className="section-pad relative z-10 flex snap-x gap-0 overflow-x-auto py-6 md:grid md:grid-cols-5 md:overflow-visible md:py-8">
        {values.map((item) => (
          <li
            key={item.title}
            className="min-w-[70%] snap-start border-r-4 border-dark/40 px-4 last:border-r-0 md:min-w-0 md:px-3"
          >
            <p className="font-impact text-xs uppercase tracking-[0.16em] text-acid">
              {item.title}
            </p>
            <p className="mt-2 font-body text-sm leading-snug text-cream/85 normal-case tracking-normal">
              {item.line}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
