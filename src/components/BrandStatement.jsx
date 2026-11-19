import { brandStatements } from '../data/site'
import { FitWidthText } from './FitWidthText'

const tones = [
  {
    bg: '#171116',
    color: '#FFE8D2',
    shadowA: '#FF174F',
    shadowB: '#D5FF00',
  },
  {
    bg: '#FF174F',
    color: '#FFE8D2',
    shadowA: '#120e12',
    shadowB: '#D5FF00',
  },
  {
    bg: '#D5FF00',
    color: '#120e12',
    shadowA: '#FF174F',
    shadowB: '#FFE8D2',
  },
  {
    bg: '#782BFF',
    color: '#FFE8D2',
    shadowA: '#D5FF00',
    shadowB: '#120e12',
  },
]

export function BrandStatement() {
  return (
    <section
      id="statement"
      className="relative z-30"
      aria-label="Brand statement"
    >
      {brandStatements.map((line, i) => {
        const tone = tones[i]
        return (
          <div
            key={line}
            className="flex min-h-[100svh] items-center justify-center overflow-x-clip border-b-4 border-dark px-3 clash-bg sm:min-h-[85svh] sm:px-6"
            style={{
              background: tone.bg,
              color: tone.color,
            }}
          >
            <h2 className="w-full max-w-full font-display uppercase tracking-[-0.02em]">
              <FitWidthText
                as="span"
                minPx={40}
                maxPx={300}
                pad={24}
                style={{
                  color: tone.color,
                  textShadow: `0.08em 0.08em 0 ${tone.shadowA}, -0.05em 0.04em 0 ${tone.shadowB}`,
                }}
              >
                {line}
              </FitWidthText>
            </h2>
          </div>
        )
      })}
      <div className="flex min-h-[30svh] items-center justify-center overflow-x-clip bg-mess px-3 py-10 text-dark check-bg sm:px-6">
        <FitWidthText
          as="p"
          className="font-impact uppercase"
          minPx={28}
          maxPx={120}
          pad={24}
          style={{
            color: '#120e12',
            textShadow: '0.07em 0.07em 0 #FF174F, -0.04em 0.04em 0 #FFE8D2',
          }}
        >
          INDULGENCE, UNFILTERED.
        </FitWidthText>
      </div>
    </section>
  )
}
