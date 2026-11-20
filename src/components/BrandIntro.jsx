import { useRef } from 'react'
import { FitWidthText, FluidBlock } from './FitWidthText'
import { useGsapReveal } from '../hooks/useGsapReveal'

const punches = [
  {
    label: "So, you're curious?",
    text: 'WHO THE HELL ARE WE?',
    textMode: 'fluid',
    sub: "We don't do boring. We don't do basic. And we definitely don't do business as usual.",
    bg: '#FF006E',
    color: '#F8FAFC',
    shadow: '#D6FF00',
  },
  {
    label: 'Say it loud',
    text: "WE'RE CRAVE.",
    textMode: 'fit',
    sub: "We're candy with an attitude problem.",
    bg: '#0A0A0F',
    color: '#D6FF00',
    shadow: '#FF006E',
  },
  {
    label: 'Attitude problem',
    text: 'CANDY WITH ZERO FILTER.',
    textMode: 'fluid',
    sub: 'All dressed up, nowhere to behave.',
    bg: '#D6FF00',
    color: '#0A0A0F',
    shadow: '#FF7B00',
  },
  {
    label: 'The lineup',
    text: 'LOLLIPOPS. GUMMIES. HARD CANDY. CHOCOLATE.',
    textMode: 'fluid',
    sub: 'Four ways to get yourself into trouble.',
    bg: '#FF7B00',
    color: '#0A0A0F',
    shadow: '#9700FF',
  },
  {
    label: 'No manners',
    text: 'ALL DRESSED UP. NOWHERE TO BEHAVE.',
    textMode: 'fluid',
    sub: "We don't ask for permission to have fun.",
    bg: '#9700FF',
    color: '#F8FAFC',
    shadow: '#00DDEB',
  },
  {
    label: 'Nice to meet you',
    text: 'TRY NOT TO FALL IN LOVE.',
    textMode: 'fluid',
    sub: 'Seriously. We warned you.',
    bg: '#F8FAFC',
    color: '#FF006E',
    shadow: '#0A0A0F',
  },
]

export function BrandIntro() {
  const ref = useRef(null)
  useGsapReveal(ref)

  return (
    <section
      id="intro"
      ref={ref}
      className="relative z-20 overflow-hidden bg-dark"
      aria-labelledby="intro-heading"
    >
      <h2 id="intro-heading" className="sr-only">
        Who the hell are we?
      </h2>

      <div className="flex flex-col gap-0">
        {punches.map((item, i) => (
          <div
            key={item.text}
            data-reveal
            className="relative min-h-[100svh] overflow-x-clip border-b-4 border-dark clash-bg"
            style={{
              background: item.bg,
              color: item.color,
            }}
          >
            <div
              className="pointer-events-none absolute -right-6 top-10 h-28 w-44 rotate-6 opacity-80"
              style={{ background: item.shadow }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-8 left-6 h-16 w-16 -rotate-12 border-4"
              style={{ borderColor: item.shadow }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-20 slash-bg"
              aria-hidden="true"
            />

            <div className="relative z-10 flex min-h-[100svh] w-full max-w-[100vw] flex-col justify-center overflow-x-clip px-3 py-14 sm:px-5">
              <p className="text-center font-impact text-base uppercase tracking-[0.14em] opacity-90 sm:text-lg">
                {item.label}
              </p>

              <div
                className={`mt-5 w-full max-w-full overflow-x-clip ${
                  i % 2 === 0 ? '-rotate-1' : 'rotate-1'
                }`}
              >
                {item.textMode === 'fit' ? (
                  <FitWidthText
                    as="p"
                    className="font-display uppercase tracking-wide"
                    minPx={48}
                    maxPx={280}
                    pad={16}
                    style={{
                      textShadow: `0.07em 0.07em 0 ${item.shadow}`,
                    }}
                  >
                    {item.text}
                  </FitWidthText>
                ) : (
                  <FluidBlock
                    as="p"
                    className="px-1 text-center font-display uppercase tracking-wide"
                    minRem={2.6}
                    preferVw={11}
                    maxRem={9.5}
                    style={{
                      textShadow: `0.07em 0.07em 0 ${item.shadow}`,
                    }}
                  >
                    {item.text}
                  </FluidBlock>
                )}
              </div>

              <FluidBlock
                as="p"
                className={`mt-8 px-1 text-center font-impact uppercase tracking-wide ${
                  i % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
                minRem={1.35}
                preferVw={4.8}
                maxRem={3.4}
                style={{
                  textShadow: `0.06em 0.06em 0 ${item.shadow}`,
                  lineHeight: 1.05,
                }}
              >
                {item.sub}
              </FluidBlock>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
