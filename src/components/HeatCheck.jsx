import { useRef, useState } from 'react'
import { categories } from '../data/site'
import { useGsapReveal } from '../hooks/useGsapReveal'

const defaults = [
  { id: 'lollipops', label: 'Flirt level', value: 78 },
  { id: 'gummies', label: 'Chaos meter', value: 72 },
  { id: 'hard-candies', label: 'Bite force', value: 68 },
  { id: 'chocolates', label: 'After dark', value: 84 },
]

function heatVerdict(avg) {
  if (avg >= 90) return 'Filthy sweet. We approve.'
  if (avg >= 75) return 'Properly naughty. Don\'t stop.'
  if (avg >= 55) return 'Warming up... the night is young.'
  return 'Cute. Now get dirtier.'
}

export function HeatCheck() {
  const ref = useRef(null)
  useGsapReveal(ref)
  const [levels, setLevels] = useState(defaults)

  const avg = Math.round(
    levels.reduce((sum, row) => sum + row.value, 0) / levels.length,
  )

  function setValue(id, value) {
    setLevels((rows) =>
      rows.map((row) =>
        row.id === id ? { ...row, value: Number(value) } : row,
      ),
    )
  }

  function maxOut() {
    setLevels((rows) => rows.map((row) => ({ ...row, value: 100 })))
  }

  return (
    <section
      id="heat"
      ref={ref}
      className="relative overflow-hidden bg-rebel text-cream section-y"
      aria-labelledby="heat-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'var(--crave-pattern)',
          backgroundSize: '380px',
        }}
        aria-hidden="true"
      />

      <div className="section-pad relative">
        <div className="container-crave grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h2
              id="heat-heading"
              data-reveal
              className="display-lg max-w-[11ch] text-balance"
            >
              How naughty is your pouch?
            </h2>
            <p
              data-reveal
              className="mt-6 max-w-md text-base leading-relaxed text-cream/80 md:text-lg"
            >
              Drag it. Push it. Turn yourself up. Pure attitude dials - not
              nutrition scores, just how bad you want it tonight.
            </p>

            <div
              data-reveal
              className="mt-8 inline-flex items-end gap-3 rounded-[1.25rem] border-2 border-cream/25 bg-dark/40 px-5 py-4"
            >
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cream/55">
                  Your heat
                </p>
                <p className="font-display text-5xl leading-none text-acid">
                  {avg}
                </p>
              </div>
              <p className="max-w-[14ch] pb-1 text-sm font-semibold text-cream/85">
                {heatVerdict(avg)}
              </p>
            </div>

            <div data-reveal className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={maxOut} className="cta-acid">
                Max the heat
              </button>
              <a href="#waitlist" className="cta-riot">
                Put me on it
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {levels.map((row) => {
              const cat = categories.find((c) => c.id === row.id)
              return (
                <div
                  key={row.id}
                  data-reveal
                  className="rounded-2xl border-2 border-cream/20 bg-dark/35 p-4 backdrop-blur-sm sm:p-5"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-2xl tracking-wide">
                        {cat?.name}
                      </p>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-cream/55">
                        {row.label}
                      </p>
                    </div>
                    <span className="font-display text-3xl text-acid">
                      {row.value}
                    </span>
                  </div>
                  <label className="sr-only" htmlFor={`heat-${row.id}`}>
                    {row.label} for {cat?.name}
                  </label>
                  <input
                    id={`heat-${row.id}`}
                    type="range"
                    min={0}
                    max={100}
                    value={row.value}
                    onChange={(e) => setValue(row.id, e.target.value)}
                    className="heat-slider w-full"
                    style={{
                      '--heat-fill': `${row.value}%`,
                      '--heat-accent': cat?.accent ?? '#D5FF00',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
