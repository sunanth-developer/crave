import { useRef } from 'react'
import { useGsapReveal } from '../hooks/useGsapReveal'

const punches = [
  { text: 'OPEN.', bg: '#FF174F', color: '#FFF1E6' },
  { text: 'BITE.', bg: '#D5FF00', color: '#171116' },
  { text: 'REPEAT.', bg: '#782BFF', color: '#FFF1E6' },
]

export function Ritual() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section
      id="ritual"
      ref={ref}
      className="relative overflow-x-clip bg-cream text-dark zebra-bg"
      aria-labelledby="ritual-heading"
    >
      <div className="section-pad py-10 md:py-14">
        <div className="container-crave">
          <p data-reveal className="eyebrow text-riot">
            The only ritual worth repeating
          </p>
          <h2 id="ritual-heading" className="sr-only">
            Open. Bite. Repeat.
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {punches.map((item, i) => (
              <div
                key={item.text}
                data-reveal
                className="flex min-h-[32svh] items-center justify-center border-4 border-dark shadow-[8px_8px_0_#171116] md:min-h-[40vh]"
                style={{
                  background: item.bg,
                  color: item.color,
                  transform: i === 1 ? 'rotate(1.5deg)' : i === 2 ? 'rotate(-1.5deg)' : 'rotate(-1deg)',
                }}
              >
                <p className="display-xl px-4 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
