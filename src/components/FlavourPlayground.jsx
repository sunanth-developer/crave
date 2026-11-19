import { useRef } from 'react'
import { FitWidthText } from './FitWidthText'
import { useGsapReveal } from '../hooks/useGsapReveal'

const lines = ['SO MANY FLAVOURS.', 'SUCH LITTLE', 'SELF-CONTROL.']

export function FlavourPlayground() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section
      id="flavours"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-x-clip bg-chaos text-dark clash-bg riot-edge"
      aria-labelledby="flavours-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, #D5FF00 0%, transparent 40%), radial-gradient(circle at 85% 70%, #FF174F 0%, transparent 35%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[4%] top-[12%] hidden border-4 border-dark bg-dark px-3 py-2 font-impact text-sm uppercase tracking-wide text-acid -rotate-12 sm:block"
        aria-hidden="true"
      >
        Too much?
      </div>
      <div
        className="pointer-events-none absolute bottom-[14%] right-[4%] hidden border-4 border-dark bg-riot px-3 py-2 font-impact text-sm uppercase tracking-wide text-cream rotate-8 sm:block"
        aria-hidden="true"
      >
        Never
      </div>

      <div className="relative z-10 box-border flex w-full max-w-[100vw] flex-col items-center justify-center overflow-x-clip px-4 py-16 text-center sm:px-6">
        <p
          data-reveal
          className="mb-6 border-4 border-dark bg-dark px-3 py-1.5 font-impact text-xs uppercase tracking-[0.14em] text-acid sm:mb-8 sm:text-sm"
        >
          Flavour playground
        </p>

        <h2
          id="flavours-heading"
          data-reveal
          className="box-border flex w-full max-w-full flex-col overflow-x-clip font-display uppercase"
        >
          {lines.map((line) => (
            <FitWidthText
              key={line}
              as="span"
              minPx={28}
              maxPx={260}
              pad={16}
              shadowBleed={0.16}
              style={{
                color: '#FFE8D2',
                textShadow: '0.055em 0.055em 0 #FF174F, 0.02em 0.02em 0 #120e12',
                marginBlock: '0.05em',
                letterSpacing: '-0.03em',
              }}
            >
              {line}
            </FitWidthText>
          ))}
        </h2>

        <a
          data-reveal
          href="#waitlist"
          className="cta-riot mt-10 !min-h-14 !px-8 !text-base sm:mt-12"
        >
          Find your type
        </a>
      </div>
    </section>
  )
}
